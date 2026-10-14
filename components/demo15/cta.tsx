"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function Demo15Cta() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="community" className="relative bg-[#fdf2f3] py-16 sm:py-24 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Puzzle Icon */}
        <div className="w-14 h-14 mx-auto mb-4">
          <Image
            src="/assets/img/icons/lineal/puzzle-2.svg"
            alt="Puzzle Icon"
            width={56}
            height={56}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Heading & Subtitle */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#343f52] tracking-tight leading-[1.25] mb-4">
          Join Our Corporate Network
        </h2>

        <p className="text-base sm:text-lg text-[#60697b] max-w-2xl mx-auto leading-relaxed mb-8">
          Kami dipercaya oleh ratusan korporasi, perbankan, dan manufaktur di seluruh Indonesia sejak 2005. Hubungi tim kami untuk konsultasi infrastruktur IT tanpa komitmen.
        </p>

        {/* Consultation Input / CTA Form */}
        <div className="max-w-md mx-auto">
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-full py-3.5 px-6 flex items-center justify-center gap-2 text-emerald-800 font-semibold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Terima kasih! Tim Datatel akan segera menghubungi Anda.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan alamat email perusahaan"
                required
                className="flex-1 px-5 py-3.5 rounded-full bg-white border border-slate-200 text-[#343f52] text-sm focus:outline-none focus:ring-2 focus:ring-[#b02d3a] shadow-xs"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-[#b02d3a] hover:bg-[#8f202b] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
              >
                Konsultasi
              </button>
            </form>
          )}

          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#b02d3a] hover:text-[#8f202b] transition-colors"
            >
              Atau jadwalkan konsultasi langsung via halaman kontak
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
