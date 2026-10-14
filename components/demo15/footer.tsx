import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Printer } from "lucide-react"
import { serviceNavItems, quickLinks } from "./nav-data"

export function Demo15Footer() {
  return (
    <footer id="footer" className="bg-[#1e2228] text-[#cacdd3] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand & Copyright (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block relative h-10 w-44">
              <Image
                src="/datatel-logo-light.png"
                alt="PT. Datatel Inter Nusa"
                fill
                className="object-contain object-left"
              />
            </Link>

            <p className="text-sm leading-relaxed text-[#cacdd3] max-w-sm">
              PT. Datatel Inter Nusa adalah National Private Enterprise terkemuka yang berfokus pada Computer Network &amp; System Integrators sejak 2005.
            </p>
            <p className="text-xs text-[#858d9d]">
              &copy; 2005 - {new Date().getFullYear()} PT. Datatel Inter Nusa.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Need Help?
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {serviceNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#b02d3a] shrink-0" />
                <address className="not-italic leading-relaxed text-[#cacdd3]">
                  Jl. Kelapa Dua Wetan No. 31 , Jakarta, 13730
                </address>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-[#b02d3a] shrink-0" />
                <a
                  href="tel:+622187734050"
                  className="hover:text-white transition-colors"
                >
                  +62 21 8773 4050
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-[#b02d3a] shrink-0" />
                <a
                  href="mailto:sales@datatel-internusa.com"
                  className="hover:text-white transition-colors break-all"
                >
                  sales@datatel-internusa.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}
