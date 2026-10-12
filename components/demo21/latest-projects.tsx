"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Cras Fermentum Sem",
    category: "Mobile Design",
    image: "/assets/img/photos/sp1.jpg",
    href: "#",
  },
  {
    title: "Venenatis Euismod Vehicula",
    category: "Web Design",
    image: "/assets/img/photos/sp2.jpg",
    href: "#",
  },
  {
    title: "Tortor Tellus Cursus",
    category: "Stationary",
    image: "/assets/img/photos/sp3.jpg",
    href: "#",
  },
  {
    title: "Ridiculus Sem Parturient",
    category: "Web Application",
    image: "/assets/img/photos/sp4.jpg",
    href: "#",
  },
  {
    title: "Cursus Sollicitudin Adipiscing",
    category: "Web Design",
    image: "/assets/img/photos/sp5.jpg",
    href: "#",
  },
  {
    title: "Fringilla Quam Vulputate",
    category: "Stationary",
    image: "/assets/img/photos/sp6.jpg",
    href: "#",
  },
]

export function Demo21LatestProjects() {
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = 3

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % (projects.length - itemsPerPage + 1))
  }

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? projects.length - itemsPerPage : prev - 1))
  }

  return (
    <section id="projects" className="relative bg-white pt-10 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#3f78e0] mb-3">
            Latest Projects
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#343f52] leading-tight">
            Check out some of our awesome projects with creative ideas and great design.
          </h3>
        </div>

        {/* Projects Grid / Carousel */}
        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(startIndex, startIndex + itemsPerPage).map((item, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-5 bg-slate-100 shadow-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#343f52] group-hover:text-[#3f78e0] transition-colors mb-1">
                  <Link href={item.href}>{item.title}</Link>
                </h4>
                <p className="text-xs font-bold uppercase tracking-wider text-[#aab0bc]">
                  {item.category}
                </p>
              </div>
            ))}
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-[#edf2fc] text-[#3f78e0] hover:bg-[#3f78e0] hover:text-white transition-colors flex items-center justify-center shadow-xs"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-[#edf2fc] text-[#3f78e0] hover:bg-[#3f78e0] hover:text-white transition-colors flex items-center justify-center shadow-xs"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Wave Curve Divider */}
      <div className="overflow-hidden leading-none w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto text-[#edf2fc] fill-current block"
          preserveAspectRatio="none"
        >
          <path d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z" />
        </svg>
      </div>
    </section>
  )
}
