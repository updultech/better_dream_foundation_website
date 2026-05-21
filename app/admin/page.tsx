import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Newspaper, Users, BarChart3, Plus } from 'lucide-react'

const contentTypes = [
  {
    title: 'Blog Posts',
    description: 'Manage and publish blog articles',
    icon: FileText,
    href: '/admin/blogs',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'News',
    description: 'Publish news and updates',
    icon: Newspaper,
    href: '/admin/news',
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Reports',
    description: 'Upload and manage reports',
    icon: BarChart3,
    href: '/admin/reports',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Team Profiles',
    description: 'Manage team members and staff',
    icon: Users,
    href: '/admin/team',
    color: 'bg-orange-100 text-orange-600',
  },
]

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage all your content from one place</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contentTypes.map((type) => {
          const Icon = type.icon
          return (
            <Card key={type.href} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${type.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <CardTitle>{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={type.href}>
                  <Button className="w-full bg-[#1e40af] hover:bg-blue-700 text-white">
                    Manage
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
          <CardDescription>Get started managing your content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Create New Blog Post</p>
              <p className="text-sm text-gray-600">Share your latest articles with the community</p>
            </div>
            <Link href="/admin/blogs/new">
              <Button className="bg-[#1e40af] hover:bg-blue-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                New Blog
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Publish News</p>
              <p className="text-sm text-gray-600">Keep your audience updated with latest news</p>
            </div>
            <Link href="/admin/news/new">
              <Button className="bg-[#1e40af] hover:bg-blue-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                New Article
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
