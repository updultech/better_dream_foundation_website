"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FileText, Download, Upload, Calendar, Eye, Search } from "lucide-react"

const reports = [
  {
    id: 1,
    title: "Annual Report 2023",
    year: 2023,
    type: "Annual Report",
    description: "Comprehensive overview of our programs, impact, and financial performance in 2023.",
    fileSize: "2.4 MB",
    downloadCount: 1250,
    publishDate: "March 15, 2024",
    status: "Published",
  },
  {
    id: 2,
    title: "Financial Transparency Report 2023",
    year: 2023,
    type: "Financial Report",
    description: "Detailed breakdown of our financial activities and fund allocation for 2023.",
    fileSize: "1.8 MB",
    downloadCount: 890,
    publishDate: "February 28, 2024",
    status: "Published",
  },
  {
    id: 3,
    title: "Impact Assessment Report 2023",
    year: 2023,
    type: "Impact Report",
    description: "Measuring the social impact and outcomes of our programs across all regions.",
    fileSize: "3.1 MB",
    downloadCount: 675,
    publishDate: "January 20, 2024",
    status: "Published",
  },
  {
    id: 4,
    title: "Annual Report 2022",
    year: 2022,
    type: "Annual Report",
    description: "Complete annual report covering our achievements and challenges in 2022.",
    fileSize: "2.2 MB",
    downloadCount: 2100,
    publishDate: "March 10, 2023",
    status: "Published",
  },
  {
    id: 5,
    title: "Sustainability Report 2022",
    year: 2022,
    type: "Sustainability Report",
    description: "Our commitment to environmental sustainability and responsible practices.",
    fileSize: "1.5 MB",
    downloadCount: 450,
    publishDate: "April 5, 2023",
    status: "Published",
  },
  {
    id: 6,
    title: "Annual Report 2024",
    year: 2024,
    type: "Annual Report",
    description: "Upcoming annual report for 2024 - currently in preparation.",
    fileSize: "TBD",
    downloadCount: 0,
    publishDate: "Expected March 2025",
    status: "In Progress",
  },
]

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [isAdminMode, setIsAdminMode] = useState(false)

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = !selectedYear || report.year === selectedYear
    const matchesType = !selectedType || report.type === selectedType

    return matchesSearch && matchesYear && matchesType
  })

  const years = [...new Set(reports.map((report) => report.year))].sort((a, b) => b - a)
  const types = [...new Set(reports.map((report) => report.type))]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Annual Reports</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Access our comprehensive reports showcasing our impact, financial transparency, and organizational growth.
            </p>
          </div>
        </div>
      </section>

      {/* Admin Panel Toggle */}
      <section className="py-4 bg-gray-100 dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Showing {filteredReports.length} of {reports.length} reports
            </div>
            <Button variant="outline" size="sm" onClick={() => setIsAdminMode(!isAdminMode)} className="text-xs">
              {isAdminMode ? "Exit Admin Mode" : "Admin Login"}
            </Button>
          </div>
        </div>
      </section>

      {/* Admin Upload Section */}
      {isAdminMode && (
        <section className="py-8 bg-yellow-50 dark:bg-yellow-900/20 border-b">
          <div className="container mx-auto px-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="mr-2 h-5 w-5" />
                  Admin Panel - Upload New Report
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Report Title</label>
                      <Input placeholder="Enter report title" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Report Type</label>
                      <select className="w-full p-2 border rounded-md">
                        <option value="">Select type</option>
                        <option value="Annual Report">Annual Report</option>
                        <option value="Financial Report">Financial Report</option>
                        <option value="Impact Report">Impact Report</option>
                        <option value="Sustainability Report">Sustainability Report</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Year</label>
                      <Input type="number" placeholder="2024" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Description</label>
                      <textarea
                        className="w-full p-2 border rounded-md h-20"
                        placeholder="Brief description of the report"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Upload File</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">Drop PDF file here or click to browse</p>
                        <Input type="file" accept=".pdf" className="hidden" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Report
                  </Button>
                  <Button variant="outline">Save as Draft</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search reports..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <select
                className="px-3 py-2 border rounded-md"
                value={selectedYear || ""}
                onChange={(e) => setSelectedYear(e.target.value ? Number.parseInt(e.target.value) : null)}
              >
                <option value="">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <select
                className="px-3 py-2 border rounded-md"
                value={selectedType || ""}
                onChange={(e) => setSelectedType(e.target.value || null)}
              >
                <option value="">All Types</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Reports Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReports.map((report) => (
              <Card key={report.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <FileText className="h-8 w-8 text-blue-600 mr-3" />
                      <div>
                        <CardTitle className="text-lg">{report.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {report.type}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant={report.status === "Published" ? "default" : "secondary"} className="ml-2">
                      {report.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{report.description}</p>

                  <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {report.publishDate}
                    </div>
                    <div className="flex justify-between">
                      <span>File Size: {report.fileSize}</span>
                      <span>Downloads: {report.downloadCount}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {report.status === "Published" ? (
                      <>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="flex-1">
                              <Eye className="mr-2 h-4 w-4" />
                              Preview
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl h-[80vh]">
                            <DialogHeader>
                              <DialogTitle>{report.title}</DialogTitle>
                            </DialogHeader>
                            <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                              <div className="text-center">
                                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-600 dark:text-gray-300">PDF Preview</p>
                                <p className="text-sm text-gray-500">Full preview would be displayed here</p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </>
                    ) : (
                      <Button disabled size="sm" className="w-full">
                        Coming Soon
                      </Button>
                    )}
                  </div>

                  {isAdminMode && (
                    <div className="mt-4 pt-4 border-t flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm" className="flex-1">
                        Delete
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredReports.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No reports found</h3>
              <p className="text-gray-600 dark:text-gray-300">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Transparency Statement */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Commitment to Transparency</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We believe in complete transparency about our work, impact, and finances. Our annual reports provide
              detailed insights into how we use donations, measure our impact, and continuously improve our programs.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Financial Transparency</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Detailed breakdown of all income and expenses
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold mb-2">Impact Measurement</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Quantified results and outcomes of our programs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Open Access</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">All reports freely available for download</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
