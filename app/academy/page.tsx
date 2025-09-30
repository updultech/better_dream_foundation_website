import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Calendar,
  GraduationCap,
  Target,
  Star,
  CheckCircle,
  Globe,
  Users,
  Award,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "BDF Academy - Political & Diplomatic Training - Better Dream Foundation Ghana",
  description:
    "BDF Ghana Academy specializes in training youth and young politicians in international diplomacy, politics, and personal branding for global success.",
  keywords:
    "BDF Academy, political training, diplomacy, Ghana, international politics, personal branding, youth politicians, global policies",
}

export default function AcademyPage() {
  const programs = [
    {
      title: "International Diplomacy Program",
      description:
        "Comprehensive training in diplomatic protocols, international relations, and global policy navigation",
      duration: "6 Months",
      level: "Advanced Certificate",
      features: ["Diplomatic Protocols", "International Law", "Negotiation Skills", "Cultural Intelligence"],
    },
    {
      title: "Political Leadership Training",
      description: "Essential skills for young politicians to excel in local and international political arenas",
      duration: "4 Months",
      level: "Professional Certificate",
      features: ["Campaign Management", "Public Policy", "Electoral Systems", "Political Communication"],
    },
    {
      title: "Personal Branding for Politicians",
      description: "Strategic personal branding and communication skills for political professionals",
      duration: "3 Months",
      level: "Specialized Training",
      features: ["Digital Presence", "Media Relations", "Public Speaking", "Crisis Communication"],
    },
    {
      title: "Global Trade & Policy",
      description: "Understanding international trade practices and their impact on global political landscapes",
      duration: "5 Months",
      level: "Expert Level",
      features: ["Trade Agreements", "Economic Diplomacy", "Policy Analysis", "Market Intelligence"],
    },
  ]

  const testimonials = [
    {
      name: "Hon. Kwame Asante",
      program: "International Diplomacy Program",
      quote:
        "BDF Academy transformed my understanding of global politics. The diplomatic training opened doors to international opportunities I never imagined.",
    },
    {
      name: "Fatima Abdul-Rahman",
      program: "Personal Branding for Politicians",
      quote:
        "The personal branding program helped me build a strong political identity and connect effectively with my constituents.",
    },
    {
      name: "David Mensah",
      program: "Political Leadership Training",
      quote:
        "The comprehensive political training gave me the confidence and skills to run for office and serve my community effectively.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <GraduationCap className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">BDF Ghana Academy</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Empowering Youth & Young Politicians in International Diplomacy and Global Politics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold">
                <Globe className="mr-2 h-5 w-5" />
                Explore Programs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Academy Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  About BDF Ghana Academy
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Welcome to BDF Ghana Academy, dedicated to catering to the specialized training needs of youth and
                  young politicians involved in international diplomacy, politics, and personal branding. Our mission is
                  to equip young politicians and professionals with the knowledge and skills necessary to navigate the
                  complexities of global policies successfully.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  At BDF Ghana Academy, we are committed to empowering youth and young politicians to expand their
                  global footprint and achieve sustainable growth through effective international trade practices. Join
                  us and unlock your potential in the world of politics.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Specialized political and diplomatic training
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Expert instructors with international experience
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">Global networking opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Career advancement in politics and diplomacy
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 rounded-lg p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <GraduationCap className="h-24 w-24 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Political Excellence</h3>
                    <p className="text-gray-600 dark:text-gray-300">Training the next generation of global leaders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Specialized Programs
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive training programs designed to prepare young politicians and professionals for success in
                international diplomacy and global politics.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <Badge variant="secondary">{program.level}</Badge>
                    </div>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <Clock className="h-4 w-4 mr-2" />
                      {program.duration}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Program Features:</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Star className="h-3 w-3 mr-2 text-yellow-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Core Focus Areas
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Specialized training designed to build global political leaders
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">International Diplomacy</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Master the art of diplomatic relations and international negotiations
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Political Leadership</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Develop essential skills for effective political leadership
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 dark:bg-yellow-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Personal Branding</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Build a strong political identity and public presence
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Global Trade</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Understand international trade practices and economic diplomacy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Success Stories from Our Alumni
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Hear from young politicians who have transformed their careers through our specialized training
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 rounded-full flex items-center justify-center">
                      <Users className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                    </div>
                    <blockquote className="text-gray-600 dark:text-gray-300 mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.program}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Information */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Join Our Political Training Programs
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Ready to advance your political career and global influence?
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    Program Intake
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">International Diplomacy</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Quarterly intake - March, June, September, December
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Political Leadership</h4>
                    <p className="text-gray-600 dark:text-gray-400">Bi-annual intake - January & July</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Personal Branding</h4>
                    <p className="text-gray-600 dark:text-gray-400">Monthly intake available</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-green-600" />
                    Eligibility Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Age Requirement</h4>
                    <p className="text-gray-600 dark:text-gray-400">18-35 years (Youth & Young Politicians)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-gray-600 dark:text-gray-400">Minimum secondary education</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interest Areas</h4>
                    <p className="text-gray-600 dark:text-gray-400">Politics, diplomacy, or public service</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Shape Your Political Future?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Take the first step towards becoming a global political leader through specialized training at BDF Ghana
              Academy
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Accra, Ghana</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+233597399216</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>academy@betterdreamfoundation.org</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold">
                Apply for Training
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Contact Admissions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
