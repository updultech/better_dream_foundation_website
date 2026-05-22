import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Contact Better Dream Foundation for inquiries about our programs, volunteer opportunities, partnerships, or general information.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-blue-100">
              Have questions or want to collaborate? We&apos;d love to hear from you. Reach out to us today!
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">East Legon, Accra</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Ghana</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-4">Open Monday - Friday, 9am - 5pm</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 font-semibold mb-2">+233 597 399 216</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Main Office</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-4">Response time: Within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 dark:bg-red-900 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 font-semibold mb-2 break-all text-sm">
                  betterdreamfoundationghana@gmail.com
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-4">We read every message</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Info */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white"
                        placeholder="Tell us more about your inquiry..."
                      ></textarea>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Physical Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Better Dream Foundation Ghana
                      <br />
                      East Legon
                      <br />
                      Accra, Ghana
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone Numbers</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Main Office: +233 597 399 216
                      <br />
                      General Inquiries: +233 597 399 216
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Addresses</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm break-all">
                      General: betterdreamfoundationghana@gmail.com
                      <br />
                      Donations: betterdreamfoundationghana@gmail.com
                      <br />
                      Volunteers: betterdreamfoundationghana@gmail.com
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Office Hours
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle>What to Include in Your Message</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Your full name and contact information</li>
                    <li>Clear subject line or purpose of inquiry</li>
                    <li>Detailed description of your request</li>
                    <li>Preferred method and time for contact</li>
                    <li>Any relevant documents or references</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How can I donate?</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  You can donate through our website using various payment methods including mobile money, bank transfers,
                  and online payment options.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How do I volunteer?</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Visit our &quot;Get Involved&quot; page to learn about volunteer opportunities, fill out an application,
                  and join our community of change-makers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  What is your tax exemption status?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Better Dream Foundation is a registered NGO in Ghana. Contact us for detailed information about tax
                  benefits in your country.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Do you accept corporate partnerships?</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Yes! We welcome partnerships with organizations aligned with our mission. Reach out to discuss
                  collaboration opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea className="w-full px-4 py-2 border rounded-md" rows={4}></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="border rounded-lg p-8 bg-gray-50">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Office Hours</h2>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <h3 className="font-semibold mb-2 text-gray-800">Weekdays</h3>
                <p className="text-gray-700">
                  Monday - Friday
                  <br />
                  9:00 AM - 6:00 PM EST
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-800">Weekends</h3>
                <p className="text-gray-700">
                  Saturday: 10:00 AM - 2:00 PM EST
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
