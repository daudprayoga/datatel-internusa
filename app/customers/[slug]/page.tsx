import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import {
  Factory,
  Flame,
  Landmark,
  Radio,
  Building2,
  BadgeDollarSign,
  Briefcase,
  ChevronRight,
} from "lucide-react"

import {
  customerSectors,
  getCustomerSector,
  getAllCustomerSectors,
  type CustomerSector,
} from "@/lib/customers-data"
import { Demo21Navbar } from "@/components/demo21/navbar"
import { Demo21Footer } from "@/components/demo21/footer"
import { ScrollToTop } from "@/components/demo21/scroll-to-top"
import { PageHeader } from "@/components/demo21/page-header"
import {
  Section,
  SectionHeading,
  CtaBanner,
} from "@/components/sandbox/ui"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const params: { slug: string }[] = []
  customerSectors.forEach((sector) => {
    params.push({ slug: sector.slug })
    if (sector.alternateSlugs) {
      sector.alternateSlugs.forEach((alt) => {
        params.push({ slug: alt })
      })
    }
  })
  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const sector = getCustomerSector(slug)

  if (!sector) {
    return {
      title: "Our Valuable Customers | PT. Datatel Inter Nusa",
    }
  }

  return {
    title: `${sector.title} | Our Valuable Customers | PT. Datatel Inter Nusa`,
    description: sector.shortDesc,
  }
}

const sectorIconMap = {
  Factory,
  Flame,
  Landmark,
  Radio,
  Building2,
  BadgeDollarSign,
}

export default async function CustomerSectorPage({ params }: PageProps) {
  const { slug } = await params
  const sector = getCustomerSector(slug)

  if (!sector) {
    notFound()
  }

  const SectorIcon = sectorIconMap[sector.iconName] || Briefcase
  const allSectors = getAllCustomerSectors()
  const otherSectors = allSectors.filter((s) => s.slug !== sector.slug)

  return (
    <div className="min-h-screen bg-white text-sb-body font-sans antialiased selection:bg-sb-primary selection:text-white">
      <Demo21Navbar />

      <main>
        {/* Page Header */}
        <PageHeader
          badge="Our Valuable Customer"
          title={sector.title}
          description={`Daftar klien dan mitra berharga PT. Datatel Inter Nusa di sektor ${sector.title}.`}
          breadcrumb={[
            { label: "Our Valuable Customer", href: "/customers" },
            { label: sector.navLabel },
          ]}
        />

        {/* Clients Roster Showcase */}
        <Section tone="white" className="!pt-14 !pb-16" id="clients">
          <SectionHeading
            eyebrow="Valued Client Portfolio"
            title={
              <>
                Klien Kami di Sektor <span className="text-sb-primary">{sector.title}</span>
              </>
            }
            description={`Berikut adalah daftar perusahaan dan institusi terkemuka di sektor ${sector.title} yang mempercayakan kebutuhan infrastruktur telekomunikasi dan jaringan kepada PT. Datatel Inter Nusa.`}
          />

          {/* If sector has subcategories (like Hotel & Resort vs Hospital & Others) */}
          {sector.subcategories && sector.subcategories.length > 0 ? (
            <div className="space-y-10">
              {sector.subcategories.map((sub, sIdx) => (
                <div key={sIdx} className="bg-sb-gray/40 rounded-[var(--radius-sb)] border border-sb-border p-6 md:p-8 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 border-b border-sb-border">
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-sb-navy flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-sb-primary" />
                        {sub.name}
                      </h4>
                      {sub.description && (
                        <p className="text-sm text-[#737f94] mt-1">{sub.description}</p>
                      )}
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-sb-soft-primary text-sb-primary text-xs font-semibold">
                      {sub.clients.length} Clients
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {sub.clients.map((client, cIdx) => (
                      <div
                        key={cIdx}
                        className="group flex items-center gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 hover:border-sb-primary/50 hover:shadow-xs transition-all"
                      >
                        <div className="w-9 h-9 rounded-lg bg-sb-soft-primary/70 border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:bg-sb-primary group-hover:text-white transition-all text-sb-primary">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-bold text-sb-navy group-hover:text-sb-primary transition-colors leading-snug">
                            {client}
                          </div>
                          <div className="text-[0.72rem] text-sb-muted font-medium uppercase tracking-wider mt-0.5">
                            {sub.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Standard Grid for sectors without subcategories */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {sector.clients.map((client, cIdx) => (
                <div
                  key={cIdx}
                  className="group flex items-center gap-3.5 p-4 rounded-xl bg-white border border-sb-border hover:border-sb-primary/50 hover:shadow-sm hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-sb-soft-primary/80 border border-sb-border/60 flex items-center justify-center shrink-0 group-hover:bg-sb-primary group-hover:text-white transition-all text-sb-primary">
                    <SectorIcon className="w-5 h-5 transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold text-sb-navy group-hover:text-sb-primary transition-colors leading-snug">
                      {client}
                    </div>
                    <div className="text-[0.72rem] text-sb-muted font-medium uppercase tracking-wider mt-0.5">
                      {sector.navLabel.split(",")[0]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* Explore Other Industry Sectors */}
        <Section tone="light" className="!pt-12 !pb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="sb-eyebrow sb-eyebrow-primary">Industri Lainnya</span>
              <h3 className="sb-display !text-2xl md:!text-3xl">
                Jelajahi Sektor Klien Kami Lainnya
              </h3>
            </div>
            <Link
              href="/customers"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sb-primary hover:text-sb-primary/80 transition-colors"
            >
              Lihat Semua Klien &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {otherSectors.map((other) => {
              const OtherIcon = sectorIconMap[other.iconName] || Briefcase
              return (
                <Link
                  key={other.slug}
                  href={`/customers/${other.slug}`}
                  className="group block p-5 rounded-2xl bg-white border border-sb-border hover:border-sb-primary/40 hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-sb-soft-primary flex items-center justify-center text-sb-primary mb-3.5 group-hover:scale-110 transition-transform">
                    <OtherIcon className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-sb-navy text-sm mb-1.5 group-hover:text-sb-primary transition-colors line-clamp-2">
                    {other.title}
                  </h5>
                  <div className="text-xs font-bold text-sb-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Lihat Klien <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              )
            })}
          </div>
        </Section>

        {/* CTA Banner */}
        <CtaBanner
          title={`Butuh Solusi Infrastruktur Jaringan untuk ${sector.title}?`}
          description="Tim engineer bersertifikasi PT. Datatel Inter Nusa siap melakukan site assessment, network planning, dan instalasi berstandar industri internasional."
          primary={{ label: "Konsultasi Kebutuhan", href: "/hubungi-kami" }}
          secondary={{ label: "sales@datatel-internusa.com", href: "mailto:sales@datatel-internusa.com" }}
        />
      </main>

      <Demo21Footer />
      <ScrollToTop />
    </div>
  )
}
