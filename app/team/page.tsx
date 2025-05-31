import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team - Leadership and Staff",
  description: "Meet the dedicated team behind Better Dream Foundation working to create positive change worldwide.",
}

export default function TeamPage() {
  const leadershipTeam = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "With over 15 years of experience in international development, Sarah leads our strategic vision and global operations.",
    },
    {
      name: "Michael Chen",
      role: "Program Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Michael oversees all our field programs and ensures quality implementation across all our initiatives.",
    },
    {
      name: "Dr. Amara Okafor",
      role: "Finance Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Dr. Okafor ensures financial transparency and accountability while maximizing the impact of every dollar donated.",
    },
    {
      name: "Maria Rodriguez",
      role: "Operations Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Maria manages day-to-day operations and coordinates between our global offices and field teams.",
    },
    {
      name: "Dr. James Thompson",
      role: "Education Program Manager",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Dr. Thompson leads our education initiatives and has established over 50 learning centers worldwide.",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Healthcare Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Dr. Sharma oversees our mobile health clinics and community health programs across 12 countries.",
    },
    {
      name: "Emily Davis",
      role: "Communications Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Emily manages our global communications strategy and stakeholder engagement initiatives.",
    },
    {
      name: "David Kim",
      role: "Technology Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "David leads our digital transformation initiatives and manages our technology infrastructure.",
    },
    {
      name: "Dr. Kwame Asante",
      role: "Regional Director - Africa",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Dr. Asante oversees all programs across Africa and has 20 years of experience in community development.",
    },
    {
      name: "Dr. Raj Patel",
      role: "Regional Director - Asia",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Dr. Patel manages our Asian operations and specializes in sustainable development and poverty alleviation.",
    },
    {
      name: "Lisa Anderson",
      role: "Human Resources Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Lisa manages our global workforce and volunteer programs, ensuring we attract and retain top talent.",
    },
    {
      name: "Robert Martinez",
      role: "Partnerships Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Robert develops strategic partnerships with governments, corporations, and other NGOs to amplify our impact.",
    },
    {
      name: "Dr. Sophie Laurent",
      role: "Research & Impact Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Dr. Laurent leads our research initiatives and impact measurement, ensuring evidence-based program design.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Meet the dedicated professionals working to create positive change in communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our leadership team brings diverse expertise and a shared commitment to our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Board of Directors</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our board provides strategic guidance and oversight to ensure we fulfill our mission effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={`Board Member ${index}`}
                    width={200}
                    height={200}
                    className="w-28 h-28 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">Board Member {index}</h3>
                  <p className="text-blue-600 font-medium mb-4">Board Position</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Brief bio about the board member's background and expertise.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We're always looking for passionate individuals to join our mission. Check out our current openings or
            volunteer opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View Open Positions
            </a>
            <a
              href="/get-involved"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >
              Volunteer Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
