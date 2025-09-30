import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, MapPin, ArrowRight, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Events - Better Dream Foundation Ghana",
  description:
    "Stay updated with the latest news, events, and stories from Better Dream Foundation Ghana. Learn about our impact and upcoming initiatives.",
}

const newsArticles = [
  {
    id: 1,
    title: "Better Dream Foundation Ghana boosts health care in Pusiga with generous donations",
    excerpt:
      "The foundation has made significant contributions to improve healthcare infrastructure and services in Pusiga, providing essential medical supplies and equipment to local health facilities.",
    category: "Health",
    date: "January 15, 2025",
    readTime: "6 min read",
    image: "/images/pusiga-healthcare-donation.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Better Dream Foundation Ghana calls for investigation into Kantamato fire outbreak",
    excerpt:
      "Following the devastating fire at Kantamato market, the foundation has called for a thorough investigation while mobilizing support for affected traders and their families.",
    category: "Community",
    date: "January 5, 2025",
    readTime: "5 min read",
    image: "/images/kantamato-market-fire.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "New Digital Learning Centers Empower Rural Students",
    excerpt:
      "BDF Ghana launches three new digital learning centers in rural communities, providing access to modern technology and online educational resources.",
    category: "Education",
    date: "December 20, 2024",
    readTime: "4 min read",
    image: "/images/digital-learning-center.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Annual Youth Leadership Conference 2024 Success",
    excerpt:
      "Over 200 young leaders from across Ghana gathered for our annual conference, focusing on sustainable development and community engagement.",
    category: "Education",
    date: "December 15, 2024",
    readTime: "5 min read",
    image: "/images/youth-leadership-conference.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Women's Empowerment Program Graduates 50 Entrepreneurs",
    excerpt:
      "Celebrating the success of 50 women who completed our entrepreneurship training program and launched their own businesses.",
    category: "Community",
    date: "December 10, 2024",
    readTime: "4 min read",
    image: "/images/womens-empowerment-program.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Mobile Health Clinics Reach Remote Communities",
    excerpt:
      "Our mobile health initiative has successfully provided healthcare services to over 5,000 people in remote areas during the past quarter.",
    category: "Health",
    date: "December 5, 2024",
    readTime: "5 min read",
    image: "/images/mobile-health-clinic.jpg",
    featured: false,
  },
  {
    id: 7,
    title: "Capacity Building Workshop for Local Partners",
    excerpt:
      "BDF Ghana organized a comprehensive capacity building workshop for local partner organizations to strengthen collaboration and impact.",
    category: "Community",
    date: "November 28, 2024",
    readTime: "4 min read",
    image: "/images/capacity-building-workshop.jpg",
    featured: false,
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Community Health Fair",
    date: "February 15, 2025",
    location: "Tamale Central",
    type: "Health",
  },
  {
    id: 2,
    title: "Skills Training Workshop",
    date: "February 28, 2025",
    location: "Kumasi Training Center",
    type: "Education",
  },
  {
    id: 3,
    title: "Annual Fundraising Gala",
    date: "March 10, 2025",
    location: "Accra Convention Centre",
    type: "Fundraising",
  },
]

const quickUpdates = [
  {
    id: 1,
    title: "New Healthcare Initiative in Pusiga",
    date: "January 15, 2025",
  },
  {
    id: 2,
    title: "Kantamato Fire Investigation Update",
    date: "January 5, 2025",
  },
  {
    id: 3,
    title: "Partnership with Local NGOs",
    date: "December 22, 2024",
  },
  {
    id: 4,
    title: "Volunteer Recruitment Drive",
    date: "December 18, 2024",
  },
]

export default function NewsPage() {
  const featuredArticle = newsArticles.find((article) => article.featured)
  const recentArticles = newsArticles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">News & Events</h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Stay informed about our latest initiatives, success stories, and upcoming events making a difference in
              communities across Ghana.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="search"
                placeholder="Search news and events..."
                className="pl-12 py-6 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {featuredArticle && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Featured Story</h2>
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="relative h-96">
                      <Image
                        src={featuredArticle.image || "/placeholder.svg"}
                        alt={featuredArticle.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          variant="secondary"
                          className={`${
                            featuredArticle.category === "Health"
                              ? "bg-green-500 text-white"
                              : featuredArticle.category === "Education"
                                ? "bg-blue-500 text-white"
                                : "bg-purple-500 text-white"
                          }`}
                        >
                          {featuredArticle.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{featuredArticle.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {featuredArticle.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {featuredArticle.readTime}
                        </div>
                      </div>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{featuredArticle.excerpt}</p>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Read Full Story
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}

              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Recent News</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {recentArticles.map((article) => (
                    <Card
                      key={article.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                      <div className="relative h-48">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge
                            variant="secondary"
                            className={`${
                              article.category === "Health"
                                ? "bg-green-500 text-white"
                                : article.category === "Education"
                                  ? "bg-blue-500 text-white"
                                  : "bg-purple-500 text-white"
                            }`}
                          >
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{article.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {article.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{article.excerpt}</p>
                        <Link href="#" className="text-blue-600 hover:underline dark:text-blue-400 text-sm font-medium">
                          Read more →
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div
                          key={event.id}
                          className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0"
                        >
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{event.title}</h4>
                          <div className="space-y-1">
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Calendar className="h-3 w-3 mr-2" />
                              {event.date}
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <MapPin className="h-3 w-3 mr-2" />
                              {event.location}
                            </div>
                          </div>
                          <Badge variant="outline" className="mt-2 dark:border-gray-600 dark:text-gray-300">
                            {event.type}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Quick Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {quickUpdates.map((update) => (
                        <div
                          key={update.id}
                          className="pb-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
                        >
                          <h4 className="font-medium text-sm text-gray-900 dark:text-white mb-1">{update.title}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{update.date}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white border-0">
                  <CardHeader>
                    <CardTitle className="text-white">Subscribe to Our Newsletter</CardTitle>
                    <CardDescription className="text-blue-100">
                      Get the latest updates delivered to your inbox
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Input type="email" placeholder="Your email address" className="bg-white text-gray-900" />
                      <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Subscribe</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
