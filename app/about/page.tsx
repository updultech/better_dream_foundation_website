import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Globe } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Our Mission and Vision",
  description:
    "Learn about Better Dream Foundation's mission, vision, and commitment to empowering communities worldwide through sustainable development programs.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Better Dream Foundation</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Dedicated to creating lasting positive change in communities worldwide through sustainable development and
              empowerment programs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Our Mission & Vision
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">Mission</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    To empower underserved communities by providing access to quality education, healthcare, and
                    sustainable development opportunities that enable individuals and families to build better futures.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Vision</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    A world where every person has the opportunity to reach their full potential, regardless of their
                    circumstances, and where communities are empowered to create sustainable positive change.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our mission in action"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These values guide everything we do and shape our approach to creating positive change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community-Centered</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in working with communities, not for them, ensuring local ownership and sustainability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Impact-Driven</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every program is designed with measurable outcomes and long-term sustainable impact in mind.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Transparency</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We maintain open communication about our work, finances, and impact with all stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Global Perspective</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We approach challenges with a global mindset while respecting local cultures and contexts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Story</h2>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                Better Dream Foundation was founded in 2010 by a group of passionate individuals who believed that
                everyone deserves the opportunity to build a better future. What started as a small initiative to
                provide educational support to children in underserved communities has grown into a comprehensive
                organization working across multiple sectors and countries.
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                Over the years, we have learned that sustainable change requires a holistic approach. That's why our
                programs now encompass education, healthcare, environmental conservation, women's empowerment, and
                emergency relief. We work closely with local communities to understand their unique needs and develop
                solutions that are culturally appropriate and sustainable.
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Today, Better Dream Foundation operates in 15 countries and has impacted over 50,000 lives. But our work
                is far from over. We continue to innovate, learn, and adapt our approaches to create even greater impact
                in the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet our dedicated leaders who guide our mission and drive our impact across the globe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="CEO"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                <p className="text-blue-600 font-medium mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  With over 15 years of experience in international development, Sarah leads our strategic vision and
                  global operations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Program Director"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
                <p className="text-blue-600 font-medium mb-4">Program Director</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Michael oversees all our field programs and ensures quality implementation across all our initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Finance Director"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Dr. Amara Okafor</h3>
                <p className="text-blue-600 font-medium mb-4">Finance Director</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Dr. Okafor ensures financial transparency and accountability while maximizing the impact of every
                  dollar donated.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Operations Director"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Maria Rodriguez</h3>
                <p className="text-blue-600 font-medium mb-4">Operations Director</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Maria manages day-to-day operations and coordinates between our global offices and field teams.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Education Program Manager"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Dr. James Thompson</h3>
                <p className="text-blue-600 font-medium mb-4">Education Program Manager</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Dr. Thompson leads our education initiatives and has established over 50 learning centers worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Healthcare Director"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Dr. Priya Sharma</h3>
                <p className="text-blue-600 font-medium mb-4">Healthcare Director</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Dr. Sharma oversees our mobile health clinics and community health programs across 12 countries.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Communications Director"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Emily Davis</h3>
                <p className="text-blue-600 font-medium mb-4">Communications Director</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Emily manages our global communications strategy and stakeholder engagement initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Technology Director"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">David Kim</h3>
                <p className="text-blue-600 font-medium mb-4">Technology Director</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  David leads our digital transformation initiatives and manages our technology infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Regional Director Africa"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Dr. Kwame Asante</h3>
                <p className="text-blue-600 font-medium mb-4">Regional Director - Africa</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Dr. Asante oversees all programs across Africa and has 20 years of experience in community
                  development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Regional Director Asia"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Dr. Raj Patel</h3>
                <p className="text-blue-600 font-medium mb-4">Regional Director - Asia</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Dr. Patel manages our Asian operations and specializes in sustainable development and poverty
                  alleviation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Human Resources Director"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Lisa Anderson</h3>
                <p className="text-blue-600 font-medium mb-4">Human Resources Director</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Lisa manages our global workforce and volunteer programs, ensuring we attract and retain top talent.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Partnerships Director"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Robert Martinez</h3>
                <p className="text-blue-600 font-medium mb-4">Partnerships Director</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Robert develops strategic partnerships with governments, corporations, and other NGOs to amplify our
                  impact.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Research Director"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Dr. Sophie Laurent</h3>
                <p className="text-blue-600 font-medium mb-4">Research & Impact Director</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Dr. Laurent leads our research initiatives and impact measurement, ensuring evidence-based program
                  design.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
