"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, Calendar, DollarSign, FileText, LogOut, Info } from "lucide-react"

interface Donation {
  id: string
  amount: number
  currency: string
  date: string
  status: string
  paymentMethod: string
}

export default function DonorDashboard() {
  const router = useRouter()
  const [donorName, setDonorName] = useState("")
  const [donations, setDonations] = useState<Donation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedEmail = localStorage.getItem("donorEmail")
    const storedName = localStorage.getItem("donorName")

    if (!storedEmail) {
      router.push("/donor-dashboard/login")
      return
    }

    setDonorName(storedName || "Donor")

    const storedDonations = localStorage.getItem("donorDonations")
    if (storedDonations) {
      try {
        setDonations(JSON.parse(storedDonations))
      } catch (error) {
        console.error("Error loading donations:", error)
      }
    }

    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("donorEmail")
    localStorage.removeItem("donorName")
    localStorage.removeItem("donorDonations")
    router.push("/donor-dashboard/login")
  }

  const totalDonated = donations.reduce((sum, donation) => sum + donation.amount, 0)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Welcome back, {donorName}!</h1>
            <p className="text-muted-foreground mt-2">Track your donations and impact</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            This is a demo dashboard. In production, your donation history would be fetched from our secure database. To
            add donations to your dashboard, complete a donation through our donation page.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Donated</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">GHS {totalDonated.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">All time contributions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{donations.length}</div>
              <p className="text-xs text-muted-foreground">Number of contributions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Donation</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {donations.length > 0 ? new Date(donations[0].date).toLocaleDateString() : "N/A"}
              </div>
              <p className="text-xs text-muted-foreground">Most recent contribution</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Donation History</CardTitle>
            <CardDescription>Your contribution records</CardDescription>
          </CardHeader>
          <CardContent>
            {donations.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No donations yet</h3>
                <p className="text-muted-foreground mb-4">Make your first donation to start making an impact</p>
                <Button onClick={() => router.push("/donate")}>Make a Donation</Button>
              </div>
            ) : (
              <div className="space-y-4">
                {donations.map((donation) => (
                  <div key={donation.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">
                          {donation.currency} {donation.amount.toFixed(2)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(donation.date).toLocaleDateString()} • {donation.paymentMethod}
                        </p>
                      </div>
                    </div>
                    <Badge variant={donation.status === "completed" ? "default" : "secondary"}>{donation.status}</Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Make Another Donation</CardTitle>
              <CardDescription>Continue supporting our mission</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => router.push("/donate")} className="w-full">
                Donate Now
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>View Our Impact</CardTitle>
              <CardDescription>See how your donations help</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" onClick={() => router.push("/projects")} className="w-full">
                View Projects
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
