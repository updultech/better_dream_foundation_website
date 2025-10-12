"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

export default function DonateClientPage() {
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("momo")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const predefinedAmounts = ["50", "100", "200", "500", "1000"]

  const handleAmountSelect = (value: string) => {
    setAmount(value)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setAmount("")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const donationAmount = amount || customAmount

      if (!donationAmount || Number.parseFloat(donationAmount) <= 0) {
        throw new Error("Please enter a valid donation amount")
      }

      if (!formData.name || !formData.email || !formData.phone) {
        throw new Error("Please fill in all contact information")
      }

      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In production, integrate with actual payment gateway here
      // For now, we'll show success message with instructions

      setSuccess(true)

      // Reset form
      setAmount("")
      setCustomAmount("")
      setFormData({
        name: "",
        email: "",
        phone: "",
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const getPaymentInstructions = () => {
    const donationAmount = amount || customAmount

    switch (paymentMethod) {
      case "momo":
        return (
          <div className="space-y-2 text-sm">
            <p className="font-semibold">Mobile Money Payment Instructions:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Dial *170# on your mobile phone</li>
              <li>Select "Send Money"</li>
              <li>
                Enter our number: <strong>0597399216</strong>
              </li>
              <li>
                Enter amount: <strong>GHS {donationAmount}</strong>
              </li>
              <li>Confirm the transaction</li>
              <li>You will receive a confirmation SMS</li>
            </ol>
            <p className="text-muted-foreground mt-2">
              After completing the payment, please send the transaction ID to our WhatsApp: +233597399216
            </p>
          </div>
        )
      case "bank":
        return (
          <div className="space-y-2 text-sm">
            <p className="font-semibold">Bank Transfer Details:</p>
            <div className="space-y-1">
              <p>
                <strong>Bank:</strong> [Bank Name]
              </p>
              <p>
                <strong>Account Name:</strong> Better Dream Foundation
              </p>
              <p>
                <strong>Account Number:</strong> [Account Number]
              </p>
              <p>
                <strong>Amount:</strong> GHS {donationAmount}
              </p>
            </div>
            <p className="text-muted-foreground mt-2">
              After completing the transfer, please send proof to: info@betterdreamfoundation.org
            </p>
          </div>
        )
      case "crypto":
        return (
          <div className="space-y-2 text-sm">
            <p className="font-semibold">Cryptocurrency Payment:</p>
            <p className="text-muted-foreground">
              Cryptocurrency payments are coming soon. Please use Mobile Money or Bank Transfer for now.
            </p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Make a Donation</h1>
          <p className="text-xl text-muted-foreground">
            Your contribution helps us create lasting change in communities
          </p>
        </div>

        {success && (
          <Alert className="mb-6 bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <div className="space-y-2">
                <p className="font-semibold">Thank you for your donation!</p>
                {getPaymentInstructions()}
              </div>
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert className="mb-6" variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Donation Details</CardTitle>
            <CardDescription>Choose your donation amount and payment method</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Amount Selection */}
              <div className="space-y-4">
                <Label>Select Amount (GHS)</Label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {predefinedAmounts.map((amt) => (
                    <Button
                      key={amt}
                      type="button"
                      variant={amount === amt ? "default" : "outline"}
                      onClick={() => handleAmountSelect(amt)}
                      className="w-full"
                    >
                      {amt}
                    </Button>
                  ))}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="customAmount">Or enter custom amount</Label>
                  <Input
                    id="customAmount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    min="1"
                    step="0.01"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <Label>Payment Method</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="momo" id="momo" />
                    <Label htmlFor="momo" className="cursor-pointer">
                      Mobile Money (MTN/Vodafone/AirtelTigo)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank" className="cursor-pointer">
                      Bank Transfer
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="crypto" id="crypto" />
                    <Label htmlFor="crypto" className="cursor-pointer">
                      Cryptocurrency (Coming Soon)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Payment Instructions Preview */}
              {(amount || customAmount) && paymentMethod && !success && (
                <Card className="bg-muted/50">
                  <CardContent className="pt-6">{getPaymentInstructions()}</CardContent>
                </Card>
              )}

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Get Payment Instructions"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Your donation is secure and will be used to support our programs. For questions, contact us at{" "}
            <a href="mailto:info@betterdreamfoundation.org" className="underline">
              info@betterdreamfoundation.org
            </a>
          </p>
          <p className="mt-2">
            WhatsApp:{" "}
            <a href="https://wa.me/233597399216" className="underline">
              +233597399216
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
