import { type NextRequest, NextResponse } from "next/server"

// Mock mobile money API integration
// In production, you would integrate with actual APIs like:
// - MTN MoMo API
// - Vodafone Cash API
// - AirtelTigo Money API

interface MobileMoneyRequest {
  provider: "mtn" | "vodafone" | "airteltigo"
  phoneNumber: string
  amount: number
  currency: string
  reference: string
  description: string
}

interface MobileMoneyResponse {
  success: boolean
  transactionId?: string
  message: string
  status: "pending" | "success" | "failed" | "cancelled"
  paymentUrl?: string
}

// Simulate API delays and responses
const simulateAPICall = async (provider: string, phoneNumber: string, amount: number): Promise<MobileMoneyResponse> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Simulate different scenarios based on phone number for demo
  const lastDigit = phoneNumber.slice(-1)

  // Simulate failed transaction for numbers ending in 0
  if (lastDigit === "0") {
    return {
      success: false,
      message: "Insufficient balance or invalid phone number",
      status: "failed",
    }
  }

  // Simulate cancelled transaction for numbers ending in 1
  if (lastDigit === "1") {
    return {
      success: false,
      message: "Transaction cancelled by user",
      status: "cancelled",
    }
  }

  // Simulate successful transaction for other numbers
  const transactionId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`

  return {
    success: true,
    transactionId,
    message:
      "Payment request sent successfully. Please check your phone and enter your PIN to complete the transaction.",
    status: "pending",
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: MobileMoneyRequest = await request.json()

    // Validate required fields
    if (!body.provider || !body.phoneNumber || !body.amount) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Validate phone number format (Ghana format)
    const phoneRegex = /^(\+233|0)[2-9][0-9]{8}$/
    if (!phoneRegex.test(body.phoneNumber)) {
      return NextResponse.json(
        { success: false, message: "Invalid phone number format. Please use Ghana format (e.g., 0241234567)" },
        { status: 400 },
      )
    }

    // Validate amount
    if (body.amount < 1 || body.amount > 10000) {
      return NextResponse.json(
        { success: false, message: "Amount must be between GH₵1 and GH₵10,000" },
        { status: 400 },
      )
    }

    // Normalize phone number
    let normalizedPhone = body.phoneNumber
    if (normalizedPhone.startsWith("0")) {
      normalizedPhone = "+233" + normalizedPhone.slice(1)
    }

    // Validate provider-specific phone number prefixes
    const providerPrefixes = {
      mtn: ["024", "025", "053", "054", "055", "059"],
      vodafone: ["020", "050"],
      airteltigo: ["027", "028", "057", "026", "056"],
    }

    const phonePrefix = normalizedPhone.slice(4, 7)
    if (!providerPrefixes[body.provider].includes(phonePrefix)) {
      const providerName = body.provider === "mtn" ? "MTN" : body.provider === "vodafone" ? "Vodafone" : "AirtelTigo"
      return NextResponse.json(
        { success: false, message: `Phone number does not match ${providerName} network` },
        { status: 400 },
      )
    }

    // Simulate mobile money API call
    const result = await simulateAPICall(body.provider, normalizedPhone, body.amount)

    // Log the transaction attempt (in production, save to database)
    console.log("Mobile Money Transaction Attempt:", {
      provider: body.provider,
      phoneNumber: normalizedPhone,
      amount: body.amount,
      currency: body.currency,
      reference: body.reference,
      timestamp: new Date().toISOString(),
      result,
    })

    if (result.success) {
      return NextResponse.json({
        success: true,
        transactionId: result.transactionId,
        message: result.message,
        status: result.status,
      })
    } else {
      return NextResponse.json({ success: false, message: result.message, status: result.status }, { status: 400 })
    }
  } catch (error) {
    console.error("Mobile Money API Error:", error)
    return NextResponse.json({ success: false, message: "Internal server error. Please try again." }, { status: 500 })
  }
}
