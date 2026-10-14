import type { Metadata } from "next"
import { Demo15Navbar } from "@/components/demo15/navbar"
import { Demo15Hero } from "@/components/demo15/hero"
import { Demo15Steps } from "@/components/demo15/steps"
import { Demo15Services } from "@/components/demo15/services"
import { Demo15Clients } from "@/components/demo15/clients"
import { Demo15ContactInfo } from "@/components/demo15/contact-info"
import { Demo21Footer } from "@/components/demo21/footer"
import { ScrollToTop } from "@/components/demo21/scroll-to-top"

export const metadata: Metadata = {
  title: "PT. Datatel Inter Nusa - Computer Network & System Integrators",
  description:
    "Computer Network & System Integrators sejak 2005. Solusi IT Infrastructure, Structured Cabling, Networking, Data Center, CCTV, dan Access Control.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#60697b] font-sans antialiased selection:bg-[#b02d3a] selection:text-white">
      <Demo15Navbar />

      <main className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-32 -right-40 h-[34rem] w-[34rem] rounded-full bg-[#b02d3a]/[0.045] blur-3xl" />
          <div className="absolute top-[52rem] -left-48 h-[30rem] w-[30rem] rounded-full bg-[#164e63]/[0.06] blur-3xl" />
          <div className="absolute top-[115rem] right-[-10rem] h-[26rem] w-[26rem] rotate-12 rounded-[35%] bg-[#fab758]/[0.07] blur-2xl" />
          <div className="absolute top-[175rem] left-[-8rem] h-[24rem] w-[24rem] rounded-[40%] bg-[#b02d3a]/[0.035] blur-2xl" />
        </div>
        <Demo15Hero />
        <Demo15Steps />
        <Demo15Services />
        <Demo15Clients />
        <Demo15ContactInfo />
      </main>
      <Demo21Footer />
      <ScrollToTop />
    </div>
  )
}
