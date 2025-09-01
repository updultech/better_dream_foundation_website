import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const donationData = await request.json()

    // Format the donation data for email
    const emailContent = {
      to: "betterdreamfoundationghana@gmail.com",
      subject: `New Donation Received - GH₵${donationData.amount} from ${donationData.firstName} ${donationData.lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Donation Notification</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
            .donation-amount { font-size: 2.5em; font-weight: bold; margin: 10px 0; }
            .section { background: white; margin: 20px 0; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; }
            .section h3 { margin-top: 0; color: #2563eb; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
            .info-item { margin-bottom: 10px; }
            .info-label { font-weight: bold; color: #4b5563; }
            .info-value { color: #1f2937; }
            .action-list { background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; }
            .action-list h3 { color: #92400e; margin-top: 0; }
            .action-list ul { margin: 0; padding-left: 20px; }
            .action-list li { margin-bottom: 8px; color: #78350f; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 0.9em; }
            .highlight { background: #dbeafe; padding: 2px 6px; border-radius: 4px; }
            @media (max-width: 600px) {
              .info-grid { grid-template-columns: 1fr; }
              .donation-amount { font-size: 2em; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 New Donation Received!</h1>
              <div class="donation-amount">GH₵${donationData.amount}</div>
              <p>A generous donation has been made to Better Dream Foundation</p>
            </div>
            
            <div class="content">
              <div class="section">
                <h3>👤 Donor Information</h3>
                <div class="info-grid">
                  <div class="info-item">
                    <div class="info-label">Name:</div>
                    <div class="info-value">${donationData.firstName} ${donationData.lastName}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Email:</div>
                    <div class="info-value">${donationData.email}</div>
                  </div>
                  ${
                    donationData.phone
                      ? `
                  <div class="info-item">
                    <div class="info-label">Phone:</div>
                    <div class="info-value">${donationData.phone}</div>
                  </div>
                  `
                      : ""
                  }
                  <div class="info-item">
                    <div class="info-label">Anonymous:</div>
                    <div class="info-value">${donationData.anonymous ? "Yes" : "No"}</div>
                  </div>
                </div>
              </div>

              <div class="section">
                <h3>💰 Donation Details</h3>
                <div class="info-grid">
                  <div class="info-item">
                    <div class="info-label">Amount:</div>
                    <div class="info-value"><span class="highlight">GH₵${donationData.amount}</span></div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Payment Method:</div>
                    <div class="info-value">${donationData.paymentMethod}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Donation Type:</div>
                    <div class="info-value">${donationData.donationType || "One-time"}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Project:</div>
                    <div class="info-value">${donationData.project || "General Fund"}</div>
                  </div>
                  ${
                    donationData.transactionId
                      ? `
                  <div class="info-item">
                    <div class="info-label">Transaction ID:</div>
                    <div class="info-value">${donationData.transactionId}</div>
                  </div>
                  `
                      : ""
                  }
                  ${
                    donationData.donationId
                      ? `
                  <div class="info-item">
                    <div class="info-label">Donation ID:</div>
                    <div class="info-value">${donationData.donationId}</div>
                  </div>
                  `
                      : ""
                  }
                </div>
              </div>

              ${
                donationData.message
                  ? `
              <div class="section">
                <h3>💬 Donor Message</h3>
                <p style="font-style: italic; background: #f1f5f9; padding: 15px; border-radius: 6px; margin: 0;">
                  "${donationData.message}"
                </p>
              </div>
              `
                  : ""
              }

              <div class="section">
                <h3>📊 Additional Information</h3>
                <div class="info-grid">
                  <div class="info-item">
                    <div class="info-label">Newsletter Subscription:</div>
                    <div class="info-value">${donationData.newsletter ? "Yes" : "No"}</div>
                  </div>
                  <div class="info-item">
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
              </div>

              <div class="action-list">
                <h3>⚡ Action Required</h3>
                <p>Please complete the following tasks for this donation:</p>
                <ul>
                  <li>Send thank you email to donor at <strong>${donationData.email}</strong></li>
                  <li>Generate and send tax-deductible receipt</li>
                  <li>Update donor database with new contribution</li>
                  <li>Record donation in financial tracking system</li>
                  <li>Allocate funds to <strong>${donationData.project || "General Fund"}</strong></li>
                  ${donationData.donationType === "monthly" ? "<li>Set up recurring donation tracking</li>" : ""}
                  ${donationData.newsletter ? "<li>Add donor to newsletter mailing list</li>" : ""}
                </ul>
              </div>
            </div>

            <div class="footer">
              <p><strong>Better Dream Foundation</strong><br>
              Making a difference in communities across Ghana<br>
              📧 betterdreamfoundationghana@gmail.com | 📞 +233597399216</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        New Donation Received - GH₵${donationData.amount}
        
        Donor: ${donationData.firstName} ${donationData.lastName}
        Email: ${donationData.email}
        ${donationData.phone ? `Phone: ${donationData.phone}` : ""}
        
        Amount: GH₵${donationData.amount}
        Payment Method: ${donationData.paymentMethod}
        Project: ${donationData.project || "General Fund"}
        ${donationData.transactionId ? `Transaction ID: ${donationData.transactionId}` : ""}
        
        ${donationData.message ? `Message: "${donationData.message}"` : ""}
        
        Please follow up with thank you email and receipt generation.
      `,
    }

    // In production, you would send the actual email here
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // await sgMail.send(emailContent)

    // Example with Mailgun:
    // const mailgun = require('mailgun-js')({
    //   apiKey: process.env.MAILGUN_API_KEY,
    //   domain: process.env.MAILGUN_DOMAIN
    // })
    // await mailgun.messages().send(emailContent)

    // For now, we'll log the email content (development mode)
    console.log("=== DONATION NOTIFICATION EMAIL ===")
    console.log("To:", emailContent.to)
    console.log("Subject:", emailContent.subject)
    console.log("Donation Amount:", `GH₵${donationData.amount}`)
    console.log("Donor:", `${donationData.firstName} ${donationData.lastName}`)
    console.log("Email:", donationData.email)
    console.log("Payment Method:", donationData.paymentMethod)
    console.log("Project:", donationData.project || "General Fund")
    if (donationData.message) {
      console.log("Message:", donationData.message)
    }
    console.log("===================================")

    return NextResponse.json({
      success: true,
      message: "Donation notification email sent successfully",
    })
  } catch (error) {
    console.error("Error sending donation notification email:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send donation notification email",
      },
      { status: 500 },
    )
  }
}
