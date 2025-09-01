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
      role: "Northern Regional Coordinator",
      image: "/images/regional-coordinator-ernest.jpg",
      bio: "Agolmah coordinates our regional initiatives and ensures effective implementation of programs across the Northern Region. He has extensive experience in community development and project management.",
      email: "ernest@betterdreamfoundation.org",
    },
    {
      name: "Awudu Yahaya",
      role: "Regional Coordinator SR",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/savannah%20coordii.jpg-CNLf626WEJKjmCwG0DMWBJWb1bisI1.jpeg",
      bio: "Awudu oversees our regional programs and coordinates community development initiatives across the Savannah Region. He specializes in rural development and community engagement.",
      email: "awudu@betterdreamfoundationghana2gmail.com",
    },

    {
      name: "Abdul-Wadud Shaibu",
      role: "National Graphic desogner",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wadud.jpg-NnkLXIFZbiDb7SpO8dwt9iAJcWI3zN.jpeg",
      bio: "Abdulwadud Shaibu is a Ghanaian creative and community leader passionate about design, leadership, and impact. With a strong background in accounting, computing, graphic design and project management.  A fresh graduate and he blends creativity and structure to solve real-world problems.He currently serves as National Graphic Designer and Acting Greater Accra Regional Coordinator at Better Dream Foundation, supporting youth through education, technology, and entrepreneurship. He inspired in building initiatives that empower others.A lifelong learner with a Google certification in Project Management and a National Service Personnel at WAEC, Abdulwadud is known for turning ideas into visual stories and service into lasting change.",
      email: "wadud@betterdreamfoundation.org",
    },
    {
      name: "Amevor Edem John",
      role: "Oti Regional Coordinator",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oti%20coordii.jpg-PT8PL1Tlz5Sgl59M5r46sB5xLts6rr.jpeg",
      bio: "Amevor Edem John, Oti Regional Coordinator of Better Dream Foundation, is an educator at Lolobi Ashiambi R.C. Basic School with a degree in Primary Education from Peki College of Education. Passionate about youth empowerment and community development, he leads sensitization projects, mobilizes communities, and inspires active citizenship. His strong communication, problem-solving, and leadership skills make him a valuable asset .",
      email: "alhassan@betterdreamfoundation.org",
    },
    {
      name: "Doris Amoako",
      role: "Western Regional Coordinator",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/western%20coordii.jpg-WjGRpXIV5Yzk9bllb3ED1s8u8PgXvt.jpeg",
      bio: "Doris Amoako serves as the Western Regional Coordinator for Better Dream Foundation, where she champions youth empowerment, active citizenship, and community development. With a background in education and grassroots mobilization, Doris has successfully led initiatives that inspire positive change, enhance community participation, and drive the foundation’s mission of building stronger, more inclusive communities",
      email: "Doris@betterdreamfoundationghana@gmail.com",
    },
    {
      name: "Mary Aakyiire",
      role: "Natiional Programs Manager",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/national%20project%20manager.jpg-VJ9Yz5PKjXGS4rbOhzw5034eGmkLrn.jpeg",
      bio: "Mary Aakyiire is the National Programs Manager at Better Dream Foundation, where she oversees the planning, implementation, and evaluation of community development projects. With a background in social work and project management, Mary is dedicated to creating impactful programs that empower communities and foster sustainable development.",
      email: "Mary@betterdreamfoundationghana@gmail.com",
    },
    {
      name: "Esther Lovia Dankyi",
      role: "Ashanti Regional Coordinator",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Esther.jpg-yJUdNQMIPA6UzYFCuSyTqag8LzzCSC.jpeg",
      bio: "As Regional Coordinator, I am passionate about creating real impact at the grassroots level. I believe in leading by example and building strong, collaborative teams that can turn ideas into action. Every project I oversee is a chance to make a difference, and I am committed to ensuring our region thrives through purposeful leadership and unity.",
      email: "esther@betterdreamfoundation.org",
    },
    {
      name: "Getrude Teffey",
      role: "Managing Director",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/managing%20director.jpg-aid5mWC7oqfq6JX4VL7xvuvwYHBBoB.jpeg",
      bio: "As Managing Director, I bring a strategic vision and operational expertise to drive our mission forward. I am dedicated to fostering innovation, efficiency, and collaboration across all levels of the organization. My focus is on creating sustainable growth and ensuring that our programs deliver maximum impact for the communities we serve.",
      email: "Teffey@betterdreamfoundation.org",
    },
    {
      name: "Jennifer Anyeyore Azure",
      role: "National Media and Publicity Secretary",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jennifer.jpg-JD0cuO3awCevarRcossg7Oxzu0PEqh.jpeg",
      bio: "I serve as the Deputy Regional Coordinator with a heart for service and structure. I enjoy being hands-on with planning and problem-solving, and I am always ready to support the team wherever needed. Working closely with the Regional Coordinator, I help keep our projects moving smoothly and our vision alive in every activity we carry out.",
      email: "munayya@betterdreamfoundation.org",
    },
    {
      name: "Toufique Bansi Adam",
      role: "Director of Legal Affairs",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bansi.jpg-UgWnpGvM02L8f9LXGjqV4NNmedRllH.jpeg",
      bio: "My name is Toufique Adam, and I am a driven and passionate individual committed to advancing human rights, social justice, and sustainable peace. As a holder of a Bachelor of Arts degree in Political Science, and currently pursuing a Master Of Philosophy (Mphil) in Human Rights, Conflict and Peace Studies. By that, I developed a solid foundation in understanding the complexities of governance, policy-making, and international relations",
      email: "bansi@betterdreamfoundation.org",
    },
    {
      name: "Larbi Mary Gyamfua ",
      role: "Eastern Regional Coordinator",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lardi%20Marry.jpg-lCHwszeCSXpo72rh6JiN31p8xtQSMS.jpeg",
      bio: "Larbi Mary Gyamfua is a dynamic professional and Business Administration Officer at DotOne Consult, where she drives efficiency and growth. A passionate motivational writer and speaker, she inspires transformation and purpose. As Eastern Regional Coordinator of Better Dream Foundation Ghana, she empowers communities through education and youth engagement, championing change and meaningful impact at the grassroots level.",
      email: "Larbimary@betterdreamfoundation.org",
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
      name: "Benjamin Agyakwa",
      role: "Sponsorship and Partnership Coordination N/R",
      image: "/images/financial-secretary-shamuna.jpg",
      bio: " I'm Benjamin Agyakwa, a dedicated student and passionate advocate for human rights and social justice. As a Partnership and Sponsorship Coordinator for Better Dream Foundation and Local Officer for Human Rights and Peace at UDSMSA, I strive to empower individuals and communities. With a problem-solving attitude and a commitment to personal liberty, my mission is to be a catalyst for liberation and positive change in all aspects of life..",
      email: "Benjamin@betterdreamfoundation.org",
    },
    {
      name: "Abdul Karim Hakim",
      role: "Graphic Designer",
      image: "/images/graphic-designer-abdul-karim.jpg",
      bio: "Abdul Karim Hakim is the creative force behind the visual identity of Better Dream Foundation. As the foundation's Graphic Designer, he brings stories to life through impactful design, blending purpose with creativity. With a strong passion for social impact and visual storytelling, Abdul ensures that every design reflects the mission of hope, empowerment, and transformation at the heart of the foundation's work.",
      email: "wise03667@gmail.com",
    },
    
    {
      name: "Maxwell Opoku Darkwah",
      role: "Regional Secretary",
      image: "/images/regional-secretary-maxwell.jpg",
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
      image: "/images/project-director-david.jpg",
      bio: "As Project Director, I take pride in turning vision into execution. I am passionate about building meaningful initiatives that are not only effective but also empowering for the people we serve. From planning to implementation, I focus on the little details that make a big impact, and I am always driven by results that uplift communities.",
      email: "david@betterdreamfoundation.org",
    },
    {
      name: "Ahmed Dawud Mohammed",
      role: "Financial Secretary",
      image: "/images/financial-secretary-ahmed.jpg",
      bio: "I believe financial accountability is at the heart of any strong organization. As Financial Secretary, I make it my duty to handle all funds with integrity, accuracy, and transparency. I am detail-oriented and deeply committed to ensuring that every cedi we manage contributes to our mission in the most responsible way possible.",
      email: "ahmed@betterdreamfoundation.org",
    },
    {
      name: "Ofori Paul",
      role: "Deputy Regional Secretary",
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
                  <div className="w-32 h-32 mx-auto mb-6 relative bg-gray-100 dark:bg-gray-800">
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
