import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo.jpg"
                alt="Better Dream Foundation Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-lg font-bold">Better Dream Foundation</span>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering communities worldwide through education, healthcare, and sustainable development programs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-gray-300 hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-gray-300 hover:text-white transition-colors">
                  Annual Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Environment
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Women Empowerment
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Emergency Relief
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">123 Hope Street, City, Country</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@betterdreamfoundation.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Better Dream Foundation. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/transparency" className="hover:text-white transition-colors">
              Transparency
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
