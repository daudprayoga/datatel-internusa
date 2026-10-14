"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const rotatingWords = ["design", "installation", "maintenance"]
const brands = ["c1.png", "c2.png", "c3.png", "c4.png", "c5.png", "c6.png", "c7.png"]

export function Demo21Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setFade(true)
      }, 300)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative bg-white pt-28 sm:pt-32 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 lg:mb-20">

          {/* Text Content */}
          <div className="lg:col-span-5 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#343f52] leading-[1.15] mb-5">
              An IT network & system integrator specializing in{" "}
              <span
                className={`inline-block text-[#b02d3a] transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"
                  }`}
              >
                {rotatingWords[wordIndex]}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#60697b] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              We are an experienced technology partner that strongly believes in building reliable and high-performance network infrastructures.
            </p>

            <div>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#b02d3a] hover:bg-[#8f202b] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="lg:col-span-7 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[620px]">
              <Image
                src="/assets/img/illustrations/i21.png"
                alt="Digital Agency Illustration"
                width={800}
                height={550}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>

        {/* Client Logos Section */}
        <div className="pt-4 pb-16 text-center">
          <p className="text-sm font-semibold tracking-wide text-[#aab0bc] uppercase mb-8">
            Our Partner
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center max-w-5xl mx-auto px-4">
            {brands.map((brand, idx) => (
              <div key={idx} className="flex items-center justify-center p-2 opacity-65 hover:opacity-100 transition-opacity">
                <Image
                  src={`/assets/img/brands/${brand}`}
                  alt={`Brand Client ${idx + 1}`}
                  width={120}
                  height={40}
                  className="max-h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Wave Curve Divider */}
      <div className="overflow-hidden leading-none w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto text-[#fdf2f3] fill-current block"
          preserveAspectRatio="none"
        >
          <path d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z" />
        </svg>
      </div>
    </section>
  )
}
