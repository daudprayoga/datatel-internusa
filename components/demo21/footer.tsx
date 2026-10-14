import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

import { serviceNavItems } from "@/components/demo21/navbar"

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/news" },
]

/** Footer — Sandbox `_footer-widgets.html` (light variant) with Datatel data. */
export function Demo21Footer() {
  return (
    <footer id="contact" className="bg-sb-gray/70 border-t border-sb-border">
      <div className="sb-container pt-14 md:pt-16 pb-10">
        {/* Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-12">
          {/* Brand */}
          <div className="lg:col-span-3 space-y-4">
            <Link href="/" className="inline-block relative h-10 w-44">
              <Image
                src="/datatel-logo.png"
                alt="PT. Datatel Inter Nusa"
                fill
                className="object-contain object-left"
              />
            </Link>

            <p className="sb-text !text-[0.9rem]">
              Computer Network &amp; System Integrators sejak 2005. Design, Installation &amp; Maintenance.
            </p>
          </div>

          {/* Get in touch */}
          <div className="order-3 lg:col-span-3">
            <h4 className="sb-title !text-base mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-[0.9rem] text-sb-body">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-sb-primary shrink-0" />
                <address className="not-italic leading-relaxed">
                  Jl. Raya Klp. Dua Wetan No.31, RT.3/RW.4,
                  <br />
                  Klp. Dua Wetan, Kec. Ciracas, Kota Jakarta Timur,
                  <br />
                  Daerah Khusus Ibukota Jakarta 13730
                </address>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-sb-primary shrink-0" />
                <a href="tel:+622187734050" className="hover:text-sb-primary transition-colors">
                  +62 21 8773 4050
                </a>
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
          <div className="order-2 lg:col-span-3">
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

          {/* Quick Links + newsletter */}
          <div className="order-1 md:col-span-2 lg:col-span-3">
            <h4 className="sb-title !text-base mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2.5 text-[0.9rem] mb-6">
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

        <p className="mt-10 border-t border-sb-border pt-6 text-center text-[0.8rem] text-sb-ash whitespace-nowrap">
          &copy; 2005 - {new Date().getFullYear()} PT. Datatel Inter Nusa. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
