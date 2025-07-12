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
      name: "Getrude Teffey ",
      role: "Management Director of Better Dream Foundation",
      image: "/images/publicity-secretary-hamdan.jpg",
      bio: "Hamdan Sibdoo Zakaria Hamid is a passionate Computer Science student at the University for Development Studies with strong leadership experience and a drive for youth empowerment. As an active student leader and tech enthusiast, he is committed to using innovation and education to create lasting opportunities for young people across Ghana.",
      email: "hamdan@betterdreamfoundation.org",
    },
    {
      name: "Mary Aakyiire is my name",
      role: "National project manager of BDF Ghana",
      image: "/images/project-manager-alhassan.jpg",
      bio: " Mary Aakyiire is my name National project manager of BDF Ghana.I am a sales executive officer / showroom assistant at Anointed Electrical Engineering WA  branch and an entrepreneur. I come from  Upper west Region, Ghana.",
      email: "alhassan@betterdreamfoundation.org",
    },
    {
      name: " Doris Amoako",
      role: " Western Region Coordinator",
      image: "/images/financial-secretary-shamuna.jpg",
      bio: "Sham-una Zainab serves as the Financial Secretary of Better Dream Foundation, where she ensures transparency, accountability, and efficient management of the foundation's finances. Her dedication to financial integrity supports the foundation's mission to drive sustainable change and community development.",
      email: "shamuna@betterdreamfoundation.org",
    },
    {
      name: "Amevor Edem John",
      role: "Oti Regionnal Coordinator",
      image: "/images/graphic-designer-abdul-karim.jpg",
      bio: "Amevor Edem John serves as the Oti Regional Coordinator for Better Dream Foundation, where he supports and motivates young people to become active citizens and change-makers in their communities.As a dedicated educator, Edem holds a degree in Primary Education from Peki College of Education. He currently teaches at Lolobi Ashiambi R.C. Basic School in the Oti Region, inspiring and empowering young minds.Edem has been instrumental in supporting the mission of Better Dream Foundation, leveraging his exceptional organizing skills to drive impact. He has led community sensitization projects, increasing community engagement and participation.With expertise in grassroots community mobilization, Edem has a proven track record of bringing people together to address complex challenges. As a skilled communicator and creative problem-solver, he is driven to find innovative solutions to the most pressing issues in his community. His passion for community development and education makes him a valuable asset to Better Dream Foundation..",
      email: "wise03667@gmail.com",
    },
    {
      name: "Esther Lovia Dankyi",
      role: "Ashanti Regional Coordinator",
      image: "/images/regional-coordinator-esther.jpg",
      bio: "As Regional Coordinator, I am passionate about creating real impact at the grassroots level. I believe in leading by example and building strong, collaborative teams that can turn ideas into action. Every project I oversee is a chance to make a difference, and I am committed to ensuring our region thrives through purposeful leadership and unity.",
      email: "esther@betterdreamfoundation.org",
    },
    {
      name: "Toufique Bansi Adam",
      role: "Director of Legal Affairs",
      image: "/images/regional-secretary-maxwell.jpg",
      bio: "My name is Toufique Adam, and I am a driven and passionate individual committed to advancing human rights, social justice, and sustainable peace. As a holder of a Bachelor of Arts degree in Political Science, and currently pursuing a Master Of Philosophy (Mphil) in Human Rights, Conflict and Peace Studies. By that, I developed a solid foundation in understanding the complexities of governance, policy-making, and international relations",
      email: "Taufiq@betterdreamfoundation.org",
    },
    {
      name: "Abdul Wadud Shaibu",
      role: "National Graphics Designer",
      image: "/images/deputy-coordinator-munayya.jpg",
      bio: "Abdulwadud Shaibu is a Ghanaian creative and community leader passionate about design, leadership, and impact. With a strong background in accounting, computing, graphic design and project management.  A fresh graduate and he blends creativity and structure to solve real-world problems.He currently serves as National Graphic Designer and Acting Greater Accra Regional Coordinator at Better Dream Foundation, supporting youth through education, technology, and entrepreneurship. He inspired in building initiatives that empower others.A lifelong learner with a Google certification in Project Management and a National Service Personnel at WAEC, Abdulwadud is known for turning ideas into visual stories and service into lasting change..",
      email: "munayya@betterdreamfoundation.org",
    },
    {
      name: "Iddrisu Abdulai Asaana",
      role: " National Executive Secretary",
      image: "/images/project-director-david.jpg",
      bio: "As Project Director, I take pride in turning vision into execution. I am passionate about building meaningful initiatives that are not only effective but also empowering for the people we serve. From planning to implementation, I focus on the little details that make a big impact, and I am always driven by results that uplift communities.",
      email: "david@betterdreamfoundation.org",
    },
    {
      name: "Larbi Mary Gyamfua",
      role: "Eastern Regional Coordinator",
      image: "/images/financial-secretary-ahmed.jpg",
      bio: "Larbi Mary Gyamfua is a dynamic and purpose-driven professional who brings clarity, structure, and vision to every space she enters. She currently serves as the Business Administration Officer at DotOne Consult, where she plays a vital role in streamlining operations, enhancing organizational efficiency, and contributing to strategic business growth.Beyond her corporate expertise, Mary is a passionate personal growth and motivational writer and speaker, known for her inspiring words that encourage individuals to rediscover themselves, embrace healing, and walk boldly in alignment with purpose. Her voice speaks to the heart of transformation, helping others rise beyond limitations and step into their full potential.She also serves as the Eastern Regional Coordinator for Better Dream Foundation Ghana, a nonprofit organization dedicated to empowering communities through education, development programs, and youth engagement. Through her leadership, she champions change, uplifts the underprivileged, and drives meaningful impact at the grassroots level.With a heart for growth, a voice of purpose, and a deep commitment to service, Larbi Mary Gyamfua continues to inspire lives and build dreams ,  one word, one person, and one community at a time.",
      email: "ahmed@betterdreamfoundation.org",
    },
    {
      name: "Jennifer Anyeyore Azure",
      role: "National Media and Publicity Secretary",
      image: "/images/deputy-secretary-ofori.jpg",
      bio: "In my role as Deputy Regional Secretary, I focus on the little things that make a big difference—supporting documentation, managing schedules, and helping keep the team organized. I am passionate about teamwork and always ready to lend a hand to ensure everything runs smoothly.",
      email: "ofori@betterdreamfoundation.org",
    },
    {
      name: "James Anibilla Adongo",
      role: "Graphic Designer",
      image: "/images/graphic-designer-james.jpg",
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
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w3xl mx-auto">
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
