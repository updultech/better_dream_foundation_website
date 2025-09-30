import { NextResponse } from "next/server"

// Mark this route as dynamic to prevent static generation
export const dynamic = "force-dynamic"
export const runtime = "edge"

interface Donation {
  id: string
  donorName: string
  amount: number
  currency: string
  date: string
  status: string
  paymentMethod: string
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const donorEmail = searchParams.get("email")

    if (!donorEmail) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // In production, fetch from database
    // For now, return mock data
    const donations: Donation[] = [
      {
        id: "DON-001",
        donorName: "Sample Donor",
        amount: 100,
        currency: "GHS",
        date: new Date().toISOString(),
        status: "completed",
        paymentMethod: "Mobile Money",
      },
    ]

    return NextResponse.json({ donations })
  } catch (error) {
    console.error("Donations fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch donations" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { donorName, donorEmail, amount, currency, paymentMethod, transactionId } = body

    // Validate required fields
    if (!donorName || !donorEmail || !amount || !paymentMethod) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In production, save to database
    const donation: Donation = {
      id: `DON-${Date.now()}`,
      donorName,
      amount,
      currency: currency || "GHS",
      date: new Date().toISOString(),
      status: "completed",
      paymentMethod,
    }

    return NextResponse.json({
      success: true,
      donation,
      message: "Donation recorded successfully",
    })
  } catch (error) {
    console.error("Donation creation error:", error)
    return NextResponse.json({ error: "Failed to record donation" }, { status: 500 })
  }
}
