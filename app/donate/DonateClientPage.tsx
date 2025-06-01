"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Shield, Award, DollarSign, CreditCard, Smartphone } from "lucide-react"

const donationAmounts = [25, 50, 100, 250, 500, 1000]

export default function DonateClientPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const [paymentMethod, setPaymentMethod] = useState("")

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
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
                <div className="text-3xl font-bold text-blue-600 mb-2">$25</div>
                <p className="text-gray-600 dark:text-gray-300">Provides school supplies for 5 children</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">$50</div>
                <p className="text-gray-600 dark:text-gray-300">Funds a health checkup for 10 people</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">$100</div>
                <p className="text-gray-600 dark:text-gray-300">Supports clean water access for a family</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">$250</div>
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
                    {/* Donation Type */}
                    <div>
                      <label className="block text-sm font-medium mb-3">Donation Type</label>
                      <div className="grid grid-cols-2 gap-4">
                        <Button
                          variant={donationType === "one-time" ? "default" : "outline"}
                          onClick={() => setDonationType("one-time")}
                          className="h-12"
                        >
                          One-time
                        </Button>
                        <Button
                          variant={donationType === "monthly" ? "default" : "outline"}
                          onClick={() => setDonationType("monthly")}
                          className="h-12"
                        >
                          Monthly
                        </Button>
                      </div>
                    </div>

                    {/* Amount Selection */}
                    <div>
                      <label className="block text-sm font-medium mb-3">Select Amount</label>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {donationAmounts.map((amount) => (
                          <Button
                            key={amount}
                            variant={selectedAmount === amount ? "default" : "outline"}
                            onClick={() => handleAmountSelect(amount)}
                            className="h-12"
                          >
                            ${amount}
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
                        />
                      </div>
                    </div>

                    {/* Project Selection */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Support a Specific Project (Optional)</label>
                      <Select>
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
                      <div className="grid grid-cols-2 gap-4">
                        <Button
                          variant={paymentMethod === "card" ? "default" : "outline"}
                          onClick={() => setPaymentMethod("card")}
                          className="h-12 flex items-center justify-center"
                        >
                          <CreditCard className="mr-2 h-4 w-4" />
                          Credit Card
                        </Button>
                        <Button
                          variant={paymentMethod === "paypal" ? "default" : "outline"}
                          onClick={() => setPaymentMethod("paypal")}
                          className="h-12 flex items-center justify-center"
                        >
                          <Smartphone className="mr-2 h-4 w-4" />
                          PayPal
                        </Button>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Personal Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name</label>
                          <Input placeholder="Enter your first name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name</label>
                          <Input placeholder="Enter your last name" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address</label>
                        <Input type="email" placeholder="Enter your email address" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number (Optional)</label>
                        <Input type="tel" placeholder="Enter your phone number" />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                      <Textarea placeholder="Leave a message of support or dedication" rows={3} />
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="newsletter" />
                        <label htmlFor="newsletter" className="text-sm">
                          Subscribe to our newsletter for updates on our work
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="anonymous" />
                        <label htmlFor="anonymous" className="text-sm">
                          Make this donation anonymous
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label htmlFor="terms" className="text-sm">
                          I agree to the terms and conditions
                        </label>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                      <Heart className="mr-2 h-5 w-5" />
                      Complete Donation
                    </Button>
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
                      Your donation is processed securely with 256-bit SSL encryption.
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
                      Your donation is tax-deductible. You'll receive a receipt via email.
                    </p>
                  </CardContent>
                </Card>

                {/* Other Ways to Give */}
                <div className="border rounded-lg p-8 bg-gray-50 text-center">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Other Ways to Give</h2>
                  <p className="text-gray-700 mb-6">
                    For information about corporate sponsorships, planned giving, or other ways to support our work,
                    please contact our development team.
                  </p>
                  <p className="text-blue-600 font-medium">donations@betterdreamfoundation.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
