"use client"

import { Label } from "@/components/ui/label"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Globe,
  Server,
  Shield,
  Activity,
  HardDrive,
  Wifi,
  Calendar,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  LogOut,
  ArrowLeft,
  Copy,
  RefreshCw,
} from "lucide-react"

export default function HostingManagement() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const router = useRouter()

  // Mock hosting data - in production, this would come from your hosting provider's API
  const [hostingData, setHostingData] = useState({
    domain: {
      name: "betterdreamfoundation.org",
      status: "active",
      registrar: "Namecheap",
      expiryDate: "2025-12-15",
      autoRenew: true,
      dnsStatus: "healthy",
    },
    hosting: {
      provider: "Vercel",
      plan: "Pro",
      status: "active",
      uptime: 99.9,
      lastDeployment: "2024-01-20 14:30:00",
      deploymentStatus: "success",
    },
    ssl: {
      status: "active",
      issuer: "Let's Encrypt",
      expiryDate: "2024-04-20",
      autoRenew: true,
    },
    resources: {
      storage: { used: 2.4, total: 100, unit: "GB" },
      bandwidth: { used: 45.2, total: 1000, unit: "GB" },
      visits: { current: 12450, limit: 100000 },
    },
    performance: {
      loadTime: 1.2,
      performanceScore: 95,
      seoScore: 98,
      accessibilityScore: 100,
    },
  })

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/admin/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/admin/login")
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setRefreshing(false)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("Copied to clipboard!")
  }

  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <Button onClick={() => router.push("/admin/dashboard")} variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Hosting Management</h1>
                <p className="text-gray-600 dark:text-gray-400">Monitor your website's hosting and performance</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={handleRefresh} variant="outline" disabled={refreshing} size="sm">
                <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              <Button onClick={handleLogout} className="bg-blue-600 hover:bg-blue-700 text-white">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Domain Status</p>
                  <div className="flex items-center gap-2 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-semibold text-green-600">Active</span>
                  </div>
                </div>
                <Globe className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Hosting Status</p>
                  <div className="flex items-center gap-2 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-semibold text-green-600">Online</span>
                  </div>
                </div>
                <Server className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">SSL Certificate</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-semibold text-green-600">Secure</span>
                  </div>
                </div>
                <Shield className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Uptime</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{hostingData.hosting.uptime}%</p>
                </div>
                <Activity className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Domain Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Domain Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Domain Name:</span>
                <div className="flex items-center gap-2">
                  <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                    {hostingData.domain.name}
                  </code>
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(hostingData.domain.name)}>
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Registrar:</span>
                <span className="text-sm">{hostingData.domain.registrar}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Expiry Date:</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm">{hostingData.domain.expiryDate}</span>
                  <Badge variant="outline" className="text-xs">
                    {hostingData.domain.autoRenew ? "Auto-renew ON" : "Auto-renew OFF"}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">DNS Status:</span>
                <Badge variant="default" className="text-xs">
                  {hostingData.domain.dnsStatus}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Hosting Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                Hosting Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Provider:</span>
                <span className="text-sm">{hostingData.hosting.provider}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Plan:</span>
                <Badge variant="default">{hostingData.hosting.plan}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Last Deployment:</span>
                <span className="text-sm">{hostingData.hosting.lastDeployment}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Deployment Status:</span>
                <Badge variant="default" className="text-xs">
                  {hostingData.hosting.deploymentStatus}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Resource Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HardDrive className="h-5 w-5" />
                Resource Usage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Storage</span>
                  <span>
                    {hostingData.resources.storage.used} / {hostingData.resources.storage.total}{" "}
                    {hostingData.resources.storage.unit}
                  </span>
                </div>
                <Progress value={(hostingData.resources.storage.used / hostingData.resources.storage.total) * 100} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Bandwidth</span>
                  <span>
                    {hostingData.resources.bandwidth.used} / {hostingData.resources.bandwidth.total}{" "}
                    {hostingData.resources.bandwidth.unit}
                  </span>
                </div>
                <Progress
                  value={(hostingData.resources.bandwidth.used / hostingData.resources.bandwidth.total) * 100}
                />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Monthly Visits</span>
                  <span>
                    {hostingData.resources.visits.current.toLocaleString()} /{" "}
                    {hostingData.resources.visits.limit.toLocaleString()}
                  </span>
                </div>
                <Progress value={(hostingData.resources.visits.current / hostingData.resources.visits.limit) * 100} />
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Load Time:</span>
                <span className="text-sm font-semibold text-green-600">{hostingData.performance.loadTime}s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Performance Score:</span>
                <Badge variant="default">{hostingData.performance.performanceScore}/100</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">SEO Score:</span>
                <Badge variant="default">{hostingData.performance.seoScore}/100</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Accessibility:</span>
                <Badge variant="default">{hostingData.performance.accessibilityScore}/100</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SSL Certificate Info */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              SSL Certificate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label className="text-sm font-medium">Status</Label>
                <div className="flex items-center gap-2 mt-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600">Active & Valid</span>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium">Issuer</Label>
                <p className="text-sm mt-1">{hostingData.ssl.issuer}</p>
              </div>
              <div>
                <Label className="text-sm font-medium">Expiry Date</Label>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm">{hostingData.ssl.expiryDate}</span>
                  <Badge variant="outline" className="text-xs">
                    Auto-renew
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common hosting management tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                <ExternalLink className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <div className="font-medium">Visit Website</div>
                  <div className="text-xs text-gray-500">Open your live website</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                <Calendar className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <div className="font-medium">Renewal Settings</div>
                  <div className="text-xs text-gray-500">Manage auto-renewal</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                <Wifi className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <div className="font-medium">DNS Management</div>
                  <div className="text-xs text-gray-500">Configure DNS records</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Admin Access Instructions */}
        <Alert className="mt-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Admin Access URLs:</strong>
            <br />• Login: <code>https://betterdreamfoundation.org/admin/login</code>
            <br />• Dashboard: <code>https://betterdreamfoundation.org/admin/dashboard</code>
            <br />• Content Management: <code>https://betterdreamfoundation.org/admin/content</code>
            <br />• Settings: <code>https://betterdreamfoundation.org/admin/settings</code>
            <br />• Hosting: <code>https://betterdreamfoundation.org/admin/hosting</code>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
