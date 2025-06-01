import type { Metadata } from "next"
import DonateClientPage from "./DonateClientPage"

export const metadata: Metadata = {
  title: "Donate - Support Our Mission",
  description:
    "Your donation to Better Dream Foundation helps us create lasting change in communities worldwide. Every contribution makes a difference.",
}

export default function DonatePage() {
  return <DonateClientPage />
}
