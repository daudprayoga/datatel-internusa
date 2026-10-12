import type { Metadata } from "next"
import { Demo21Navbar } from "@/components/demo21/navbar"
import { Demo21Footer } from "@/components/demo21/footer"
import { ScrollToTop } from "@/components/demo21/scroll-to-top"
import { PageHeader } from "@/components/demo21/page-header"
import { Demo21VisionMission } from "@/components/demo21/vision-mission"

export const metadata: Metadata = {
  title: "Vision & Mission | PT. Datatel Inter Nusa",
  description:
    "Vision & Mission of PT. Datatel Inter Nusa - High Qualified Computer Network & System Integrators since 2005.",
}

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-white text-[#60697b] font-sans antialiased selection:bg-[#3f78e0] selection:text-white">
      <Demo21Navbar />

      <main>
        <PageHeader
          badge="About Us"
          title="Vision & Mission"
          description="To be a high qualified System Integrator and efficient by customer reward so able to response and meet customers requirements."
          breadcrumb={[{ label: "Vision & Mission" }]}
        />

        <Demo21VisionMission />
      </main>

      <Demo21Footer />
      <ScrollToTop />
    </div>
  )
}
