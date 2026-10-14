"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const slides = [
  {
    image: "/assets/img/photos/datacenter-hero.jpg",
    title: "We bring solutions to make life easier.",
    lead: "We are an experienced technology partner that focuses on long term relationships with customers.",
    primaryCta: { text: "Read More", href: "/services" },
    secondaryCta: { text: "Contact Us", href: "/contact" },
    align: "center",
  },
  {
    image: "/assets/img/photos/server-room-hero.png",
    title: "We are trusted by over a million customers.",
    lead: "Here a few reasons why our customers choose us for high-performance network solutions.",
    primaryCta: { text: "Our Services", href: "/services" },
    secondaryCta: { text: "Contact Us", href: "/contact" },
    align: "center",
  },
]

export function Demo15Hero() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrent(index)
      setTimeout(() => setIsAnimating(false), 600)
    },
    [isAnimating]
  )

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length)
  }, [current, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length)
  }, [current, goToSlide])

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6500)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative w-full h-[650px] sm:h-[720px] lg:h-[820px] bg-[#1e2228] overflow-hidden select-none">
      {/* Background Slides */}
      {slides.map((slide, index) => {
        const isActive = index === current
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center scale-105 transition-transform duration-[7000ms] ease-out"
                style={{
                  transform: isActive ? "scale(1)" : "scale(1.08)",
                }}
              />
              <div className="absolute inset-0 bg-black/55 backdrop-brightness-75" />
            </div>

            {/* Slide Content */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div
                className={`w-full max-w-3xl ${slide.align === "center"
                  ? "mx-auto text-center"
                  : slide.align === "right"
                    ? "ml-auto text-center lg:text-left"
                    : "text-center lg:text-left"
                  }`}
              >
                <h1
                  className={`text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-md transition-all duration-700 delay-100 ${isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                >
                  {slide.title}
                </h1>

                <p
                  className={`text-lg sm:text-xl lg:text-2xl text-white/90 font-normal leading-relaxed mb-8 max-w-2xl drop-shadow-sm transition-all duration-700 delay-200 ${slide.align === "center" ? "mx-auto" : ""
                    } ${isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                >
                  {slide.lead}
                </p>

                <div
                  className={`flex flex-wrap gap-4 items-center transition-all duration-700 delay-300 ${slide.align === "center"
                    ? "justify-center"
                    : "justify-center lg:justify-start"
                    } ${isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                >
                  <Link
                    href={slide.primaryCta.href}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-white bg-transparent hover:bg-white hover:text-[#343f52] text-white font-bold text-base transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {slide.primaryCta.text}
                  </Link>

                  <Link
                    href={slide.secondaryCta.href}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#b02d3a] hover:bg-[#8f202b] text-white font-bold text-base transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {slide.secondaryCta.text}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Slider Controls (Prev / Next Arrows) */}
      <div className="absolute inset-x-4 sm:inset-x-8 top-1/2 -translate-y-1/2 z-20 flex justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-xs flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-xs flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 inset-x-0 z-20 flex justify-center items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`transition-all duration-300 rounded-full ${idx === current
              ? "w-8 h-3 bg-[#b02d3a]"
              : "w-3 h-3 bg-white/50 hover:bg-white/80"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
