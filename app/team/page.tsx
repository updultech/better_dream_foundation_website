import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Mail, Linkedin, Twitter } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team - Leadership and Staff",
  description: "Meet the dedicated team behind Better Dream Foundation working to create positive change worldwide.",
}

export default function TeamPage() {
  const leadershipTeam = [
    {
      name: "Shaibu Mohammed",
      role: "Chief Executive Officer",
      image: "/images/ceo-shaibu-mohammed.jpg",
      bio: "With over 15 years of experience in international development, Shaibu leads our strategic vision and global operations. He holds a Master's degree in Development Studies and has worked with various international NGOs across Africa.",
      email: "shaibu@betterdreamfoundation.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Agolmah Atozire Ernest",
      role: "Regional Coordinator NR",
      image: "/images/regional-coordinator-ernest.jpg",
      bio: "Agolmah coordinates our regional initiatives and ensures effective implementation of programs across the Northern Region. He has extensive experience in community development and project management.",
      email: "ernest@betterdreamfoundation.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Awudu Yahaya",
      role: "Regional Coordinator SR",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Awudu oversees our regional programs and coordinates community development initiatives across the Savannah Region. He specializes in rural development and community engagement.",
      email: "awudu@betterdreamfoundation.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Hamdan Sibdoo Zakaria Hamid",
      role: "Publicity Secretary",
      image: "hamdan.png?height=200&width=200",
      bio: "Hamdan Sibdoo Zakaria Hamid is a passionate Computer Science student at the University for Development Studies with strong leadership experience and a drive for youth empowerment. As an active student leader and tech enthusiast, he is committed to using innovation and education to create lasting opportunities for young people across Ghana.",
      email: "hamdan@betterdreamfoundation.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Alhassan Zakaria",
      role: "Project Manager",
      image: "/images/project-manager-alhassan.jpg",
      bio: "I'm ALHASSAN ZAKARIA. Project Manager at Better Dream Foundation Ghana (Northern Regional Chapter) and aspiring Medical Laboratory Scientist with a passion for improving health outcomes. SDG ambassador at University for Development Studies. Committed to making a positive impact in my community..",
      email: "amara@betterdreamfoundation.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Maria Rodriguez",
      role: "Operations Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Maria manages day-to-day operations and coordinates between our global offices and field teams. She has extensive experience in international operations and logistics management.",
      email: "maria@betterdreamfoundation.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Dr. James Thompson",
      role: "Education Program Manager",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Dr. Thompson leads our education initiatives and has established over 50 learning centers worldwide. He holds a PhD in Education and has 20 years of experience in educational development.",
      email: "james@betterdreamfoundation.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Healthcare Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Dr. Sharma oversees our mobile health clinics and community health programs across 12 countries. She is a qualified medical doctor with specialization in public health.",
      email: "priya@betterdreamfoundation.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Emily Davis",
      role: "Communications Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Emily manages our global communications strategy and stakeholder engagement initiatives. She has a background in journalism and public relations with 10 years of experience.",
      email: "emily@betterdreamfoundation.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Kim",
      role: "Technology Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "David leads our digital transformation initiatives and manages our technology infrastructure. He has extensive experience in IT management and digital innovation.",
      email: "david@betterdreamfoundation.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Dr. Kwame Asante",
      role: "Regional Director - Africa",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Dr. Asante oversees all programs across Africa and has 20 years of experience in community development. He holds a PhD in Development Studies and speaks five African languages.",
      email: "kwame@betterdreamfoundation.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Dr. Raj Patel",
      role: "Regional Director - Asia",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Dr. Patel manages our Asian operations and specializes in sustainable development and poverty alleviation. He has worked extensively across South and Southeast Asia.",
      email: "raj@betterdreamfoundation.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Lisa Anderson",
      role: "Human Resources Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Lisa manages our global workforce and volunteer programs, ensuring we attract and retain top talent. She has 15 years of experience in HR management and organizational development.",
      email: "lisa@betterdreamfoundation.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Robert Martinez",
      role: "Partnerships Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Robert develops strategic partnerships with governments, corporations, and other NGOs to amplify our impact. He has extensive experience in partnership development and stakeholder management.",
      email: "robert@betterdreamfoundation.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Dr. Sophie Laurent",
      role: "Research & Impact Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Dr. Laurent leads our research initiatives and impact measurement, ensuring evidence-based program design. She holds a PhD in Social Research and has published extensively on development impact.",
      email: "sophie@betterdreamfoundation.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Ahmed Hassan",
      role: "Field Operations Manager",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Ahmed coordinates field operations across multiple countries and ensures program quality and safety. He has 12 years of experience in field management and emergency response.",
      email: "ahmed@betterdreamfoundation.org",
      linkedin: "#",
      twitter: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link href="/about">
              <Button variant="outline" className="mr-4 border-white text-white hover:bg-white hover:text-blue-800">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to About Us
              </Button>
            </Link>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Complete Team</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Meet all the dedicated professionals working to create positive change worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our comprehensive team of leaders, coordinators, and specialists working across all our programs and
              regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 128px"
                      className="rounded-full object-cover"
                      style={
                        member.image.includes("ceo-shaibu-mohammed")
                          ? { objectPosition: "center 15%" } // Adjusted from 30% to 15% to show more of the head
                          : member.image.includes("regional-coordinator-ernest")
                            ? { objectPosition: "center top" }
                            : member.image.includes("project-manager-alhassan")
                              ? { objectPosition: "center 20%" } // Added specific positioning for Alhassan
                              : {}
                      }
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>

                  {/* Contact Information */}
                  <div className="flex justify-center space-x-3 mt-4">
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Mail className="h-4 w-4" />
                    </a>
                    <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href={member.twitter} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our mission of creating positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">View Open Positions</Button>
            </Link>
            <Link href="/get-involved">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
              >
                Volunteer Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
