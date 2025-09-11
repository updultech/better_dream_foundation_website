import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Users, Heart, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Events - Better Dream Foundation",
  description: "Stay updated with the latest news, events, and impact stories from Better Dream Foundation Ghana.",
  keywords: "Better Dream Foundation news, events, Ghana NGO updates, community impact stories",
}

const newsArticles = [
  {
    id: 1,
    title: "Annual Community Health Fair Reaches 2,000 Beneficiaries",
    excerpt:
      "Our largest health fair to date provided free medical screenings, vaccinations, and health education to communities across three regions.",
    category: "Health",
    date: "2024-12-15",
    readTime: "5 min read",
    image: "/images/mobile-health-clinic.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Better Dream Foundation Ghana calls for investigation into Kantamato fire outbreak",
    excerpt:
      "The foundation demands a thorough investigation into the devastating fire at Kantamato Market and calls for immediate support for affected traders and their families.",
    category: "Advocacy",
    date: "2025-01-05",
    readTime: "4 min read",
    image: "/images/kantamato-market-fire.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Youth Leadership Conference Empowers 500 Young Leaders",
    excerpt:
      "Three-day conference focused on leadership skills, entrepreneurship, and community development, inspiring the next generation of changemakers.",
    category: "Education",
    date: "2024-11-28",
    readTime: "6 min read",
    image: "/images/youth-leadership-conference.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Women's Empowerment Program Graduates 150 Participants",
    excerpt:
      "Successful completion of our six-month skills training program, with 85% of graduates starting their own businesses or finding employment.",
    category: "Empowerment",
    date: "2024-11-10",
    readTime: "4 min read",
    image: "/images/womens-empowerment-program.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Digital Learning Centers Launch in Rural Communities",
    excerpt:
      "New computer labs established in five rural schools, providing technology access and digital literacy training to over 800 students.",
    category: "Education",
    date: "2024-10-22",
    readTime: "3 min read",
    image: "/images/digital-learning-center.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Emergency Relief Efforts Support Flood Victims",
    excerpt:
      "Rapid response team provided emergency supplies, temporary shelter, and medical assistance to 300 families affected by seasonal flooding.",
    category: "Emergency",
    date: "2024-10-05",
    readTime: "5 min read",
    image: "/images/capacity-building-workshop.jpg",
    featured: false,
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Community Clean-Up Drive",
    date: "2025-01-20",
    location: "Accra Metropolitan Area",
    description: "Join us for a city-wide environmental cleanup initiative.",
  },
  {
    id: 2,
    title: "Skills Training Workshop",
    date: "2025-02-03",
    location: "Kumasi Training Center",
    description: "Free vocational training in tailoring and carpentry.",
  },
  {
    id: 3,
    title: "Health Screening Campaign",
    date: "2025-02-15",
    location: "Northern Region",
    description: "Free medical checkups and health education sessions.",
  },
]

const quickNews = [
  {
    title: "Better Dream Foundation Ghana calls for investigation into Kantamato fire outbreak",
    date: "2025-01-05",
    category: "Advocacy",
  },
  {
    title: "New scholarship program announced for underprivileged students",
    date: "2024-12-20",
    category: "Education",
  },
  {
    title: "Mobile health clinic reaches remote villages",
    date: "2024-12-18",
    category: "Health",
  },
  {
    title: "Volunteer appreciation ceremony celebrates community heroes",
    date: "2024-12-12",
    category: "Community",
  },
]

export default function NewsPage() {
  const featuredArticle = newsArticles.find((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">News & Events</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Stay updated with our latest initiatives, impact stories, and upcoming events that are making a difference
              in communities.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Article */}
            {featuredArticle && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Story</h2>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <div className="relative h-64 w-full">
                    <Image
                      src={featuredArticle.image || "/placeholder.svg"}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-blue-600 text-white border-gray-300 dark:border-gray-600"
                      >
                        {featuredArticle.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredArticle.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredArticle.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{featuredArticle.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{featuredArticle.excerpt}</p>
                    <Link
                      href={`/news/${featuredArticle.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      Read Full Story <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Recent Articles */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent News</h2>
              <div className="grid gap-6">
                {regularArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                  >
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="relative h-48 md:h-full">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge
                            variant="secondary"
                            className="bg-blue-600 text-white text-xs border-gray-300 dark:border-gray-600"
                          >
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="md:col-span-2 p-4">
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(article.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {article.readTime}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{article.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                        <Link
                          href={`/news/${article.id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                        >
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick News */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Updates</h3>
                <div className="space-y-4">
                  {quickNews.map((news, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 pb-3 last:pb-0"
                    >
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300 mb-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(news.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                        <Badge variant="outline" className="text-xs border-gray-300 dark:border-gray-600">
                          {news.category}
                        </Badge>
                      </div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">{news.title}</h4>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0"
                    >
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300 mb-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{event.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">{event.location}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{event.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Subscribe to our newsletter for the latest updates on our programs and impact.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded text-gray-900 text-sm"
                  />
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Impact Stats */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Our Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">50K+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Lives Impacted</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                      <Target className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">100+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Projects Completed</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">100+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Volunteers</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
