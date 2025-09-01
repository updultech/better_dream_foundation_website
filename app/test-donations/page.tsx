"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Smartphone, CheckCircle, XCircle, Clock, Loader2, AlertTriangle, Info, RefreshCw } from "lucide-react"

interface TestCase {
  name: string
  phoneNumber: string
  provider: "mtn" | "vodafone" | "airteltigo"
  expectedResult: "success" | "failed" | "cancelled"
  description: string
}

interface TestResult {
  testCase: TestCase
  status: "idle" | "processing" | "pending" | "success" | "failed" | "cancelled"
  message: string
  transactionId?: string
  donationId?: string
  duration?: number
  startTime?: number
}

const testCases: TestCase[] = [
  // MTN Success Cases
  {
    name: "MTN Success",
    phoneNumber: "0241234567",
    provider: "mtn",
    expectedResult: "success",
    description: "Valid MTN number ending in 7 - should succeed",
  },
  {
    name: "MTN Success Alt",
    phoneNumber: "0551234568",
    provider: "mtn",
    expectedResult: "success",
    description: "Valid MTN number ending in 8 - should succeed",
  },

  // MTN Failure Cases
  {
    name: "MTN Failed",
    phoneNumber: "0241234560",
    provider: "mtn",
    expectedResult: "failed",
    description: "MTN number ending in 0 - simulates insufficient balance",
  },
  {
    name: "MTN Cancelled",
    phoneNumber: "0551234561",
    provider: "mtn",
    expectedResult: "cancelled",
    description: "MTN number ending in 1 - simulates user cancellation",
  },

  // Vodafone Cases
  {
    name: "Vodafone Success",
    phoneNumber: "0201234567",
    provider: "vodafone",
    expectedResult: "success",
    description: "Valid Vodafone number - should succeed",
  },
  {
    name: "Vodafone Failed",
    phoneNumber: "0501234560",
    provider: "vodafone",
    expectedResult: "failed",
    description: "Vodafone number ending in 0 - simulates failure",
  },

  // AirtelTigo Cases
  {
    name: "AirtelTigo Success",
    phoneNumber: "0271234567",
    provider: "airteltigo",
    expectedResult: "success",
    description: "Valid AirtelTigo number - should succeed",
  },
  {
    name: "AirtelTigo Cancelled",
    phoneNumber: "0561234561",
    provider: "airteltigo",
    expectedResult: "cancelled",
    description: "AirtelTigo number ending in 1 - simulates cancellation",
  },

  // Invalid Cases
  {
    name: "Wrong Network",
    phoneNumber: "0201234567",
    provider: "mtn",
    expectedResult: "failed",
    description: "Vodafone number with MTN provider - should fail validation",
  },
  {
    name: "Invalid Format",
    phoneNumber: "123456789",
    provider: "mtn",
    expectedResult: "failed",
    description: "Invalid phone number format - should fail validation",
  },
]

export default function TestDonationsPage() {
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [isRunningAll, setIsRunningAll] = useState(false)
  const [selectedTest, setSelectedTest] = useState<TestCase | null>(null)

  const runSingleTest = async (testCase: TestCase) => {
    const startTime = Date.now()

    // Initialize test result
    const initialResult: TestResult = {
      testCase,
      status: "processing",
      message: "Initiating payment request...",
      startTime,
    }

    setTestResults((prev) => {
      const filtered = prev.filter((r) => r.testCase.name !== testCase.name)
      return [...filtered, initialResult]
    })

    try {
      // Call mobile money API
      const response = await fetch("/api/mobile-money", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          provider: testCase.provider,
          phoneNumber: testCase.phoneNumber,
          amount: 50, // Test amount
          currency: "GHS",
          reference: `TEST-${Date.now()}`,
          description: `Test donation - ${testCase.name}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        // Update to pending status
        setTestResults((prev) =>
          prev.map((r) =>
            r.testCase.name === testCase.name
              ? { ...r, status: "pending", message: result.message, transactionId: result.transactionId }
              : r,
          ),
        )

        // Poll for status
        await pollTestStatus(testCase, result.transactionId, startTime)
      } else {
        // Failed immediately
        const duration = Date.now() - startTime
        setTestResults((prev) =>
          prev.map((r) =>
            r.testCase.name === testCase.name ? { ...r, status: "failed", message: result.message, duration } : r,
          ),
        )
      }
    } catch (error) {
      const duration = Date.now() - startTime
      setTestResults((prev) =>
        prev.map((r) =>
          r.testCase.name === testCase.name ? { ...r, status: "failed", message: "Network error", duration } : r,
        ),
      )
    }
  }

  const pollTestStatus = async (testCase: TestCase, transactionId: string, startTime: number) => {
    const maxAttempts = 6 // Reduced for testing (1 minute)
    let attempts = 0

    const poll = async () => {
      try {
        const response = await fetch(`/api/mobile-money/status?transactionId=${transactionId}`)
        const result = await response.json()

        if (result.success) {
          const duration = Date.now() - startTime

          if (result.status === "success") {
            // Record donation
            const donationResponse = await fetch("/api/donations", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                firstName: "Test",
                lastName: "User",
                email: "test@example.com",
                phone: testCase.phoneNumber,
                amount: 50,
                paymentMethod: `Mobile Money (${testCase.provider.toUpperCase()})`,
                transactionId,
                currency: "GHS",
                project: "Test Donation",
                terms: true,
              }),
            })

            const donationResult = await donationResponse.json()

            setTestResults((prev) =>
              prev.map((r) =>
                r.testCase.name === testCase.name
                  ? {
                      ...r,
                      status: "success",
                      message: result.message,
                      duration,
                      donationId: donationResult.donationId,
                    }
                  : r,
              ),
            )
            return
          } else if (result.status === "failed" || result.status === "cancelled") {
            setTestResults((prev) =>
              prev.map((r) =>
                r.testCase.name === testCase.name
                  ? { ...r, status: result.status, message: result.message, duration }
                  : r,
              ),
            )
            return
          }
        }

        // Continue polling if still pending
        attempts++
        if (attempts < maxAttempts) {
          setTimeout(poll, 10000) // Poll every 10 seconds
        } else {
          const duration = Date.now() - startTime
          setTestResults((prev) =>
            prev.map((r) =>
              r.testCase.name === testCase.name ? { ...r, status: "failed", message: "Test timeout", duration } : r,
            ),
          )
        }
      } catch (error) {
        attempts++
        if (attempts < maxAttempts) {
          setTimeout(poll, 10000)
        }
      }
    }

    poll()
  }

  const runAllTests = async () => {
    setIsRunningAll(true)
    setTestResults([])

    // Run tests in batches to avoid overwhelming the system
    for (let i = 0; i < testCases.length; i += 3) {
      const batch = testCases.slice(i, i + 3)
      await Promise.all(batch.map((testCase) => runSingleTest(testCase)))

      // Wait between batches
      if (i + 3 < testCases.length) {
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }
    }

    setIsRunningAll(false)
  }

  const clearResults = () => {
    setTestResults([])
    setSelectedTest(null)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "processing":
        return <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "failed":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "cancelled":
        return <AlertTriangle className="h-4 w-4 text-orange-600" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      processing: "bg-blue-100 text-blue-800",
      pending: "bg-yellow-100 text-yellow-800",
      success: "bg-green-100 text-green-800",
      failed: "bg-red-100 text-red-800",
      cancelled: "bg-orange-100 text-orange-800",
      idle: "bg-gray-100 text-gray-800",
    }

    return (
      <Badge className={variants[status as keyof typeof variants] || variants.idle}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  const getProviderColor = (provider: string) => {
    switch (provider) {
      case "mtn":
        return "bg-yellow-500 text-black"
      case "vodafone":
        return "bg-red-600 text-white"
      case "airteltigo":
        return "bg-blue-600 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Mobile Money Donation Testing</h1>
            <p className="text-lg text-gray-600">
              Test the complete mobile money donation flow with different scenarios
            </p>
          </div>

          {/* Control Panel */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Test Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button onClick={runAllTests} disabled={isRunningAll} className="bg-blue-600 hover:bg-blue-700">
                  {isRunningAll ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Running All Tests...
                    </>
                  ) : (
                    <>
                      <Smartphone className="mr-2 h-4 w-4" />
                      Run All Tests
                    </>
                  )}
                </Button>
                <Button onClick={clearResults} variant="outline">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Clear Results
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Test Cases Grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Test Cases */}
            <Card>
              <CardHeader>
                <CardTitle>Test Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {testCases.map((testCase, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedTest(testCase)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{testCase.name}</h4>
                        <div className="flex items-center gap-2">
                          <Badge className={getProviderColor(testCase.provider)}>
                            {testCase.provider.toUpperCase()}
                          </Badge>
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              runSingleTest(testCase)
                            }}
                            disabled={isRunningAll}
                          >
                            Test
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{testCase.phoneNumber}</p>
                      <p className="text-xs text-gray-500">{testCase.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Test Details */}
            <Card>
              <CardHeader>
                <CardTitle>Test Details</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedTest ? (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg">{selectedTest.name}</h4>
                      <Badge className={getProviderColor(selectedTest.provider)}>
                        {selectedTest.provider.toUpperCase()}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Phone Number:</span>
                        <span className="text-sm">{selectedTest.phoneNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Expected Result:</span>
                        <span className="text-sm capitalize">{selectedTest.expectedResult}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Test Amount:</span>
                        <span className="text-sm">GH₵50</span>
                      </div>
                    </div>

                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>{selectedTest.description}</AlertDescription>
                    </Alert>

                    <Button onClick={() => runSingleTest(selectedTest)} disabled={isRunningAll} className="w-full">
                      Run This Test
                    </Button>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">Select a test case to see details</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Test Results */}
          {testResults.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Test Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {testResults.map((result, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h4 className="font-semibold">{result.testCase.name}</h4>
                          <Badge className={getProviderColor(result.testCase.provider)}>
                            {result.testCase.provider.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(result.status)}
                          {getStatusBadge(result.status)}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                        <div>
                          <span className="font-medium">Phone:</span>
                          <div>{result.testCase.phoneNumber}</div>
                        </div>
                        <div>
                          <span className="font-medium">Expected:</span>
                          <div className="capitalize">{result.testCase.expectedResult}</div>
                        </div>
                        <div>
                          <span className="font-medium">Duration:</span>
                          <div>{result.duration ? `${(result.duration / 1000).toFixed(1)}s` : "-"}</div>
                        </div>
                        <div>
                          <span className="font-medium">Match:</span>
                          <div>
                            {result.status === result.testCase.expectedResult ? (
                              <CheckCircle className="h-4 w-4 text-green-600 inline" />
                            ) : result.status === "processing" || result.status === "pending" ? (
                              <Clock className="h-4 w-4 text-yellow-600 inline" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-600 inline" />
                            )}
                          </div>
                        </div>
                      </div>

                      <Alert
                        variant={
                          result.status === "success"
                            ? "success"
                            : result.status === "failed"
                              ? "destructive"
                              : result.status === "cancelled"
                                ? "warning"
                                : "default"
                        }
                      >
                        <AlertDescription>
                          <strong>Status:</strong> {result.message}
                          {result.transactionId && (
                            <div className="mt-1 text-xs">Transaction ID: {result.transactionId}</div>
                          )}
                          {result.donationId && <div className="mt-1 text-xs">Donation ID: {result.donationId}</div>}
                        </AlertDescription>
                      </Alert>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Testing Guide */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Testing Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Phone Number Patterns</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Ending in 0:</span>
                      <Badge variant="destructive">Failed</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Ending in 1:</span>
                      <Badge className="bg-orange-100 text-orange-800">Cancelled</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Other numbers:</span>
                      <Badge className="bg-green-100 text-green-800">Success</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Network Prefixes</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>MTN:</strong> 024, 025, 053, 054, 055, 059
                    </div>
                    <div>
                      <strong>Vodafone:</strong> 020, 050
                    </div>
                    <div>
                      <strong>AirtelTigo:</strong> 027, 028, 057, 026, 056
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
