import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Globe, Target, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Better Dream Foundation Ghana",
  description:
    "Learn about Better Dream Foundation Ghana's mission to empower communities through education, healthcare, and sustainable development programs.",
  keywords: "Better Dream Foundation, Ghana, non-profit, community development, education, healthcare, mission, vision",
}

export default function AboutPage() {
  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We approach every community with empathy and understanding, recognizing the unique challenges they face.",
    },
    {
      icon: Users,
      title: "Community-Centered",
      description: "Our programs are designed with and for the communities we serve, ensuring sustainable impact.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We bring international best practices while respecting local cultures and traditions.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure our success by the tangible improvements in the lives of those we serve.",
    },
  ]

  const impactAreas = [
    {
      title: "Education & Learning",
      description:
        "Establishing digital learning centers and providing educational resources to underserved communities.",
      image: "/images/digital-learning-center.jpg",
      stats: "15+ Learning Centers",
    },
    {
      title: "Healthcare Access",
      description: "Mobile health clinics and community health programs bringing medical care to remote areas.",
      image: "/images/mobile-health-clinic.jpg",
      stats: "5,000+ Patients Served",
    },
    {
      title: "Women's Empowerment",
      description: "Supporting women through skills training, microfinance, and leadership development programs.",
      image: "/images/womens-empowerment-program.jpg",
      stats: "200+ Women Empowered",
    },
    {
      title: "Youth Development",
      description: "Career guidance, mentorship, and leadership training for young people across Ghana.",
      image: "/images/career-guidance-mentorship.jpg",
      stats: "500+ Youth Mentored",
    },
  ]

  const leadership = [
    {
      name: "Shaibu Mohammed",
      position: "Chief Executive Officer",
      image: "/images/ceo-shaibu-mohammed.jpg",
      bio: "Visionary leader with over 10 years of experience in community development and social impact.",
    },
    {
      name: "Abdul-Wadud Shaibu",
      position: "National Graphic Designer",
      image: "/images/graphic-designer-abdul-karim.jpg",
      bio: "Creative professional responsible for all visual communications and brand identity.",
    },
    {
      name: "Mary Aakyiire",
      position: "National Programs Manager",
      image: "/images/regional-coordinator-esther.jpg",
      bio: "Experienced program manager overseeing all national development initiatives.",
    },
    {
      name: "Getrude Teffey",
      position: "Managing Director",
      image: "/images/regional-coordinator-esther.jpg",
      bio: "Strategic leader managing organizational operations and stakeholder relationships.",
    },
    {
      name: "Jennifer Anyeyore Azure",
      position: "National Media and Publicity Secretary",
      image: "/images/regional-coordinator-esther.jpg",
      bio: "Communications expert managing media relations and public outreach initiatives.",
    },
    {
      name: "Toufique Bansi Adam",
      position: "Director of Legal Affairs",
      image: "/images/financial-secretary-ahmed.jpg",
      bio: "Legal expert ensuring compliance and providing legal guidance for all foundation activities.",
    },
  ]

  const otherExecutives = [
    {
      name: "Ernest Awudu",
      position: "Regional Coordinator - Northern Region",
      image: "/images/regional-coordinator-ernest.jpg",
      bio: "Coordinates programs and initiatives across the Northern Region of Ghana.",
    },
    {
      name: "Alhassan Mohammed",
      position: "Project Manager",
      image: "/images/project-manager-alhassan.jpg",
      bio: "Manages implementation of community development projects across multiple regions.",
    },
    {
      name: "Esther Awudu",
      position: "Regional Coordinator - Upper East",
      image: "/images/regional-coordinator-esther.jpg",
      bio: "Oversees foundation activities and community outreach in the Upper East Region.",
    },
    {
      name: "Munayya Ibrahim",
      position: "Deputy Coordinator",
      image: "/images/deputy-coordinator-munayya.jpg",
      bio: "Supports regional coordination and assists in program implementation.",
    },
    {
      name: "Hamdan Alhassan",
      position: "Publicity Secretary",
      image: "/images/publicity-secretary-hamdan.jpg",
      bio: "Manages public relations and community engagement initiatives.",
    },
    {
      name: "Shamuna Mohammed",
      position: "Financial Secretary",
      image: "/images/financial-secretary-shamuna.jpg",
      bio: "Oversees financial management and ensures transparent use of resources.",
    },
    {
      name: "Maxwell Ofori",
      position: "Regional Secretary",
      image: "/images/regional-secretary-maxwell.jpg",
      bio: "Maintains records and coordinates administrative functions at regional level.",
    },
    {
      name: "Ahmed Ibrahim",
      position: "Financial Secretary - Regional",
      image: "/images/financial-secretary-ahmed.jpg",
      bio: "Manages regional financial operations and budget oversight.",
    },
    {
      name: "Ofori Atta",
      position: "Deputy Secretary",
      image: "/images/deputy-secretary-ofori.jpg",
      bio: "Assists in administrative functions and supports organizational operations.",
    },
    {
      name: "David Mensah",
      position: "Project Director",
      image: "/images/project-director-david.jpg",
      bio: "Directs strategic project planning and implementation across all programs.",
    },
    {
      name: "James Kwaku",
      position: "Graphic Designer",
      image: "/images/graphic-designer-james.jpg",
      bio: "Creates visual content and supports marketing and communication efforts.",
    },
    {
      name: "Benjamin Tetteh",
      position: "Regional Coordinator - Volta Region",
      image: "/images/benjamin.jpg",
      bio: "Coordinates foundation activities and community programs in the Volta Region.",
    },
    {
      name: "Bisilki Mawan Joseph",
      position: "Community Outreach Coordinator",
      image: "/images/bisilki-mawan-joseph.jpg",
      bio: "Facilitates community engagement and ensures effective program delivery.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Our Foundation</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Empowering communities across Ghana through sustainable development, education, and healthcare initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  To empower underserved communities in Ghana through comprehensive programs in education, healthcare,
                  and sustainable development, creating lasting positive change and opportunities for growth.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">Community-driven development programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">Sustainable and measurable impact</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Collaborative partnerships with local communities
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/mission-vision-community.jpg"
                  alt="Community Development"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  A Ghana where every community has access to quality education, healthcare, and economic opportunities,
                  enabling individuals to reach their full potential and contribute to national development.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Commitment</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We are committed to transparency, accountability, and measurable impact in all our programs,
                    ensuring that every donation and effort creates meaningful change in the lives of those we serve.
                  </p>
                </div>
              </div>
              <div className="md:order-1 relative">
                <Image
                  src="/images/community-program.jpg"
                  alt="Vision for Ghana"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                These values guide every decision we make and every program we implement
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Impact Areas</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Comprehensive programs addressing the most critical needs in Ghanaian communities
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {impactAreas.map((area, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={area.image || "/placeholder.svg"} alt={area.title} fill className="object-cover" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white">{area.stats}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Leadership Team</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Meet the dedicated leaders driving our mission forward
              </p>
            </div>

            {/* Top Leadership */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Executive Leadership
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leadership.map((leader, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        <Image
                          src={leader.image || "/placeholder.svg"}
                          alt={leader.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{leader.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{leader.position}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{leader.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Other Executives */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Regional & Program Leaders
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {otherExecutives.map((executive, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <Image
                          src={executive.image || "/placeholder.svg"}
                          alt={executive.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{executive.name}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 text-sm">{executive.position}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">{executive.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-blue-100 mb-8">
              Together, we can create lasting change in communities across Ghana. Your support helps us expand our reach
              and deepen our impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                <Heart className="mr-2 h-5 w-5" />
                Support Our Work
              </a>
              <a
                href="/get-involved"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                <Users className="mr-2 h-5 w-5" />
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
