"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, CreditCard, Smartphone, Bitcoin, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react"

type PaymentMethod = "mobile" | "card" | "crypto"

export default function DonateClientPage() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("mobile")
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    network: "mtn",
  })

  const presetAmounts = ["50", "100", "250", "500", "1000"]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setShowError(false)
    setShowSuccess(false)

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      setShowSuccess(true)
      // Reset form
      setAmount("")
      setCustomAmount("")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        network: "mtn",
      })
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000)
    }, 2000)
  }

  const selectedAmount = customAmount || amount

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Make a Donation</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your support helps us create lasting change in communities across Ghana
          </p>
        </div>

        {/* Success Alert */}
        {showSuccess && (
          <Alert className="mb-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            <AlertDescription className="text-green-800 dark:text-green-200">
              Thank you for your donation! Please contact us at +233597399216 or info@betterdreamfoundation.org to
              complete your payment.
            </AlertDescription>
          </Alert>
        )}

        {/* Error Alert */}
        {showError && (
          <Alert className="mb-6 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
            <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
            <AlertDescription className="text-red-800 dark:text-red-200">
              Something went wrong. Please try again or contact us directly.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Donation Details</CardTitle>
                <CardDescription>Choose your payment method and amount</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Payment Method Selection */}
                  <div>
                    <Label className="text-base font-semibold mb-4 block">Payment Method</Label>
                    <div className="grid grid-cols-3 gap-4">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("mobile")}
                        className={`p-4 border-2 rounded-lg flex flex-col items-center gap-2 transition-all ${
                          paymentMethod === "mobile"
                            ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20"
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                        }`}
                      >
                        <Smartphone
                          className={
                            paymentMethod === "mobile" ? "text-yellow-600" : "text-gray-600 dark:text-gray-400"
                          }
                        />
                        <span
                          className={`text-sm font-medium ${paymentMethod === "mobile" ? "text-yellow-700 dark:text-yellow-300" : "text-gray-700 dark:text-gray-300"}`}
                        >
                          Mobile Money
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`p-4 border-2 rounded-lg flex flex-col items-center gap-2 transition-all ${
                          paymentMethod === "card"
                            ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20"
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                        }`}
                      >
                        <CreditCard
                          className={paymentMethod === "card" ? "text-yellow-600" : "text-gray-600 dark:text-gray-400"}
                        />
                        <span
                          className={`text-sm font-medium ${paymentMethod === "card" ? "text-yellow-700 dark:text-yellow-300" : "text-gray-700 dark:text-gray-300"}`}
                        >
                          Card Payment
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("crypto")}
                        className={`p-4 border-2 rounded-lg flex flex-col items-center gap-2 transition-all ${
                          paymentMethod === "crypto"
                            ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20"
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                        }`}
                      >
                        <Bitcoin
                          className={
                            paymentMethod === "crypto" ? "text-yellow-600" : "text-gray-600 dark:text-gray-400"
                          }
                        />
                        <span
                          className={`text-sm font-medium ${paymentMethod === "crypto" ? "text-yellow-700 dark:text-yellow-300" : "text-gray-700 dark:text-gray-300"}`}
                        >
                          Cryptocurrency
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <Label className="text-base font-semibold mb-4 block">Select Amount (GHS)</Label>
                    <div className="grid grid-cols-5 gap-3 mb-4">
                      {presetAmounts.map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => {
                            setAmount(preset)
                            setCustomAmount("")
                          }}
                          className={`p-3 border-2 rounded-lg font-semibold transition-all ${
                            amount === preset && !customAmount
                              ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300"
                              : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                          }`}
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                    <div>
                      <Label htmlFor="customAmount">Or Enter Custom Amount</Label>
                      <Input
                        id="customAmount"
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value)
                          setAmount("")
                        }}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Contact Information</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1"
                      />
                    </div>

                    {/* Mobile Money Network Selection */}
                    {paymentMethod === "mobile" && (
                      <div>
                        <Label htmlFor="network">Mobile Money Network *</Label>
                        <select
                          id="network"
                          value={formData.network}
                          onChange={(e) => setFormData({ ...formData, network: e.target.value })}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                          required
                        >
                          <option value="mtn">MTN Mobile Money</option>
                          <option value="vodafone">Vodafone Cash</option>
                          <option value="airteltigo">AirtelTigo Money</option>
                        </select>
                      </div>
                    )}

                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Leave a message or specify how you'd like your donation to be used"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="mt-1"
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isProcessing || !selectedAmount}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-6 text-lg"
                  >
                    {isProcessing ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Heart className="mr-2 h-5 w-5" />
                        Donate {selectedAmount ? `GHS ${selectedAmount}` : ""}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Us</CardTitle>
                <CardDescription>For payment assistance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                    <a
                      href="tel:+233597399216"
                      className="text-sm text-gray-600 dark:text-gray-300 hover:text-yellow-600"
                    >
                      +233597399216
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <a
                      href="mailto:info@betterdreamfoundation.org"
                      className="text-sm text-gray-600 dark:text-gray-300 hover:text-yellow-600 break-all"
                    >
                      info@betterdreamfoundation.org
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Statement */}
            <Card className="bg-gradient-to-br from-yellow-50 to-green-50 dark:from-yellow-900/20 dark:to-green-900/20 border-yellow-200 dark:border-yellow-800">
              <CardHeader>
                <CardTitle className="text-lg">Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>GHS 50</strong> provides school supplies for a student
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>GHS 100</strong> supports healthcare for a family
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>GHS 250</strong> funds vocational training
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>GHS 500+</strong> transforms a community project
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
