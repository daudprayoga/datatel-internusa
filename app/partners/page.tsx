import type { Metadata } from "next"
import Image from "next/image"
import { Demo21Navbar } from "@/components/demo21/navbar"
import { Demo21Footer } from "@/components/demo21/footer"
import { ScrollToTop } from "@/components/demo21/scroll-to-top"
import { PageHeader } from "@/components/demo21/page-header"
import { Demo15ContactInfo } from "@/components/demo15/contact-info"
import {
  Section,
  SectionHeading,
} from "@/components/sandbox/ui"

export const metadata: Metadata = {
  title: "Our Strategic Partners | PT. Datatel Inter Nusa",
  description:
    "Daftar mitra prinsipal teknologi global PT. Datatel Inter Nusa di bidang Structured Cabling, Enterprise Networking, Data Center, Digital CCTV, Access Control, dan Wireless Communications.",
  alternates: {
    canonical: "/partners",
  },
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white text-sb-body font-sans antialiased selection:bg-sb-primary selection:text-white">
      <Demo21Navbar />

      <main>
        {/* Page Header */}
        <PageHeader
          badge="Global Technology Alliances"
          title="Our Strategic Partners"
          description="Sejak 2005, PT. Datatel Inter Nusa menjalin kemitraan erat dengan para prinsipal dan manufaktur teknologi global terkemuka untuk menghadirkan solusi infrastruktur jaringan, data center, dan sistem keamanan berstandar internasional."
          breadcrumb={[{ label: "Partners" }]}
        />

        <Section tone="light" className="!pb-16 !pt-16">
          <SectionHeading title="Our Partners" description="Mitra teknologi pilihan untuk menghadirkan solusi infrastruktur yang andal dan terintegrasi." />
          <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-4 lg:gap-5">
            {Array.from({ length: 11 }, (_, index) => `c${index + 1}`).map((logo) => (
              <figure key={logo} className="flex h-24 items-center justify-center rounded-2xl border border-slate-100 bg-white px-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <Image src={`/assets/img/brands/${logo}.png`} alt={`${logo} partner logo`} width={180} height={70} className="max-h-11 w-auto object-contain" />
              </figure>
            ))}
          </div>
        </Section>

        <Section tone="white" className="!border-t !border-slate-100 !pt-16 !pb-20">
          <SectionHeading title="Our Highlights Customer" />
          <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-4 lg:gap-5">
            {Array.from({ length: 11 }, (_, index) => `c${index + 1}`).map((logo) => (
              <figure key={logo} className="flex h-24 items-center justify-center rounded-2xl border border-slate-100 bg-white px-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <Image src={`/assets/img/brands/${logo}.png`} alt={`${logo} customer logo`} width={180} height={70} className="max-h-11 w-auto object-contain" />
              </figure>
            ))}
          </div>
        </Section>

        <Demo15ContactInfo />

      </main>

      <Demo21Footer />
      <ScrollToTop />
    </div>
  )
}
