"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Heart,
  Shield,
  Award,
  DollarSign,
  CreditCard,
  Smartphone,
  CheckCircle,
  XCircle,
  Clock,
  Loader2,
  Mail,
} from "lucide-react"

const donationAmounts = [25, 50, 100, 250, 500, 1000]

interface DonationForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  amount: number
  project: string
  message: string
  newsletter: boolean
  anonymous: boolean
  terms: boolean
}

interface PaymentStatus {
  status: "idle" | "processing" | "pending" | "success" | "failed" | "cancelled"
  message: string
  transactionId?: string
  donationId?: string
}

export default function DonateClientPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [selectedProvider, setSelectedProvider] = useState("")
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>({ status: "idle", message: "" })
  const [isProcessing, setIsProcessing] = useState(false)

  const [formData, setFormData] = useState<DonationForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    amount: 0,
    project: "",
    message: "",
    newsletter: false,
    anonymous: false,
    terms: false,
  })

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
    setFormData((prev) => ({ ...prev, amount }))
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
    setFormData((prev) => ({ ...prev, amount: Number.parseFloat(value) || 0 }))
  }

  const handleInputChange = (field: keyof DonationForm, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const validateForm = (): string | null => {
    if (!formData.firstName.trim()) return "First name is required"
    if (!formData.lastName.trim()) return "Last name is required"
    if (!formData.email.trim()) return "Email is required"
    if (!formData.amount || formData.amount < 1) return "Please select or enter a valid donation amount"
    if (!formData.terms) return "Please agree to the terms and conditions"

    if (paymentMethod === "mobile-money") {
      if (!formData.phone.trim()) return "Phone number is required for mobile money payments"
      if (!selectedProvider) return "Please select a mobile money provider"
    }

    return null
  }

  const sendDonationNotificationEmail = async (donationId: string, transactionId: string) => {
    try {
      const emailResponse = await fetch("/api/send-donation-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          paymentMethod:
            paymentMethod === "mobile-money" ? `Mobile Money (${selectedProvider.toUpperCase()})` : "Credit/Debit Card",
          transactionId,
          donationId,
          currency: "GHS",
          donationType,
        }),
      })

      const emailResult = await emailResponse.json()

      if (emailResult.success) {
        console.log("Donation notification email sent successfully")
      } else {
        console.error("Failed to send donation notification email:", emailResult.message)
      }
    } catch (error) {
      console.error("Error sending donation notification email:", error)
    }
  }

  const handleMobileMoneyPayment = async () => {
    const validationError = validateForm()
    if (validationError) {
      setPaymentStatus({ status: "failed", message: validationError })
      return
    }

    setIsProcessing(true)
    setPaymentStatus({ status: "processing", message: "Initiating payment request..." })

    try {
      const response = await fetch("/api/mobile-money", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          provider: selectedProvider,
          phoneNumber: formData.phone,
          amount: formData.amount,
          currency: "GHS",
          reference: `DONATION-${Date.now()}`,
          description: `Donation to Better Dream Foundation - ${formData.project || "General Fund"}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setPaymentStatus({
          status: "pending",
          message: result.message,
          transactionId: result.transactionId,
        })

        // Start polling for transaction status
        pollTransactionStatus(result.transactionId)
      } else {
        setPaymentStatus({
          status: "failed",
          message: result.message,
        })
      }
    } catch (error) {
      setPaymentStatus({
        status: "failed",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const pollTransactionStatus = async (transactionId: string) => {
    const maxAttempts = 30 // Poll for 5 minutes (30 * 10 seconds)
    let attempts = 0

    const poll = async () => {
      try {
        const response = await fetch(`/api/mobile-money/status?transactionId=${transactionId}`)
        const result = await response.json()

        if (result.success) {
          if (result.status === "success") {
            // Payment successful, record the donation
            const donationId = await recordDonation(transactionId)

            // Send notification email to organization
            if (donationId) {
              await sendDonationNotificationEmail(donationId, transactionId)
            }

            setPaymentStatus({
              status: "success",
              message: "Payment completed successfully! Thank you for your donation. Our team has been notified.",
              transactionId,
            })
            return
          } else if (result.status === "failed" || result.status === "cancelled") {
            setPaymentStatus({
              status: result.status,
              message: result.message,
              transactionId,
            })
            return
          }
        }

        // Continue polling if still pending
        attempts++
        if (attempts < maxAttempts) {
          setTimeout(poll, 10000) // Poll every 10 seconds
        } else {
          setPaymentStatus({
            status: "failed",
            message: "Transaction timeout. Please contact support if money was deducted.",
            transactionId,
          })
        }
      } catch (error) {
        console.error("Status polling error:", error)
        attempts++
        if (attempts < maxAttempts) {
          setTimeout(poll, 10000)
        }
      }
    }

    poll()
  }

  const recordDonation = async (transactionId: string): Promise<string | null> => {
    try {
      const response = await fetch("/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          paymentMethod:
            paymentMethod === "mobile-money" ? `Mobile Money (${selectedProvider.toUpperCase()})` : "Credit/Debit Card",
          transactionId,
          currency: "GHS",
        }),
      })

      const result = await response.json()
      if (result.success) {
        setPaymentStatus((prev) => ({
          ...prev,
          donationId: result.donationId,
        }))
        return result.donationId
      }
      return null
    } catch (error) {
      console.error("Failed to record donation:", error)
      return null
    }
  }

  const handleRegularDonation = async () => {
    const validationError = validateForm()
    if (validationError) {
      setPaymentStatus({ status: "failed", message: validationError })
      return
    }

    setIsProcessing(true)
    setPaymentStatus({ status: "processing", message: "Processing your donation and notifying our team..." })

    try {
      const transactionId = `CARD-${Date.now()}`
      const donationId = await recordDonation(transactionId)

      // Send notification email to organization
      if (donationId) {
        await sendDonationNotificationEmail(donationId, transactionId)
      }

      setPaymentStatus({
        status: "success",
        message:
          "Donation completed successfully! Thank you for your support. Our team has been notified and will send you a receipt shortly.",
      })
    } catch (error) {
      console.error("Donation processing error:", error)
      setPaymentStatus({
        status: "failed",
        message: "Payment processing failed. Please try again.",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const resetPayment = () => {
    setPaymentStatus({ status: "idle", message: "" })
    setSelectedProvider("")
    setPaymentMethod("")
  }

  const getStatusIcon = () => {
    switch (paymentStatus.status) {
      case "processing":
        return <Loader2 className="h-5 w-5 animate-spin" />
      case "pending":
        return <Clock className="h-5 w-5" />
      case "success":
        return <CheckCircle className="h-5 w-5" />
      case "failed":
      case "cancelled":
        return <XCircle className="h-5 w-5" />
      default:
        return null
    }
  }

  const getStatusVariant = () => {
    switch (paymentStatus.status) {
      case "success":
        return "success"
      case "failed":
      case "cancelled":
        return "destructive"
      case "processing":
      case "pending":
        return "warning"
      default:
        return "default"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Make a Donation</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Your generosity helps us create lasting change in communities worldwide. Every donation makes a
              difference.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Your Impact</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">See how your donation creates real change</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">GH₵25</div>
                <p className="text-gray-600 dark:text-gray-300">Provides school supplies for 5 children</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">GH₵50</div>
                <p className="text-gray-600 dark:text-gray-300">Funds a health checkup for 10 people</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">GH₵100</div>
                <p className="text-gray-600 dark:text-gray-300">Supports clean water access for a family</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">GH₵250</div>
                <p className="text-gray-600 dark:text-gray-300">Sponsors a child's education for a month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Donation Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Make Your Donation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Payment Status Alert */}
                    {paymentStatus.status !== "idle" && (
                      <Alert variant={getStatusVariant()}>
                        {getStatusIcon()}
                        <AlertDescription className="ml-2">
                          {paymentStatus.message}
                          {paymentStatus.transactionId && (
                            <div className="mt-2 text-xs">Transaction ID: {paymentStatus.transactionId}</div>
                          )}
                          {paymentStatus.status === "success" && paymentStatus.donationId && (
                            <div className="mt-2 text-xs">Donation ID: {paymentStatus.donationId}</div>
                          )}
                        </AlertDescription>
                      </Alert>
                    )}

                    {/* Donation Type */}
                    <div>
                      <label className="block text-sm font-medium mb-3">Donation Type</label>
                      <div className="grid grid-cols-2 gap-4">
                        <Button
                          variant={donationType === "one-time" ? "default" : "outline"}
                          onClick={() => setDonationType("one-time")}
                          className="h-12"
                          disabled={isProcessing}
                        >
                          One-time
                        </Button>
                        <Button
                          variant={donationType === "monthly" ? "default" : "outline"}
                          onClick={() => setDonationType("monthly")}
                          className="h-12"
                          disabled={isProcessing}
                        >
                          Monthly
                        </Button>
                      </div>
                    </div>

                    {/* Amount Selection */}
                    <div>
                      <label className="block text-sm font-medium mb-3">Select Amount (GH₵)</label>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {donationAmounts.map((amount) => (
                          <Button
                            key={amount}
                            variant={selectedAmount === amount ? "default" : "outline"}
                            onClick={() => handleAmountSelect(amount)}
                            className="h-12"
                            disabled={isProcessing}
                          >
                            GH₵{amount}
                          </Button>
                        ))}
                      </div>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="Enter custom amount"
                          value={customAmount}
                          onChange={(e) => handleCustomAmountChange(e.target.value)}
                          className="pl-10"
                          disabled={isProcessing}
                        />
                      </div>
                    </div>

                    {/* Project Selection */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Support a Specific Project (Optional)</label>
                      <Select onValueChange={(value) => handleInputChange("project", value)} disabled={isProcessing}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose where your donation goes" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">Where needed most</SelectItem>
                          <SelectItem value="education">Education Programs</SelectItem>
                          <SelectItem value="healthcare">Healthcare Initiatives</SelectItem>
                          <SelectItem value="environment">Environmental Projects</SelectItem>
                          <SelectItem value="women">Women Empowerment</SelectItem>
                          <SelectItem value="emergency">Emergency Relief</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <label className="block text-sm font-medium mb-3">Payment Method</label>
                      <div className="grid grid-cols-1 gap-4">
                        <Button
                          variant={paymentMethod === "mobile-money" ? "default" : "outline"}
                          onClick={() => setPaymentMethod("mobile-money")}
                          className="h-12 flex items-center justify-center"
                          disabled={isProcessing}
                        >
                          <Smartphone className="mr-2 h-4 w-4" />
                          Mobile Money (Ghana)
                        </Button>
                        <Button
                          variant={paymentMethod === "card" ? "default" : "outline"}
                          onClick={() => setPaymentMethod("card")}
                          className="h-12 flex items-center justify-center"
                          disabled={isProcessing}
                        >
                          <CreditCard className="mr-2 h-4 w-4" />
                          Credit/Debit Card
                        </Button>
                      </div>
                    </div>

                    {/* Mobile Money Provider Selection */}
                    {paymentMethod === "mobile-money" && (
                      <div>
                        <label className="block text-sm font-medium mb-3">Select Mobile Money Provider</label>
                        <div className="grid grid-cols-1 gap-3">
                          <Button
                            variant={selectedProvider === "mtn" ? "default" : "outline"}
                            onClick={() => setSelectedProvider("mtn")}
                            className="h-12 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                            disabled={isProcessing}
                          >
                            <Smartphone className="mr-2 h-4 w-4" />
                            MTN Mobile Money
                          </Button>
                          <Button
                            variant={selectedProvider === "vodafone" ? "default" : "outline"}
                            onClick={() => setSelectedProvider("vodafone")}
                            className="h-12 bg-red-600 hover:bg-red-700 text-white"
                            disabled={isProcessing}
                          >
                            <Smartphone className="mr-2 h-4 w-4" />
                            Vodafone Cash
                          </Button>
                          <Button
                            variant={selectedProvider === "airteltigo" ? "default" : "outline"}
                            onClick={() => setSelectedProvider("airteltigo")}
                            className="h-12 bg-blue-600 hover:bg-blue-700 text-white"
                            disabled={isProcessing}
                          >
                            <Smartphone className="mr-2 h-4 w-4" />
                            AirtelTigo Money
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Personal Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name *</label>
                          <Input
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            disabled={isProcessing}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name *</label>
                          <Input
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            disabled={isProcessing}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          disabled={isProcessing}
                        />
                      </div>
                      {paymentMethod === "mobile-money" && (
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone Number *</label>
                          <Input
                            type="tel"
                            placeholder="e.g., 0241234567"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            disabled={isProcessing}
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            Enter your {selectedProvider ? selectedProvider.toUpperCase() : "mobile money"} number
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                      <Textarea
                        placeholder="Leave a message of support or dedication"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        disabled={isProcessing}
                      />
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                          disabled={isProcessing}
                        />
                        <label htmlFor="newsletter" className="text-sm">
                          Subscribe to our newsletter for updates on our work
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="anonymous"
                          checked={formData.anonymous}
                          onCheckedChange={(checked) => handleInputChange("anonymous", checked as boolean)}
                          disabled={isProcessing}
                        />
                        <label htmlFor="anonymous" className="text-sm">
                          Make this donation anonymous
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.terms}
                          onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
                          disabled={isProcessing}
                        />
                        <label htmlFor="terms" className="text-sm">
                          I agree to the terms and conditions *
                        </label>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-4">
                      {paymentStatus.status === "success" ? (
                        <div className="space-y-4">
                          <Button
                            onClick={resetPayment}
                            className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                          >
                            Make Another Donation
                          </Button>
                        </div>
                      ) : (
                        <>
                          {paymentMethod === "mobile-money" ? (
                            <Button
                              onClick={handleMobileMoneyPayment}
                              disabled={isProcessing || paymentStatus.status === "pending"}
                              className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                            >
                              {isProcessing ? (
                                <>
                                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                  Processing...
                                </>
                              ) : paymentStatus.status === "pending" ? (
                                <>
                                  <Clock className="mr-2 h-5 w-5" />
                                  Waiting for Payment...
                                </>
                              ) : (
                                <>
                                  <Heart className="mr-2 h-5 w-5" />
                                  Donate via Mobile Money
                                </>
                              )}
                            </Button>
                          ) : paymentMethod === "card" ? (
                            <Button
                              onClick={handleRegularDonation}
                              disabled={isProcessing}
                              className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                            >
                              {isProcessing ? (
                                <>
                                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                  Processing...
                                </>
                              ) : (
                                <>
                                  <Mail className="mr-2 h-5 w-5" />
                                  Complete Donation & Notify Team
                                </>
                              )}
                            </Button>
                          ) : (
                            <Button disabled className="w-full bg-gray-400 text-lg py-3">
                              <Heart className="mr-2 h-5 w-5" />
                              Select Payment Method
                            </Button>
                          )}

                          {/* Only show Try Again for mobile money failures, not card payment failures */}
                          {paymentMethod === "mobile-money" &&
                            (paymentStatus.status === "failed" || paymentStatus.status === "cancelled") && (
                              <Button onClick={resetPayment} variant="outline" className="w-full bg-transparent">
                                Try Again
                              </Button>
                            )}
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Security */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Shield className="h-6 w-6 text-green-600 mr-2" />
                      <h3 className="font-semibold">Secure Donation</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Your donation is processed securely with 256-bit SSL encryption and trusted payment providers.
                    </p>
                  </CardContent>
                </Card>

                {/* Tax Deductible */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Award className="h-6 w-6 text-blue-600 mr-2" />
                      <h3 className="font-semibold">Tax Deductible</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Your donation is tax-deductible. You'll receive a receipt via email for your records.
                    </p>
                  </CardContent>
                </Card>

                {/* Email Notification Info */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Mail className="h-6 w-6 text-purple-600 mr-2" />
                      <h3 className="font-semibold">Instant Notification</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Our team is automatically notified of your donation and will send you a personalized thank you
                      message and receipt.
                    </p>
                  </CardContent>
                </Card>

                {/* Network-Specific Instructions */}
                {paymentMethod === "mobile-money" && selectedProvider && (
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Smartphone className="h-6 w-6 text-blue-600 mr-2" />
                        <h3 className="font-semibold">
                          {selectedProvider === "mtn" && "MTN Mobile Money Instructions"}
                          {selectedProvider === "vodafone" && "Vodafone Cash Instructions"}
                          {selectedProvider === "airteltigo" && "AirtelTigo Money Instructions"}
                        </h3>
                      </div>

                      {selectedProvider === "mtn" && (
                        <div className="space-y-4">
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <h4 className="font-semibold text-yellow-800 mb-2">
                              How to Complete Your MTN MoMo Payment:
                            </h4>
                            <ol className="text-sm text-yellow-700 space-y-2 list-decimal list-inside">
                              <li>After clicking "Donate via Mobile Money", you'll receive a payment request</li>
                              <li>Check your phone for an MTN MoMo notification or USSD prompt</li>
                              <li>
                                You may see a popup saying "Approve payment of GH₵{formData.amount} to Better Dream
                                Foundation"
                              </li>
                              <li>Enter your MTN MoMo PIN when prompted</li>
                              <li>Press "1" to confirm or follow the on-screen instructions</li>
                              <li>Wait for the confirmation SMS from MTN</li>
                              <li>Your donation will be processed automatically</li>
                            </ol>
                          </div>

                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <h5 className="font-medium text-blue-800 mb-2">Alternative USSD Method:</h5>
                            <div className="text-sm text-blue-700 space-y-1">
                              <p>
                                • Dial <strong>*170#</strong> on your MTN line
                              </p>
                              <p>• Select option 1 (Send Money)</p>
                              <p>• Enter our merchant number when prompted</p>
                              <p>
                                • Enter amount: <strong>GH₵{formData.amount}</strong>
                              </p>
                              <p>• Enter your PIN to complete</p>
                            </div>
                          </div>

                          <div className="text-xs text-gray-600 space-y-1">
                            <p>• Ensure you have sufficient balance in your MTN MoMo wallet</p>
                            <p>• Transaction fees may apply as per MTN's standard rates</p>
                            <p>• Keep your phone nearby to receive and respond to prompts</p>
                            <p>• If you don't receive a prompt within 2 minutes, please try again</p>
                          </div>
                        </div>
                      )}

                      {selectedProvider === "vodafone" && (
                        <div className="space-y-4">
                          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <h4 className="font-semibold text-red-800 mb-2">
                              How to Complete Your Vodafone Cash Payment:
                            </h4>
                            <ol className="text-sm text-red-700 space-y-2 list-decimal list-inside">
                              <li>After clicking "Donate via Mobile Money", you'll receive a payment request</li>
                              <li>Check your phone for a Vodafone Cash notification or USSD prompt</li>
                              <li>You'll see "Approve payment of GH₵{formData.amount} to Better Dream Foundation"</li>
                              <li>Enter your Vodafone Cash PIN when prompted</li>
                              <li>Press "1" to approve or follow the displayed instructions</li>
                              <li>Wait for the confirmation message from Vodafone</li>
                              <li>Your donation will be confirmed automatically</li>
                            </ol>
                          </div>

                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <h5 className="font-medium text-blue-800 mb-2">Alternative USSD Method:</h5>
                            <div className="text-sm text-blue-700 space-y-1">
                              <p>
                                • Dial <strong>*110#</strong> on your Vodafone line
                              </p>
                              <p>• Select option 1 (Send Money)</p>
                              <p>• Choose "To Business" or "Merchant Payment"</p>
                              <p>• Enter our merchant code when requested</p>
                              <p>
                                • Enter amount: <strong>GH₵{formData.amount}</strong>
                              </p>
                              <p>• Enter your Vodafone Cash PIN to authorize</p>
                            </div>
                          </div>

                          <div className="text-xs text-gray-600 space-y-1">
                            <p>• Make sure your Vodafone Cash wallet has enough balance</p>
                            <p>• Standard Vodafone Cash transaction charges apply</p>
                            <p>• Keep your phone active to receive payment prompts</p>
                            <p>• Payment requests expire after 5 minutes - please respond quickly</p>
                          </div>
                        </div>
                      )}

                      {selectedProvider === "airteltigo" && (
                        <div className="space-y-4">
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h4 className="font-semibold text-blue-800 mb-2">
                              How to Complete Your AirtelTigo Money Payment:
                            </h4>
                            <ol className="text-sm text-blue-700 space-y-2 list-decimal list-inside">
                              <li>After clicking "Donate via Mobile Money", you'll receive a payment request</li>
                              <li>Look for an AirtelTigo Money notification on your phone</li>
                              <li>You'll see "Confirm payment of GH₵{formData.amount} to Better Dream Foundation"</li>
                              <li>Enter your AirtelTigo Money PIN when asked</li>
                              <li>Select "1" to confirm or follow the on-screen prompts</li>
                              <li>Wait for the transaction confirmation SMS</li>
                              <li>Your donation will be processed immediately</li>
                            </ol>
                          </div>

                          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                            <h5 className="font-medium text-green-800 mb-2">Alternative USSD Method:</h5>
                            <div className="text-sm text-green-700 space-y-1">
                              <p>
                                • Dial <strong>*110#</strong> on your AirtelTigo line
                              </p>
                              <p>• Select "Send Money" option</p>
                              <p>• Choose "Pay Merchant" or "Business Payment"</p>
                              <p>• Enter our merchant ID when prompted</p>
                              <p>
                                • Enter amount: <strong>GH₵{formData.amount}</strong>
                              </p>
                              <p>• Input your AirtelTigo Money PIN to complete</p>
                            </div>
                          </div>

                          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                            <h5 className="font-medium text-purple-800 mb-2">Using AirtelTigo Money App:</h5>
                            <div className="text-sm text-purple-700 space-y-1">
                              <p>• Open the AirtelTigo Money mobile app</p>
                              <p>• Tap on "Pay" or "Send Money"</p>
                              <p>• Select "Pay Business/Merchant"</p>
                              <p>• Enter our merchant details</p>
                              <p>• Input amount and confirm with your PIN</p>
                            </div>
                          </div>

                          <div className="text-xs text-gray-600 space-y-1">
                            <p>• Ensure sufficient balance in your AirtelTigo Money account</p>
                            <p>• Transaction fees apply according to AirtelTigo's fee structure</p>
                            <p>• Keep your phone nearby for payment authorization</p>
                            <p>• Contact AirtelTigo customer service if you encounter issues</p>
                          </div>
                        </div>
                      )}

                      {/* Common Troubleshooting */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h5 className="font-medium text-gray-800 mb-2">Troubleshooting Tips:</h5>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p>• If payment fails, check your account balance and try again</p>
                          <p>• Ensure your phone number matches the selected network</p>
                          <p>• For technical issues, contact your network provider's customer service</p>
                          <p>• Payment confirmation may take up to 2 minutes</p>
                          <p>• If money is deducted but donation fails, contact our support team</p>
                        </div>
                      </div>

                      {/* Support Contact */}
                      <div className="mt-4 pt-4 border-t border-gray-200 bg-gray-50 rounded-lg p-3">
                        <h5 className="font-medium text-gray-800 mb-2">Need Help?</h5>
                        <div className="text-sm text-gray-700 space-y-1">
                          <p>📧 Email: betterdreamfoundationghana@gmail.com</p>
                          <p>📞 Phone: +233597399216</p>
                          <p>🕒 Support Hours: Monday - Friday, 9:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* General Mobile Money Info - Show when no provider selected */}
                {paymentMethod === "mobile-money" && !selectedProvider && (
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Smartphone className="h-6 w-6 text-blue-600 mr-2" />
                        <h3 className="font-semibold">Mobile Money Payment</h3>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                        <p>• Select your mobile money provider above</p>
                        <p>• Instant and secure payments</p>
                        <p>• No card details required</p>
                        <p>• Pay directly from your mobile wallet</p>
                        <p>• Immediate confirmation</p>
                      </div>

                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>Supported Networks:</strong> MTN Mobile Money, Vodafone Cash, and AirtelTigo Money
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Other Ways to Give */}
                <div className="border rounded-lg p-6 bg-gray-50 text-center">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Other Ways to Give</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    For bank transfers, corporate sponsorships, or other donation methods, contact our team.
                  </p>
                  <p className="text-blue-600 font-medium text-sm">betterdreamfoundationghana@gmail.com</p>
                  <p className="text-blue-600 font-medium text-sm">+233597399216</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
