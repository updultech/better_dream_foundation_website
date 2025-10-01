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
  Target,
  Calendar,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  User,
} from "lucide-react"

export const metadata: Metadata = {
  title: "BDF Academy - Political & Diplomatic Training | Better Dream Foundation Ghana",
  description:
    "Specialized training for youth and young politicians in international diplomacy, politics, and personal branding. Join BDF Ghana Academy to enhance your political career.",
}

export default function AcademyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <GraduationCap className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">BDF Ghana Academy</h1>
            <p className="text-xl mb-8 text-blue-100">
              Empowering Youth & Young Politicians Through International Diplomacy Training
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                Apply for Training
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Academy Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About BDF Ghana Academy</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-green-500 mx-auto mb-6"></div>
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-blue-600 to-green-600 p-4 rounded-full flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      Welcome to BDF Ghana Academy, dedicated to catering to the specialized training needs of youth and
                      young politicians involved in international diplomacy, politics, and personal branding. Our
                      mission is to equip young politicians and professionals with the knowledge and skills necessary to
                      navigate the complexities of global policies successfully.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      At BDF Ghana Academy, we are committed to empowering youth and young politicians to expand their
                      global footprint and achieve sustainable growth through effective international trade practices.
                      Join us and unlock your potential in the world of politics.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">Expert Political Trainers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">International Network</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">Practical Diplomacy Skills</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">Career Development Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Training Programs</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Specialized programs designed for aspiring political leaders and diplomats
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Program 1: International Diplomacy */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-lg">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">6 Months</Badge>
                </div>
                <CardTitle className="text-2xl">International Diplomacy Program</CardTitle>
                <CardDescription>Master the art of diplomatic relations and international negotiations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Diplomatic protocols and etiquette</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>International law and treaties</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Cross-cultural communication</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Negotiation strategies</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Global policy analysis</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Level</span>
                    <Badge variant="outline">Intermediate to Advanced</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Program 2: Political Leadership */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-green-600 to-green-700 p-3 rounded-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">4 Months</Badge>
                </div>
                <CardTitle className="text-2xl">Political Leadership Training</CardTitle>
                <CardDescription>Develop essential skills for effective political leadership</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Campaign management and strategy</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Public policy development</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Electoral systems and governance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Grassroots mobilization</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Political communication</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Level</span>
                    <Badge variant="outline">Beginner to Intermediate</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Program 3: Personal Branding */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 p-3 rounded-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                    3 Months
                  </Badge>
                </div>
                <CardTitle className="text-2xl">Personal Branding for Politicians</CardTitle>
                <CardDescription>Build and manage your political brand effectively</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Digital presence and social media</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Public speaking and presentation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Media relations and interviews</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Crisis communication management</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Personal image and reputation</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Level</span>
                    <Badge variant="outline">All Levels</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Program 4: Global Trade & Policy */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-3 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                    5 Months
                  </Badge>
                </div>
                <CardTitle className="text-2xl">Global Trade & Policy</CardTitle>
                <CardDescription>Navigate international trade and economic diplomacy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>International trade agreements</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Economic diplomacy strategies</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Trade policy analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Global market dynamics</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>International business practices</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Level</span>
                    <Badge variant="outline">Intermediate to Advanced</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Core Focus Areas</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Key competencies we develop in our students</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">International Diplomacy</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Master diplomatic protocols and international relations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Political Leadership</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Develop leadership skills for political success
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Personal Branding</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Build a powerful political brand and presence
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Global Trade</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Navigate international trade and economic policies
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Success Stories from Our Alumni</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Hear from graduates who transformed their political careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-full mb-4">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                    "The International Diplomacy Program opened doors I never imagined. I now serve as a diplomatic
                    attaché and credit my success to BDF Academy's comprehensive training."
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-gray-900 dark:text-white">Kwame Mensah</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Diplomatic Attaché, Ministry of Foreign Affairs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-full mb-4">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                    "The Political Leadership Training gave me the confidence and skills to run for office. I'm now
                    serving my community as a district assembly member."
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-gray-900 dark:text-white">Abena Osei</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">District Assembly Member, Accra</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 p-4 rounded-full mb-4">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                    "Personal Branding for Politicians transformed how I communicate with my constituents. My social
                    media following grew by 300% and engagement increased significantly."
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-gray-900 dark:text-white">Joseph Ankrah</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Youth Organizer, National Party</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Admission Information</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Start your journey towards political excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    Program Intake
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Next Intake</span>
                    <span className="font-semibold text-gray-900 dark:text-white">March 2025</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Application Deadline</span>
                    <span className="font-semibold text-gray-900 dark:text-white">February 15, 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Classes Begin</span>
                    <span className="font-semibold text-gray-900 dark:text-white">March 1, 2025</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    Eligibility Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Age: 18-35 years</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Education: Minimum high school diploma</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Interest in politics or diplomacy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">English language proficiency</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Political Career?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact BDF Ghana Academy today and take the first step towards becoming a global political leader
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="pt-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-sm text-blue-100">Accra, Ghana</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="pt-6 text-center">
                  <Phone className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href="tel:+233597399216" className="text-sm text-blue-100 hover:text-yellow-300">
                    +233597399216
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="pt-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:academy@betterdreamfoundation.org"
                    className="text-sm text-blue-100 hover:text-yellow-300 break-all"
                  >
                    academy@betterdreamfoundation.org
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                Apply for Training
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              >
                Contact Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
