import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Team - Better Dream Foundation Ghana",
  description:
    "Meet the dedicated team members of Better Dream Foundation Ghana working to empower communities across the country.",
  keywords: "Better Dream Foundation, team, Ghana, leadership, community development, staff",
}

export default function TeamPage() {
  const leadership = [
    {
      name: "Shaibu Mohammed",
      position: "Chief Executive Officer",
      image: "/images/ceo-shaibu-mohammed.jpg",
      bio: "Visionary leader with over 10 years of experience in community development and social impact. Shaibu has led the foundation's growth from a small local initiative to a nationally recognized organization.",
      email: "shaibu@betterdreamfoundation.org",
      phone: "+233 XX XXX XXXX",
      location: "Accra, Ghana",
    },
    {
      name: "Abdul-Wadud Shaibu",
      position: "National Graphic Designer",
      image: "/images/graphic-designer-abdul-karim.jpg",
      bio: "Creative professional responsible for all visual communications and brand identity. Abdul-Wadud ensures our message reaches communities through compelling visual storytelling.",
      email: "abdul@betterdreamfoundation.org",
      phone: "+233 XX XXX XXXX",
      location: "Accra, Ghana",
    },
    {
      name: "Mary Aakyiire",
      position: "National Programs Manager",
      image: "/images/regional-coordinator-esther.jpg",
      bio: "Experienced program manager overseeing all national development initiatives. Mary coordinates our education, healthcare, and community development programs across Ghana.",
      email: "mary@betterdreamfoundation.org",
      phone: "+233 XX XXX XXXX",
      location: "Kumasi, Ghana",
    },
    {
      name: "Getrude Teffey",
      position: "Managing Director",
      image: "/images/regional-coordinator-esther.jpg",
      bio: "Strategic leader managing organizational operations and stakeholder relationships. Getrude ensures efficient operations and maintains partnerships with local and international organizations.",
      email: "getrude@betterdreamfoundation.org",
      phone: "+233 XX XXX XXXX",
      location: "Accra, Ghana",
    },
    {
      name: "Jennifer Anyeyore Azure",
      position: "National Media and Publicity Secretary",
      image: "/images/regional-coordinator-esther.jpg",
      bio: "Communications expert managing media relations and public outreach initiatives. Jennifer amplifies our impact stories and maintains our public presence.",
      email: "jennifer@betterdreamfoundation.org",
      phone: "+233 XX XXX XXXX",
      location: "Tamale, Ghana",
    },
    {
      name: "Toufique Bansi Adam",
      position: "Director of Legal Affairs",
      image: "/images/financial-secretary-ahmed.jpg",
      bio: "Legal expert ensuring compliance and providing legal guidance for all foundation activities. Toufique safeguards our operations and ensures regulatory compliance.",
      email: "toufique@betterdreamfoundation.org",
      phone: "+233 XX XXX XXXX",
      location: "Accra, Ghana",
    },
  ]

  const regionalTeam = [
    {
      name: "Ernest Awudu",
      position: "Regional Coordinator - Northern Region",
      image: "/images/regional-coordinator-ernest.jpg",
      bio: "Coordinates programs and initiatives across the Northern Region of Ghana. Ernest has deep community connections and ensures our programs meet local needs.",
      email: "ernest@betterdreamfoundation.org",
      location: "Tamale, Ghana",
      region: "Northern Region",
    },
    {
      name: "Alhassan Mohammed",
      position: "Project Manager",
      image: "/images/project-manager-alhassan.jpg",
      bio: "Manages implementation of community development projects across multiple regions. Alhassan ensures projects are delivered on time and within budget.",
      email: "alhassan@betterdreamfoundation.org",
      location: "Bolgatanga, Ghana",
      region: "Upper East Region",
    },
    {
      name: "Esther Awudu",
      position: "Regional Coordinator - Upper East",
      image: "/images/regional-coordinator-esther.jpg",
      bio: "Oversees foundation activities and community outreach in the Upper East Region. Esther has been instrumental in expanding our healthcare programs.",
      email: "esther@betterdreamfoundation.org",
      location: "Bolgatanga, Ghana",
      region: "Upper East Region",
    },
    {
      name: "Benjamin Tetteh",
      position: "Regional Coordinator - Volta Region",
      image: "/images/benjamin.jpg",
      bio: "Coordinates foundation activities and community programs in the Volta Region. Benjamin focuses on educational initiatives and youth development.",
      email: "benjamin@betterdreamfoundation.org",
      location: "Ho, Ghana",
      region: "Volta Region",
    },
  ]

  const supportTeam = [
    {
      name: "Munayya Ibrahim",
      position: "Deputy Coordinator",
      image: "/images/deputy-coordinator-munayya.jpg",
      bio: "Supports regional coordination and assists in program implementation across multiple regions.",
      email: "munayya@betterdreamfoundation.org",
    },
    {
      name: "Hamdan Alhassan",
      position: "Publicity Secretary",
      image: "/images/publicity-secretary-hamdan.jpg",
      bio: "Manages public relations and community engagement initiatives at the regional level.",
      email: "hamdan@betterdreamfoundation.org",
    },
    {
      name: "Shamuna Mohammed",
      position: "Financial Secretary",
      image: "/images/financial-secretary-shamuna.jpg",
      bio: "Oversees financial management and ensures transparent use of resources across all programs.",
      email: "shamuna@betterdreamfoundation.org",
    },
    {
      name: "Maxwell Ofori",
      position: "Regional Secretary",
      image: "/images/regional-secretary-maxwell.jpg",
      bio: "Maintains records and coordinates administrative functions at regional level.",
      email: "maxwell@betterdreamfoundation.org",
    },
    {
      name: "Ahmed Ibrahim",
      position: "Financial Secretary - Regional",
      image: "/images/financial-secretary-ahmed.jpg",
      bio: "Manages regional financial operations and budget oversight for community programs.",
      email: "ahmed@betterdreamfoundation.org",
    },
    {
      name: "Ofori Atta",
      position: "Deputy Secretary",
      image: "/images/deputy-secretary-ofori.jpg",
      bio: "Assists in administrative functions and supports organizational operations.",
      email: "ofori@betterdreamfoundation.org",
    },
    {
      name: "David Mensah",
      position: "Project Director",
      image: "/images/project-director-david.jpg",
      bio: "Directs strategic project planning and implementation across all programs.",
      email: "david@betterdreamfoundation.org",
    },
    {
      name: "James Kwaku",
      position: "Graphic Designer",
      image: "/images/graphic-designer-james.jpg",
      bio: "Creates visual content and supports marketing and communication efforts.",
      email: "james@betterdreamfoundation.org",
    },
    {
      name: "Bisilki Mawan Joseph",
      position: "Community Outreach Coordinator",
      image: "/images/bisilki-mawan-joseph.jpg",
      bio: "Facilitates community engagement and ensures effective program delivery.",
      email: "bisilki@betterdreamfoundation.org",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Team</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Meet the dedicated individuals working tirelessly to empower communities across Ghana
            </p>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Executive Leadership
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our executive team provides strategic direction and ensures organizational excellence
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{leader.name}</h3>
                      <Badge className="bg-blue-600 text-white mb-3">{leader.position}</Badge>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{leader.bio}</p>
                    </div>
                    <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        <span>{leader.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>{leader.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{leader.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Team */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Regional Coordinators
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our regional team ensures programs are tailored to local community needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regionalTeam.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                      <Badge variant="outline" className="mb-2 text-xs">
                        {member.position}
                      </Badge>
                      <Badge className="bg-green-600 text-white mb-3 text-xs">{member.region}</Badge>
                      <p className="text-gray-600 dark:text-gray-300 text-xs mb-3">{member.bio}</p>
                    </div>
                    <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Mail className="h-3 w-3 mr-2" />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-2" />
                        <span>{member.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Support Team</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our dedicated support staff ensures smooth operations and effective program delivery
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {supportTeam.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="relative w-20 h-20 mx-auto mb-3">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="text-center mb-3">
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                      <Badge variant="outline" className="mb-2 text-xs">
                        {member.position}
                      </Badge>
                      <p className="text-gray-600 dark:text-gray-300 text-xs mb-2">{member.bio}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                        <Mail className="h-3 w-3 mr-1" />
                        <span className="truncate">{member.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-blue-100 mb-8">
              Are you passionate about community development and making a difference? We're always looking for dedicated
              individuals to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                View Open Positions
              </a>
              <a
                href="/get-involved"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                Volunteer With Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
