import type { Metadata } from "next"
import { Demo21Navbar } from "@/components/demo21/navbar"
import { Demo21Hero } from "@/components/demo21/hero"
import { Demo21Services } from "@/components/demo21/services"
import { Demo21Strategy } from "@/components/demo21/strategy"
import { Demo21WhyChooseUs } from "@/components/demo21/why-choose-us"
import { Demo21FactsTeam } from "@/components/demo21/facts-team"
import { Demo21LatestProjects } from "@/components/demo21/latest-projects"
import { Demo21Testimonials } from "@/components/demo21/testimonials"
import { Demo21FAQ } from "@/components/demo21/faq"
import { Demo21Footer } from "@/components/demo21/footer"
import { ScrollToTop } from "@/components/demo21/scroll-to-top"

export const metadata: Metadata = {
  title: "PT. Datatel Inter Nusa - Computer Network & System Integrators",
  description: "Computer Network & System Integrators sejak 2005. Solusi IT Infrastructure, Structured Cabling, Networking, Data Center, CCTV, dan Access Control.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#60697b] font-sans antialiased selection:bg-[#3f78e0] selection:text-white">
      <Demo21Navbar />
      <main>
        <Demo21Hero />
        <Demo21Services />
        {/* <Demo21Strategy /> */}
        {/* <Demo21WhyChooseUs />
        <Demo21FactsTeam />
        <Demo21LatestProjects />
        <Demo21Testimonials />
        <Demo21FAQ /> */}
      </main>
      <Demo21Footer />
      <ScrollToTop />
    </div>
  )
}
