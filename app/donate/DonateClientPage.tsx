"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Heart,
  CreditCard,
  Smartphone,
  CheckCircle,
  XCircle,
  Loader2,
  Clock,
  Mail,
  Phone,
  Wifi,
  AlertCircle,
} from "lucide-react"

interface DonationForm {
  amount: string
  donorName: string
  email: string
  phone: string
  paymentMethod: string
  project: string
  message: string
  isAnonymous: boolean
  isRecurring: boolean
  newsletter: boolean
}

interface PaymentStatus {
  status: "idle" | "processing" | "success" | "error" | "pending"
  message: string
  transactionId?: string
}

export default function DonateClientPage() {
  const [form, setForm] = useState<DonationForm>({
    amount: "",
    donorName: "",
    email: "",
    phone: "",
    paymentMethod: "",
    project: "General Fund",
    message: "",
    isAnonymous: false,
    isRecurring: false,
    newsletter: false,
  })

  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>({
    status: "idle",
    message: "",
  })

  const [selectedProvider, setSelectedProvider] = useState<string>("")

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

  const handleInputChange = (field: keyof DonationForm, value: string | boolean) => {
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
    if (!form.paymentMethod) {
      setPaymentStatus({ status: "error", message: "Please select a payment method" })
      return false
    }
    if (form.paymentMethod === "mobile-money" && !form.phone.trim()) {
      setPaymentStatus({ status: "error", message: "Please enter your phone number for mobile money payment" })
      return false
    }
    if (form.paymentMethod === "mobile-money" && !selectedProvider) {
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

    if (form.paymentMethod === "mobile-money") {
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
      paymentMethod: "",
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
        return <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "error":
        return <XCircle className="h-5 w-5 text-red-600" />
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-600" />
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
    if (form.paymentMethod !== "mobile-money") return null

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
                <Phone className="inline h-4 w-4 mr-1" />
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Make a Donation</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your generosity helps us create lasting change in communities worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900 dark:text-white">
                  <Heart className="mr-2 h-5 w-5 text-red-500" />
                  Donation Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Amount Selection */}
                  <div>
                    <Label htmlFor="amount" className="text-gray-900 dark:text-white">
                      Donation Amount (GH₵)
                    </Label>
                    <div className="grid grid-cols-3 gap-2 mt-2 mb-3">
                      {predefinedAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={form.amount === amount ? "default" : "outline"}
                          onClick={() => handleAmountSelect(amount)}
                          className="text-sm"
                        >
                          GH₵{amount}
                        </Button>
                      ))}
                    </div>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Enter custom amount"
                      value={form.amount}
                      onChange={(e) => handleInputChange("amount", e.target.value)}
                      className="text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                    />
                  </div>

                  {/* Donor Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="donorName" className="text-gray-900 dark:text-white">
                        Full Name
                      </Label>
                      <Input
                        id="donorName"
                        value={form.donorName}
                        onChange={(e) => handleInputChange("donorName", e.target.value)}
                        placeholder="Enter your full name"
                        className="text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-900 dark:text-white">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        className="text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                      />
                    </div>
                  </div>

                  {/* Phone Number (shown when mobile money is selected) */}
                  {form.paymentMethod === "mobile-money" && (
                    <div>
                      <Label htmlFor="phone" className="text-gray-900 dark:text-white">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="e.g., +233241234567 or 0241234567"
                        className="text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                      />
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Enter your mobile money number (MTN, Vodafone, or AirtelTigo)
                      </p>
                    </div>
                  )}

                  {/* Payment Method */}
                  <div>
                    <Label className="text-gray-900 dark:text-white">Payment Method</Label>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <Button
                        type="button"
                        variant={form.paymentMethod === "mobile-money" ? "default" : "outline"}
                        onClick={() => handleInputChange("paymentMethod", "mobile-money")}
                        className="h-16 flex flex-col items-center justify-center"
                      >
                        <Smartphone className="h-6 w-6 mb-1" />
                        <span>Mobile Money</span>
                      </Button>
                      <Button
                        type="button"
                        variant={form.paymentMethod === "card" ? "default" : "outline"}
                        onClick={() => handleInputChange("paymentMethod", "card")}
                        className="h-16 flex flex-col items-center justify-center"
                      >
                        <CreditCard className="h-6 w-6 mb-1" />
                        <span>Credit/Debit Card</span>
                      </Button>
                    </div>
                  </div>

                  {/* Mobile Money Instructions */}
                  {renderMobileMoneyInstructions()}

                  {/* Project Selection */}
                  <div>
                    <Label htmlFor="project" className="text-gray-900 dark:text-white">
                      Choose Project
                    </Label>
                    <Select value={form.project} onValueChange={(value) => handleInputChange("project", value)}>
                      <SelectTrigger className="text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                        {projects.map((project) => (
                          <SelectItem key={project} value={project} className="text-gray-900 dark:text-white">
                            {project}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-gray-900 dark:text-white">
                      Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Share why you're donating or leave a message for our team"
                      className="text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="anonymous"
                        checked={form.isAnonymous}
                        onCheckedChange={(checked) => handleInputChange("isAnonymous", checked as boolean)}
                      />
                      <Label htmlFor="anonymous" className="text-sm text-gray-900 dark:text-white">
                        Make this donation anonymous
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="recurring"
                        checked={form.isRecurring}
                        onCheckedChange={(checked) => handleInputChange("isRecurring", checked as boolean)}
                      />
                      <Label htmlFor="recurring" className="text-sm text-gray-900 dark:text-white">
                        Make this a monthly recurring donation
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={form.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm text-gray-900 dark:text-white">
                        Subscribe to our newsletter for updates
                      </Label>
                    </div>
                  </div>

                  {/* Status Messages */}
                  {paymentStatus.message && (
                    <Alert
                      className={`
                      ${paymentStatus.status === "success" ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" : ""}
                      ${paymentStatus.status === "error" ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800" : ""}
                      ${paymentStatus.status === "processing" ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800" : ""}
                      ${paymentStatus.status === "pending" ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800" : ""}
                    `}
                    >
                      {getStatusIcon()}
                      <AlertDescription className="text-gray-900 dark:text-gray-100">
                        {paymentStatus.message}
                        {paymentStatus.transactionId && (
                          <div className="mt-2 text-sm">
                            <strong>Transaction ID:</strong> {paymentStatus.transactionId}
                          </div>
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
                      {paymentStatus.status === "processing" || paymentStatus.status === "pending" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 h-4 w-4" />
                          Complete Donation & Notify Team
                        </>
                      )}
                    </Button>

                    {(paymentStatus.status === "success" || paymentStatus.status === "error") && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={resetForm}
                        className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-transparent"
                      >
                        New Donation
                      </Button>
                    )}

                    {paymentStatus.status === "error" && form.paymentMethod === "mobile-money" && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleMobileMoneyPayment}
                        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                      >
                        Try Again
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Donation Impact Sidebar */}
          <div className="space-y-6">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">GH₵{form.amount || "0"}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Your donation amount</p>
                </div>

                {form.amount && Number.parseFloat(form.amount) > 0 && (
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex justify-between">
                      <span>School supplies for:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {Math.floor(Number.parseFloat(form.amount) / 25)} children
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Meals provided:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {Math.floor(Number.parseFloat(form.amount) / 5)} meals
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Medical checkups:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {Math.floor(Number.parseFloat(form.amount) / 50)} checkups
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Why Donate?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>100% of donations go directly to programs</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Tax-deductible receipts provided</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regular impact reports sent to donors</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Secure and encrypted payment processing</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Wifi className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Need Help?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Having trouble with your donation? Contact our support team.
                  </p>
                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <div>📞 +233597399216</div>
                    <div>📧 betterdreamfoundationghana@gmail.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
