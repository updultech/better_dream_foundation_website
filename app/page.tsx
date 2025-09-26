import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, BookOpen, Stethoscope, Lightbulb, ArrowRight, Calendar } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building Better Dreams for <span className="text-yellow-300">Ghana's Future</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Empowering communities through education, healthcare, and sustainable development initiatives across
              Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
              >
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">15</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Regions Serving</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Focus Areas</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We work across multiple sectors to create lasting positive change in Ghanaian communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Education</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Building schools, providing scholarships, and creating digital learning centers to ensure quality
                  education for all.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Healthcare</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Mobile health clinics, medical outreach programs, and health education initiatives for underserved
                  communities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Innovation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Technology training, entrepreneurship programs, and sustainable development solutions for economic
                  growth.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover some of our impactful initiatives that are transforming communities across Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/digital-learning-center.jpg"
                  alt="Digital Learning Centers"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Education</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Digital Learning Centers</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Establishing modern computer labs and internet connectivity in rural schools to bridge the digital
                  divide.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/mobile-health-clinic.jpg"
                  alt="Mobile Health Clinics"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600 text-white">Healthcare</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Mobile Health Clinics</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Bringing essential healthcare services directly to remote communities through our mobile medical
                  units.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/womens-empowerment-program.jpg"
                  alt="Women's Empowerment"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-purple-600 text-white">Empowerment</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Women's Empowerment</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Skills training and microfinance programs to empower women entrepreneurs in rural communities.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Latest News & Events</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with our recent activities and upcoming events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  January 5, 2025
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">
                  Better Dream Foundation Ghana calls for investigation into Kantamato fire outbreak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Following the devastating fire at Kantamato Market, we join calls for a thorough investigation and
                  support for affected traders.
                </CardDescription>
                <Button asChild variant="link" className="p-0 mt-4">
                  <Link href="/news">
                    Read More <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  December 15, 2024
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">
                  Annual Youth Leadership Conference 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Over 200 young leaders gathered to discuss sustainable development and community engagement
                  strategies.
                </CardDescription>
                <Button asChild variant="link" className="p-0 mt-4">
                  <Link href="/news">
                    Read More <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  November 28, 2024
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">
                  New Digital Learning Center Opens in Tamale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Our latest digital learning center provides computer training and internet access to over 500
                  students.
                </CardDescription>
                <Button asChild variant="link" className="p-0 mt-4">
                  <Link href="/news">
                    Read More <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/news">
                View All News <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Building Better Dreams</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Your support can help us reach more communities and create lasting positive change across Ghana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Link href="/donate">
                <Heart className="mr-2 w-5 h-5" />
                Make a Donation
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
            >
              <Link href="/get-involved">
                <Users className="mr-2 w-5 h-5" />
                Volunteer With Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
