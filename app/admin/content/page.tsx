"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  FileText,
  Plus,
  Edit,
  Trash2,
  Upload,
  Save,
  Eye,
  Users,
  Newspaper,
  UserCheck,
  Settings,
  LogOut,
  Calendar,
  MapPin,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  status: "draft" | "published"
  author: string
  image?: string
  readTime?: string
}

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  email: string
  image?: string
  region: string
  status: "active" | "inactive"
}

interface Report {
  id: string
  title: string
  description: string
  year: number
  type: string
  status: "draft" | "published"
  fileUrl?: string
  uploadDate: string
  fileSize?: string
}

interface Project {
  id: string
  title: string
  category: string
  location: string
  status: "Active" | "Completed" | "Planning"
  description: string
  impact: string
  duration: string
  image?: string
}

export default function ContentManagement() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState("news")
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [alertType, setAlertType] = useState<"success" | "error">("success")
  const [editingItem, setEditingItem] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const router = useRouter()

  // State for form data
  const [newsForm, setNewsForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    status: "draft" as "draft" | "published",
    image: "",
  })

  const [teamForm, setTeamForm] = useState({
    name: "",
    role: "",
    bio: "",
    email: "",
    region: "",
    status: "active" as "active" | "inactive",
    image: "",
  })

  const [reportForm, setReportForm] = useState({
    title: "",
    description: "",
    year: new Date().getFullYear(),
    type: "",
    status: "draft" as "draft" | "published",
  })

  const [projectForm, setProjectForm] = useState({
    title: "",
    category: "",
    location: "",
    status: "Planning" as "Active" | "Completed" | "Planning",
    description: "",
    impact: "",
    duration: "",
    image: "",
  })

  // Sample data with more comprehensive content
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([
    {
      id: "1",
      title: "Better Dream Foundation Ghana calls for investigation into Kantamato fire outbreak",
      excerpt:
        "The foundation demands a thorough investigation into the devastating fire at Kantamato Market and calls for immediate support for affected traders.",
      content:
        "The Better Dream Foundation Ghana has issued a strong call for a comprehensive investigation into the recent devastating fire outbreak at Kantamato Market. The foundation expresses deep concern over the incident that has left hundreds of traders without livelihoods and calls for immediate government intervention to support the affected families. Our organization stands ready to provide emergency assistance to those affected by this tragedy.",
      category: "Advocacy",
      date: "2025-01-05",
      status: "published",
      author: "Admin",
      image: "/images/kantamato-market-fire.jpg",
      readTime: "4 min read",
    },
    {
      id: "2",
      title: "Annual Community Health Fair Reaches 2,000 Beneficiaries",
      excerpt:
        "Our largest health fair to date provided free medical screenings, vaccinations, and health education to communities across three regions.",
      content:
        "The Better Dream Foundation's annual community health fair has successfully reached over 2,000 beneficiaries across three regions in Ghana. The event provided free medical screenings, vaccinations, and comprehensive health education sessions. Medical professionals from various specialties volunteered their time to ensure quality healthcare delivery to underserved communities.",
      category: "Health",
      date: "2024-12-15",
      status: "published",
      author: "Admin",
      image: "/images/mobile-health-clinic.jpg",
      readTime: "5 min read",
    },
    {
      id: "3",
      title: "Youth Leadership Conference Empowers 500 Young Leaders",
      excerpt:
        "Three-day conference focused on leadership skills, entrepreneurship, and community development, inspiring the next generation of changemakers.",
      content:
        "The Better Dream Foundation successfully concluded its annual Youth Leadership Conference, empowering 500 young leaders from across Ghana with essential skills in leadership, entrepreneurship, and community development. The conference featured workshops on digital literacy, financial management, and social innovation.",
      category: "Education",
      date: "2024-11-28",
      status: "published",
      author: "Admin",
      image: "/images/youth-leadership-conference.jpg",
      readTime: "6 min read",
    },
    {
      id: "4",
      title: "Women's Empowerment Program Graduates 150 Participants",
      excerpt:
        "Successful completion of our six-month skills training program, with 85% of graduates starting their own businesses or finding employment.",
      content:
        "The Better Dream Foundation celebrates the graduation of 150 women from its comprehensive empowerment program. The six-month initiative focused on skills training, financial literacy, and entrepreneurship development. Participants learned various trades including tailoring, soap making, and digital marketing.",
      category: "Empowerment",
      date: "2024-11-10",
      status: "published",
      author: "Admin",
      image: "/images/womens-empowerment-program.jpg",
      readTime: "4 min read",
    },
  ])

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: "1",
      name: "Shaibu Mohammed",
      role: "Chief Executive Officer",
      bio: "With over 15 years of experience in international development, Shaibu leads our strategic vision and global operations. He holds a Master's degree in Development Studies and has worked with various international NGOs across Africa.",
      email: "shaibu@betterdreamfoundation.org",
      image: "/images/ceo-shaibu-mohammed.jpg",
      region: "National",
      status: "active",
    },
    {
      id: "2",
      name: "Agolmah Atozire Ernest",
      role: "Northern Regional Coordinator",
      bio: "Ernest serves as the Northern Regional Coordinator and is also a final-year medical student at UDS. His passion for community health drives our medical outreach programs in the northern regions.",
      email: "ernest@betterdreamfoundation.org",
      image: "/images/regional-coordinator-ernest.jpg",
      region: "Northern",
      status: "active",
    },
    {
      id: "3",
      name: "Esther Awudu",
      role: "Savanna Regional Coordinator",
      bio: "Esther coordinates our programs in the Savanna region, focusing on women's empowerment and youth development initiatives. She brings extensive experience in community mobilization.",
      email: "esther@betterdreamfoundation.org",
      image: "/images/regional-coordinator-esther.jpg",
      region: "Savanna",
      status: "active",
    },
    {
      id: "4",
      name: "Alhassan Mohammed",
      role: "Project Manager",
      bio: "Alhassan oversees project implementation and monitoring across all regions. His expertise in project management ensures successful delivery of our development programs.",
      email: "alhassan@betterdreamfoundation.org",
      image: "/images/project-manager-alhassan.jpg",
      region: "National",
      status: "active",
    },
    {
      id: "5",
      name: "Munayya Abdul-Rahman",
      role: "Deputy Coordinator",
      bio: "Munayya supports coordination activities across multiple regions and specializes in program evaluation and impact assessment.",
      email: "munayya@betterdreamfoundation.org",
      image: "/images/deputy-coordinator-munayya.jpg",
      region: "Northern",
      status: "active",
    },
  ])

  const [reports, setReports] = useState<Report[]>([
    {
      id: "1",
      title: "Annual Report 2023",
      description:
        "Comprehensive overview of our programs, impact, and financial performance in 2023. This report highlights our achievements in education, healthcare, and community development across all operational regions.",
      year: 2023,
      type: "Annual Report",
      status: "published",
      uploadDate: "2024-03-15",
      fileSize: "2.4 MB",
    },
    {
      id: "2",
      title: "Financial Transparency Report 2023",
      description:
        "Detailed breakdown of our financial activities and fund allocation for 2023. Includes audited financial statements, donor acknowledgments, and expense categorization by program areas.",
      year: 2023,
      type: "Financial Report",
      status: "published",
      uploadDate: "2024-02-28",
      fileSize: "1.8 MB",
    },
    {
      id: "3",
      title: "Impact Assessment Report 2023",
      description:
        "Comprehensive analysis of our program outcomes and community impact across all regions. Features beneficiary testimonials, statistical analysis, and long-term impact measurements.",
      year: 2023,
      type: "Impact Report",
      status: "published",
      uploadDate: "2024-04-10",
      fileSize: "3.1 MB",
    },
  ])

  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "Digital Learning Centers",
      category: "Education",
      location: "Tamale, Ghana",
      status: "Active",
      description:
        "Establishing computer labs and digital literacy programs in rural schools to bridge the digital divide and prepare students for the modern economy. The program includes teacher training and curriculum development.",
      impact: "2,500 students trained",
      duration: "2023 - 2025",
      image: "/images/digital-learning-center.jpg",
    },
    {
      id: "2",
      title: "Mobile Health Clinics",
      category: "Healthcare",
      location: "Kumasi, Ghana",
      status: "Active",
      description:
        "Bringing essential healthcare services to remote villages through mobile clinics staffed with qualified medical professionals. Services include general consultations, maternal health, and preventive care.",
      impact: "15,000 patients served",
      duration: "2022 - 2024",
      image: "/images/mobile-health-clinic.jpg",
    },
    {
      id: "3",
      title: "Women's Empowerment Program",
      category: "Women Empowerment",
      location: "Konongo, Ghana",
      status: "Active",
      description:
        "Providing vocational training, microfinance opportunities, and leadership development for women in rural communities. Focus areas include entrepreneurship, financial literacy, and skills development.",
      impact: "1,200 women empowered",
      duration: "2023 - 2026",
      image: "/images/womens-empowerment-program.jpg",
    },
    {
      id: "4",
      title: "Clean Water Initiative",
      category: "Environment",
      location: "Northern Ghana",
      status: "Completed",
      description:
        "Installing water purification systems and teaching communities about water conservation and hygiene practices. The project included building boreholes and training local maintenance teams.",
      impact: "50 communities served",
      duration: "2021 - 2023",
      image: "/placeholder.svg?height=300&width=400",
    },
  ])

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/admin/login")
    }
  }, [router])

  const showAlertMessage = (message: string, type: "success" | "error") => {
    setAlertMessage(message)
    setAlertType(type)
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/admin/login")
  }

  // News Article Functions
  const handleSaveNews = () => {
    if (!newsForm.title || !newsForm.excerpt || !newsForm.content || !newsForm.category) {
      showAlertMessage("Please fill in all required fields", "error")
      return
    }

    const newArticle: NewsArticle = {
      id: editingItem ? editingItem.id : Date.now().toString(),
      ...newsForm,
      date: editingItem ? editingItem.date : new Date().toISOString().split("T")[0],
      author: "Admin",
      readTime: `${Math.ceil(newsForm.content.length / 200)} min read`,
    }

    if (editingItem) {
      setNewsArticles((prev) => prev.map((article) => (article.id === editingItem.id ? newArticle : article)))
      showAlertMessage("Article updated successfully!", "success")
    } else {
      setNewsArticles((prev) => [newArticle, ...prev])
      showAlertMessage("Article created successfully!", "success")
    }

    resetNewsForm()
    setIsDialogOpen(false)
  }

  const handleEditNews = (article: NewsArticle) => {
    setEditingItem(article)
    setNewsForm({
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      category: article.category,
      status: article.status,
      image: article.image || "",
    })
    setIsDialogOpen(true)
  }

  const handleDeleteNews = (id: string) => {
    if (confirm("Are you sure you want to delete this article? This action cannot be undone.")) {
      setNewsArticles((prev) => prev.filter((article) => article.id !== id))
      showAlertMessage("Article deleted successfully!", "success")
    }
  }

  const resetNewsForm = () => {
    setNewsForm({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      status: "draft",
      image: "",
    })
    setEditingItem(null)
  }

  // Team Member Functions
  const handleSaveTeam = () => {
    if (!teamForm.name || !teamForm.role || !teamForm.bio || !teamForm.email || !teamForm.region) {
      showAlertMessage("Please fill in all required fields", "error")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(teamForm.email)) {
      showAlertMessage("Please enter a valid email address", "error")
      return
    }

    const newMember: TeamMember = {
      id: editingItem ? editingItem.id : Date.now().toString(),
      ...teamForm,
    }

    if (editingItem) {
      setTeamMembers((prev) => prev.map((member) => (member.id === editingItem.id ? newMember : member)))
      showAlertMessage("Team member updated successfully!", "success")
    } else {
      setTeamMembers((prev) => [newMember, ...prev])
      showAlertMessage("Team member added successfully!", "success")
    }

    resetTeamForm()
    setIsDialogOpen(false)
  }

  const handleEditTeam = (member: TeamMember) => {
    setEditingItem(member)
    setTeamForm({
      name: member.name,
      role: member.role,
      bio: member.bio,
      email: member.email,
      region: member.region,
      status: member.status,
      image: member.image || "",
    })
    setIsDialogOpen(true)
  }

  const handleDeleteTeam = (id: string) => {
    if (confirm("Are you sure you want to delete this team member? This action cannot be undone.")) {
      setTeamMembers((prev) => prev.filter((member) => member.id !== id))
      showAlertMessage("Team member deleted successfully!", "success")
    }
  }

  const resetTeamForm = () => {
    setTeamForm({
      name: "",
      role: "",
      bio: "",
      email: "",
      region: "",
      status: "active",
      image: "",
    })
    setEditingItem(null)
  }

  // Report Functions
  const handleSaveReport = () => {
    if (!reportForm.title || !reportForm.description || !reportForm.type) {
      showAlertMessage("Please fill in all required fields", "error")
      return
    }

    if (reportForm.year < 2000 || reportForm.year > new Date().getFullYear() + 1) {
      showAlertMessage("Please enter a valid year", "error")
      return
    }

    const newReport: Report = {
      id: editingItem ? editingItem.id : Date.now().toString(),
      ...reportForm,
      uploadDate: editingItem ? editingItem.uploadDate : new Date().toISOString().split("T")[0],
      fileSize: "2.1 MB", // Mock file size
    }

    if (editingItem) {
      setReports((prev) => prev.map((report) => (report.id === editingItem.id ? newReport : report)))
      showAlertMessage("Report updated successfully!", "success")
    } else {
      setReports((prev) => [newReport, ...prev])
      showAlertMessage("Report uploaded successfully!", "success")
    }

    resetReportForm()
    setIsDialogOpen(false)
  }

  const handleEditReport = (report: Report) => {
    setEditingItem(report)
    setReportForm({
      title: report.title,
      description: report.description,
      year: report.year,
      type: report.type,
      status: report.status,
    })
    setIsDialogOpen(true)
  }

  const handleDeleteReport = (id: string) => {
    if (confirm("Are you sure you want to delete this report? This action cannot be undone.")) {
      setReports((prev) => prev.filter((report) => report.id !== id))
      showAlertMessage("Report deleted successfully!", "success")
    }
  }

  const resetReportForm = () => {
    setReportForm({
      title: "",
      description: "",
      year: new Date().getFullYear(),
      type: "",
      status: "draft",
    })
    setEditingItem(null)
  }

  // Project Functions
  const handleSaveProject = () => {
    if (!projectForm.title || !projectForm.category || !projectForm.location || !projectForm.description) {
      showAlertMessage("Please fill in all required fields", "error")
      return
    }

    const newProject: Project = {
      id: editingItem ? editingItem.id : Date.now().toString(),
      ...projectForm,
    }

    if (editingItem) {
      setProjects((prev) => prev.map((project) => (project.id === editingItem.id ? newProject : project)))
      showAlertMessage("Project updated successfully!", "success")
    } else {
      setProjects((prev) => [newProject, ...prev])
      showAlertMessage("Project created successfully!", "success")
    }

    resetProjectForm()
    setIsDialogOpen(false)
  }

  const handleEditProject = (project: Project) => {
    setEditingItem(project)
    setProjectForm({
      title: project.title,
      category: project.category,
      location: project.location,
      status: project.status,
      description: project.description,
      impact: project.impact,
      duration: project.duration,
      image: project.image || "",
    })
    setIsDialogOpen(true)
  }

  const handleDeleteProject = (id: string) => {
    if (confirm("Are you sure you want to delete this project? This action cannot be undone.")) {
      setProjects((prev) => prev.filter((project) => project.id !== id))
      showAlertMessage("Project deleted successfully!", "success")
    }
  }

  const resetProjectForm = () => {
    setProjectForm({
      title: "",
      category: "",
      location: "",
      status: "Planning",
      description: "",
      impact: "",
      duration: "",
      image: "",
    })
    setEditingItem(null)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Alert */}
      {showAlert && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right">
          <Alert
            className={`${alertType === "success" ? "border-green-500 bg-green-50 dark:bg-green-900/20" : "border-red-500 bg-red-50 dark:bg-red-900/20"} shadow-lg`}
          >
            {alertType === "success" ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-600" />
            )}
            <AlertDescription
              className={
                alertType === "success" ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"
              }
            >
              {alertMessage}
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Content Management System</h1>
              <p className="text-gray-600 dark:text-gray-400">Better Dream Foundation Ghana - Admin Panel</p>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={() => router.push("/admin/dashboard")} variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Dashboard
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
        {/* Testing Instructions Banner */}
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">🧪 Testing Guide</h3>
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>Try these actions:</strong> Click "Add" buttons to create new content, click "Edit" (pencil) icons
            to modify existing items, and click "Delete" (trash) icons to remove content. All changes are saved in
            real-time with confirmation messages.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="news" className="flex items-center gap-2">
              <Newspaper className="h-4 w-4" />
              News & Events ({newsArticles.length})
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Projects ({projects.length})
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Team ({teamMembers.length})
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Reports ({reports.length})
            </TabsTrigger>
          </TabsList>

          {/* News & Events Management */}
          <TabsContent value="news" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">News & Events Management</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Manage news articles, press releases, and event announcements
                </p>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => {
                      resetNewsForm()
                      setIsDialogOpen(true)
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add News Article
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingItem ? "Edit Article" : "Add New Article"}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        placeholder="Enter article title"
                        value={newsForm.title}
                        onChange={(e) => setNewsForm((prev) => ({ ...prev, title: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        value={newsForm.category}
                        onValueChange={(value) => setNewsForm((prev) => ({ ...prev, category: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Advocacy">Advocacy</SelectItem>
                          <SelectItem value="Health">Health</SelectItem>
                          <SelectItem value="Education">Education</SelectItem>
                          <SelectItem value="Community">Community</SelectItem>
                          <SelectItem value="Empowerment">Empowerment</SelectItem>
                          <SelectItem value="Emergency">Emergency</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="excerpt">Excerpt *</Label>
                      <Textarea
                        id="excerpt"
                        placeholder="Brief description of the article (2-3 sentences)"
                        rows={3}
                        value={newsForm.excerpt}
                        onChange={(e) => setNewsForm((prev) => ({ ...prev, excerpt: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="content">Content *</Label>
                      <Textarea
                        id="content"
                        placeholder="Full article content"
                        rows={8}
                        value={newsForm.content}
                        onChange={(e) => setNewsForm((prev) => ({ ...prev, content: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="image">Featured Image URL</Label>
                      <Input
                        id="image"
                        placeholder="Enter image URL or upload path"
                        value={newsForm.image}
                        onChange={(e) => setNewsForm((prev) => ({ ...prev, image: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="status">Status</Label>
                      <Select
                        value={newsForm.status}
                        onValueChange={(value: "draft" | "published") =>
                          setNewsForm((prev) => ({ ...prev, status: value }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleSaveNews} className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Save className="h-4 w-4 mr-2" />
                        {editingItem ? "Update Article" : "Save Article"}
                      </Button>
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-6">
              {newsArticles.map((article) => (
                <Card key={article.id} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={article.status === "published" ? "default" : "secondary"}>
                            {article.status}
                          </Badge>
                          <Badge variant="outline">{article.category}</Badge>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {new Date(article.date).toLocaleDateString()}
                          </span>
                          {article.readTime && (
                            <span className="text-sm text-gray-500 dark:text-gray-400">• {article.readTime}</span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{article.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                        <div className="text-xs text-gray-500 dark:text-gray-400">By {article.author}</div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(`/news/${article.id}`, "_blank")}
                          title="Preview article"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditNews(article)}
                          title="Edit article"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
                          onClick={() => handleDeleteNews(article.id)}
                          title="Delete article"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Projects Management */}
          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Projects Management</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Manage foundation projects and initiatives</p>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => {
                      resetProjectForm()
                      setIsDialogOpen(true)
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Project
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingItem ? "Edit Project" : "Add New Project"}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="projectTitle">Project Title *</Label>
                      <Input
                        id="projectTitle"
                        placeholder="Enter project title"
                        value={projectForm.title}
                        onChange={(e) => setProjectForm((prev) => ({ ...prev, title: e.target.value }))}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="projectCategory">Category *</Label>
                        <Select
                          value={projectForm.category}
                          onValueChange={(value) => setProjectForm((prev) => ({ ...prev, category: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Education">Education</SelectItem>
                            <SelectItem value="Healthcare">Healthcare</SelectItem>
                            <SelectItem value="Environment">Environment</SelectItem>
                            <SelectItem value="Women Empowerment">Women Empowerment</SelectItem>
                            <SelectItem value="Community Development">Community Development</SelectItem>
                            <SelectItem value="Professional Development">Professional Development</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="projectStatus">Status</Label>
                        <Select
                          value={projectForm.status}
                          onValueChange={(value: "Active" | "Completed" | "Planning") =>
                            setProjectForm((prev) => ({ ...prev, status: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Planning">Planning</SelectItem>
                            <SelectItem value="Active">Active</SelectItem>
                            <SelectItem value="Completed">Completed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="projectLocation">Location *</Label>
                      <Input
                        id="projectLocation"
                        placeholder="e.g., Tamale, Ghana"
                        value={projectForm.location}
                        onChange={(e) => setProjectForm((prev) => ({ ...prev, location: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectDescription">Description *</Label>
                      <Textarea
                        id="projectDescription"
                        placeholder="Detailed project description"
                        rows={4}
                        value={projectForm.description}
                        onChange={(e) => setProjectForm((prev) => ({ ...prev, description: e.target.value }))}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="projectImpact">Impact</Label>
                        <Input
                          id="projectImpact"
                          placeholder="e.g., 2,500 students trained"
                          value={projectForm.impact}
                          onChange={(e) => setProjectForm((prev) => ({ ...prev, impact: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectDuration">Duration</Label>
                        <Input
                          id="projectDuration"
                          placeholder="e.g., 2023 - 2025"
                          value={projectForm.duration}
                          onChange={(e) => setProjectForm((prev) => ({ ...prev, duration: e.target.value }))}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="projectImage">Project Image URL</Label>
                      <Input
                        id="projectImage"
                        placeholder="Enter image URL"
                        value={projectForm.image}
                        onChange={(e) => setProjectForm((prev) => ({ ...prev, image: e.target.value }))}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleSaveProject} className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Save className="h-4 w-4 mr-2" />
                        {editingItem ? "Update Project" : "Save Project"}
                      </Button>
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-white dark:bg-gray-800 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={project.image || "/placeholder.svg?height=200&width=300"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant={
                          project.status === "Active"
                            ? "default"
                            : project.status === "Completed"
                              ? "secondary"
                              : "outline"
                        }
                        className="bg-white/90 text-gray-900"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="h-3 w-3 mr-1" />
                        {project.location}
                      </div>
                      {project.duration && (
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="h-3 w-3 mr-1" />
                          {project.duration}
                        </div>
                      )}
                      {project.impact && (
                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          Impact: {project.impact}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-transparent"
                        onClick={() => handleEditProject(project)}
                        title="Edit project"
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
                        onClick={() => handleDeleteProject(project.id)}
                        title="Delete project"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Team Management */}
          <TabsContent value="team" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Team Management</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Manage team members and organizational structure
                </p>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => {
                      resetTeamForm()
                      setIsDialogOpen(true)
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Team Member
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingItem ? "Edit Team Member" : "Add Team Member"}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="memberName">Full Name *</Label>
                        <Input
                          id="memberName"
                          placeholder="Enter full name"
                          value={teamForm.name}
                          onChange={(e) => setTeamForm((prev) => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="memberRole">Role/Position *</Label>
                        <Input
                          id="memberRole"
                          placeholder="Enter role"
                          value={teamForm.role}
                          onChange={(e) => setTeamForm((prev) => ({ ...prev, role: e.target.value }))}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="memberEmail">Email *</Label>
                      <Input
                        id="memberEmail"
                        type="email"
                        placeholder="Enter email address"
                        value={teamForm.email}
                        onChange={(e) => setTeamForm((prev) => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="memberRegion">Region *</Label>
                        <Select
                          value={teamForm.region}
                          onValueChange={(value) => setTeamForm((prev) => ({ ...prev, region: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="National">National</SelectItem>
                            <SelectItem value="Northern">Northern</SelectItem>
                            <SelectItem value="Ashanti">Ashanti</SelectItem>
                            <SelectItem value="Greater Accra">Greater Accra</SelectItem>
                            <SelectItem value="Western">Western</SelectItem>
                            <SelectItem value="Eastern">Eastern</SelectItem>
                            <SelectItem value="Savanna">Savanna</SelectItem>
                            <SelectItem value="Oti">Oti</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="memberStatus">Status</Label>
                        <Select
                          value={teamForm.status}
                          onValueChange={(value: "active" | "inactive") =>
                            setTeamForm((prev) => ({ ...prev, status: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="memberBio">Biography *</Label>
                      <Textarea
                        id="memberBio"
                        placeholder="Enter biography"
                        rows={4}
                        value={teamForm.bio}
                        onChange={(e) => setTeamForm((prev) => ({ ...prev, bio: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="memberPhoto">Profile Photo URL</Label>
                      <Input
                        id="memberPhoto"
                        placeholder="Enter image URL"
                        value={teamForm.image}
                        onChange={(e) => setTeamForm((prev) => ({ ...prev, image: e.target.value }))}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleSaveTeam} className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Save className="h-4 w-4 mr-2" />
                        {editingItem ? "Update Member" : "Save Member"}
                      </Button>
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.id} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                        {member.image ? (
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        ) : (
                          <UserCheck className="h-8 w-8 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400">{member.role}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {member.region}
                          </Badge>
                          <Badge variant={member.status === "active" ? "default" : "secondary"} className="text-xs">
                            {member.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">{member.bio}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{member.email}</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-transparent"
                        onClick={() => handleEditTeam(member)}
                        title="Edit team member"
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
                        onClick={() => handleDeleteTeam(member.id)}
                        title="Delete team member"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Reports Management */}
          <TabsContent value="reports" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Annual Reports Management</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Manage annual reports, financial documents, and impact assessments
                </p>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => {
                      resetReportForm()
                      setIsDialogOpen(true)
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Upload Report
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>{editingItem ? "Edit Report" : "Upload Annual Report"}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="reportTitle">Report Title *</Label>
                      <Input
                        id="reportTitle"
                        placeholder="e.g., Annual Report 2024"
                        value={reportForm.title}
                        onChange={(e) => setReportForm((prev) => ({ ...prev, title: e.target.value }))}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="reportYear">Year *</Label>
                        <Input
                          id="reportYear"
                          type="number"
                          placeholder="2024"
                          value={reportForm.year}
                          onChange={(e) =>
                            setReportForm((prev) => ({
                              ...prev,
                              year: Number.parseInt(e.target.value) || new Date().getFullYear(),
                            }))
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="reportType">Report Type *</Label>
                        <Select
                          value={reportForm.type}
                          onValueChange={(value) => setReportForm((prev) => ({ ...prev, type: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Annual Report">Annual Report</SelectItem>
                            <SelectItem value="Financial Report">Financial Report</SelectItem>
                            <SelectItem value="Impact Report">Impact Report</SelectItem>
                            <SelectItem value="Sustainability Report">Sustainability Report</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="reportDescription">Description *</Label>
                      <Textarea
                        id="reportDescription"
                        placeholder="Brief description of the report"
                        rows={3}
                        value={reportForm.description}
                        onChange={(e) => setReportForm((prev) => ({ ...prev, description: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="reportStatus">Status</Label>
                      <Select
                        value={reportForm.status}
                        onValueChange={(value: "draft" | "published") =>
                          setReportForm((prev) => ({ ...prev, status: value }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {!editingItem && (
                      <div>
                        <Label htmlFor="reportFile">PDF File</Label>
                        <Input id="reportFile" type="file" accept=".pdf" />
                        <p className="text-xs text-gray-500 mt-1">Upload PDF file (max 10MB)</p>
                      </div>
                    )}
                    <div className="flex gap-2">
                      <Button onClick={handleSaveReport} className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Upload className="h-4 w-4 mr-2" />
                        {editingItem ? "Update Report" : "Upload Report"}
                      </Button>
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-6">
              {reports.map((report) => (
                <Card key={report.id} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={report.status === "published" ? "default" : "secondary"}>
                            {report.status}
                          </Badge>
                          <Badge variant="outline">{report.type}</Badge>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Year: {report.year}</span>
                          {report.fileSize && (
                            <span className="text-sm text-gray-500 dark:text-gray-400">• {report.fileSize}</span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{report.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{report.description}</p>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Uploaded: {new Date(report.uploadDate).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(`/reports/${report.id}`, "_blank")}
                          title="Preview report"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditReport(report)}
                          title="Edit report"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
                          onClick={() => handleDeleteReport(report.id)}
                          title="Delete report"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
