import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Users, DollarSign, Calendar, Globe, Handshake, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get Involved - Join Our Mission",
  description:
    "Join Better Dream Foundation's mission to empower communities. Volunteer, donate, fundraise, or partner with us to create lasting positive change.",
}

export default function GetInvolvedPage() {
  const ways = [
    {
      title: "Volunteer",
      description:
        "Join our team of dedicated volunteers and contribute your skills to make a direct impact on our programs.",
    },
    {
      title: "Donate",
      description:
        "Support our programs with a financial contribution. Every donation, no matter the size, makes a difference.",
    },
    {
      title: "Fundraise",
      description: "Organize fundraising events or campaigns in your community to support our mission.",
    },
    {
      title: "Spread Awareness",
      description: "Help us reach more people by sharing our mission on social media and with your network.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Join our mission to create positive change. There are many ways you can make a difference in communities
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ways to Make a Difference
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you have time, skills, or resources to share, there's a perfect way for you to contribute to our
              mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Join our team of dedicated volunteers and contribute your skills to make a direct impact on our
                  programs.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Become a Volunteer</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Donate</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Support our programs with a financial contribution. Every donation, no matter the size, makes a
                  difference.
                </p>
                <Link href="/donate">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900">Donate Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Fundraise</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Organize fundraising events or campaigns in your community to support our mission.
                </p>
                <Button variant="outline" className="w-full">
                  Start Fundraising
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Attend Events</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Join our events, workshops, and awareness campaigns to learn more and show your support.
                </p>
                <Link href="/news">
                  <Button variant="outline" className="w-full">
                    View Events
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Spread Awareness</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Help us reach more people by sharing our mission on social media and with your network.
                </p>
                <Button variant="outline" className="w-full">
                  Share Our Mission
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Corporate Partnership</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Partner with us as a corporate sponsor to amplify your social impact and support our programs.
                </p>
                <Button variant="outline" className="w-full">
                  Partner With Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Volunteer Application
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Ready to make a difference? Fill out the form below to get started.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6" action="/api/submit-volunteer" method="POST">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input name="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input name="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input type="email" name="email" placeholder="Enter your email address" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input type="tel" name="phone" placeholder="Enter your phone number" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Area of Interest</label>
                    <select className="w-full px-3 py-2 border rounded-md" name="interest">
                      <option value="">Select your area of interest</option>
                      <option value="education">Education</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="environment">Environment</option>
                      <option value="community">Community Development</option>
                      <option value="women">Women Empowerment</option>
                      <option value="emergency">Emergency Relief</option>
                      <option value="fundraising">Fundraising</option>
                      <option value="marketing">Marketing & Communications</option>
                      <option value="admin">Administrative Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Availability</label>
                    <select className="w-full px-3 py-2 border rounded-md" name="availability">
                      <option value="">Select your availability</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="both">Both Weekdays and Weekends</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Skills & Experience</label>
                    <Textarea
                      name="skills"
                      placeholder="Tell us about your relevant skills, experience, and what motivates you to volunteer with us"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    Submit Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Volunteer Impact Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from our volunteers about their experiences and the impact they've made.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Solomon Timothy</h3>
                  <p className="text-sm text-gray-500">Education Volunteer</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                  "Volunteering with Better Dream Foundation has been life-changing. Seeing the joy on children's faces
                  when they learn something new is incredibly rewarding."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Shaibu Hudaida (Princess)</h3>
                  <p className="text-sm text-gray-500">Healthcare Volunteer</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                  "The mobile health clinic program allowed me to use my medical skills to help underserved communities.
                  It's been an honor to serve."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Fusieni Abdul-Sammed</h3>
                  <p className="text-sm text-gray-500">Environmental Volunteer</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                  "Working on the clean water initiative opened my eyes to global water challenges. I'm proud to be part
                  of the solution."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
            Join our community of changemakers and help us create a better world for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Users className="mr-2 h-5 w-5" />
              Join as Volunteer
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Updated Ways Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
              Ways to Make a Difference
            </h2>
            <p className="text-xl mb-12 text-center text-gray-700 dark:text-gray-300">
              Whether you have time, skills, or resources to share, there's a perfect way for you to contribute to our
              mission.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {ways.map((way, index) => (
                <div key={index} className="border rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{way.title}</h2>
                  <p className="text-gray-700 dark:text-gray-300">{way.description}</p>
                </div>
              ))}
            </div>

            <div className="border rounded-lg p-8 bg-gray-50 dark:bg-gray-800">
              <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
                Contact Us to Get Started
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
                Ready to make a difference? Reach out to us to learn more about how you can get involved.
              </p>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
