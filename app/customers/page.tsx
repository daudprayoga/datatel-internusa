import type { Metadata } from "next"
import Link from "next/link"
import {
  Factory,
  Flame,
  Landmark,
  Radio,
  Building2,
  BadgeDollarSign,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Search,
  Building,
  Award,
  Layers,
  Users,
} from "lucide-react"

import {
  customerSectors,
  getAllCustomerSectors,
  getTotalClientCount,
  type CustomerSector,
} from "@/lib/customers-data"
import { Demo21Navbar } from "@/components/demo21/navbar"
import { Demo21Footer } from "@/components/demo21/footer"
import { ScrollToTop } from "@/components/demo21/scroll-to-top"
import { PageHeader } from "@/components/demo21/page-header"
import {
  Section,
  SectionHeading,
  Button,
  Card,
  CtaBanner,
  DotShape,
  CircleShape,
} from "@/components/sandbox/ui"
import { CustomerFilterDirectory } from "@/components/customers/customer-directory"

export const metadata: Metadata = {
  title: "Our Valuable Customers | PT. Datatel Inter Nusa",
  description:
    "Daftar klien terkemuka PT. Datatel Inter Nusa di sektor Manufaktur, Energi & Pertambangan, Pemerintah & BUMN, Telekomunikasi & IT, Perhotelan, Rumah Sakit, dan Layanan Keuangan.",
}

const sectorIconMap = {
  Factory,
  Flame,
  Landmark,
  Radio,
  Building2,
  BadgeDollarSign,
}

export default function CustomersPage() {
  const sectors = getAllCustomerSectors()
  const totalClients = getTotalClientCount()

  return (
    <div className="min-h-screen bg-white text-sb-body font-sans antialiased selection:bg-sb-primary selection:text-white">
      <Demo21Navbar />

      <main>
        {/* Page Header */}
        <PageHeader
          badge="Trusted Enterprise Portfolio"
          title="Our Valuable Customers"
          description="Sejak 2005, lebih dari 90+ institusi pemerintahan, BUMN, industri manufaktur, energi, telekomunikasi, perhotelan, dan perbankan telah mempercayakan sistem jaringannya kepada PT. Datatel Inter Nusa."
          breadcrumb={[{ label: "Our Valuable Customer" }]}
        />

        {/* 1 ── Trust Statistics Banner */}
        <Section tone="white" className="!pb-6 !pt-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="rounded-2xl bg-sb-gray/70 border border-sb-border p-6 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-sb-navy tracking-tight mb-1">
                90+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-sb-body">
                Klien Korporasi &amp; Lembaga
              </div>
              <div className="text-[0.75rem] text-sb-muted mt-1">
                Tersebar di seluruh Indonesia
              </div>
            </div>

            <div className="rounded-2xl bg-sb-gray/70 border border-sb-border p-6 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-sb-primary tracking-tight mb-1">
                6
              </div>
              <div className="text-xs sm:text-sm font-semibold text-sb-body">
                Sektor Industri Utama
              </div>
              <div className="text-[0.75rem] text-sb-muted mt-1">
                Spesialisasi kebutuhan spesifik
              </div>
            </div>

            <div className="rounded-2xl bg-sb-gray/70 border border-sb-border p-6 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-sb-navy tracking-tight mb-1">
                20+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-sb-body">
                Tahun Pengalaman
              </div>
              <div className="text-[0.75rem] text-sb-muted mt-1">
                Track record sejak tahun 2005
              </div>
            </div>

            <div className="rounded-2xl bg-sb-gray/70 border border-sb-border p-6 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 tracking-tight mb-1">
                100%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-sb-body">
                Kepatuhan Standar
              </div>
              <div className="text-[0.75rem] text-sb-muted mt-1">
                ANSI/TIA/EIA, ISO/IEC, BS EN
              </div>
            </div>
          </div>
        </Section>

        {/* 2 ── 6 Industry Sectors Grid */}
        <Section tone="white" className="!pt-8 !pb-14" id="sectors">
          <SectionHeading
            eyebrow="Industry Specialization"
            title="6 Sektor Industri Klien Datatel"
            description="Setiap industri memiliki tantangan dan kebutuhan infrastruktur jaringan yang unik. Kami memiliki pengalaman mendalam dalam merancang solusi yang tepat sasaran."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sectors.map((sector) => {
              const Icon = sectorIconMap[sector.iconName] || Building
              const sampleClients = sector.clients.slice(0, 4)
              const remainingCount = sector.clients.length - 4

              return (
                <div
                  key={sector.slug}
                  className="group rounded-[var(--radius-sb)] bg-white border border-sb-border hover:border-sb-primary/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
                >
                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-sb-soft-primary text-sb-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-sb-primary group-hover:text-white transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-sb-gray text-sb-navy text-xs font-bold border border-slate-200">
                        {sector.clients.length} Klien
                      </span>
                    </div>

                    <h3 className="sb-title !text-lg mb-2 group-hover:text-sb-primary transition-colors">
                      <Link href={`/customers/${sector.slug}`}>
                        {sector.title}
                      </Link>
                    </h3>

                    <p className="sb-text !text-[0.875rem] text-[#60697b] mb-6 flex-1">
                      {sector.shortDesc}
                    </p>

                    {/* Sample Client Chips */}
                    <div className="pt-4 border-t border-slate-100 mb-6">
                      <div className="text-[0.72rem] font-bold text-sb-muted uppercase tracking-wider mb-2.5">
                        Klien Terpilih:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {sampleClients.map((client, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[0.78rem] text-sb-body font-medium"
                          >
                            {client}
                          </span>
                        ))}
                        {remainingCount > 0 && (
                          <span className="inline-block px-2 py-1 rounded-md bg-sb-soft-primary text-[0.75rem] text-sb-primary font-bold">
                            +{remainingCount} lainnya
                          </span>
                        )}
                      </div>
                    </div>

                    <Link
                      href={`/customers/${sector.slug}`}
                      className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-sb-primary text-sb-navy hover:text-white text-xs font-bold transition-all group-hover:border-transparent"
                    >
                      <span>Lihat Daftar Lengkap Klien</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </Section>

        {/* 3 ── Interactive All Clients Directory */}
        <Section tone="light" className="!pt-14 !pb-16" id="directory">
          <SectionHeading
            eyebrow="Interactive Directory"
            title="Daftar Lengkap Klien Berdasarkan Sektor"
            description="Cari nama perusahaan atau pilih tab sektor untuk melihat daftar klien berharga PT. Datatel Inter Nusa."
          />

          <CustomerFilterDirectory sectors={sectors} />
        </Section>

        {/* 4 ── Why Industry Leaders Choose Datatel */}
        <Section tone="white" className="!pt-14 !pb-14">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Mengapa Pemimpin Industri Memilih Datatel?"
            description="Komitmen kami terhadap keunggulan teknis, sertifikasi standar internasional, dan pelayanan purna jual menjadi pondasi kemitraan jangka panjang."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="h-full">
              <div className="sb-card-body">
                <span className="sb-icon mb-5">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <h4 className="sb-title mb-2.5 !text-base">Standar Internasional Bersertifikasi</h4>
                <p className="sb-text !text-[0.9rem]">
                  Seluruh instalasi pengkabelan dan jaringan kami mengikuti pedoman ANSI/TIA/EIA 568-B, BS EN 50173-1:2011, serta IEC 60794 dengan uji sertifikasi Fluke Networks bergaransi hingga 25 tahun.
                </p>
              </div>
            </Card>

            <Card className="h-full">
              <div className="sb-card-body">
                <span className="sb-icon mb-5">
                  <Layers className="w-5 h-5" />
                </span>
                <h4 className="sb-title mb-2.5 !text-base">Dokumentasi SCS &amp; As-Built Drawing</h4>
                <p className="sb-text !text-[0.9rem]">
                  Setiap proyek dilengkapi dengan dokumentasi menyeluruh: penomoran label terstandarisasi, peta layout as-built, laporan loss optik OTDR, dan skema konektivitas rak server yang rapi.
                </p>
              </div>
            </Card>

            <Card className="h-full">
              <div className="sb-card-body">
                <span className="sb-icon mb-5">
                  <Award className="w-5 h-5" />
                </span>
                <h4 className="sb-title mb-2.5 !text-base">Solusi Turnkey End-to-End</h4>
                <p className="sb-text !text-[0.9rem]">
                  Dari konsultasi konsep, pengadaan perangkat aktif/pasif, instalasi lapangan di medan berat, hingga pemeliharaan berkala — kami menyediakan solusi satu atap yang siap pakai.
                </p>
              </div>
            </Card>
          </div>
        </Section>

        {/* 5 ── CTA Banner */}
        <CtaBanner
          title="Percayakan Kebutuhan Jaringan Enterprise Anda Kepada Kami"
          description="Konsultasikan desain infrastruktur IT, structured cabling, dan data center Anda bersama para engineer berpengalaman PT. Datatel Inter Nusa."
          primary={{ label: "Hubungi Tim Datatel", href: "/hubungi-kami" }}
          secondary={{ label: "sales@datatel-internusa.com", href: "mailto:sales@datatel-internusa.com" }}
        />
      </main>

      <Demo21Footer />
      <ScrollToTop />
    </div>
  )
}
