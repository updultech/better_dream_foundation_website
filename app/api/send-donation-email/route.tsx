import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const donationData = await request.json()

    // Email content with professional HTML template
    const emailContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Donation Received</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
          .donation-amount { font-size: 2.5em; font-weight: bold; color: #fbbf24; margin: 10px 0; }
          .section { background: white; margin: 20px 0; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; }
          .section h3 { color: #2563eb; margin-top: 0; }
          .info-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 10px; margin: 15px 0; }
          .info-label { font-weight: bold; color: #4b5563; }
          .info-value { color: #1f2937; }
          .action-items { background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; }
          .action-items h3 { color: #92400e; margin-top: 0; }
          .action-list { list-style: none; padding: 0; }
          .action-list li { padding: 8px 0; border-bottom: 1px solid #fde68a; }
          .action-list li:last-child { border-bottom: none; }
          .footer { text-align: center; margin-top: 30px; padding: 20px; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 New Donation Received!</h1>
            <div class="donation-amount">GH₵${donationData.amount}</div>
            <p>A generous supporter has just made a donation to Better Dream Foundation</p>
          </div>
          
          <div class="content">
            <div class="section">
              <h3>👤 Donor Information</h3>
              <div class="info-grid">
                <div class="info-label">Name:</div>
                <div class="info-value">${donationData.anonymous ? "Anonymous Donor" : donationData.donorName}</div>
                
                <div class="info-label">Email:</div>
                <div class="info-value">${donationData.anonymous ? "Hidden" : donationData.email}</div>
                
                <div class="info-label">Phone:</div>
                <div class="info-value">${donationData.anonymous ? "Hidden" : donationData.phone}</div>
                
                <div class="info-label">Anonymous:</div>
                <div class="info-value">${donationData.anonymous ? "Yes" : "No"}</div>
                
                <div class="info-label">Newsletter:</div>
                <div class="info-value">${donationData.newsletter ? "Subscribed" : "Not subscribed"}</div>
              </div>
            </div>

            <div class="section">
              <h3>💰 Donation Details</h3>
              <div class="info-grid">
                <div class="info-label">Amount:</div>
                <div class="info-value">GH₵${donationData.amount}</div>
                
                <div class="info-label">Project:</div>
                <div class="info-value">${donationData.project}</div>
                
                <div class="info-label">Payment Method:</div>
                <div class="info-value">${
                  donationData.paymentMethod === "mobile-money"
                    ? `Mobile Money (${donationData.mobileProvider?.toUpperCase()})`
                    : "Card Payment"
                }</div>
                
                <div class="info-label">Recurring:</div>
                <div class="info-value">${donationData.recurring ? "Monthly" : "One-time"}</div>
                
                <div class="info-label">Transaction ID:</div>
                <div class="info-value">${donationData.transactionId}</div>
                
                <div class="info-label">Date & Time:</div>
                <div class="info-value">${new Date().toLocaleString("en-GB", {
                  timeZone: "Africa/Accra",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })} (Ghana Time)</div>
              </div>
            </div>

            ${
              donationData.message
                ? `
            <div class="section">
              <h3>💬 Donor Message</h3>
              <p style="font-style: italic; color: #4b5563;">"${donationData.message}"</p>
            </div>
            `
                : ""
            }

            <div class="action-items">
              <h3>⚡ Action Required</h3>
              <p>Please complete the following tasks for this donation:</p>
              <ul class="action-list">
                <li>✅ Send thank you email to donor</li>
                <li>✅ Generate and send tax receipt</li>
                <li>✅ Update donor database</li>
                <li>✅ Record donation in financial system</li>
                <li>✅ Allocate funds to specific projects</li>
                ${donationData.recurring ? "<li>✅ Set up recurring donation tracking</li>" : ""}
                ${donationData.newsletter ? "<li>✅ Add to newsletter subscription list</li>" : ""}
              </ul>
            </div>
          </div>

          <div class="footer">
            <p><strong>Better Dream Foundation</strong></p>
            <p>Empowering communities through sustainable development</p>
            <p>📧 betterdreamfoundationghana@gmail.com | 📞 +233597399216</p>
          </div>
        </div>
      </body>
      </html>
    `

    // In a real application, you would send this email using a service like:
    // - SendGrid: https://sendgrid.com/
    // - Mailgun: https://www.mailgun.com/
    // - AWS SES: https://aws.amazon.com/ses/
    // - Nodemailer with SMTP

    // For now, we'll log the email content and simulate success
    console.log("=== DONATION EMAIL NOTIFICATION ===")
    console.log("To: betterdreamfoundationghana@gmail.com")
    console.log("Subject: New Donation Received - GH₵" + donationData.amount)
    console.log("Content:", emailContent)
    console.log("=====================================")

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Donation email sent successfully",
    })
  } catch (error) {
    console.error("Error sending donation email:", error)
    return NextResponse.json({ success: false, message: "Failed to send donation email" }, { status: 500 })
  }
}
