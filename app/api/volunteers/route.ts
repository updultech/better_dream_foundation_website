import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const { error: insertError } = await supabase
      .from('volunteers')
      .insert([
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          interest: data.interest,
          availability: data.availability,
          skills: data.skills,
          status: 'pending',
        },
      ])

    if (insertError) {
      console.error('[v0] Insert error:', insertError)
      return NextResponse.json({ error: insertError.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, message: 'Volunteer application submitted successfully' })
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error'
    console.error('[v0] Error:', errorMsg)
    return NextResponse.json({ error: errorMsg }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { data, error } = await supabase
      .from('volunteers')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('[v0] Fetch error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json(data || [])
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error'
    console.error('[v0] Error:', errorMsg)
    return NextResponse.json({ error: errorMsg }, { status: 500 })
  }
}
