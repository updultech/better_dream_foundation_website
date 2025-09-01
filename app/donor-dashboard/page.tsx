"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Download,
  Calendar,
  DollarSign,
  Gift,
  Settings,
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  Award,
  Target,
  Users,
} from "lucide-react"
import Link from "next/link"

// Mock data - in a real app, this would come from an API
const mockDonorData = {
  profile: {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1234567890",
    address: "123 Main St, City, Country",
    memberSince: "January 2022",
    totalDonated: 2450,
    donationCount: 12,
    impactPoints: 4900,
  },
  donations: [
    {
      id: "DON-2024-001",
      date: "2024-01-15",
      amount: 250,
      currency: "USD",
      method: "MTN Mobile Money",
      project: "Digital Learning Centers",
      status: "Completed",
      receipt: "REC-2024-001.pdf",
      impact: "Provided computer training for 10 students",
    },
    {
      id: "DON-2024-002",
      date: "2024-01-01",
      amount: 100,
      currency: "USD",
      method: "Vodafone Cash",
      project: "Clean Water Initiative",
      status: "Completed",
      receipt: "REC-2024-002.pdf",
      impact: "Supported clean water access for 2 families",
    },
    {
      id: "DON-2023-012",
      date: "2023-12-25",
      amount: 500,
      currency: "USD",
      method: "Credit Card",
      project: "Women's Empowerment Program",
      status: "Completed",
      receipt: "REC-2023-012.pdf",
      impact: "Sponsored vocational training for 5 women",
    },
    {
      id: "DON-2023-011",
      date: "2023-12-01",
      amount: 75,
      currency: "USD",
      method: "MTN Mobile Money",
      project: "Emergency Relief",
      status: "Completed",
      receipt: "REC-2023-011.pdf",
      impact: "Provided emergency supplies for 3 families",
    },
    {
      id: "DON-2023-010",
      date: "2023-11-15",
      amount: 200,
      currency: "USD",
      method: "AirtelTigo Money",
      project: "Healthcare Initiatives",
      status: "Completed",
      receipt: "REC-2023-010.pdf",
      impact: "Funded health checkups for 20 people",
    },
  ],
  monthlyStats: [
    { month: "Jan 2024", amount: 350, donations: 2 },
    { month: "Dec 2023", amount: 575, donations: 2 },
    { month: "Nov 2023", amount: 200, donations: 1 },
    { month: "Oct 2023", amount: 150, donations: 1 },
    { month: "Sep 2023", amount: 300, donations: 2 },
    { month: "Aug 2023", amount: 100, donations: 1 },
  ],
  impactSummary: {
    studentsHelped: 45,
    familiesSupported: 23,
    healthCheckups: 67,
    womenEmpowered: 12,
  },
}

export default function DonorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [donorData, setDonorData] = useState(mockDonorData)
  const [isLoading, setIsLoading] = useState(false)

  // In a real app, you would fetch donor data here
  useEffect(() => {
    // Simulate API call
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const downloadReceipt = (receiptId: string) => {
    // In a real app, this would download the actual receipt
    alert(`Downloading receipt: ${receiptId}`)
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Donor Dashboard</h1>
              <p className="text-gray-600">Welcome back, {donorData.profile.name}</p>
            </div>
            <div className="flex gap-4">
              <Link href="/donate">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Heart className="mr-2 h-4 w-4" />
                  Make New Donation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="donations">Donation History</TabsTrigger>
            <TabsTrigger value="impact">My Impact</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Donated</p>
                      <p className="text-2xl font-bold text-blue-600">${donorData.profile.totalDonated}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Donations Made</p>
                      <p className="text-2xl font-bold text-green-600">{donorData.profile.donationCount}</p>
                    </div>
                    <Gift className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Impact Points</p>
                      <p className="text-2xl font-bold text-yellow-600">{donorData.profile.impactPoints}</p>
                    </div>
                    <Award className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Member Since</p>
                      <p className="text-lg font-semibold text-gray-900">{donorData.profile.memberSince}</p>
                    </div>
                    <Calendar className="h-8 w-8 text-gray-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Donations */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {donorData.donations.slice(0, 3).map((donation) => (
                    <div key={donation.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Heart className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{donation.project}</p>
                          <p className="text-sm text-gray-600">{donation.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${donation.amount}</p>
                        <Badge className={getStatusColor(donation.status)}>{donation.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" onClick={() => setActiveTab("donations")}>
                    View All Donations
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Donation Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Donation Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {donorData.monthlyStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{stat.month}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${(stat.amount / 600) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold">${stat.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Donations Tab */}
          <TabsContent value="donations" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Donation History</CardTitle>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {donorData.donations.map((donation) => (
                    <div key={donation.id} className="border rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{donation.project}</h3>
                          <p className="text-gray-600">Donation ID: {donation.id}</p>
                        </div>
                        <Badge className={getStatusColor(donation.status)}>{donation.status}</Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Amount</p>
                          <p className="font-semibold">
                            ${donation.amount} {donation.currency}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Date</p>
                          <p className="font-semibold">{donation.date}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Payment Method</p>
                          <p className="font-semibold">{donation.method}</p>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <p className="text-sm font-medium text-blue-800">Impact</p>
                        <p className="text-blue-700">{donation.impact}</p>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => downloadReceipt(donation.receipt)}>
                          <Download className="mr-2 h-4 w-4" />
                          Download Receipt
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-blue-600">{donorData.impactSummary.studentsHelped}</p>
                  <p className="text-gray-600">Students Helped</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-green-600">{donorData.impactSummary.familiesSupported}</p>
                  <p className="text-gray-600">Families Supported</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Target className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-yellow-600">{donorData.impactSummary.healthCheckups}</p>
                  <p className="text-gray-600">Health Checkups</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-purple-600">{donorData.impactSummary.womenEmpowered}</p>
                  <p className="text-gray-600">Women Empowered</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Your Impact Story</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Education Impact</h3>
                    <p className="text-gray-700">
                      Your donations to our Digital Learning Centers have provided computer training to 45 students,
                      helping them develop essential digital skills for their future careers.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Healthcare Impact</h3>
                    <p className="text-gray-700">
                      Through your support of our mobile health clinics, 67 people have received essential health
                      checkups and medical care in underserved communities.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Women Empowerment Impact</h3>
                    <p className="text-gray-700">
                      Your contributions have enabled 12 women to complete vocational training programs, empowering them
                      with skills to start their own businesses and support their families.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Full Name</p>
                      <p className="font-medium">{donorData.profile.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Email Address</p>
                      <p className="font-medium">{donorData.profile.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Phone Number</p>
                      <p className="font-medium">{donorData.profile.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Address</p>
                      <p className="font-medium">{donorData.profile.address}</p>
                    </div>
                  </div>

                  <Button className="w-full mt-4">
                    <Settings className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Donation Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Payment Method</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>MTN Mobile Money</option>
                      <option>Vodafone Cash</option>
                      <option>Credit Card</option>
                      <option>Bank Transfer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Project Category</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Where needed most</option>
                      <option>Education</option>
                      <option>Healthcare</option>
                      <option>Women Empowerment</option>
                      <option>Environment</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Email donation receipts</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Monthly impact updates</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">SMS donation reminders</span>
                    </label>
                  </div>

                  <Button className="w-full">Save Preferences</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
