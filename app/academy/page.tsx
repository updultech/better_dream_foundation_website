import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Globe,
  Users,
  Award,
  TrendingUp,
  BookOpen,
  Target,
  Calendar,
  MapPin,
  Phone,
  Mail,
  UserCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "BDF Academy - Political Leadership Training",
  description:
    "Specialized training in international diplomacy, politics, and personal branding for youth and young politicians",
}

export default function AcademyPage() {
  const programs = [
    {
      title: "International Diplomacy Program",
      duration: "6 months",
      level: "Advanced",
      icon: Globe,
      description:
        "Comprehensive training in diplomatic protocols, international relations, and global policy negotiation. Learn the art of international diplomacy from experienced practitioners.",
      features: [
        "Diplomatic protocol and etiquette",
        "International law and treaties",
        "Negotiation and conflict resolution",
        "Cultural diplomacy and soft power",
        "United Nations systems and procedures",
      ],
    },
    {
      title: "Political Leadership Training",
      duration: "4 months",
      level: "Intermediate",
      icon: Users,
      description:
        "Build essential political leadership skills including campaign management, public policy development, and electoral strategies for modern political campaigns.",
      features: [
        "Campaign strategy and management",
        "Public policy development",
        "Electoral systems and processes",
        "Political communication",
        "Grassroots organizing",
      ],
    },
    {
      title: "Personal Branding for Politicians",
      duration: "3 months",
      level: "Beginner",
      icon: Award,
      description:
        "Master the art of personal branding in the digital age. Learn to build and maintain a strong political brand across traditional and social media platforms.",
      features: [
        "Digital presence and social media strategy",
        "Media relations and crisis communication",
        "Public speaking and presentation skills",
        "Image consulting and professional styling",
        "Personal brand development",
      ],
    },
    {
      title: "Global Trade & Policy",
      duration: "5 months",
      level: "Advanced",
      icon: TrendingUp,
      description:
        "Deep dive into international trade agreements, economic diplomacy, and policy analysis. Understand how global trade shapes political decisions.",
      features: [
        "International trade agreements",
        "Economic diplomacy and sanctions",
        "Trade policy analysis",
        "Global economic institutions",
        "Trade negotiation strategies",
      ],
    },
  ]

  const focusAreas = [
    {
      icon: Globe,
      title: "International Diplomacy",
      description: "Master diplomatic protocols and international relations",
    },
    {
      icon: Users,
      title: "Political Leadership",
      description: "Develop essential political leadership and campaign skills",
    },
    {
      icon: Award,
      title: "Personal Branding",
      description: "Build a strong professional brand in politics",
    },
    {
      icon: TrendingUp,
      title: "Global Trade",
      description: "Understand international trade and economic policy",
    },
  ]

  const testimonials = [
    {
      name: "Kwame Mensah",
      role: "Member of Parliament",
      content:
        "The International Diplomacy Program transformed my understanding of global politics. The practical skills I gained have been invaluable in my parliamentary work.",
    },
    {
      name: "Akosua Asante",
      role: "Political Campaign Manager",
      content:
        "The Political Leadership Training equipped me with modern campaign strategies that helped us win our recent election. Highly recommended!",
    },
    {
      name: "Ibrahim Abdul-Rahman",
      role: "Policy Analyst",
      content:
        "The Global Trade & Policy program gave me deep insights into economic diplomacy. I now advise government officials on trade negotiations.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
                <GraduationCap className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">BDF Ghana Academy</h1>
            <p className="text-xl mb-8 text-blue-50">Empowering Youth & Young Politicians Through Excellence</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                <BookOpen className="mr-2 h-5 w-5" />
                View Programs
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl">About BDF Ghana Academy</CardTitle>
                    <CardDescription className="text-lg">Specialized Political Training</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Welcome to BDF Ghana Academy, dedicated to catering to the specialized training needs of youth and
                  young politicians involved in international diplomacy, politics, and personal branding. Our mission is
                  to equip young politicians and professionals with the knowledge and skills necessary to navigate the
                  complexities of global policies successfully.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  At BDF Ghana Academy, we are committed to empowering youth and young politicians to expand their
                  global footprint and achieve sustainable growth through effective international trade practices. Join
                  us and unlock your potential in the world of politics.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded">
                      <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Expert Training</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Learn from experienced diplomats and political leaders
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded">
                      <Globe className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Global Perspective</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Understand international relations and global policies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded">
                      <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Networking Opportunities</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Connect with fellow young politicians and leaders
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded">
                      <Award className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Practical Skills</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Apply what you learn through real-world projects
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Training Programs</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Specialized programs designed to equip you with the skills needed for success in international politics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg">
                      <program.icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge variant={program.level === "Advanced" ? "default" : "secondary"}>{program.level}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-base">
                    <Calendar className="h-4 w-4" />
                    {program.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{program.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Focus Areas</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our academy specializes in four key areas of political and diplomatic training
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {focusAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full">
                      <area.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{area.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Success Stories from Our Alumni</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from our graduates who are making an impact in politics and diplomacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-full">
                      <UserCircle2 className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl">Admission Information</CardTitle>
                <CardDescription className="text-lg">Join the next generation of political leaders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Program Intake</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="font-semibold text-gray-900 dark:text-white">Next Intake</p>
                      <p className="text-gray-600 dark:text-gray-400">March 2025</p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <p className="font-semibold text-gray-900 dark:text-white">Application Deadline</p>
                      <p className="text-gray-600 dark:text-gray-400">February 15, 2025</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Eligibility Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Age: 18-35 years old</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Minimum education: High school diploma or equivalent
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Active involvement or interest in politics, diplomacy, or public service
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Commitment to completing the full program duration
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Political Journey?</h2>
            <p className="text-xl mb-8 text-blue-50">
              Contact us today to learn more about our programs and admission process
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="pt-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-3" />
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-sm text-blue-50">Accra, Ghana</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="pt-6 text-center">
                  <Phone className="h-8 w-8 mx-auto mb-3" />
                  <p className="font-semibold mb-1">Phone</p>
                  <a href="tel:+233597399216" className="text-sm text-blue-50 hover:underline">
                    +233597399216
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="pt-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3" />
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:academy@betterdreamfoundation.org" className="text-sm text-blue-50 hover:underline">
                    academy@betterdreamfoundation.org
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Apply for Training
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Contact Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
