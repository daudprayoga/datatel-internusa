import { Mail } from "lucide-react"

export function Demo15ContactInfo() {
  return (
    <section id="contact-info" className="relative bg-[#fefefe] py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Map with Dot Shape */}
          <div className="relative lg:col-span-6">
            <div
              aria-hidden
              className="absolute -top-6 -left-6 w-24 h-28 opacity-70 pointer-events-none z-0"
              style={{
                backgroundImage: "radial-gradient(#fab758 2px, transparent 2.5px)",
                backgroundSize: "0.85rem 0.85rem",
              }}
            />
            <div className="relative z-10 h-[360px] overflow-hidden rounded-2xl border-4 border-white bg-[#f4f1ee] shadow-2xl sm:h-[430px]">
              <iframe
                title="Lokasi PT. Datatel Inter Nusa"
                src="https://www.google.com/maps?q=PT.+Datatel+Inter+Nusa&ll=-6.3319723,106.8866797&z=19&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Contact Info Details */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <h2 className="mb-9 max-w-2xl text-3xl font-bold leading-[1.2] tracking-tight text-[#343f52] sm:text-4xl lg:text-[38px]">
              Ready to Build a More Reliable IT Infrastructure?
            </h2>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/622187734050"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#1ebe5d]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M12.04 2a9.8 9.8 0 0 0-8.48 14.72L2 22l5.45-1.52A9.8 9.8 0 1 0 12.04 2Zm0 17.9a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.23.9.92-3.14-.2-.32A8.08 8.08 0 1 1 12.04 19.9Zm4.43-6.07c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.57 4.07 3.6.57.25 1.01.4 1.36.51.57.18 1.09.15 1.5.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.22-.46-.28Z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:sales@datatel-internusa.com"
                className="inline-flex items-center gap-2 rounded-full bg-[#b02d3a] px-5 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#8f202b]"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
