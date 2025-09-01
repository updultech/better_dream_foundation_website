"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, CreditCard, Smartphone, CheckCircle, XCircle, Loader2, Clock, Mail } from "lucide-react"

interface DonationData {
  amount: string
  donorName: string
  email: string
  phone: string
  project: string
  paymentMethod: "card" | "mobile-money"
  mobileProvider?: "mtn" | "vodafone" | "airteltigo"
  recurring: boolean
  anonymous: boolean
  message: string
  newsletter: boolean
}

interface PaymentStatus {
  status: "idle" | "processing" | "success" | "failed" | "pending"
  message: string
  transactionId?: string
}

export default function DonateClientPage() {
  const [donationData, setDonationData] = useState<DonationData>({
    amount: "",
    donorName: "",
    email: "",
    phone: "",
    project: "",
    paymentMethod: "card",
    recurring: false,
    anonymous: false,
    message: "",
    newsletter: false,
  })

  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>({
    status: "idle",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!donationData.amount || Number.parseFloat(donationData.amount) < 1) {
      newErrors.amount = "Please enter a valid donation amount (minimum GH₵1)"
    }

    if (!donationData.donorName.trim()) {
      newErrors.donorName = "Please enter your full name"
    }

    if (!donationData.email.trim() || !/\S+@\S+\.\S+/.test(donationData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!donationData.phone.trim()) {
      newErrors.phone = "Please enter your phone number"
    } else if (donationData.paymentMethod === "mobile-money") {
      const phoneRegex = /^(\+233|0)(20|23|24|25|26|27|28|29|50|53|54|55|56|57|59)\d{7}$/
      if (!phoneRegex.test(donationData.phone.replace(/\s/g, ""))) {
        newErrors.phone = "Please enter a valid Ghana mobile number"
      }
    }

    if (!donationData.project) {
      newErrors.project = "Please select a project to support"
    }

    if (donationData.paymentMethod === "mobile-money" && !donationData.mobileProvider) {
      newErrors.mobileProvider = "Please select your mobile money provider"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const detectMobileProvider = (phone: string): "mtn" | "vodafone" | "airteltigo" | null => {
    const cleanPhone = phone.replace(/\s/g, "").replace(/^\+233/, "0")

    if (/^0(24|25|53|54|55|59)/.test(cleanPhone)) return "mtn"
    if (/^0(20|50)/.test(cleanPhone)) return "vodafone"
    if (/^0(23|26|27|28|29|56|57)/.test(cleanPhone)) return "airteltigo"

    return null
  }

  useEffect(() => {
    if (donationData.paymentMethod === "mobile-money" && donationData.phone) {
      const provider = detectMobileProvider(donationData.phone)
      if (provider) {
        setDonationData((prev) => ({ ...prev, mobileProvider: provider }))
      }
    }
  }, [donationData.phone, donationData.paymentMethod])

  const handleInputChange = (field: keyof DonationData, value: string | boolean) => {
    setDonationData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const sendDonationEmail = async (donationDetails: DonationData & { transactionId: string }) => {
    try {
      const response = await fetch("/api/send-donation-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donationDetails),
      })

      if (!response.ok) {
        console.error("Failed to send donation email")
      }
    } catch (error) {
      console.error("Error sending donation email:", error)
    }
  }

  const handleCardPayment = async () => {
    if (!validateForm()) return

    setPaymentStatus({ status: "processing", message: "Processing your donation..." })

    try {
      // Simulate card payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const transactionId = `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

      // Send email notification
      await sendDonationEmail({
        ...donationData,
        transactionId,
      })

      setPaymentStatus({
        status: "success",
        message: "Thank you! Your donation has been processed successfully and our team has been notified.",
        transactionId,
      })

      // Reset form after successful donation
      setTimeout(() => {
        setDonationData({
          amount: "",
          donorName: "",
          email: "",
          phone: "",
          project: "",
          paymentMethod: "card",
          recurring: false,
          anonymous: false,
          message: "",
          newsletter: false,
        })
        setPaymentStatus({ status: "idle", message: "" })
      }, 5000)
    } catch (error) {
      setPaymentStatus({
        status: "failed",
        message: "Payment failed. Please check your card details and try again.",
      })
    }
  }

  const handleMobileMoneyPayment = async () => {
    if (!validateForm()) return

    setPaymentStatus({ status: "processing", message: "Initiating mobile money payment..." })

    try {
      const response = await fetch("/api/mobile-money", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: donationData.phone,
          amount: Number.parseFloat(donationData.amount),
          provider: donationData.mobileProvider,
          donorName: donationData.donorName,
          project: donationData.project,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setPaymentStatus({
          status: "pending",
          message: `Payment request sent to ${donationData.phone}. Please check your phone and enter your PIN to complete the donation.`,
          transactionId: result.transactionId,
        })

        // Poll for payment status
        const pollInterval = setInterval(async () => {
          try {
            const statusResponse = await fetch(`/api/mobile-money/status?transactionId=${result.transactionId}`)
            const statusResult = await statusResponse.json()

            if (statusResult.status === "completed") {
              clearInterval(pollInterval)

              // Send email notification
              await sendDonationEmail({
                ...donationData,
                transactionId: result.transactionId,
              })

              setPaymentStatus({
                status: "success",
                message: "Payment completed successfully! Thank you for your donation. Our team has been notified.",
                transactionId: result.transactionId,
              })

              // Reset form after successful donation
              setTimeout(() => {
                setDonationData({
                  amount: "",
                  donorName: "",
                  email: "",
                  phone: "",
                  project: "",
                  paymentMethod: "card",
                  recurring: false,
                  anonymous: false,
                  message: "",
                  newsletter: false,
                })
                setPaymentStatus({ status: "idle", message: "" })
              }, 5000)
            } else if (statusResult.status === "failed") {
              clearInterval(pollInterval)
              setPaymentStatus({
                status: "failed",
                message: "Payment failed. Please try again or contact support.",
              })
            }
          } catch (error) {
            console.error("Error polling payment status:", error)
          }
        }, 3000)

        // Stop polling after 5 minutes
        setTimeout(() => {
          clearInterval(pollInterval)
          if (paymentStatus.status === "pending") {
            setPaymentStatus({
              status: "failed",
              message: "Payment timeout. Please try again.",
            })
          }
        }, 300000)
      } else {
        setPaymentStatus({
          status: "failed",
          message: result.message || "Failed to initiate payment. Please try again.",
        })
      }
    } catch (error) {
      setPaymentStatus({
        status: "failed",
        message: "Network error. Please check your connection and try again.",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (donationData.paymentMethod === "card") {
      await handleCardPayment()
    } else {
      await handleMobileMoneyPayment()
    }
  }

  const resetPayment = () => {
    setPaymentStatus({ status: "idle", message: "" })
  }

  const getProviderColor = (provider: string) => {
    switch (provider) {
      case "mtn":
        return "bg-yellow-500 text-black dark:bg-yellow-400 dark:text-black"
      case "vodafone":
        return "bg-red-500 text-white dark:bg-red-400 dark:text-white"
      case "airteltigo":
        return "bg-blue-500 text-white dark:bg-blue-400 dark:text-white"
      default:
        return "bg-gray-500 text-white dark:bg-gray-400 dark:text-black"
    }
  }

  const getProviderName = (provider: string) => {
    switch (provider) {
      case "mtn":
        return "MTN Mobile Money"
      case "vodafone":
        return "Vodafone Cash"
      case "airteltigo":
        return "AirtelTigo Money"
      default:
        return provider
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Heart className="mx-auto h-16 w-16 text-red-500 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Make a Donation</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your generosity helps us create lasting change in communities across Ghana. Every donation makes a
            difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Donation Details</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Please fill in your donation information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Amount */}
                  <div>
                    <Label htmlFor="amount" className="text-gray-900 dark:text-white">
                      Donation Amount (GH₵)
                    </Label>
                    <div className="mt-1 relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
                        GH₵
                      </span>
                      <Input
                        id="amount"
                        type="number"
                        min="1"
                        step="0.01"
                        value={donationData.amount}
                        onChange={(e) => handleInputChange("amount", e.target.value)}
                        className="pl-12 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        placeholder="0.00"
                      />
                    </div>
                    {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
                  </div>

                  {/* Quick Amount Buttons */}
                  <div className="grid grid-cols-4 gap-2">
                    {[50, 100, 250, 500].map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant="outline"
                        onClick={() => handleInputChange("amount", amount.toString())}
                        className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        GH₵{amount}
                      </Button>
                    ))}
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="donorName" className="text-gray-900 dark:text-white">
                        Full Name
                      </Label>
                      <Input
                        id="donorName"
                        value={donationData.donorName}
                        onChange={(e) => handleInputChange("donorName", e.target.value)}
                        className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        placeholder="Your full name"
                      />
                      {errors.donorName && <p className="text-red-500 text-sm mt-1">{errors.donorName}</p>}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-900 dark:text-white">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={donationData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-900 dark:text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={donationData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                      placeholder="+233 XX XXX XXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Project Selection */}
                  <div>
                    <Label htmlFor="project" className="text-gray-900 dark:text-white">
                      Choose Project to Support
                    </Label>
                    <Select value={donationData.project} onValueChange={(value) => handleInputChange("project", value)}>
                      <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                        <SelectValue placeholder="Select a project" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                        <SelectItem value="education" className="text-gray-900 dark:text-white">
                          Education & Literacy Programs
                        </SelectItem>
                        <SelectItem value="healthcare" className="text-gray-900 dark:text-white">
                          Healthcare & Medical Support
                        </SelectItem>
                        <SelectItem value="water" className="text-gray-900 dark:text-white">
                          Clean Water & Sanitation
                        </SelectItem>
                        <SelectItem value="agriculture" className="text-gray-900 dark:text-white">
                          Agriculture & Food Security
                        </SelectItem>
                        <SelectItem value="youth" className="text-gray-900 dark:text-white">
                          Youth Development
                        </SelectItem>
                        <SelectItem value="women" className="text-gray-900 dark:text-white">
                          Women's Empowerment
                        </SelectItem>
                        <SelectItem value="emergency" className="text-gray-900 dark:text-white">
                          Emergency Relief
                        </SelectItem>
                        <SelectItem value="general" className="text-gray-900 dark:text-white">
                          General Fund (Where Most Needed)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.project && <p className="text-red-500 text-sm mt-1">{errors.project}</p>}
                  </div>

                  {/* Payment Method */}
                  <div>
                    <Label className="text-gray-900 dark:text-white">Payment Method</Label>
                    <Tabs
                      value={donationData.paymentMethod}
                      onValueChange={(value) => handleInputChange("paymentMethod", value as "card" | "mobile-money")}
                    >
                      <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-700">
                        <TabsTrigger
                          value="card"
                          className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 text-gray-900 dark:text-white"
                        >
                          <CreditCard className="mr-2 h-4 w-4" />
                          Card Payment
                        </TabsTrigger>
                        <TabsTrigger
                          value="mobile-money"
                          className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 text-gray-900 dark:text-white"
                        >
                          <Smartphone className="mr-2 h-4 w-4" />
                          Mobile Money
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="card" className="mt-4">
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                          <div className="flex items-center mb-2">
                            <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                            <h3 className="font-semibold text-blue-900 dark:text-blue-100">Secure Card Payment</h3>
                          </div>
                          <p className="text-blue-800 dark:text-blue-200 text-sm">
                            Your card information is processed securely. We accept Visa, Mastercard, and other major
                            cards.
                          </p>
                        </div>
                      </TabsContent>

                      <TabsContent value="mobile-money" className="mt-4">
                        <div className="space-y-4">
                          {/* Mobile Provider Selection */}
                          <div>
                            <Label className="text-gray-900 dark:text-white">Mobile Money Provider</Label>
                            <div className="grid grid-cols-3 gap-2 mt-2">
                              {[
                                { id: "mtn", name: "MTN MoMo", color: "bg-yellow-500 hover:bg-yellow-600 text-black" },
                                {
                                  id: "vodafone",
                                  name: "Vodafone Cash",
                                  color: "bg-red-500 hover:bg-red-600 text-white",
                                },
                                {
                                  id: "airteltigo",
                                  name: "AirtelTigo Money",
                                  color: "bg-blue-500 hover:bg-blue-600 text-white",
                                },
                              ].map((provider) => (
                                <Button
                                  key={provider.id}
                                  type="button"
                                  variant={donationData.mobileProvider === provider.id ? "default" : "outline"}
                                  onClick={() => handleInputChange("mobileProvider", provider.id)}
                                  className={
                                    donationData.mobileProvider === provider.id
                                      ? provider.color
                                      : "border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                  }
                                >
                                  {provider.name}
                                </Button>
                              ))}
                            </div>
                            {errors.mobileProvider && (
                              <p className="text-red-500 text-sm mt-1">{errors.mobileProvider}</p>
                            )}
                          </div>

                          {/* Provider-specific instructions */}
                          {donationData.mobileProvider && (
                            <div className="mt-4">
                              {donationData.mobileProvider === "mtn" && (
                                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                                  <div className="flex items-center mb-3">
                                    <Smartphone className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                                    <h3 className="font-semibold text-yellow-900 dark:text-yellow-100">
                                      MTN Mobile Money Payment
                                    </h3>
                                  </div>
                                  <div className="text-yellow-800 dark:text-yellow-200 text-sm space-y-2">
                                    <p className="font-medium">After clicking "Complete Donation", you will:</p>
                                    <ol className="list-decimal list-inside space-y-1 ml-2">
                                      <li>Receive a payment request on your phone</li>
                                      <li>Enter your MTN MoMo PIN when prompted</li>
                                      <li>Confirm the payment of GH₵{donationData.amount || "0.00"}</li>
                                      <li>Receive SMS confirmation of successful payment</li>
                                    </ol>
                                    <div className="mt-3 p-2 bg-yellow-100 dark:bg-yellow-800/30 rounded border-l-4 border-yellow-400">
                                      <p className="font-medium text-yellow-900 dark:text-yellow-100">
                                        Alternative Method:
                                      </p>
                                      <p>
                                        Dial <strong>*170#</strong> → Select "Send Money" → Enter merchant code → Follow
                                        prompts
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {donationData.mobileProvider === "vodafone" && (
                                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                                  <div className="flex items-center mb-3">
                                    <Smartphone className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                                    <h3 className="font-semibold text-red-900 dark:text-red-100">
                                      Vodafone Cash Payment
                                    </h3>
                                  </div>
                                  <div className="text-red-800 dark:text-red-200 text-sm space-y-2">
                                    <p className="font-medium">Payment Process:</p>
                                    <ol className="list-decimal list-inside space-y-1 ml-2">
                                      <li>You'll receive a payment request notification</li>
                                      <li>Open the notification or check your messages</li>
                                      <li>Enter your Vodafone Cash PIN</li>
                                      <li>Confirm the donation amount of GH₵{donationData.amount || "0.00"}</li>
                                      <li>Complete the transaction</li>
                                    </ol>
                                    <div className="mt-3 p-2 bg-red-100 dark:bg-red-800/30 rounded border-l-4 border-red-400">
                                      <p className="font-medium text-red-900 dark:text-red-100">USSD Option:</p>
                                      <p>
                                        Dial <strong>*110#</strong> → Select "Financial Services" → "Make Payment" →
                                        Enter details
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {donationData.mobileProvider === "airteltigo" && (
                                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                  <div className="flex items-center mb-3">
                                    <Smartphone className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                                    <h3 className="font-semibold text-blue-900 dark:text-blue-100">
                                      AirtelTigo Money Payment
                                    </h3>
                                  </div>
                                  <div className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
                                    <p className="font-medium">How to complete your donation:</p>
                                    <ol className="list-decimal list-inside space-y-1 ml-2">
                                      <li>Receive payment request on your registered number</li>
                                      <li>Enter your AirtelTigo Money PIN</li>
                                      <li>Verify donation amount: GH₵{donationData.amount || "0.00"}</li>
                                      <li>Authorize the payment</li>
                                      <li>Get confirmation SMS</li>
                                    </ol>
                                    <div className="mt-3 p-2 bg-blue-100 dark:bg-blue-800/30 rounded border-l-4 border-blue-400">
                                      <p className="font-medium text-blue-900 dark:text-blue-100">Multiple Options:</p>
                                      <p>
                                        <strong>USSD:</strong> Dial *110# → Select payment option
                                      </p>
                                      <p>
                                        <strong>App:</strong> Use AirtelTigo Money mobile app
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>

                  {/* Additional Options */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="recurring"
                        checked={donationData.recurring}
                        onCheckedChange={(checked) => handleInputChange("recurring", checked as boolean)}
                      />
                      <Label htmlFor="recurring" className="text-gray-900 dark:text-white">
                        Make this a monthly recurring donation
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="anonymous"
                        checked={donationData.anonymous}
                        onCheckedChange={(checked) => handleInputChange("anonymous", checked as boolean)}
                      />
                      <Label htmlFor="anonymous" className="text-gray-900 dark:text-white">
                        Make this donation anonymous
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={donationData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-gray-900 dark:text-white">
                        Subscribe to our newsletter for updates
                      </Label>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-gray-900 dark:text-white">
                      Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      value={donationData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                      placeholder="Share why you're supporting this cause..."
                      rows={3}
                    />
                  </div>

                  {/* Payment Status */}
                  {paymentStatus.status !== "idle" && (
                    <Alert
                      className={`${
                        paymentStatus.status === "success"
                          ? "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20"
                          : paymentStatus.status === "failed"
                            ? "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20"
                            : paymentStatus.status === "pending"
                              ? "border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20"
                              : "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20"
                      }`}
                    >
                      <div className="flex items-center">
                        {paymentStatus.status === "processing" && (
                          <Loader2 className="h-4 w-4 animate-spin text-blue-600 dark:text-blue-400" />
                        )}
                        {paymentStatus.status === "success" && (
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        )}
                        {paymentStatus.status === "failed" && (
                          <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                        )}
                        {paymentStatus.status === "pending" && (
                          <Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                        )}
                      </div>
                      <AlertDescription
                        className={`ml-2 ${
                          paymentStatus.status === "success"
                            ? "text-green-800 dark:text-green-200"
                            : paymentStatus.status === "failed"
                              ? "text-red-800 dark:text-red-200"
                              : paymentStatus.status === "pending"
                                ? "text-yellow-800 dark:text-yellow-200"
                                : "text-blue-800 dark:text-blue-200"
                        }`}
                      >
                        {paymentStatus.message}
                        {paymentStatus.transactionId && (
                          <div className="mt-2 text-sm opacity-75">Transaction ID: {paymentStatus.transactionId}</div>
                        )}
                      </AlertDescription>
                    </Alert>
                  )}

                  {/* Submit Button */}
                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      disabled={paymentStatus.status === "processing" || paymentStatus.status === "pending"}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {paymentStatus.status === "processing" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : paymentStatus.status === "pending" ? (
                        <>
                          <Clock className="mr-2 h-4 w-4" />
                          Waiting for Payment...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 h-4 w-4" />
                          Complete Donation & Notify Team
                        </>
                      )}
                    </Button>

                    {paymentStatus.status === "failed" && donationData.paymentMethod === "mobile-money" && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={resetPayment}
                        className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 bg-transparent"
                      >
                        Try Again
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Donation Summary & Info */}
          <div className="space-y-6">
            {/* Donation Summary */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Donation Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Amount:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    GH₵{donationData.amount || "0.00"}
                  </span>
                </div>

                {donationData.project && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Project:</span>
                    <span className="font-medium text-gray-900 dark:text-white text-right text-sm">
                      {donationData.project === "education" && "Education & Literacy"}
                      {donationData.project === "healthcare" && "Healthcare & Medical"}
                      {donationData.project === "water" && "Clean Water & Sanitation"}
                      {donationData.project === "agriculture" && "Agriculture & Food Security"}
                      {donationData.project === "youth" && "Youth Development"}
                      {donationData.project === "women" && "Women's Empowerment"}
                      {donationData.project === "emergency" && "Emergency Relief"}
                      {donationData.project === "general" && "General Fund"}
                    </span>
                  </div>
                )}

                {donationData.paymentMethod === "mobile-money" && donationData.mobileProvider && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Payment:</span>
                    <Badge className={getProviderColor(donationData.mobileProvider)}>
                      {getProviderName(donationData.mobileProvider)}
                    </Badge>
                  </div>
                )}

                {donationData.paymentMethod === "card" && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Payment:</span>
                    <Badge className="bg-blue-500 text-white dark:bg-blue-400 dark:text-black">
                      <CreditCard className="mr-1 h-3 w-3" />
                      Card Payment
                    </Badge>
                  </div>
                )}

                {donationData.recurring && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Frequency:</span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">Monthly</span>
                  </div>
                )}

                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-gray-900 dark:text-white">Total:</span>
                    <span className="text-blue-600 dark:text-blue-400">GH₵{donationData.amount || "0.00"}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Information */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-blue-900 dark:text-blue-100">Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
                <p>• GH₵50 can provide school supplies for 2 children</p>
                <p>• GH₵100 can fund a health checkup for 5 people</p>
                <p>• GH₵250 can support a family with clean water for 6 months</p>
                <p>• GH₵500 can sponsor a child's education for a full term</p>
              </CardContent>
            </Card>

            {/* Security Information */}
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-green-900 dark:text-green-100 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Secure & Trusted
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-800 dark:text-green-200 text-sm space-y-2">
                <p>✓ SSL encrypted transactions</p>
                <p>✓ PCI DSS compliant payment processing</p>
                <p>✓ Registered NGO with transparent reporting</p>
                <p>✓ Tax-deductible receipts provided</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
