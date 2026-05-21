'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileText, Newspaper, Users, BarChart3, Home, LogOut } from 'lucide-react'

const adminLinks = [
  { href: '/admin', label: 'Dashboard', icon: Home },
  { href: '/admin/blogs', label: 'Blogs', icon: FileText },
  { href: '/admin/news', label: 'News', icon: Newspaper },
  { href: '/admin/reports', label: 'Reports', icon: BarChart3 },
  { href: '/admin/team', label: 'Team Profiles', icon: Users },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-[#1e40af] text-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <p className="text-blue-100 text-sm mt-2">Content Management</p>
        </div>

        <nav className="mt-8">
          {adminLinks.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white border-l-4 border-white'
                    : 'text-blue-100 hover:bg-blue-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-blue-100 hover:bg-blue-700 rounded transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            Back to Site
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
