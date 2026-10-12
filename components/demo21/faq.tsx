"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const faqList = [
  {
    id: "q1",
    question: "How do I get my subscription receipt?",
    answer: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.",
  },
  {
    id: "q2",
    question: "Are there any discounts for people in need?",
    answer: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.",
  },
  {
    id: "q3",
    question: "Do you offer a free trial edit?",
    answer: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.",
  },
  {
    id: "q4",
    question: "How do I reset my Account password?",
    answer: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.",
  },
]

export function Demo21FAQ() {
  const [openId, setOpenId] = useState<string>("q1")

  return (
    <section id="faq" className="relative bg-white pt-20 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Content */}
          <div className="lg:col-span-5">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#3f78e0] mb-3">
              FAQ
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#343f52] leading-tight mb-5">
              If you don't see an answer to your question, you can send us an email from our contact form.
            </h3>
            <p className="text-[#60697b] leading-relaxed mb-8">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#3f78e0] hover:bg-[#3264c1] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all"
            >
              All FAQ
            </Link>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqList.map((item) => {
              const isOpen = openId === item.id
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-md shadow-slate-200/40 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? "" : item.id)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-[#343f52] hover:text-[#3f78e0] transition-colors focus:outline-none"
                  >
                    <span className="text-base sm:text-lg">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#3f78e0] transition-transform duration-300 shrink-0 ml-4 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-[#60697b] text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </div>

      {/* Wave Curve Divider to Navy Footer */}
      <div className="overflow-hidden leading-none w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto text-[#1e2229] fill-current block"
          preserveAspectRatio="none"
        >
          <path d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z" />
        </svg>
      </div>
    </section>
  )
}
