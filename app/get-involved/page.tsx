import type { Metadata } from "next"
import GetInvolvedClient from "./get-involved-client"

export const metadata: Metadata = {
  title: "Get Involved - Join Our Mission",
  description:
    "Join Better Dream Foundation's mission to empower communities. Volunteer, donate, fundraise, or partner with us to create lasting positive change.",
}

export default function GetInvolvedPage() {
  return <GetInvolvedClient />
}
