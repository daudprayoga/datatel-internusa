"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Printer, Send, CheckCircle2 } from "lucide-react"
import { serviceNavItems } from "@/components/demo21/navbar"
import { Button } from "@/components/sandbox/ui"

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Vision & Mission", href: "/vision-mission" },
  { label: "Our Valuable Customer", href: "/customers" },
  { label: "Partners", href: "/partners" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news" },
]

/** Footer — Sandbox `_footer-widgets.html` (light variant) with Datatel data. */
export function Demo21Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <footer id="contact" className="bg-sb-gray/70 border-t border-sb-border">
      <div className="sb-container pt-14 md:pt-16 pb-10">
        {/* Top CTA (Sandbox demo21 footer heading + pill button) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-12 border-b border-sb-border">
          <h3 className="sb-display max-w-3xl !text-[1.7rem] md:!text-[2.1rem]">
            Wujudkan infrastruktur IT yang andal bersama PT. Datatel Inter Nusa.
          </h3>
          <Button href="/contact" size="lg" className="shrink-0">
            Hubungi Kami
          </Button>
        </div>

        {/* Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-12">
          {/* Brand */}
          <div className="lg:col-span-3 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-tight text-[#343f52] hover:text-[#3f78e0] transition-colors">
                Datatel
              </span>
            </Link>
            <p className="sb-text !text-[0.9rem]">
              Computer Network &amp; System Integrators sejak 2005. Design, Installation &amp; Maintenance.
            </p>
            <p className="text-[0.8rem] text-sb-ash">
              &copy; 2005 - {new Date().getFullYear()} PT. Datatel Inter Nusa.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Get in touch */}
          <div className="lg:col-span-3">
            <h4 className="sb-title !text-base mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-[0.9rem] text-sb-body">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-sb-primary shrink-0" />
                <address className="not-italic leading-relaxed">
                  Jl. Penjernihan I No.30
                  <br />
                  Bendungan Hilir, Jakarta 10210
                </address>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-sb-primary shrink-0" />
                <a href="tel:+622157901453" className="hover:text-sb-primary transition-colors">
                  +62 21 5790 1453
                </a>
              </li>
              <li className="flex gap-3">
                <Printer className="w-4 h-4 mt-0.5 text-sb-primary shrink-0" />
                <span>+62 21 5790 2213</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-sb-primary shrink-0" />
                <a href="mailto:sales@datatel-internusa.com" className="hover:text-sb-primary transition-colors break-all">
                  sales@datatel-internusa.com
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="sb-title !text-base mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-[0.9rem]">
              {serviceNavItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sb-body hover:text-sb-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + newsletter */}
          <div className="md:col-span-2 lg:col-span-3">
            <h4 className="sb-title !text-base mb-4">Company</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[0.9rem] mb-6">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sb-body hover:text-sb-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* <form onSubmit={handleSubmit}>
              <label htmlFor="footer-newsletter" className="block text-[0.8rem] font-semibold text-sb-navy mb-2">
                Newsletter
              </label>
              <div className="flex gap-2">
                <input
                  id="footer-newsletter"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="sb-input !py-2.5"
                />
                <button type="submit" className="sb-btn sb-btn-primary !px-4" aria-label="Subscribe">
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <p className="mt-2 flex items-center gap-1.5 text-[0.8rem] font-semibold text-sb-green">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Terima kasih, Anda telah berlangganan.
                </p>
              )}
            </form> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
