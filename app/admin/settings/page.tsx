"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Settings, Globe, Shield, Mail, Save, LogOut, ArrowLeft, Info } from "lucide-react"

export default function AdminSettings() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [settings, setSettings] = useState({
    siteName: "Better Dream Foundation Ghana",
    siteDescription:
      "Empowering communities through education, healthcare, and sustainable development programs across Ghana.",
    contactEmail: "info@betterdreamfoundation.org",
    phoneNumber: "+233 XX XXX XXXX",
    address: "Accra, Ghana",
    socialMedia: {
      facebook: "https://facebook.com/betterdreamfoundation",
      twitter: "https://twitter.com/betterdreamgh",
      instagram: "https://instagram.com/betterdreamfoundation",
      linkedin: "https://linkedin.com/company/better-dream-foundation",
    },
    features: {
      donations: true,
      newsletter: true,
      darkMode: true,
      analytics: true,
    },
    seo: {
      metaTitle: "Better Dream Foundation Ghana - Empowering Communities",
      metaDescription:
        "Join us in creating lasting change through education, healthcare, and community development programs across Ghana.",
      keywords: "Ghana NGO, community development, education, healthcare, empowerment",
    },
  })
  const router = useRouter()

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

  const handleSave = () => {
    // In production, this would save to your database
    localStorage.setItem("siteSettings", JSON.stringify(settings))
    alert("Settings saved successfully!")
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
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Site Settings</h1>
                <p className="text-gray-600 dark:text-gray-400">Configure your website settings</p>
              </div>
            </div>
            <Button onClick={handleLogout} className="bg-blue-600 hover:bg-blue-700 text-white">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  General Settings
                </CardTitle>
                <CardDescription>Basic information about your organization and website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="siteName">Organization Name</Label>
                  <Input
                    id="siteName"
                    value={settings.siteName}
                    onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="siteDescription">Organization Description</Label>
                  <Textarea
                    id="siteDescription"
                    value={settings.siteDescription}
                    onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={settings.address}
                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Settings */}
          <TabsContent value="contact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Information
                </CardTitle>
                <CardDescription>Update your organization's contact details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={settings.contactEmail}
                    onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    value={settings.phoneNumber}
                    onChange={(e) => setSettings({ ...settings, phoneNumber: e.target.value })}
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Social Media Links</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="facebook">Facebook</Label>
                      <Input
                        id="facebook"
                        value={settings.socialMedia.facebook}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            socialMedia: { ...settings.socialMedia, facebook: e.target.value },
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="twitter">Twitter</Label>
                      <Input
                        id="twitter"
                        value={settings.socialMedia.twitter}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            socialMedia: { ...settings.socialMedia, twitter: e.target.value },
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="instagram">Instagram</Label>
                      <Input
                        id="instagram"
                        value={settings.socialMedia.instagram}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            socialMedia: { ...settings.socialMedia, instagram: e.target.value },
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        value={settings.socialMedia.linkedin}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            socialMedia: { ...settings.socialMedia, linkedin: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Features Settings */}
          <TabsContent value="features" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Website Features
                </CardTitle>
                <CardDescription>Enable or disable website features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="donations">Online Donations</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Allow visitors to make online donations</p>
                  </div>
                  <Switch
                    id="donations"
                    checked={settings.features.donations}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        features: { ...settings.features, donations: checked },
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="newsletter">Newsletter Signup</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Show newsletter signup forms</p>
                  </div>
                  <Switch
                    id="newsletter"
                    checked={settings.features.newsletter}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        features: { ...settings.features, newsletter: checked },
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="darkMode">Dark Mode</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Allow users to switch to dark mode</p>
                  </div>
                  <Switch
                    id="darkMode"
                    checked={settings.features.darkMode}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        features: { ...settings.features, darkMode: checked },
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="analytics">Analytics</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Enable website analytics tracking</p>
                  </div>
                  <Switch
                    id="analytics"
                    checked={settings.features.analytics}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        features: { ...settings.features, analytics: checked },
                      })
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Settings */}
          <TabsContent value="seo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  SEO Settings
                </CardTitle>
                <CardDescription>Optimize your website for search engines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="metaTitle">Meta Title</Label>
                  <Input
                    id="metaTitle"
                    value={settings.seo.metaTitle}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        seo: { ...settings.seo, metaTitle: e.target.value },
                      })
                    }
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Recommended: 50-60 characters</p>
                </div>
                <div>
                  <Label htmlFor="metaDescription">Meta Description</Label>
                  <Textarea
                    id="metaDescription"
                    value={settings.seo.metaDescription}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        seo: { ...settings.seo, metaDescription: e.target.value },
                      })
                    }
                    rows={3}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Recommended: 150-160 characters</p>
                </div>
                <div>
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input
                    id="keywords"
                    value={settings.seo.keywords}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        seo: { ...settings.seo, keywords: e.target.value },
                      })
                    }
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Separate keywords with commas</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <div className="flex justify-end pt-6">
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white">
            <Save className="h-4 w-4 mr-2" />
            Save All Settings
          </Button>
        </div>

        {/* Admin Access Info */}
        <Alert className="mt-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Admin Access Information:</strong>
            <br />• Admin Login URL: <code>/admin/login</code>
            <br />• Demo Username: <code>admin</code>
            <br />• Demo Password: <code>betterdream2024</code>
            <br />• Dashboard URL: <code>/admin/dashboard</code>
            <br />• Content Management: <code>/admin/content</code>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
