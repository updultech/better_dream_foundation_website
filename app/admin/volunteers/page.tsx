'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { CheckCircle, XCircle, Clock, Download, Filter, Search } from 'lucide-react'

interface Volunteer {
  id: number
  first_name: string
  last_name: string
  email: string
  phone: string
  interest: string
  availability: string
  skills: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  approved: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  rejected: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
}

const interestColors: { [key: string]: string } = {
  education: 'bg-blue-100 text-blue-800',
  healthcare: 'bg-red-100 text-red-800',
  environment: 'bg-green-100 text-green-800',
  community: 'bg-purple-100 text-purple-800',
  women: 'bg-pink-100 text-pink-800',
  emergency: 'bg-orange-100 text-orange-800',
  fundraising: 'bg-indigo-100 text-indigo-800',
  marketing: 'bg-cyan-100 text-cyan-800',
  admin: 'bg-gray-100 text-gray-800',
}

export default function VolunteersPage() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([])
  const [filteredVolunteers, setFilteredVolunteers] = useState<Volunteer[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await fetch('/api/volunteers')
        const data = await response.json()
        setVolunteers(data || [])
        setFilteredVolunteers(data || [])
      } catch (error) {
        console.error('Error fetching volunteers:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchVolunteers()
  }, [])

  useEffect(() => {
    let filtered = volunteers

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (v) =>
          v.first_name.toLowerCase().includes(query) ||
          v.last_name.toLowerCase().includes(query) ||
          v.email.toLowerCase().includes(query) ||
          v.phone.includes(query)
      )
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter((v) => v.status === statusFilter)
    }

    setFilteredVolunteers(filtered)
  }, [searchQuery, statusFilter, volunteers])

  const updateStatus = async (id: number, newStatus: 'pending' | 'approved' | 'rejected') => {
    try {
      setVolunteers((prev) =>
        prev.map((v) => (v.id === id ? { ...v, status: newStatus } : v))
      )
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const exportToCSV = () => {
    const headers = ['ID', 'First Name', 'Last Name', 'Email', 'Phone', 'Interest', 'Availability', 'Status', 'Applied Date']
    const rows = filteredVolunteers.map((v) => [
      v.id,
      v.first_name,
      v.last_name,
      v.email,
      v.phone,
      v.interest,
      v.availability,
      v.status,
      new Date(v.created_at).toLocaleDateString(),
    ])

    const csv = [headers, ...rows].map((row) => row.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `volunteers-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  const stats = {
    total: volunteers.length,
    pending: volunteers.filter((v) => v.status === 'pending').length,
    approved: volunteers.filter((v) => v.status === 'approved').length,
    rejected: volunteers.filter((v) => v.status === 'rejected').length,
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Volunteer Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage and track volunteer applications</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Total Applications</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1 flex items-center gap-2">
                <Clock className="h-4 w-4 text-yellow-600" /> Pending
              </p>
              <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" /> Approved
              </p>
              <p className="text-3xl font-bold text-green-600">{stats.approved}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1 flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-600" /> Rejected
              </p>
              <p className="text-3xl font-bold text-red-600">{stats.rejected}</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by name, email, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>

            <Button onClick={exportToCSV} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Volunteers Table */}
        <Card>
          <CardHeader>
            <CardTitle>Volunteer Applications ({filteredVolunteers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-400">Loading volunteers...</p>
              </div>
            ) : filteredVolunteers.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-400">No volunteers found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-gray-200 dark:border-gray-700">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Contact</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Interest</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Availability</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Applied</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredVolunteers.map((volunteer) => (
                      <tr
                        key={volunteer.id}
                        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {volunteer.first_name} {volunteer.last_name}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{volunteer.phone}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-sm text-gray-600 dark:text-gray-300">{volunteer.email}</p>
                        </td>
                        <td className="py-4 px-4">
                          <Badge className={interestColors[volunteer.interest] || 'bg-gray-100 text-gray-800'}>
                            {volunteer.interest.charAt(0).toUpperCase() + volunteer.interest.slice(1)}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {volunteer.availability.charAt(0).toUpperCase() + volunteer.availability.slice(1)}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <Badge className={statusColors[volunteer.status]}>
                            {volunteer.status.charAt(0).toUpperCase() + volunteer.status.slice(1)}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {new Date(volunteer.created_at).toLocaleDateString()}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateStatus(volunteer.id, 'approved')}
                              disabled={volunteer.status === 'approved'}
                              className="text-green-600 border-green-600 hover:bg-green-50"
                            >
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateStatus(volunteer.id, 'rejected')}
                              disabled={volunteer.status === 'rejected'}
                              className="text-red-600 border-red-600 hover:bg-red-50"
                            >
                              Reject
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
