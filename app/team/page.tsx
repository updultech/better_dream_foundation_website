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
    },
    {
      name: "Agolmah Atozire Ernest",
      role: "Regional Coordinator NR",
      image: "/images/regional-coordinator-ernest.jpg",
      bio: "Agolmah coordinates our regional initiatives and ensures effective implementation of programs across the Northern Region. He has extensive experience in community development and project management.",
      email: "ernest@betterdreamfoundation.org",
    },
    {
      name: "Awudu Yahaya",
      role: "Regional Coordinator SR",
      image: "/images/regional-coordinator-awudu.jpg",
      bio: "Awudu oversees our regional programs and coordinates community development initiatives across the Savannah Region. He specializes in rural development and community engagement.",
      email: "awudu@betterdreamfoundation.org",
    },
    {
      name: "Hamdan Sibdoo Zakaria Hamid",
      role: "Publicity Secretary",
      image: "/images/publicity-secretary-hamdan.jpg",
      bio: "Hamdan Sibdoo Zakaria Hamid is a passionate Computer Science student at the University for Development Studies with strong leadership experience and a drive for youth empowerment. As an active student leader and tech enthusiast, he is committed to using innovation and education to create lasting opportunities for young people across Ghana.",
      email: "hamdan@betterdreamfoundation.org",
    },
    {
      name: "Alhassan Zakaria",
      role: "Project Manager",
      image: "/images/project-manager-alhassan.jpg",
      bio: "Alhassan Zakaria is the Project Manager at Better Dream Foundation Ghana and aspiring Medical Laboratory Scientist with a passion for improving health outcomes. SDG ambassador at University for Development Studies. Committed to making a positive impact in his community.",
      email: "alhassan@betterdreamfoundation.org",
    },
    {
      name: "Sham-una Zainab",
      role: "Financial Secretary",
      image: "/images/financial-secretary-shamuna.jpg",
      bio: "Sham-una Zainab serves as the Financial Secretary of Better Dream Foundation, where she ensures transparency, accountability, and efficient management of the foundation's finances. Her dedication to financial integrity supports the foundation's mission to drive sustainable change and community development.",
      email: "shamuna@betterdreamfoundation.org",
    },
    {
      name: "Abdul Karim Hakim",
      role: "Graphic Designer",
      image: "/images/graphic-designer-abdul-karim.jpg",
      bio: "Abdul Karim Hakim is the creative force behind the visual identity of Better Dream Foundation. As the foundation's Graphic Designer, he brings stories to life through impactful design, blending purpose with creativity. With a strong passion for social impact and visual storytelling, Abdul ensures that every design reflects the mission of hope, empowerment, and transformation at the heart of the foundation's work.",
      email: "wise03667@gmail.com",
    },
    {
      name: "Esther Lovia Dankyi",
      role: "Regional Coordinator AR",
      image: "/images/regional-coordinator-esther.jpg",
      bio: "As Regional Coordinator, I am passionate about creating real impact at the grassroots level. I believe in leading by example and building strong, collaborative teams that can turn ideas into action. Every project I oversee is a chance to make a difference, and I am committed to ensuring our region thrives through purposeful leadership and unity.",
      email: "esther@betterdreamfoundation.org",
    },
    {
      name: "Maxwell Opoku Darkwah",
      role: "Regional Secretary",
      image: "/placeholder.svg?height=200&width=200",
      bio: "I love bringing order to chaos and making sure communication flows smoothly across our team. As Regional Secretary, I manage all official records and correspondence, ensuring we stay organized and informed. I take pride in being dependable, efficient, and always ready to support the team behind the scenes.",
      email: "maxwell@betterdreamfoundation.org",
    },
    {
      name: "Munayya Seidu Musah",
      role: "Deputy Regional Coordinator AR",
      image: "/images/deputy-coordinator-munayya.jpg",
      bio: "I serve as the Deputy Regional Coordinator with a heart for service and structure. I enjoy being hands-on with planning and problem-solving, and I am always ready to support the team wherever needed. Working closely with the Regional Coordinator, I help keep our projects moving smoothly and our vision alive in every activity we carry out.",
      email: "munayya@betterdreamfoundation.org",
    },
    {
      name: "David Adu Nantwi",
      role: "Project Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "As Project Director, I take pride in turning vision into execution. I am passionate about building meaningful initiatives that are not only effective but also empowering for the people we serve. From planning to implementation, I focus on the little details that make a big impact, and I am always driven by results that uplift communities.",
      email: "david@betterdreamfoundation.org",
    },
    {
      name: "Ahmed Dawud Mohammed",
      role: "Financial Secretary",
      image: "/placeholder.svg?height=200&width=200",
      bio: "I believe financial accountability is at the heart of any strong organization. As Financial Secretary, I make it my duty to handle all funds with integrity, accuracy, and transparency. I am detail-oriented and deeply committed to ensuring that every cedi we manage contributes to our mission in the most responsible way possible.",
      email: "ahmed@betterdreamfoundation.org",
    },
    {
      name: "Ofori Paul",
      role: "Deputy Regional Secretary",
      image: "/placeholder.svg?height=200&width=200",
      bio: "In my role as Deputy Regional Secretary, I focus on the little things that make a big difference—supporting documentation, managing schedules, and helping keep the team organized. I am passionate about teamwork and always ready to lend a hand to ensure everything runs smoothly.",
      email: "ofori@betterdreamfoundation.org",
    },
    {
      name: "James Anibilla Adongo",
      role: "Graphic Designer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Design is my way of storytelling. As the team's Graphic Designer, I use visuals to reflect who we are and what we stand for. Whether it's a flyer, banner, or social media post, I aim to create work that is not just eye-catching, but deeply connected to our mission. I believe good design should inspire action—and that's what I strive for every time.",
      email: "james@betterdreamfoundation.org",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link href="/about">
              <Button
                variant="outline"
                className="mr-4 border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
              >
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
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>

                  {/* Contact Information */}
                  <div className="flex justify-center space-x-3 mt-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label={`Twitter profile of ${member.name}`}
                    >
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
            We are always looking for passionate individuals to join our mission of creating positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">View Open Positions</Button>
            </Link>
            <Link href="/get-involved">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 bg-transparent"
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
