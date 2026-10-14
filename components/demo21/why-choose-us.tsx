"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const accordionItems = [
  {
    id: "one",
    title: "Professional Design",
    content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
  },
  {
    id: "two",
    title: "Top-Notch Support",
    content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
  },
  {
    id: "three",
    title: "Header and Slider Options",
    content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
  },
]

export function Demo21WhyChooseUs() {
  const [openId, setOpenId] = useState<string>("one")

  return (
    <section id="why-us" className="relative bg-gradient-to-b from-white to-[#fdf2f3] pt-14 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Illustration */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[560px]">
              <Image
                src="/assets/img/illustrations/i22.png"
                alt="Why Choose Us Illustration"
                width={700}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Content & Accordion */}
          <div className="lg:col-span-5">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#b02d3a] mb-3">
              Why Choose Us?
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#343f52] leading-tight mb-8">
              We bring solutions to make life easier.
            </h3>

            {/* Accordion */}
            <div className="space-y-3">
              {accordionItems.map((item) => {
                const isOpen = openId === item.id
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? "" : item.id)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-[#343f52] hover:text-[#b02d3a] transition-colors focus:outline-none"
                    >
                      <span className="text-base sm:text-lg">{item.title}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#b02d3a] transition-transform duration-300 shrink-0 ml-3 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-[#60697b] text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
                        {item.content}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Wave Curve Divider to White */}
      <div className="overflow-hidden leading-none w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto text-white fill-current block"
          preserveAspectRatio="none"
        >
          <path d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z" />
        </svg>
      </div>
    </section>
  )
}
