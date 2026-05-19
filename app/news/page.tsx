'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import { Calendar, Clock, MapPin, ArrowRight, Search } from 'lucide-react'

interface NewsArticle {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  image_url: string | null
  featured: boolean
  published: boolean
  created_at: string
  published_at: string
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

const categoryColors: { [key: string]: string } = {
  Health: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Education: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  Community: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  Advocacy: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  Events: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  Projects: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>([])

  useEffect(() => {
    // Fetch initial news
    const fetchNews = async () => {
      try {
        setError(null)
        const { data, error: fetchError } = await supabase
          .from('news')
          .select('*')
          .eq('published', true)
          .order('featured', { ascending: false })
          .order('published_at', { ascending: false })

        if (fetchError) {
          console.error('[v0] Database error:', fetchError)
          setError(fetchError.message)
          return
        }
        console.log('[v0] News loaded:', data?.length || 0, 'articles')
        setNews(data || [])
        setFilteredNews(data || [])
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Unknown error fetching news'
        console.error('[v0] Error:', errorMsg)
        setError(errorMsg)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()

    // Subscribe to real-time changes
    const subscription = supabase
      .channel('news-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'news',
          filter: 'published=eq.true',
        },
        (payload) => {
          console.log('[v0] Real-time update:', payload.eventType)
          if (payload.eventType === 'INSERT') {
            setNews((prev) => [payload.new as NewsArticle, ...prev])
            setFilteredNews((prev) => [payload.new as NewsArticle, ...prev])
          } else if (payload.eventType === 'UPDATE') {
            setNews((prev) =>
              prev.map((item) =>
                item.id === (payload.new as NewsArticle).id ? (payload.new as NewsArticle) : item
              )
            )
            setFilteredNews((prev) =>
              prev.map((item) =>
                item.id === (payload.new as NewsArticle).id ? (payload.new as NewsArticle) : item
              )
            )
          } else if (payload.eventType === 'DELETE') {
            setNews((prev) => prev.filter((item) => item.id !== (payload.old as NewsArticle).id))
            setFilteredNews((prev) => prev.filter((item) => item.id !== (payload.old as NewsArticle).id))
          }
        }
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    const query = searchQuery.toLowerCase()
    setFilteredNews(
      news.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.content.toLowerCase().includes(query)
      )
    )
  }, [searchQuery, news])

  const featuredArticle = filteredNews.find((article) => article.featured)
  const otherArticles = filteredNews.filter((article) => !article.featured)

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading news...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="bg-red-100 dark:bg-red-900 rounded-lg p-6 mb-4">
            <p className="text-red-800 dark:text-red-200 font-semibold">Unable to Load News</p>
            <p className="text-red-700 dark:text-red-300 text-sm mt-2">{error}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-600 dark:bg-blue-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-lg text-blue-100">
            Stay informed about Better Dream Foundation Ghana's latest initiatives and impact stories
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search news articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          {featuredArticle && (
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                {featuredArticle.image_url && (
                  <img
                    src={featuredArticle.image_url || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    className="w-full h-96 object-cover"
                  />
                )}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                        categoryColors[featuredArticle.category] ||
                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                      }`}
                    >
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredArticle.published_at).toLocaleDateString()}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{featuredArticle.excerpt}</p>
                  <Link
                    href={`/news/${featuredArticle.id}`}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Read Full Story
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Live Indicator */}
            <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-4 border-l-4 border-blue-600">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">Live Updates</p>
              </div>
              <p className="text-xs text-blue-700 dark:text-blue-300">
                News articles update in real-time. New updates will appear instantly!
              </p>
            </div>

            {/* Quick Updates */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quick Updates</h3>
              <div className="space-y-4">
                {filteredNews.slice(0, 4).map((article) => (
                  <Link
                    key={article.id}
                    href={`/news/${article.id}`}
                    className="block hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    <p className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2">
                      {article.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {new Date(article.published_at).toLocaleDateString()}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Articles Grid */}
        {otherArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Recent News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.id}`}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        categoryColors[article.category] ||
                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(article.published_at).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No news articles found.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
            >
              Clear search
            </button>
          </div>
        )}
      </section>
    </main>
  )
}
