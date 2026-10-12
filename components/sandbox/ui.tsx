/**
 * Sandbox UI kit (React) — mirrors the sandbox320 template.
 * Use these primitives on every public page so cards, buttons, headings
 * and spacing stay identical across the whole website.
 * Styling lives in app/globals.css (`.sb-*` classes).
 */
import Link from "next/link"
import Image from "next/image"
import type { ComponentType, ReactNode } from "react"
import { Check, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Tone = "white" | "light" | "soft"

const toneClass: Record<Tone, string> = {
  white: "bg-white",
  light: "bg-sb-gray/60",
  soft: "bg-sb-soft-primary",
}

/* ── Layout ───────────────────────────────────────────────────────────── */

export function Section({
  children,
  tone = "white",
  className,
  id,
}: {
  children: ReactNode
  tone?: Tone
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn("sb-section relative overflow-hidden", toneClass[tone], className)}>
      <div className="sb-container">{children}</div>
    </section>
  )
}

/* ── Headings ─────────────────────────────────────────────────────────── */

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "center" | "left"
  className?: string
}) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl",
        "mb-12 md:mb-14",
        className,
      )}
    >
      {eyebrow && <h2 className="sb-eyebrow">{eyebrow}</h2>}
      <h3 className="sb-display">{title}</h3>
      {description && <p className="sb-text mt-4">{description}</p>}
    </div>
  )
}

/* ── Buttons ──────────────────────────────────────────────────────────── */

type ButtonVariant = "primary" | "soft" | "outline" | "white"

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className,
  external,
}: {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  size?: "sm" | "md" | "lg"
  icon?: ReactNode
  className?: string
  external?: boolean
}) {
  const cls = cn(
    "sb-btn",
    `sb-btn-${variant}`,
    size === "sm" && "sb-btn-sm",
    size === "lg" && "sb-btn-lg",
    className,
  )
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls}>
        {icon}
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {icon}
      {children}
    </Link>
  )
}

export function MoreLink({ href, children = "Learn More" }: { href: string; children?: ReactNode }) {
  return (
    <Link href={href} className="sb-more group">
      {children}
      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}

/* ── Cards ────────────────────────────────────────────────────────────── */

export function Card({
  children,
  className,
  lift = true,
}: {
  children: ReactNode
  className?: string
  lift?: boolean
}) {
  return <div className={cn("sb-card", lift && "sb-lift", className)}>{children}</div>
}

type IconType = ComponentType<{ className?: string }>

/** Feature card: lucide icon in a soft circle + title + description. */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  align = "left",
}: {
  icon: IconType
  title: string
  description: string
  align?: "left" | "center"
}) {
  return (
    <Card className="h-full">
      <div className={cn("sb-card-body", align === "center" && "text-center")}>
        <span className={cn("sb-icon mb-5", align === "center" && "mx-auto")}>
          <Icon className="w-5 h-5" />
        </span>
        <h4 className="sb-title mb-2">{title}</h4>
        <p className="sb-text !text-[0.9rem]">{description}</p>
      </div>
    </Card>
  )
}

/** Service card from Sandbox "What We Do?" (lineal SVG icon). */
export function ServiceCard({
  icon,
  title,
  description,
  href,
}: {
  icon: string
  title: string
  description: string
  href: string
}) {
  return (
    <Card className="h-full text-center">
      <div className="sb-card-body flex flex-col h-full">
        <Image src={icon} alt="" width={52} height={52} className="sb-icon-svg mx-auto mb-4" />
        <h4 className="sb-title mb-2">{title}</h4>
        <p className="sb-text !text-[0.9rem] mb-4 flex-1">{description}</p>
        <div>
          <MoreLink href={href} />
        </div>
      </div>
    </Card>
  )
}

/* ── Lists ────────────────────────────────────────────────────────────── */

export function CheckList({
  items,
  columns = 1,
  className,
}: {
  items: string[]
  columns?: 1 | 2
  className?: string
}) {
  return (
    <ul className={cn("grid gap-x-6 gap-y-3", columns === 2 && "sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 sb-text !text-[0.9rem]">
          <span className="sb-bullet">
            <Check className="w-3 h-3" strokeWidth={3} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/* ── Decorative shapes (Sandbox .shape .bg-dot / .rounded-circle) ───── */

export function DotShape({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("absolute w-20 h-20 pointer-events-none opacity-70", className)}
      style={{
        backgroundImage: "radial-gradient(#fab758 2px, transparent 2.5px)",
        backgroundSize: "0.75rem 0.75rem",
      }}
    />
  )
}

export function CircleShape({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("absolute rounded-full bg-sb-pale-primary pointer-events-none", className)} />
  )
}

/* ── CTA banner ───────────────────────────────────────────────────────── */

export function CtaBanner({
  title,
  description,
  primary = { label: "Hubungi Kami", href: "/contact" },
  secondary = { label: "sales@datatel-internusa.com", href: "mailto:sales@datatel-internusa.com" },
}: {
  title: string
  description?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <Section tone="white" className="!pt-0">
      <div className="relative rounded-[var(--radius-sb)] bg-sb-soft-primary border border-sb-border px-6 py-12 md:px-14 md:py-14 overflow-hidden">
        <CircleShape className="w-40 h-40 -top-16 -right-16 opacity-70" />
        <DotShape className="-bottom-4 left-6" />
        <div className="relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <div className="flex-1">
            <h3 className="sb-display !text-[1.6rem] md:!text-[1.9rem]">{title}</h3>
            {description && <p className="sb-text mt-3 max-w-2xl">{description}</p>}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={primary.href} icon={<ArrowRight className="w-4 h-4 order-last" />}>
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="white">
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
