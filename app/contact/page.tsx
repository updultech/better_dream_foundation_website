import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Contact Better Dream Foundation for inquiries about our programs, volunteer opportunities, partnerships, or general information.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Contact Us</h1>
          <p className="text-xl mb-12 text-center text-gray-700">
            We'd love to hear from you. Get in touch with us for any inquiries or to learn more about our work.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>Address:</strong>
                  <br />
                  East Legon
                  <br />
                  Suite 456
                  <br />
                  Accra, ND 10001
                  <br />
                  Ghana
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong>
                  <br />
                  Main Office: +233597399216
                  <br />
                  Donations: +233597399216
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong>
                  <br />
                  General: betterdreamfoundationghana@gmail.com
                  <br />
                  Donations: betterdreamfoundationghana@gmail.com
                  <br />
                  Volunteers: betterdreamfoundationghana@gmail.com
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea className="w-full px-4 py-2 border rounded-md" rows={4}></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="border rounded-lg p-8 bg-gray-50">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Office Hours</h2>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <h3 className="font-semibold mb-2 text-gray-800">Weekdays</h3>
                <p className="text-gray-700">
                  Monday - Friday
                  <br />
                  9:00 AM - 6:00 PM EST
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-800">Weekends</h3>
                <p className="text-gray-700">
                  Saturday: 10:00 AM - 2:00 PM EST
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
