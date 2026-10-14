"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "“PT. Datatel Inter Nusa berhasil merancang dan mengimplementasikan sistem kabel terstruktur dan data center kami dengan standar TIA-942 tepat waktu dan tanpa downtime bisnis.”",
    author: "Coriss Ambady",
    role: "Financial Services Director",
  },
  {
    quote:
      "“Kualitas instalasi fiber optic dan keandalan jaringan active switching yang dipasang sangat stabil untuk mendukung operasional pabrik dan distribusi 24/7 kami.”",
    author: "Cory Zamora",
    role: "Head of Infrastructure, Manufacturing Corp",
  },
  {
    quote:
      "“Dukungan teknis yang sangat tanggap dan tim engineer bersertifikasi membuat Datatel menjadi mitra IT tepercaya kami selama lebih dari satu dekade.”",
    author: "Nikolas Brooten",
    role: "IT General Manager, Energy & Mining Co",
  },
]

export function Demo15Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="relative bg-[#fdf2f3] pt-16 pb-16 lg:pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Spokesperson Image */}
          <div className="hidden md:flex md:col-span-5 lg:col-span-5 relative justify-center items-end self-end">
            {/* Background Pale Circle */}
            <div
              aria-hidden
              className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-[#f8d7da] -bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-0"
            />
            <div className="relative z-10 w-full max-w-[340px] lg:max-w-[400px]">
              <Image
                src="/assets/img/photos/co1.png"
                alt="Client Testimonial Spokesperson"
                width={500}
                height={600}
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>

          {/* Right Quotes Slider */}
          <div className="md:col-span-7 lg:col-span-7 md:py-16 lg:py-24">
            <div className="relative min-h-[220px] flex flex-col justify-center">
              {testimonials.map((item, idx) => {
                const isActive = idx === activeIdx
                return (
                  <div
                    key={idx}
                    className={`transition-all duration-500 ${
                      isActive
                        ? "opacity-100 relative pointer-events-auto"
                        : "opacity-0 absolute inset-0 pointer-events-none"
                    }`}
                  >
                    <div className="text-4xl text-[#b02d3a] font-serif leading-none mb-4">
                      “
                    </div>
                    <blockquote className="text-lg sm:text-xl lg:text-[22px] font-medium text-[#343f52] leading-relaxed mb-6 italic">
                      {item.quote.replace(/^[“"]|[”"]$/g, "")}
                    </blockquote>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#343f52]">
                        {item.author}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#aab0bc]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2.5 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === activeIdx
                      ? "w-7 h-2.5 bg-[#b02d3a]"
                      : "w-2.5 h-2.5 bg-[#aab0bc]/50 hover:bg-[#b02d3a]/60"
                  }`}
                  aria-label={`View testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
