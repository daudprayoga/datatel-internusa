import type { Metadata } from "next"
import { Demo21Navbar } from "@/components/demo21/navbar"
import { Demo21Footer } from "@/components/demo21/footer"
import { ScrollToTop } from "@/components/demo21/scroll-to-top"
import { PageHeader } from "@/components/demo21/page-header"
import { Demo21VisionMission } from "@/components/demo21/vision-mission"
import { Demo15ContactInfo } from "@/components/demo15/contact-info"

export const metadata: Metadata = {
  title: "About | PT. Datatel Inter Nusa",
  description:
    "About PT. Datatel Inter Nusa - High Qualified Computer Network & System Integrators since 2005.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#60697b] font-sans antialiased selection:bg-[#b02d3a] selection:text-white">
      <Demo21Navbar />
      <main>
        <PageHeader
          badge="About"
          title="Vision &amp; Mission"
          description="To be a high qualified System Integrator and efficient by customer reward so able to response and meet customers requirements."
          breadcrumb={[{ label: "About" }]}
        />
        <Demo21VisionMission />
        <Demo15ContactInfo />
      </main>
      <Demo21Footer />
      <ScrollToTop />
    </div>
  )
}
