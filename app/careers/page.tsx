import type { Metadata } from "next"
import { Demo21Navbar } from "@/components/demo21/navbar"
import { Demo21Footer } from "@/components/demo21/footer"
import { ScrollToTop } from "@/components/demo21/scroll-to-top"
import { PageHeader } from "@/components/demo21/page-header"
import { Section } from "@/components/sandbox/ui"
import { CareerPositionsList } from "@/components/careers/career-positions"

export const metadata: Metadata = {
  title: "Careers | PT. Datatel Inter Nusa",
  description:
    "Peluang karir terbuka di PT. Datatel Inter Nusa untuk Network Systems Engineer, Structured Cabling, Data Center, Security, dan B2B Development.",
  alternates: {
    canonical: "/careers",
  },
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-sb-body font-sans antialiased selection:bg-sb-primary selection:text-white">
      <Demo21Navbar />

      <main>
        {/* Page Header */}
        <PageHeader
          badge="Careers"
          title="Join Our Team"
          description="Temukan peluang karir dan bertumbuh bersama tim Computer Network & System Integrators PT. Datatel Inter Nusa."
          breadcrumb={[{ label: "Careers" }]}
        />

        {/* Careers Cards Grid (Clean & Simple Reference Style) */}
        <Section tone="light" className="!pt-12 !pb-20">
          <div className="max-w-7xl mx-auto">
            <CareerPositionsList />
          </div>
        </Section>
      </main>

      <Demo21Footer />
      <ScrollToTop />
    </div>
  )
}
