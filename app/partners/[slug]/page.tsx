import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  Cable,
  Network,
  Server,
  Video,
  KeyRound,
  Radio,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Briefcase,
  Layers,
  Award,
  Cpu,
} from "lucide-react"

import {
  partnerCategories,
  getPartnerCategory,
  getAllPartnerCategories,
  type PartnerCategory,
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

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const params: { slug: string }[] = []
  partnerCategories.forEach((category) => {
    params.push({ slug: category.slug })
    if (category.alternateSlugs) {
      category.alternateSlugs.forEach((alt) => {
        params.push({ slug: alt })
      })
    }
  })
  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getPartnerCategory(slug)

  if (!category) {
    return {
      title: "Our Strategic Partners | PT. Datatel Inter Nusa",
    }
  }

  return {
    title: `${category.title} | Our Strategic Partners | PT. Datatel Inter Nusa`,
    description: category.shortDesc,
    alternates: {
      canonical: `/partners/${category.slug}`,
    },
  }
}

const categoryIconMap = {
  Cable,
  Network,
  Server,
  Video,
  KeyRound,
  Radio,
}

const solutionIconMap = {
  Cable,
  Network,
  Server,
  Video,
  KeyRound,
  Radio,
  ShieldCheck,
  Cpu,
}

export default async function PartnerCategoryDetailPage({ params }: PageProps) {
  const { slug } = await params
  const category = getPartnerCategory(slug)

  if (!category) {
    notFound()
  }

  const CategoryIcon = categoryIconMap[category.iconName] || Briefcase
  const allCategories = getAllPartnerCategories()
  const otherCategories = allCategories.filter((c) => c.slug !== category.slug)

  return (
    <div className="min-h-screen bg-white text-sb-body font-sans antialiased selection:bg-sb-primary selection:text-white">
      <Demo21Navbar />

      <main>
        {/* Page Header */}
        <PageHeader
          badge="Technology Alliance Domain"
          title={category.title}
          description={category.lead}
          breadcrumb={[
            { label: "Partners", href: "/partners" },
            { label: category.navLabel },
          ]}
        />

        {/* 1 ── Domain Stats & Overview */}
        <Section tone="white" className="!pt-12 !pb-12">
          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {category.stats.map((st, sIdx) => (
              <div
                key={sIdx}
                className="rounded-2xl bg-sb-gray/70 border border-sb-border p-5 text-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-sb-navy tracking-tight mb-1">
                  {st.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-sb-body">
                  {st.label}
                </div>
              </div>
            ))}
          </div>

          {/* Overview text */}
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <h3 className="sb-title !text-2xl text-sb-navy mb-4">
              Komitmen Solusi &amp; Standar Integrasi
            </h3>
            {category.overview.map((para, pIdx) => (
              <p key={pIdx} className="sb-text !text-base leading-relaxed text-[#60697b]">
                {para}
              </p>
            ))}
          </div>
        </Section>

        {/* 2 ── Partners Roster Showcase */}
        <Section tone="light" className="!pt-14 !pb-16" id="partners">
          <SectionHeading
            eyebrow="Authorized Partners"
            title={
              <>
                Mitra Resmi di Domain <span className="text-sb-primary">{category.navLabel}</span>
              </>
            }
            description={`Berikut adalah jajaran prinsipal manufaktur hardware dan software global yang terhubung resmi dengan PT. Datatel Inter Nusa dalam kategori ${category.title}.`}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {category.partners.map((partner, idx) => {
              const TileContent = (
                <div
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-sb-primary/50 hover:shadow-md transition-all duration-300 h-28 sm:h-32 text-center"
                  title={`${partner.name} (${category.navLabel})`}
                >
                  <div className="h-10 sm:h-12 w-full flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={110}
                      height={40}
                      className="max-h-7 sm:max-h-8 w-auto object-contain grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <span className="mt-2 text-xs font-semibold text-sb-navy group-hover:text-sb-primary transition-colors truncate max-w-full block">
                    {partner.name}
                  </span>
                </div>
              )

              if (partner.websiteUrl) {
                return (
                  <a
                    key={`${partner.id}-${idx}`}
                    href={partner.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none focus:ring-2 focus:ring-sb-primary/30 rounded-2xl"
                    title={`Kunjungi website resmi ${partner.name}`}
                  >
                    {TileContent}
                  </a>
                )
              }

              return (
                <div key={`${partner.id}-${idx}`}>
                  {TileContent}
                </div>
              )
            })}
          </div>
        </Section>

        {/* 3 ── Key Solutions Provided in this Category */}
        <Section tone="white" className="!pt-14 !pb-14">
          <SectionHeading
            eyebrow="Key Solutions"
            title="Layanan &amp; Integrasi yang Kami Sediakan"
            description="Solusi end-to-end mulai dari desain teknis, pengadaan lisensi/hardware resmi, penarikan kabel, konfigurasi sistem, hingga pengujian sertifikasi Fluke Networks."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {category.solutions.map((sol, idx) => {
              const SolIcon = solutionIconMap[sol.iconName] || Cpu
              return (
                <Card key={idx} className="h-full">
                  <div className="sb-card-body">
                    <span className="sb-icon mb-5">
                      <SolIcon className="w-5 h-5" />
                    </span>
                    <h4 className="sb-title mb-2.5 !text-base">{sol.title}</h4>
                    <p className="sb-text !text-[0.9rem]">{sol.desc}</p>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Highlights checklist */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-sb-gray/60 border border-sb-border max-w-4xl mx-auto">
            <h4 className="text-base font-bold text-sb-navy mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-sb-primary" />
              Keunggulan Integrasi Datatel di Domain {category.navLabel}:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {category.keyHighlights.map((hl, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-sb-body">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 4 ── Explore Other Technology Domains */}
        <Section tone="light" className="!pt-12 !pb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="sb-eyebrow sb-eyebrow-primary">Domain Lainnya</span>
              <h3 className="sb-display !text-2xl md:!text-3xl">
                Jelajahi Mitra Teknologi Lainnya
              </h3>
            </div>
            <Link
              href="/partners"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sb-primary hover:text-sb-primary/80 transition-colors"
            >
              Lihat Semua Mitra &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {otherCategories.map((other) => {
              const OtherIcon = categoryIconMap[other.iconName] || Briefcase
              return (
                <Link
                  key={other.slug}
                  href={`/partners/${other.slug}`}
                  className="group block p-5 rounded-2xl bg-white border border-sb-border hover:border-sb-primary/40 hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-sb-soft-primary flex items-center justify-center text-sb-primary mb-3.5 group-hover:scale-110 transition-transform">
                    <OtherIcon className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-sb-navy text-sm mb-1.5 group-hover:text-sb-primary transition-colors line-clamp-2">
                    {other.title}
                  </h5>
                  <div className="text-xs font-bold text-sb-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Lihat Mitra <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              )
            })}
          </div>
        </Section>

        {/* 5 ── CTA Banner */}
        <CtaBanner
          title={`Butuh Solusi Resmi ${category.title}?`}
          description="Tim engineer bersertifikasi PT. Datatel Inter Nusa siap mendampingi kebutuhan pengadaan, desain arsitektur, dan instalasi bergaransi resmi prinsipal."
          primary={{ label: "Konsultasi Kebutuhan", href: "/contact" }}
          secondary={{ label: "sales@datatel-internusa.com", href: "mailto:sales@datatel-internusa.com" }}
        />
      </main>

      <Demo21Footer />
      <ScrollToTop />
    </div>
  )
}
