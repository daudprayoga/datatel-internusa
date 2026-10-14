"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { serviceNavItems } from "@/components/demo15/nav-data"

export function SiteNavbar({ transparent = false }: { transparent?: boolean }) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
      setScrolled(offset > 30)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("scroll", handleScroll, true)
    }
  }, [])

  const isSolid = !transparent || scrolled || mobileMenuOpen
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)
  const desktopLinkClass = (href: string) => `text-[15px] transition-colors duration-300 ${isActive(href) ? "font-bold text-[#b02d3a]" : isSolid ? "font-semibold text-[#343f52] hover:text-[#b02d3a]" : "font-semibold text-white/90 hover:text-white"}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out">
      {/* Background Layer 1: Dark gradient overlay for top position */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-opacity duration-300 pointer-events-none ${isSolid ? "opacity-0" : "opacity-100"
          }`}
      />
      <div
        className={`absolute inset-0 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-opacity duration-300 pointer-events-none ${isSolid ? "opacity-100" : "opacity-0"}`}
      />

      {/* Main Bar (Constant h-20 height to avoid vertical layout shifts) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 relative h-10 w-36 sm:w-44">
            {/* Light logo on dark hero */}
            <Image
              src="/datatel-logo-light.png"
              alt="PT. Datatel Inter Nusa"
              fill
              priority
              className={`object-contain object-left transition-opacity duration-300 ${isSolid ? "opacity-0" : "opacity-100"
                }`}
            />
            {/* Original logo on white header */}
            <Image
              src="/datatel-logo.png"
              alt="PT. Datatel Inter Nusa"
              fill
              priority
              className={`object-contain object-left transition-opacity duration-300 ${isSolid ? "opacity-100" : "opacity-0"
                }`}
            />
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7">
            {/* Home */}
            <Link
              href="/"
              className={desktopLinkClass("/")}
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={desktopLinkClass("/about")}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group py-2">
              <Link
                href="/services"
                className={`flex items-center gap-1 ${desktopLinkClass("/services")}`}
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
              </Link>
              <div className="absolute top-full left-0 hidden group-hover:block pt-2 z-50">
                <div className="w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 text-[#343f52]">
                  {serviceNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-3 py-2 rounded-xl hover:bg-[#fdf2f3] text-sm transition-colors ${isActive(item.href) ? "font-bold text-[#b02d3a] bg-[#fdf2f3]" : "font-medium text-[#343f52] hover:text-[#b02d3a]"}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Partners */}
            <Link
              href="/partners"
              className={desktopLinkClass("/partners")}
            >
              Partners
            </Link>

            {/* Careers */}
            <Link
              href="/careers"
              className={desktopLinkClass("/careers")}
            >
              Careers
            </Link>

            <Link
              href="/news"
              className={desktopLinkClass("/news")}
            >
              Blog
            </Link>

          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden xl:flex items-center gap-4">
            <Link
              href="/contact"
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm ${isSolid
                ? "bg-[#b02d3a] text-white hover:bg-[#8f202b] hover:shadow-md"
                : "bg-white text-[#343f52] hover:bg-white/90 hover:shadow-lg"
                }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`xl:hidden p-2 rounded-lg transition-colors duration-300 ${isSolid ? "text-[#343f52] hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="relative z-50 xl:hidden bg-white text-[#343f52] border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto px-4 py-6">
          <nav className="flex flex-col space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#343f52] hover:text-[#b02d3a] py-1"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#343f52] hover:text-[#b02d3a] py-1"
            >
              About
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-base font-semibold text-[#343f52] py-1"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#b02d3a]/30 py-1">
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-semibold text-[#b02d3a] py-1"
                  >
                    Semua Layanan →
                  </Link>
                  {serviceNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-[#60697b] hover:text-[#b02d3a] py-1"
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
              className="text-base font-semibold text-[#343f52] hover:text-[#b02d3a] py-1"
            >
              Partners
            </Link>

            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#343f52] hover:text-[#b02d3a] py-1"
            >
              Careers
            </Link>

            <Link
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#343f52] hover:text-[#b02d3a] py-1"
            >
              Blog
            </Link>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-[#b02d3a] text-white text-center font-bold text-sm shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
