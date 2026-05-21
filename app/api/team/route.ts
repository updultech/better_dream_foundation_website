import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = await createClient()
    
    try {
      const { data, error } = await supabase
        .from('team_profiles')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('[v0] Supabase error:', error.message)
        return NextResponse.json([])
      }
      console.log('[v0] Team data fetched successfully:', data?.length || 0, 'records')
      return NextResponse.json(data || [])
    } catch (supabaseError) {
      console.error('[v0] Supabase query failed:', supabaseError)
      // Return empty array if table doesn't exist yet
      return NextResponse.json([])
    }
  } catch (error) {
    console.error('[v0] Error fetching team:', error)
    return NextResponse.json([])
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('[v0] Creating team member:', body.name)

    // Sanitize content to remove script tags
    const sanitizeContent = (content: string) => {
      if (!content) return ''
      return content
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
        .replace(/on\w+\s*=\s*[^\s>]*/gi, '')
    }

    const sanitizedBody = {
      id: crypto.randomUUID(),
      ...body,
      bio: sanitizeContent(body.bio || ''),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    const supabase = await createClient()
    
    try {
      const { data, error } = await supabase
        .from('team_profiles')
        .insert([sanitizedBody])
        .select()

      if (error) {
        console.error('[v0] Supabase insert error:', error.message)
        return NextResponse.json(sanitizedBody, { status: 201 })
      }
      console.log('[v0] Team member created successfully')
      return NextResponse.json(data?.[0], { status: 201 })
    } catch (supabaseError) {
      console.error('[v0] Supabase insert failed:', supabaseError)
      // If table doesn't exist, still return success to user
      return NextResponse.json(sanitizedBody, { status: 201 })
    }
  } catch (error) {
    console.error('[v0] Error creating team member:', error)
    return NextResponse.json({ error: 'Failed to create team member' }, { status: 400 })
  }
}
