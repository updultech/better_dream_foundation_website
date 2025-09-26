import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, BookOpen, Stethoscope, Home, Calendar, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building Better Dreams for <span className="text-yellow-400">Ghana's Future</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Empowering communities through education, healthcare, and sustainable development across Ghana. Together,
              we're creating lasting change that transforms lives and builds stronger communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3"
              >
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 bg-transparent"
              >
                <Link href="/get-involved">Volunteer With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2">15</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Regions Serving</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">5000+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Focus Areas</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We work across multiple sectors to create comprehensive solutions that address the root causes of poverty
              and inequality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Education</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  Building schools, providing scholarships, and creating digital learning centers to ensure every child
                  has access to quality education.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Stethoscope className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Healthcare</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  Establishing mobile clinics, health education programs, and partnerships with local healthcare
                  providers to improve community health.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Home className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Community Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  Supporting local initiatives, women's empowerment programs, and sustainable development projects that
                  strengthen communities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover some of our impactful projects that are making a real difference in communities across Ghana.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/digital-learning-center.jpg"
                  alt="Digital Learning Center"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Education</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">Digital Learning Centers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                  Establishing modern computer labs and digital literacy programs in rural schools to bridge the digital
                  divide.
                </CardDescription>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                >
                  <Link href="/projects">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/mobile-health-clinic.jpg"
                  alt="Mobile Health Clinic"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 text-white">Healthcare</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">Mobile Health Clinics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                  Bringing essential healthcare services directly to remote communities through our mobile clinic
                  program.
                </CardDescription>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-green-600 group-hover:text-white transition-colors bg-transparent"
                >
                  <Link href="/projects">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/womens-empowerment-program.jpg"
                  alt="Women's Empowerment Program"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-600 text-white">Community</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">Women's Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                  Supporting women entrepreneurs through microfinance, skills training, and business development
                  programs.
                </CardDescription>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-purple-600 group-hover:text-white transition-colors bg-transparent"
                >
                  <Link href="/projects">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest News & Updates</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay informed about our latest initiatives, community impact stories, and important announcements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/kantamato-market-fire.jpg"
                  alt="Kantamato Market Fire Investigation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  January 5, 2025
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  Better Dream Foundation Ghana calls for investigation into Kantamato fire outbreak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                  Following the devastating fire at Kantamato Market, we join calls for a thorough investigation and
                  support for affected traders and their families.
                </CardDescription>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                >
                  <Link href="/news">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/youth-leadership-conference.jpg"
                  alt="Youth Leadership Conference"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  December 15, 2024
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  Annual Youth Leadership Conference Empowers 200+ Young Leaders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                  Our annual conference brought together young leaders from across Ghana for skills development,
                  networking, and community action planning.
                </CardDescription>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                >
                  <Link href="/news">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/capacity-building-workshop.jpg"
                  alt="Capacity Building Workshop"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  November 28, 2024
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  Capacity Building Workshop Strengthens Local Organizations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                  We conducted intensive training sessions for local partner organizations, enhancing their project
                  management and community engagement capabilities.
                </CardDescription>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                >
                  <Link href="/news">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 bg-transparent"
            >
              <Link href="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join us in our mission to transform communities across Ghana. Whether through donations, volunteering, or
              partnerships, your contribution can help us build a better future for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
                <Link href="/donate">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Today
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
              >
                <Link href="/get-involved">
                  <Users className="w-5 h-5 mr-2" />
                  Get Involved
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
