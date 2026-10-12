import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PageHeaderProps {
  badge?: string
  title: string
  description?: string
  breadcrumb?: { label: string; href?: string }[]
}

/**
 * Page title block — Sandbox `services.html` / `about.html` style:
 * soft-primary background, centered display heading, lead text, breadcrumb.
 */
export function PageHeader({ badge, title, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-sb-soft-primary pt-32 pb-14 md:pt-40 md:pb-20">
      {/* Sandbox decorative shapes */}
      <div aria-hidden className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-sb-pale-primary/70" />
      <div
        aria-hidden
        className="absolute bottom-8 right-10 w-24 h-24 opacity-60 hidden md:block"
        style={{
          backgroundImage: "radial-gradient(#fab758 2px, transparent 2.5px)",
          backgroundSize: "0.75rem 0.75rem",
        }}
      />

      <div className="sb-container relative text-center">
        <div className="max-w-3xl mx-auto">
          {badge && <span className="sb-eyebrow sb-eyebrow-primary">{badge}</span>}

          <h1 className="text-[2.2rem] sm:text-[2.6rem] lg:text-[3rem] font-bold leading-[1.15] text-sb-navy tracking-[-0.01em] mb-4">
            {title}
          </h1>

          {description && <p className="sb-lead max-w-2xl mx-auto">{description}</p>}

          {breadcrumb && breadcrumb.length > 0 && (
            <nav aria-label="Breadcrumb" className="mt-6 flex items-center justify-center gap-1.5 text-[0.85rem] font-semibold">
              <Link href="/" className="text-sb-body hover:text-sb-primary transition-colors">
                Home
              </Link>
              {breadcrumb.map((bc, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-sb-muted" />
                  {bc.href ? (
                    <Link href={bc.href} className="text-sb-body hover:text-sb-primary transition-colors">
                      {bc.label}
                    </Link>
                  ) : (
                    <span className="text-sb-primary">{bc.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
        </div>
      </div>
    </section>
  )
}
