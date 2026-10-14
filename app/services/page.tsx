import type { Metadata } from "next"
import { Demo21Navbar } from "@/components/demo21/navbar"
import { Demo21Footer } from "@/components/demo21/footer"
import { ScrollToTop } from "@/components/demo21/scroll-to-top"
import { PageHeader } from "@/components/demo21/page-header"
import { Demo21Services } from "@/components/demo21/services"

export const metadata: Metadata = {
  title: "Services & Solutions | PT. Datatel Inter Nusa",
  description:
    "Networking System, Access Control, Data Center Design & Build, Digital CCTV, dan Structured Cabling System Certified oleh PT. Datatel Inter Nusa.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-sb-body font-sans antialiased selection:bg-sb-primary selection:text-white">
      <Demo21Navbar />

      <main>
        <PageHeader
          badge="Our Services"
          title="Services & Solutions"
          description="Total IT consulting & implementation services designed to Simplify your IT infrastructure/System with your business objective."
          breadcrumb={[{ label: "Services" }]}
        />

        <Demo21Services tone="white" />

      </main>

      <Demo21Footer />
      <ScrollToTop />
    </div>
  )
}
