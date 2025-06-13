import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Target, ArrowRight, Globe, Handshake, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Better Dream Foundation - Empowering Communities for a Better Tomorrow",
  description:
    "Join Better Dream Foundation in creating positive change. We work to empower communities through education, healthcare, and sustainable development programs.",
  keywords: "NGO, charity, community development, education, healthcare, Better Dream Foundation",
  openGraph: {
    title: "Better Dream Foundation Ghana",
    description: "Empowering Communities for a Better Tomorrow",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Empowering Communities for a <span className="text-yellow-400">Better Tomorrow</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100">
                Join us in creating lasting change through education, healthcare, and sustainable development programs
                that transform lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-involved">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 text-lg"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Get Involved
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/community-program.jpg"
                alt="Better Dream Foundation community program with children and families participating in Operation Mango Tree initiative"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600 dark:text-gray-300">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600 dark:text-gray-300">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-300">Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Focus Areas</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We work across multiple sectors to create comprehensive and sustainable impact in communities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Providing quality education and learning opportunities to underserved communities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Improving access to healthcare services and promoting wellness in communities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Environment</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Promoting sustainable practices and environmental conservation initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building stronger communities through capacity building and empowerment programs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Women Empowerment</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Supporting women through skill development and economic empowerment programs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Emergency Relief</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Providing immediate assistance during natural disasters and humanitarian crises.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our recent initiatives and the positive impact we're making in communities around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/digital-learning-center.jpg"
                  alt="Digital Learning Centers project with youth volunteers in yellow shirts participating in the 'Cleaning for Peace' initiative"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Digital Learning Centers</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Establishing computer labs in rural schools to bridge the digital divide and empower youth with
                  technology skills.
                </p>
                <Link
                  href="/projects"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/career-guidance-mentorship.jpg"
                  alt="Career guidance and mentorship program with students in pink uniforms gathered for human rights and career awareness session"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Career Guidance and Mentorship</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Providing career counseling and mentorship programs to help young people make informed career choices
                  and develop professional skills.
                </p>
                <Link
                  href="/projects"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/sanitary-pads-donation.jpg"
                  alt="Donation of sanitary pads to schoolgirls in Ghana, showing girls in school uniforms proudly holding up their sanitary pad packages"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Donation of Sanitary Pads</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Supporting girls' education and health by providing free sanitary pads to ensure they don't miss
                  school during menstruation.
                </p>
                <Link
                  href="/projects"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
            Join thousands of supporters who are helping us create positive change in communities worldwide.
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
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
