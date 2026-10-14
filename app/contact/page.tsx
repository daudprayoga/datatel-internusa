import type { Metadata } from "next"
import { Demo21Navbar } from "@/components/demo21/navbar"
import { Demo21Footer } from "@/components/demo21/footer"
import { ScrollToTop } from "@/components/demo21/scroll-to-top"
import { PageHeader } from "@/components/demo21/page-header"
import { Demo15ContactInfo } from "@/components/demo15/contact-info"

export const metadata: Metadata = {
  title: "Contact Us | PT. Datatel Inter Nusa",
  description:
    "Hubungi PT. Datatel Inter Nusa untuk konsultasi kebutuhan infrastruktur jaringan, Data Center, Structured Cabling, Digital CCTV, dan Access Control.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-sb-body font-sans antialiased selection:bg-sb-primary selection:text-white">
      <Demo21Navbar />

      <main>
        {/* Page Header — Sandbox Style */}
        <PageHeader
          badge="Get in Touch"
          title="Contact Us"
          description="Have questions or need enterprise IT infrastructure consulting? Our team is ready to help."
          breadcrumb={[{ label: "Contact Us" }]}
        />

        <Demo15ContactInfo />
      </main>

      <Demo21Footer />
      <ScrollToTop />
    </div>
  )
}
