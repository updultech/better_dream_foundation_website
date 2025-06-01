import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Heart, Globe, Users, Handshake, Target, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Projects - Making a Difference Worldwide",
  description:
    "Explore Better Dream Foundation's impactful projects across education, healthcare, environment, and community development in 15 countries.",
}

const projects = [
  {
    id: 1,
    title: "Digital Learning Centers",
    category: "Education",
    location: "Rural Kenya",
    status: "Active",
    description:
      "Establishing computer labs and digital literacy programs in rural schools to bridge the digital divide and prepare students for the modern economy.",
    impact: "2,500 students trained",
    duration: "2023 - 2025",
    image: "/placeholder.svg?height=300&width=400",
    icon: BookOpen,
    color: "blue",
  },
  {
    id: 2,
    title: "Mobile Health Clinics",
    category: "Healthcare",
    location: "Remote Bangladesh",
    status: "Active",
    description:
      "Bringing essential healthcare services to remote villages through mobile clinics staffed with qualified medical professionals.",
    impact: "15,000 patients served",
    duration: "2022 - 2024",
    image: "/placeholder.svg?height=300&width=400",
    icon: Heart,
    color: "red",
  },
  {
    id: 3,
    title: "Clean Water Initiative",
    category: "Environment",
    location: "Sub-Saharan Africa",
    status: "Completed",
    description:
      "Installing water purification systems and teaching communities about water conservation and hygiene practices.",
    impact: "50 communities served",
    duration: "2021 - 2023",
    image: "/placeholder.svg?height=300&width=400",
    icon: Globe,
    color: "green",
  },
  {
    id: 4,
    title: "Women's Empowerment Program",
    category: "Women Empowerment",
    location: "Rural India",
    status: "Active",
    description:
      "Providing vocational training, microfinance opportunities, and leadership development for women in rural communities.",
    impact: "1,200 women empowered",
    duration: "2023 - 2026",
    image: "/placeholder.svg?height=300&width=400",
    icon: Handshake,
    color: "purple",
  },
  {
    id: 5,
    title: "Youth Leadership Academy",
    category: "Community Development",
    location: "Urban Philippines",
    status: "Active",
    description:
      "Training young leaders to become change agents in their communities through leadership skills and civic engagement programs.",
    impact: "500 youth leaders trained",
    duration: "2022 - 2025",
    image: "/placeholder.svg?height=300&width=400",
    icon: Users,
    color: "yellow",
  },
  {
    id: 6,
    title: "Emergency Relief Response",
    category: "Emergency Relief",
    location: "Disaster-affected areas",
    status: "Ongoing",
    description:
      "Providing immediate assistance and long-term recovery support to communities affected by natural disasters and humanitarian crises.",
    impact: "10,000 people assisted",
    duration: "Ongoing",
    image: "/placeholder.svg?height=300&width=400",
    icon: Target,
    color: "orange",
  },
]

const categories = [
  { name: "All", count: projects.length },
  { name: "Education", count: projects.filter((p) => p.category === "Education").length },
  { name: "Healthcare", count: projects.filter((p) => p.category === "Healthcare").length },
  { name: "Environment", count: projects.filter((p) => p.category === "Environment").length },
  { name: "Women Empowerment", count: projects.filter((p) => p.category === "Women Empowerment").length },
  { name: "Community Development", count: projects.filter((p) => p.category === "Community Development").length },
  { name: "Emergency Relief", count: projects.filter((p) => p.category === "Emergency Relief").length },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Discover how we're making a difference in communities worldwide through our comprehensive development
              programs.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600 dark:text-gray-300">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600 dark:text-gray-300">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">$2M+</div>
              <div className="text-gray-600 dark:text-gray-300">Funds Deployed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button key={category.name} variant="outline" className="hover:bg-blue-600 hover:text-white">
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const IconComponent = project.icon
              return (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
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

                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-${project.color}-100 dark:bg-${project.color}-900`}
                      >
                        <IconComponent className={`h-4 w-4 text-${project.color}-600`} />
                      </div>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>

                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        {project.duration}
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mb-4">
                      <div className="text-sm font-medium text-blue-600 dark:text-blue-400">Impact</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{project.impact}</div>
                    </div>

                    <Link
                      href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-blue-600 hover:underline"
                    >
                      Learn more →
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">Want to Support Our Projects?</h2>
          <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
            Your contribution can help us expand our impact and reach more communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
              >
                <Users className="mr-2 h-5 w-5" />
                Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
