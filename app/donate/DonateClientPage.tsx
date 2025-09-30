"use client"

import { Badge } from "@/components/ui/badge"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, CreditCard, Smartphone, AlertCircle } from "lucide-react"

type PaymentMethod = "card" | "mobile" | "crypto"

export default function DonateClientPage() {
  const [form, setForm] = useState({
    amount: "",
    donorName: "",
    email: "",
    phone: "",
    paymentMethod: "mobile",
    project: "General Fund",
    message: "",
    isAnonymous: false,
    isRecurring: false,
    newsletter: false,
  })

  const [paymentStatus, setPaymentStatus] = useState({
    status: "idle",
    message: "",
  })

  const [selectedProvider, setSelectedProvider] = useState("")

  const projects = [
    "General Fund",
    "Education Programs",
    "Healthcare Initiatives",
    "Community Development",
    "Emergency Relief",
    "Women Empowerment",
    "Youth Development",
    "Infrastructure Projects",
  ]

  const predefinedAmounts = ["50", "100", "250", "500", "1000", "2500"]

  const handleInputChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleAmountSelect = (amount: string) => {
    setForm((prev) => ({ ...prev, amount }))
  }

  const validateForm = () => {
    if (!form.amount || Number.parseFloat(form.amount) <= 0) {
      setPaymentStatus({ status: "error", message: "Please enter a valid donation amount" })
      return false
    }
    if (!form.donorName.trim()) {
      setPaymentStatus({ status: "error", message: "Please enter your name" })
      return false
    }
    if (!form.email.trim() || !form.email.includes("@")) {
      setPaymentStatus({ status: "error", message: "Please enter a valid email address" })
      return false
    }
    if (form.paymentMethod === "mobile" && !form.phone.trim()) {
      setPaymentStatus({ status: "error", message: "Please enter your phone number for mobile money payment" })
      return false
    }
    if (form.paymentMethod === "mobile" && !selectedProvider) {
      setPaymentStatus({ status: "error", message: "Please select your mobile money provider" })
      return false
    }
    return true
  }

  const detectNetworkProvider = (phoneNumber: string) => {
    const cleanPhone = phoneNumber.replace(/\D/g, "")
    if (cleanPhone.startsWith("233")) {
      const localNumber = cleanPhone.substring(3)
      if (
        localNumber.startsWith("24") ||
        localNumber.startsWith("25") ||
        localNumber.startsWith("53") ||
        localNumber.startsWith("54") ||
        localNumber.startsWith("55") ||
        localNumber.startsWith("59")
      ) {
        return "MTN"
      } else if (localNumber.startsWith("20") || localNumber.startsWith("50")) {
        return "Vodafone"
      } else if (
        localNumber.startsWith("27") ||
        localNumber.startsWith("57") ||
        localNumber.startsWith("26") ||
        localNumber.startsWith("56")
      ) {
        return "AirtelTigo"
      }
    }
    return null
  }

  const handleMobileMoneyPayment = async () => {
    const detectedProvider = detectNetworkProvider(form.phone)
    if (!detectedProvider) {
      setPaymentStatus({
        status: "error",
        message: "Unable to detect network provider. Please check your phone number format.",
      })
      return
    }

    setSelectedProvider(detectedProvider)
    setPaymentStatus({ status: "processing", message: `Initiating ${detectedProvider} Mobile Money payment...` })

    try {
      const response = await fetch("/api/mobile-money", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: form.phone,
          amount: Number.parseFloat(form.amount),
          provider: detectedProvider,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setPaymentStatus({
          status: "pending",
          message: `Payment request sent to ${form.phone}. Please check your phone and enter your PIN to complete the transaction.`,
          transactionId: result.transactionId,
        })

        // Poll for payment status
        pollPaymentStatus(result.transactionId)
      } else {
        setPaymentStatus({ status: "error", message: result.message || "Payment failed" })
      }
    } catch (error) {
      setPaymentStatus({ status: "error", message: "Network error. Please try again." })
    }
  }

  const pollPaymentStatus = async (transactionId: string) => {
    let attempts = 0
    const maxAttempts = 30 // 5 minutes with 10-second intervals

    const poll = async () => {
      try {
        const response = await fetch(`/api/mobile-money/status?transactionId=${transactionId}`)
        const result = await response.json()

        if (result.status === "completed") {
          setPaymentStatus({
            status: "success",
            message: "Payment completed successfully! Thank you for your generous donation.",
            transactionId,
          })

          // Send email notification
          await sendDonationEmail(transactionId, selectedProvider)
        } else if (result.status === "failed") {
          setPaymentStatus({ status: "error", message: "Payment failed. Please try again." })
        } else if (attempts < maxAttempts) {
          attempts++
          setTimeout(poll, 10000) // Poll every 10 seconds
        } else {
          setPaymentStatus({
            status: "error",
            message: "Payment timeout. Please check your transaction status or try again.",
          })
        }
      } catch (error) {
        if (attempts < maxAttempts) {
          attempts++
          setTimeout(poll, 10000)
        } else {
          setPaymentStatus({ status: "error", message: "Unable to verify payment status." })
        }
      }
    }

    poll()
  }

  const handleCardPayment = async () => {
    setPaymentStatus({ status: "processing", message: "Processing your card payment..." })

    try {
      // Simulate card payment processing
      const transactionId = `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

      // Simulate successful payment
      setPaymentStatus({
        status: "success",
        message: "Payment completed successfully! Thank you for your generous donation.",
        transactionId,
      })

      // Send email notification
      await sendDonationEmail(transactionId, "Card Payment")
    } catch (error) {
      setPaymentStatus({ status: "error", message: "Card payment failed. Please try again." })
    }
  }

  const sendDonationEmail = async (transactionId: string, networkProvider?: string) => {
    try {
      const emailResponse = await fetch("/api/send-donation-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          transactionId,
          networkProvider,
          timestamp: new Date().toISOString(),
        }),
      })

      if (emailResponse.ok) {
        setPaymentStatus((prev) => ({
          ...prev,
          message: prev.message + " Our team has been notified and will send you a receipt shortly.",
        }))
      }
    } catch (error) {
      console.error("Failed to send email notification:", error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    if (form.paymentMethod === "mobile") {
      await handleMobileMoneyPayment()
    } else if (form.paymentMethod === "card") {
      await handleCardPayment()
    }
  }

  const resetForm = () => {
    setForm({
      amount: "",
      donorName: "",
      email: "",
      phone: "",
      paymentMethod: "mobile",
      project: "General Fund",
      message: "",
      isAnonymous: false,
      isRecurring: false,
      newsletter: false,
    })
    setPaymentStatus({ status: "idle", message: "" })
    setSelectedProvider("")
  }

  const getStatusIcon = () => {
    switch (paymentStatus.status) {
      case "processing":
        return <AlertCircle className="h-5 w-5 animate-spin text-blue-600" />
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-green-600" />
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-600" />
      case "pending":
        return <AlertCircle className="h-5 w-5 text-yellow-600" />
      default:
        return null
    }
  }

  const getProviderBadgeColor = (provider: string) => {
    switch (provider) {
      case "MTN":
        return "bg-yellow-500 text-black"
      case "Vodafone":
        return "bg-red-500 text-white"
      case "AirtelTigo":
        return "bg-blue-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const renderMobileMoneyInstructions = () => {
    if (form.paymentMethod !== "mobile") return null

    if (!selectedProvider) {
      return (
        <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <Smartphone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <AlertDescription className="text-gray-900 dark:text-gray-100">
            <strong>Mobile Money Payment Instructions:</strong>
            <br />
            Enter your phone number above and we'll detect your network provider automatically. Then follow the specific
            instructions for your network.
          </AlertDescription>
        </Alert>
      )
    }

    const instructions = {
      MTN: {
        color: "yellow",
        steps: [
          "You will receive a payment request on your phone",
          "Check your phone for the MTN MoMo prompt",
          "Enter your MTN MoMo PIN when prompted",
          "Confirm the payment amount and recipient",
          "Wait for the confirmation SMS",
        ],
        ussd: "*170#",
        alternative: "Alternatively, dial *170# → Send Money → Enter our number → Enter amount → Enter PIN",
      },
      Vodafone: {
        color: "red",
        steps: [
          "You will receive a payment authorization request",
          "Check your phone for the Vodafone Cash prompt",
          "Enter your Vodafone Cash PIN",
          "Confirm the transaction details",
          "Wait for the success notification",
        ],
        ussd: "*110#",
        alternative: "Or dial *110# → Financial Services → Send Money → Enter details → Confirm with PIN",
      },
      AirtelTigo: {
        color: "blue",
        steps: [
          "A payment request will be sent to your phone",
          "Open the AirtelTigo Money prompt on your device",
          "Enter your AirtelTigo Money PIN",
          "Verify the payment amount and confirm",
          "You will receive a confirmation message",
        ],
        ussd: "*110#",
        alternative: "You can also use *110# → Send Money → Follow prompts → Enter PIN to authorize",
      },
    }

    const instruction = instructions[selectedProvider as keyof typeof instructions]
    if (!instruction) return null

    return (
      <Alert
        className={`bg-${instruction.color}-50 dark:bg-${instruction.color}-900/20 border-${instruction.color}-200 dark:border-${instruction.color}-800`}
      >
        <Smartphone className={`h-4 w-4 text-${instruction.color}-600 dark:text-${instruction.color}-400`} />
        <AlertDescription className="text-gray-900 dark:text-gray-100">
          <div className="space-y-3">
            <div>
              <Badge className={getProviderBadgeColor(selectedProvider)}>{selectedProvider} Mobile Money</Badge>
            </div>

            <div>
              <strong>Payment Process:</strong>
              <ol className="list-decimal list-inside mt-2 space-y-1">
                {instruction.steps.map((step, index) => (
                  <li key={index} className="text-sm">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white dark:bg-gray-800 p-3 rounded border">
              <strong>Alternative Method:</strong>
              <p className="text-sm mt-1">
                <AlertCircle className="inline h-4 w-4 mr-1" />
                {instruction.alternative}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>Ensure you have sufficient balance and your PIN is ready</span>
            </div>
          </div>
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Make a Donation</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your support helps us transform lives and communities across Ghana
            </p>
          </div>

          {paymentStatus.message && (
            <Alert className={`mb-6 ${paymentStatus.status === "success" ? "border-green-500" : "border-red-500"}`}>
              {getStatusIcon()}
              <AlertDescription className={paymentStatus.status === "success" ? "text-green-700" : "text-red-700"}>
                {paymentStatus.message}
                {paymentStatus.transactionId && (
                  <div className="mt-2 text-sm">
                    <strong>Transaction ID:</strong> {paymentStatus.transactionId}
                  </div>
                )}
              </AlertDescription>
            </Alert>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Choose Payment Method</CardTitle>
              <CardDescription>Select how you would like to donate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Button
                  type="button"
                  variant={form.paymentMethod === "mobile" ? "default" : "outline"}
                  onClick={() => handleInputChange("paymentMethod", "mobile")}
                  className="h-24 flex flex-col gap-2"
                >
                  <Smartphone className="h-6 w-6" />
                  <span>Mobile Money</span>
                </Button>
                <Button
                  type="button"
                  variant={form.paymentMethod === "card" ? "default" : "outline"}
                  onClick={() => handleInputChange("paymentMethod", "card")}
                  className="h-24 flex flex-col gap-2"
                >
                  <CreditCard className="h-6 w-6" />
                  <span>Card Payment</span>
                </Button>
                <Button
                  type="button"
                  variant={form.paymentMethod === "crypto" ? "default" : "outline"}
                  onClick={() => handleInputChange("paymentMethod", "crypto")}
                  className="h-24 flex flex-col gap-2"
                >
                  <CreditCard className="h-6 w-6" />
                  <span>Cryptocurrency</span>
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount">Donation Amount (GHS)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={form.amount}
                    onChange={(e) => handleInputChange("amount", e.target.value)}
                    min="1"
                    required
                  />
                  <div className="flex gap-2 flex-wrap">
                    {predefinedAmounts.map((preset) => (
                      <Button
                        key={preset}
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleInputChange("amount", preset)}
                      >
                        GHS {preset}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="donorName">Full Name</Label>
                  <Input
                    id="donorName"
                    placeholder="Enter your name"
                    value={form.donorName}
                    onChange={(e) => handleInputChange("donorName", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                {form.paymentMethod === "mobile" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="e.g., 0241234567"
                        value={form.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="network">Mobile Network</Label>
                      <select
                        id="network"
                        className="w-full border rounded-md p-2"
                        value={selectedProvider}
                        onChange={(e) => setSelectedProvider(e.target.value)}
                        required
                      >
                        <option value="">Select Network</option>
                        <option value="MTN">MTN Mobile Money</option>
                        <option value="Vodafone">Vodafone Cash</option>
                        <option value="AirtelTigo">AirtelTigo Money</option>
                      </select>
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Leave a message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                  />
                </div>

                {renderMobileMoneyInstructions()}

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={paymentStatus.status === "processing" || paymentStatus.status === "pending"}
                >
                  {paymentStatus.status === "processing" || paymentStatus.status === "pending"
                    ? "Processing..."
                    : `Donate GHS ${form.amount || "0"}`}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>Better Dream Foundation Ghana is a registered non-profit organization.</p>
            <p className="mt-2">All donations are tax-deductible and go directly to supporting our programs.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
