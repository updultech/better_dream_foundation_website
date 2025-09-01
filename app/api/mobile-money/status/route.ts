import { type NextRequest, NextResponse } from "next/server"

// Mock transaction status checking
// In production, this would check the actual transaction status with the mobile money provider

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const transactionId = searchParams.get("transactionId")

  if (!transactionId) {
    return NextResponse.json({ success: false, message: "Transaction ID is required" }, { status: 400 })
  }

  // Simulate checking transaction status
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Simulate different outcomes based on transaction ID for demo
  const lastChar = transactionId.slice(-1)

  let status: "pending" | "success" | "failed" | "cancelled"
  let message: string

  if (["A", "B", "C", "D", "E"].includes(lastChar)) {
    status = "success"
    message = "Payment completed successfully"
  } else if (["F", "G"].includes(lastChar)) {
    status = "failed"
    message = "Payment failed. Please try again."
  } else if (["H", "I"].includes(lastChar)) {
    status = "cancelled"
    message = "Payment was cancelled by user"
  } else {
    status = "pending"
    message = "Payment is still pending. Please complete the transaction on your phone."
  }

  return NextResponse.json({
    success: true,
    transactionId,
    status,
    message,
    timestamp: new Date().toISOString(),
  })
}
