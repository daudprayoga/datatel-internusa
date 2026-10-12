"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight } from "lucide-react"

export const serviceNavItems = [
  { label: "Networking System", href: "/services/networking-system" },
  { label: "Access Control", href: "/services/access-control" },
  { label: "Data Center, Design & Build", href: "/services/data-center-design-build" },
  { label: "Digital CCTV", href: "/services/digital-cctv" },
  { label: "Structured Cabling System Certified", href: "/services/structured-cabling-system" },
]

export const customerNavItems = [
  { label: "Manufacturing, Distribution & Retail", href: "/customers/manufacturing-distribution-retail" },
  { label: "Energy ( Oil and gas, Mining Co )", href: "/customers/energy-oil-and-gas-mining-co" },
  { label: "Government, BUMN", href: "/customers/government-bumn" },
  { label: "Telecommunication, Media & IT Services", href: "/customers/telecommunication-media-and-it-services" },
  { label: "Hotel, Hospital & Others Co", href: "/customers/hotel-hospital-others-co" },
  { label: "Financial Services Industries", href: "/customers/financial-services-industries" },
]

export function Demo21Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileCustomersOpen, setMobileCustomersOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-2xl font-extrabold tracking-tight text-[#343f52] hover:text-[#3f78e0] transition-colors">
              Datatel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7">
            
            {/* Home */}
            <Link
              href="/"
              className="text-sm font-semibold text-[#343f52] hover:text-[#3f78e0] transition-colors"
            >
              Home
            </Link>

            {/* Vision & Mission */}
            <Link
              href="/vision-mission"
              className="text-sm font-semibold text-[#343f52] hover:text-[#3f78e0] transition-colors"
            >
              Vision &amp; Mission
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className="flex items-center gap-1 text-sm font-semibold text-[#343f52] hover:text-[#3f78e0] transition-colors py-2"
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </Link>
              <div className="absolute top-full left-0 hidden group-hover:block w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50">
                {serviceNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 rounded-xl hover:bg-[#edf2fc] text-sm font-medium text-[#343f52] hover:text-[#3f78e0] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Our Valuable Customer Dropdown */}
            <div className="relative group">
              <Link
                href="/customers"
                className="flex items-center gap-1 text-sm font-semibold text-[#343f52] hover:text-[#3f78e0] transition-colors py-2"
              >
                Our Valueable Customer
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </Link>
              <div className="absolute top-full left-0 hidden group-hover:block w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50">
                {customerNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 rounded-xl hover:bg-[#edf2fc] text-sm font-medium text-[#343f52] hover:text-[#3f78e0] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Partners */}
            <Link
              href="/partners"
              className="text-sm font-semibold text-[#343f52] hover:text-[#3f78e0] transition-colors"
            >
              Partners
            </Link>

            {/* Careers */}
            <Link
              href="/careers"
              className="text-sm font-semibold text-[#343f52] hover:text-[#3f78e0] transition-colors"
            >
              Careers
            </Link>

            {/* News */}
            <Link
              href="/news"
              className="text-sm font-semibold text-[#343f52] hover:text-[#3f78e0] transition-colors"
            >
              News
            </Link>

          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden xl:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#3f78e0] hover:bg-[#3264c1] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#343f52] rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Offcanvas Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="space-y-3">
            
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#343f52] hover:text-[#3f78e0] py-1.5"
            >
              Home
            </Link>

            <Link
              href="/vision-mission"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#343f52] hover:text-[#3f78e0] py-1.5"
            >
              Vision &amp; Mission
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border-y border-slate-100 py-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-base font-semibold text-[#343f52] hover:text-[#3f78e0] py-1"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-3 pt-2 space-y-2">
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-bold text-[#3f78e0] uppercase py-1"
                  >
                    Semua Services &rarr;
                  </Link>
                  {serviceNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-[#60697b] hover:text-[#3f78e0] py-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Customers Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                onClick={() => setMobileCustomersOpen(!mobileCustomersOpen)}
                className="flex items-center justify-between w-full text-base font-semibold text-[#343f52] hover:text-[#3f78e0] py-1"
              >
                <span>Our Valueable Customer</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCustomersOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileCustomersOpen && (
                <div className="pl-3 pt-2 space-y-2">
                  <Link
                    href="/customers"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-bold text-[#3f78e0] uppercase py-1"
                  >
                    Semua Klien &amp; Industri &rarr;
                  </Link>
                  {customerNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-[#60697b] hover:text-[#3f78e0] py-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/partners"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#343f52] hover:text-[#3f78e0] py-1.5"
            >
              Partners
            </Link>

            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#343f52] hover:text-[#3f78e0] py-1.5"
            >
              Careers
            </Link>

            <Link
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#343f52] hover:text-[#3f78e0] py-1.5"
            >
              News
            </Link>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#3f78e0] hover:bg-[#3264c1] text-white text-base font-semibold shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
