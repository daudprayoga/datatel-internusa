import type { ComponentType, ReactNode } from "react"
import { ArrowRight, Phone } from "lucide-react"
import { Demo21Navbar } from "@/components/demo21/navbar"
import { Demo21Footer } from "@/components/demo21/footer"
import { ScrollToTop } from "@/components/demo21/scroll-to-top"
import { PageHeader } from "@/components/demo21/page-header"
import {
  Section,
  SectionHeading,
  Button,
  Card,
  FeatureCard,
  CheckList,
  CtaBanner,
  DotShape,
  CircleShape,
} from "@/components/sandbox/ui"
import { cn } from "@/lib/utils"

type IconType = ComponentType<{ className?: string }>

export interface ServiceFeature {
  title: string
  desc: string
  icon: IconType
}

export interface ServicePageData {
  title: string
  description: string
  heroImage?: string
  overview: {
    eyebrow: string
    title: string
    lead: string
    paragraphs: ReactNode[]
    note?: { title: string; text: ReactNode }
  }
  highlights: {
    title: string
    icon: IconType
    /** Either rich items (icon + title + desc) or a simple checklist. */
    items?: ServiceFeature[]
    checklist?: string[]
    footnote?: ReactNode
  }
  sections: {
    eyebrow: string
    title: string
    description?: string
    items: ServiceFeature[]
    columns?: 3 | 4
  }[]
  cta?: { title: string; description: string }
}

/** Shared Sandbox layout for every page under /services/*. */
export function ServicePage({ data }: { data: ServicePageData }) {
  const { overview, highlights, sections, cta } = data
  const HighlightIcon = highlights.icon

  return (
    <div className="min-h-screen bg-white text-sb-body font-sans antialiased selection:bg-sb-primary selection:text-white">
      <Demo21Navbar />

      <main>
        <PageHeader
          badge={data.heroImage ? undefined : "Our Services"}
          title={data.title}
          description={data.description}
          backgroundImage={data.heroImage}
          breadcrumb={[{ label: "Services", href: "/services" }, { label: data.title }]}
        />

        {/* 1 ── Overview (Sandbox "Who Are We?" two-column block) */}
        <Section>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="sb-eyebrow sb-eyebrow-primary">{overview.eyebrow}</span>
              <h2 className="sb-display mb-5">{overview.title}</h2>
              <p className="sb-lead mb-5">{overview.lead}</p>
              <div className="space-y-4">
                {overview.paragraphs.map((p, i) => (
                  <p key={i} className="sb-text">
                    {p}
                  </p>
                ))}
              </div>

              {overview.note && (
                <div className="mt-6 rounded-[var(--radius-sb)] bg-sb-soft-primary border-l-4 border-sb-primary px-5 py-4">
                  <div className="text-[0.9rem] font-bold text-sb-navy mb-1">{overview.note.title}</div>
                  <p className="sb-text !text-[0.9rem]">{overview.note.text}</p>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/hubungi-kami" icon={<ArrowRight className="w-4 h-4 order-last" />}>
                  Konsultasikan Bersama Kami
                </Button>
                <Button href="tel:+622187734050" variant="white" icon={<Phone className="w-4 h-4 text-sb-primary" />}>
                  +62 21 8773 4050
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <CircleShape className="w-20 h-20 -top-6 -right-4" />
              <DotShape className="-bottom-6 -left-6" />
              <Card lift={false} className="relative">
                <div className="sb-card-body">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="sb-icon">
                      <HighlightIcon className="w-5 h-5" />
                    </span>
                    <h3 className="sb-title">{highlights.title}</h3>
                  </div>

                  {highlights.items && (
                    <ul className="space-y-5">
                      {highlights.items.map((item) => {
                        const Icon = item.icon
                        return (
                          <li key={item.title} className="flex gap-4">
                            <span className="sb-icon sb-icon-sm">
                              <Icon className="w-4 h-4" />
                            </span>
                            <div>
                              <div className="text-[0.95rem] font-bold text-sb-navy">{item.title}</div>
                              <p className="text-[0.85rem] leading-relaxed text-sb-body mt-0.5">{item.desc}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  )}

                  {highlights.checklist && <CheckList items={highlights.checklist} />}

                  {highlights.footnote && (
                    <div className="mt-6 pt-5 border-t border-sb-border text-[0.85rem] text-sb-body">
                      {highlights.footnote}
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </Section>

        {/* 2 ── Feature grids */}
        {sections.map((section, idx) => (
          <Section key={section.title} tone={idx % 2 === 0 ? "light" : "white"}>
            <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
            <div
              className={cn(
                "grid gap-6 md:gap-8 sm:grid-cols-2",
                section.columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
              )}
            >
              {section.items.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.desc} />
              ))}
            </div>
          </Section>
        ))}

        {/* 3 ── CTA */}
        <div className="pt-16 md:pt-24 bg-white">
          {cta && <CtaBanner title={cta.title} description={cta.description} />}
        </div>
      </main>

      <Demo21Footer />
      <ScrollToTop />
    </div>
  )
}
