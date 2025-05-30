import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, ArrowRight, Users, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Events - Stay Updated",
  description:
    "Stay updated with Better Dream Foundation's latest news, upcoming events, and success stories from our programs worldwide.",
}

const newsArticles = [
  {
    id: 1,
    title: "New Digital Learning Center Opens in Rural Kenya",
    excerpt:
      "We're excited to announce the opening of our 15th digital learning center, bringing technology education to 500 more students.",
    category: "Program Update",
    date: "March 15, 2024",
    readTime: "3 min read",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
  {
    id: 2,
    title: "Partnership with Local Healthcare Providers Expands Medical Reach",
    excerpt: "Our new partnership will enable us to serve 10,000 additional patients through mobile health clinics.",
    category: "Partnership",
    date: "March 10, 2024",
    readTime: "4 min read",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 3,
    title: "Clean Water Project Reaches Milestone: 50 Communities Served",
    excerpt:
      "Celebrating a major milestone in our clean water initiative with the completion of our 50th water purification system.",
    category: "Milestone",
    date: "March 5, 2024",
    readTime: "2 min read",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 4,
    title: "Women's Empowerment Program Graduates 200 Entrepreneurs",
    excerpt:
      "Our latest cohort of women entrepreneurs have successfully completed their training and launched their businesses.",
    category: "Success Story",
    date: "February 28, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Fundraising Gala",
    description: "Join us for an evening of celebration and fundraising to support our global programs.",
    date: "April 20, 2024",
    time: "6:00 PM - 10:00 PM",
    location: "Grand Ballroom, City Center",
    type: "Fundraising",
    price: "$150 per person",
  },
  {
    id: 2,
    title: "Volunteer Orientation Workshop",
    description: "Learn about our programs and how you can get involved as a volunteer.",
    date: "April 15, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Better Dream Foundation Office",
    type: "Workshop",
    price: "Free",
  },
  {
    id: 3,
    title: "Community Health Fair",
    description: "Free health screenings and wellness education for the local community.",
    date: "April 25, 2024",
    time: "9:00 AM - 3:00 PM",
    location: "Central Park Community Center",
    type: "Community Event",
    price: "Free",
  },
  {
    id: 4,
    title: "Educational Webinar: Global Water Crisis",
    description: "Expert panel discussion on water scarcity and sustainable solutions.",
    date: "May 2, 2024",
    time: "7:00 PM - 8:30 PM",
    location: "Online",
    type: "Webinar",
    price: "Free",
  },
]

export default function NewsPage() {
  const featuredArticle = newsArticles.find((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">News & Events</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Stay updated with our latest news, upcoming events, and success stories from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <Badge className="bg-yellow-500 text-blue-900 mb-4">Featured Story</Badge>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest News</h2>
              </div>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredArticle.image || "/placeholder.svg"}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline">{featuredArticle.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredArticle.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredArticle.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{featuredArticle.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{featuredArticle.excerpt}</p>
                    <Button className="w-fit bg-blue-600 hover:bg-blue-700">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Recent News */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Recent News</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{article.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{article.readTime}</span>
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Upcoming Events</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-blue-600">{event.price}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Register Now</Button>
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Stay Connected</h2>
            <p className="text-xl text-blue-800 mb-8">
              Subscribe to our newsletter to receive the latest updates on our programs and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-600"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get Involved Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our mission to create positive change in communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 text-lg">
                <Users className="mr-2 h-5 w-5" />
                Volunteer
              </Button>
            </Link>
            <Link href="/donate">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
