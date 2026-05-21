'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Plus, Edit2, Trash2 } from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  position: string
  region: string
  status: string
  created_at: string
}

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTeam()
  }, [])

  const fetchTeam = async () => {
    try {
      const response = await fetch('/api/team')
      const data = await response.json()
      setTeam(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error fetching team:', error)
      setTeam([])
    } finally {
      setLoading(false)
    }
  }

  const deleteTeam = async (id: string) => {
    if (!confirm('Are you sure?')) return
    try {
      await fetch(`/api/team/${id}`, { method: 'DELETE' })
      setTeam(team.filter((t) => t.id !== id))
    } catch (error) {
      console.error('Error deleting team member:', error)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team Profiles</h1>
          <p className="text-gray-600 mt-2">Manage team members and staff</p>
        </div>
        <Link href="/admin/team/new">
          <Button className="bg-[#1e40af] hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Team Member
          </Button>
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Loading team...</p>
        </div>
      ) : team.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-gray-500 mb-4">No team members yet</p>
            <Link href="/admin/team/new">
              <Button className="bg-[#1e40af] hover:bg-blue-700 text-white">
                Add first team member
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {team.map((member) => (
            <Card key={member.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-[#1e40af] font-medium mt-1">{member.position}</p>
                    <p className="text-xs text-gray-500 mt-1">{member.region}</p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-3 ${
                        member.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {member.status}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/admin/team/${member.id}`}>
                      <Button variant="outline" size="sm">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteTeam(member.id)}
                      className="text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
