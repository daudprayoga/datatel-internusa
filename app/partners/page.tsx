import type { Metadata } from "next"
import {
  ShieldCheck,
  Award,
  Handshake,
} from "lucide-react"

import {
  getAllPartnerCategories,
  getTotalPartnerCount,
} from "@/lib/partners-data"
import { Demo21Navbar } from "@/components/demo21/navbar"
import { Demo21Footer } from "@/components/demo21/footer"
import { ScrollToTop } from "@/components/demo21/scroll-to-top"
import { PageHeader } from "@/components/demo21/page-header"
import {
  Section,
  SectionHeading,
  Card,
  CtaBanner,
} from "@/components/sandbox/ui"
import { PartnerFilterDirectory } from "@/components/partners/partner-directory"
import { PartnerMarquee } from "@/components/partners/partner-marquee"

export const metadata: Metadata = {
  title: "Our Strategic Partners | PT. Datatel Inter Nusa",
  description:
    "Daftar mitra prinsipal teknologi global PT. Datatel Inter Nusa di bidang Structured Cabling, Enterprise Networking, Data Center, Digital CCTV, Access Control, dan Wireless Communications.",
  alternates: {
    canonical: "/partners",
  },
}

export default function PartnersPage() {
  const categories = getAllPartnerCategories()
  const totalPartners = getTotalPartnerCount()

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

        {/* 1 ── Trust Statistics Banner */}
        <Section tone="white" className="!pb-6 !pt-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="rounded-2xl bg-sb-gray/70 border border-sb-border p-6 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-sb-navy tracking-tight mb-1">
                {totalPartners}+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-sb-body">
                Mitra Prinsipal Global
              </div>
              <div className="text-[0.75rem] text-sb-muted mt-1">
                Pabrikan hardware &amp; software resmi
              </div>
            </div>

            <div className="rounded-2xl bg-sb-gray/70 border border-sb-border p-6 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-sb-primary tracking-tight mb-1">
                6
              </div>
              <div className="text-xs sm:text-sm font-semibold text-sb-body">
                Domain Solusi Teknologi
              </div>
              <div className="text-[0.75rem] text-sb-muted mt-1">
                Spesialisasi integrasi menyeluruh
              </div>
            </div>

            <div className="rounded-2xl bg-sb-gray/70 border border-sb-border p-6 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-sb-navy tracking-tight mb-1">
                Tier-1
              </div>
              <div className="text-xs sm:text-sm font-semibold text-sb-body">
                Authorized System Integrator
              </div>
              <div className="text-[0.75rem] text-sb-muted mt-1">
                Engineer bersertifikasi prinsipal
              </div>
            </div>

            <div className="rounded-2xl bg-sb-gray/70 border border-sb-border p-6 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 tracking-tight mb-1">
                100%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-sb-body">
                Garansi Resmi &amp; Kinerja
              </div>
              <div className="text-[0.75rem] text-sb-muted mt-1">
                Garansi sistem hingga 25 tahun
              </div>
            </div>
          </div>
        </Section>

        {/* 2 ── Brand Logo Marquee Showcase (Sandbox Clients Block style) */}
        <section className="pt-4 pb-4">
          <PartnerMarquee />
        </section>

        {/* 3 ── Interactive All Partners Directory */}
        <Section tone="light" className="!pt-14 !pb-16" id="directory">
          <SectionHeading
            eyebrow="Interactive Directory"
            title="Daftar Lengkap Mitra Prinsipal Berdasarkan Domain"
            description="Cari brand manufaktur atau pilih tab kategori untuk melihat daftar lengkap mitra teknologi strategis PT. Datatel Inter Nusa."
          />

          <PartnerFilterDirectory categories={categories} />
        </Section>

        {/* 4 ── Why Partner With Datatel */}
        <Section tone="white" className="!pt-14 !pb-14">
          <SectionHeading
            eyebrow="Partnership Values"
            title="Mengapa Memilih Solusi Mitra Melalui Datatel?"
            description="Sebagai system integrator berpengalaman sejak 2005, kami memberikan nilai tambah nyata melebihi sekadar pengadaan perangkat."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="h-full">
              <div className="sb-card-body">
                <span className="sb-icon mb-5">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <h4 className="sb-title mb-2.5 !text-base">Engineer Bersertifikasi Resmi Prinsipal</h4>
                <p className="sb-text !text-[0.9rem]">
                  Seluruh implementasi dikerjakan oleh engineer pemegang sertifikasi Cisco CCNP/CCNA, Panduit Certified Installer, CDCP (Data Center), dan Suprema Certified Engineer.
                </p>
              </div>
            </Card>

            <Card className="h-full">
              <div className="sb-card-body">
                <span className="sb-icon mb-5">
                  <Handshake className="w-5 h-5" />
                </span>
                <h4 className="sb-title mb-2.5 !text-base">Akses Langsung Prinsipal &amp; SLA Cepat</h4>
                <p className="sb-text !text-[0.9rem]">
                  Kemitraan tingkat atas memberi kami jalur eskalasi dukungan teknis prioritas langsung ke lab pabrikan, ketersediaan unit pengganti darurat (advance replacement), dan garansi originalitas 100%.
                </p>
              </div>
            </Card>

            <Card className="h-full">
              <div className="sb-card-body">
                <span className="sb-icon mb-5">
                  <Award className="w-5 h-5" />
                </span>
                <h4 className="sb-title mb-2.5 !text-base">Garansi Kinerja Sistem hingga 25 Tahun</h4>
                <p className="sb-text !text-[0.9rem]">
                  Khusus instalasi pengkabelan terstruktur (SCS), pengujian Fluke Networks kami didaftarkan langsung ke prinsipal (Panduit/CommScope) untuk menerbitkan sertifikat garansi sistem resmi 25 tahun.
                </p>
              </div>
            </Card>
          </div>
        </Section>

        {/* 5 ── CTA Banner */}
        <CtaBanner
          title="Wujudkan Infrastruktur Jaringan Enterprise Bersama Mitra Resmi Terpercaya"
          description="Konsultasikan desain arsitektur IT, kebutuhan hardware, dan sistem integrasi enterprise Anda bersama para certified engineer PT. Datatel Inter Nusa."
          primary={{ label: "Hubungi Tim Datatel", href: "/contact" }}
          secondary={{ label: "sales@datatel-internusa.com", href: "mailto:sales@datatel-internusa.com" }}
        />
      </main>

      <Demo21Footer />
      <ScrollToTop />
    </div>
  )
}
