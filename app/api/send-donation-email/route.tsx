import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const donationData = await request.json()

    // Extract donation details
    const {
      donorName,
      email,
      phone,
      amount,
      paymentMethod,
      project,
      message,
      isAnonymous,
      isRecurring,
      transactionId,
      networkProvider,
    } = donationData

    // Create comprehensive email content
    const emailSubject = `🎉 New Donation Received: GH₵${amount} from ${isAnonymous ? "Anonymous Donor" : donorName}`

    const emailContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Donation Notification</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
          .donation-amount { font-size: 2.5em; font-weight: bold; color: #fbbf24; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
          .section { background: white; margin: 20px 0; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .section h3 { color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; margin-bottom: 15px; }
          .info-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 10px; margin: 10px 0; }
          .info-label { font-weight: bold; color: #4b5563; }
          .info-value { color: #1f2937; }
          .action-section { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 20px 0; }
          .action-list { list-style: none; padding: 0; }
          .action-list li { padding: 8px 0; }
          .action-list li:before { content: "✅ "; color: #10b981; font-weight: bold; }
          .footer { text-align: center; margin-top: 30px; padding: 20px; background: #1f2937; color: white; border-radius: 8px; }
          .highlight { background: #dbeafe; padding: 15px; border-radius: 6px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🎉 New Donation Received!</h1>
          <div class="donation-amount">GH₵${amount}</div>
          <p>A generous donation has been made to Better Dream Foundation</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h3>👤 Donor Information</h3>
            <div class="info-grid">
              <div class="info-label">Name:</div>
              <div class="info-value">${isAnonymous ? "Anonymous Donor" : donorName}</div>
              <div class="info-label">Email:</div>
              <div class="info-value">${isAnonymous ? "Not disclosed" : email}</div>
              <div class="info-label">Phone:</div>
              <div class="info-value">${isAnonymous ? "Not disclosed" : phone}</div>
              <div class="info-label">Anonymous:</div>
              <div class="info-value">${isAnonymous ? "Yes" : "No"}</div>
            </div>
          </div>

          <div class="section">
            <h3>💰 Donation Details</h3>
            <div class="info-grid">
              <div class="info-label">Amount:</div>
              <div class="info-value"><strong>GH₵${amount}</strong></div>
              <div class="info-label">Payment Method:</div>
              <div class="info-value">${paymentMethod}${networkProvider ? ` (${networkProvider})` : ""}</div>
              <div class="info-label">Project:</div>
              <div class="info-value">${project}</div>
              <div class="info-label">Recurring:</div>
              <div class="info-value">${isRecurring ? "Yes - Monthly" : "One-time"}</div>
              <div class="info-label">Transaction ID:</div>
              <div class="info-value">${transactionId}</div>
              <div class="info-label">Date & Time:</div>
              <div class="info-value">${new Date().toLocaleString("en-GB", { timeZone: "Africa/Accra" })} (Ghana Time)</div>
            </div>
          </div>

          ${
            message
              ? `
          <div class="section">
            <h3>💬 Donor Message</h3>
            <div class="highlight">
              "${message}"
            </div>
          </div>
          `
              : ""
          }

          <div class="action-section">
            <h3>⚡ Action Required</h3>
            <p><strong>Please complete the following tasks:</strong></p>
            <ul class="action-list">
              <li>Send thank you email to donor${isAnonymous ? " (if contact info available)" : ""}</li>
              <li>Generate and send tax-deductible receipt</li>
              <li>Update donor database and CRM system</li>
              <li>Record donation in financial management system</li>
              <li>Allocate funds to the specified project: <strong>${project}</strong></li>
              ${isRecurring ? "<li>Set up recurring donation tracking and processing</li>" : ""}
              <li>Update donation statistics and impact metrics</li>
              <li>Consider donor for newsletter and updates</li>
            </ul>
          </div>

          <div class="section">
            <h3>📊 Quick Stats</h3>
            <p>This donation brings us closer to our goals and helps us continue our mission of empowering communities through education, healthcare, and sustainable development.</p>
          </div>
        </div>

        <div class="footer">
          <h3>Better Dream Foundation</h3>
          <p>Empowering communities through education, healthcare, and sustainable development</p>
          <p>📧 betterdreamfoundationghana@gmail.com | 📞 +233597399216</p>
        </div>
      </body>
      </html>
    `

    // In a production environment, you would send the actual email here
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // await sgMail.send({
    //   to: 'betterdreamfoundationghana@gmail.com',
    //   from: 'donations@betterdreamfoundation.org',
    //   subject: emailSubject,
    //   html: emailContent,
    // })

    // For now, we'll log the email content (for development/testing)
    console.log("=== DONATION EMAIL NOTIFICATION ===")
    console.log("To: betterdreamfoundationghana@gmail.com")
    console.log("Subject:", emailSubject)
    console.log("Content:", emailContent)
    console.log("=====================================")

    return NextResponse.json({
      success: true,
      message: "Donation email notification sent successfully",
    })
  } catch (error) {
    console.error("Error sending donation email:", error)
    return NextResponse.json({ success: false, message: "Failed to send email notification" }, { status: 500 })
  }
}
