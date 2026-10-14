import Image from "next/image"

const clientLogos = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11"]

export function Demo15Clients() {
  return (
    <section className="wrapper-border overflow-hidden bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#60697b]" data-cue="fadeIn">
          Our Partners
        </h2>
        <div className="group relative left-1/2 w-screen -translate-x-1/2 overflow-hidden" data-cue="slideInUp">
          <div className="clients-marquee flex w-max items-center group-hover:[animation-play-state:paused]">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={`${logo}-${index}`} className="flex h-20 w-40 shrink-0 items-center justify-center px-5 sm:w-48">
                <Image
                  src={`/assets/img/brands/${logo}.png`}
                  alt={`Client logo ${index + 1}`}
                  width={180}
                  height={70}
                  className="max-h-14 w-auto max-w-full object-contain opacity-100 transition-opacity duration-300 hover:opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
