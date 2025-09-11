import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, MapPin, Heart, Play, CheckCircle, Globe, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Better Dream Foundation Ghana - Empowering Communities for Sustainable Change",
  description:
    "Better Dream Foundation Ghana is a non-profit organization dedicated to empowering communities through education, healthcare, and sustainable development programs across Ghana.",
  keywords:
    "Better Dream Foundation, Ghana NGO, community development, education, healthcare, sustainable development, youth empowerment",
  openGraph: {
    title: "Better Dream Foundation Ghana",
    description: "Empowering Communities for Sustainable Change",
    images: ["/images/logo.jpg"],
  },
}

export default function HomePage() {
  const impactStats = [
    {
      icon: Users,
      number: "50K+",
      label: "Lives Impacted",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600",
    },
    {
      icon: Target,
      number: "100+",
      label: "Projects Completed",
      color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-600",
    },
    {
      icon: MapPin,
      number: "15",
      label: "Regions Serving",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600",
    },
    {
      icon: Heart,
      number: "100+",
      label: "Volunteers",
      color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-600",
    },
  ]

  const latestProjects = [
    {
      title: "Digital Learning Centers",
      description:
        "Establishing computer labs and digital literacy programs in rural schools to bridge the technology gap and prepare students for the digital economy.",
      image: "/images/digital-learning-center.jpg",
      category: "Education",
    },
    {
      title: "Community Health Outreach",
      description:
        "Mobile health clinics providing free medical screenings, vaccinations, and health education to underserved communities across Ghana.",
      image: "/images/mobile-health-clinic.jpg",
      category: "Healthcare",
    },
    {
      title: "Women's Empowerment Program",
      description:
        "Skills training and microfinance initiatives empowering women to start businesses and achieve economic independence.",
      image: "/images/womens-empowerment-program.jpg",
      category: "Empowerment",
    },
  ]

  const testimonials = [
    {
      name: "Akosua Mensah",
      role: "Program Beneficiary",
      content:
        "The skills training program changed my life. I now run my own tailoring business and can support my family independently.",
      image: "/placeholder.svg?height=60&width=60&text=AM",
    },
    {
      name: "Dr. Kwame Asante",
      role: "Community Health Partner",
      content:
        "Better Dream Foundation's mobile clinics have significantly improved healthcare access in our remote communities.",
      image: "/placeholder.svg?height=60&width=60&text=KA",
    },
    {
      name: "Emmanuel Osei",
      role: "Student",
      content:
        "The digital learning center in our school opened up a world of opportunities. I'm now studying computer science at university.",
      image: "/placeholder.svg?height=60&width=60&text=EO",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500 text-blue-900 mb-6 text-sm font-semibold px-4 py-2">
                Empowering Communities Since 2020
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Building Better Dreams for
                <span className="text-yellow-400"> Ghana's Future</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                We empower communities through education, healthcare, and sustainable development programs that create
                lasting positive change across Ghana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/donate">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 text-lg">
                    <Heart className="mr-2 h-5 w-5" />
                    Donate Now
                  </Button>
                </Link>
                <Link href="/get-involved">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 text-lg bg-transparent"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Volunteer With Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mission-vision-community.jpg"
                  alt="Better Dream Foundation community programs showing people working together for positive change"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <Button
                  size="lg"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/50 backdrop-blur-sm"
                  variant="outline"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Our Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Measuring success through the lives we've touched and communities we've empowered
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our ongoing initiatives that are making a real difference in communities across Ghana
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <Link
                    href="/projects"
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Mission & Vision</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-blue-900" />
                    </div>
                    <h3 className="text-2xl font-semibold">Mission</h3>
                  </div>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    To empower communities in Ghana through sustainable development programs in education, healthcare,
                    and economic empowerment, creating lasting positive change for current and future generations.
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                      <Globe className="h-6 w-6 text-blue-900" />
                    </div>
                    <h3 className="text-2xl font-semibold">Vision</h3>
                  </div>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    A Ghana where every community has access to quality education, healthcare, and economic
                    opportunities, enabling all people to achieve their full potential and contribute to national
                    development.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <CheckCircle className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">Education</div>
                    <div className="text-blue-100 text-sm">Quality Learning</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <Heart className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">Healthcare</div>
                    <div className="text-blue-100 text-sm">Accessible Care</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">Community</div>
                    <div className="text-blue-100 text-sm">Empowerment</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <Award className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">Impact</div>
                    <div className="text-blue-100 text-sm">Sustainable Change</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stories of Transformation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from the people whose lives have been touched by our programs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">Join Our Mission Today</h2>
          <p className="text-xl text-blue-800 mb-8 max-w-3xl mx-auto">
            Whether through donations, volunteering, or partnerships, your support helps us create lasting change in
            communities across Ghana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Heart className="mr-2 h-5 w-5" />
                Make a Donation
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                <Users className="mr-2 h-5 w-5" />
                Get Involved
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
