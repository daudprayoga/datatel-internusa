"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Search, X } from "lucide-react"
import type { PartnerCategory, TechnologyPartner } from "@/lib/partners-data"

interface PartnerFilterDirectoryProps {
  categories: PartnerCategory[]
}

export function PartnerFilterDirectory({ categories }: PartnerFilterDirectoryProps) {
  const [activeTab, setActiveTab] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Flatten all partners with their parent category info
  const allPartnersList = useMemo(() => {
    const list: { partner: TechnologyPartner; category: PartnerCategory }[] = []
    categories.forEach((cat) => {
      cat.partners.forEach((p) => {
        list.push({ partner: p, category: cat })
      })
    })
    return list
  }, [categories])

  // Filter partners based on active tab and search query
  const filteredPartners = useMemo(() => {
    let items = allPartnersList

    if (activeTab !== "all") {
      items = items.filter((item) => item.category.slug === activeTab)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      items = items.filter(
        (item) =>
          item.partner.name.toLowerCase().includes(q) ||
          item.partner.description.toLowerCase().includes(q) ||
          item.category.title.toLowerCase().includes(q) ||
          item.partner.specialties.some((spec) => spec.toLowerCase().includes(q))
      )
    }

    return items
  }, [allPartnersList, activeTab, searchQuery])

  return (
    <div className="space-y-8">
      {/* Search Bar & Stats Control */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari brand mitra (e.g. Cisco, Panduit, APC, Hikvision)..."
            className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-slate-200 focus:outline-none focus:border-sb-primary focus:ring-2 focus:ring-sb-primary/20 text-sm text-sb-navy shadow-xs placeholder:text-slate-400 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
              aria-label="Hapus pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="text-xs sm:text-sm font-semibold text-sb-muted self-end sm:self-center">
          Menampilkan <span className="text-sb-primary font-bold">{filteredPartners.length}</span> dari{" "}
          {allPartnersList.length} mitra teknologi
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setActiveTab("all")}
          className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            activeTab === "all"
              ? "bg-sb-navy text-white shadow-xs"
              : "bg-white text-sb-body border border-slate-200 hover:border-sb-primary hover:text-sb-primary"
          }`}
        >
          Semua Domain ({allPartnersList.length})
        </button>

        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveTab(cat.slug)}
            className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeTab === cat.slug
                ? "bg-sb-primary text-white shadow-xs"
                : "bg-white text-sb-body border border-slate-200 hover:border-sb-primary hover:text-sb-primary"
            }`}
          >
            {cat.navLabel} ({cat.partners.length})
          </button>
        ))}
      </div>

      {/* Clean Logos Grid (Simple, Logo-Only Display) */}
      {filteredPartners.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {filteredPartners.map(({ partner, category }, idx) => {
            const TileContent = (
              <div
                className="group flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-sb-primary/50 hover:shadow-md transition-all duration-300 h-28 sm:h-32 text-center"
                title={`${partner.name} (${category.navLabel})`}
              >
                <div className="h-10 sm:h-12 w-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={110}
                    height={40}
                    className="max-h-7 sm:max-h-8 w-auto object-contain grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <span className="mt-2 text-xs font-semibold text-sb-navy group-hover:text-sb-primary transition-colors truncate max-w-full block">
                  {partner.name}
                </span>
              </div>
            )

            if (partner.websiteUrl) {
              return (
                <a
                  key={`${partner.id}-${idx}`}
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus:ring-2 focus:ring-sb-primary/30 rounded-2xl"
                  title={`Kunjungi website resmi ${partner.name}`}
                >
                  {TileContent}
                </a>
              )
            }

            return (
              <div key={`${partner.id}-${idx}`}>
                {TileContent}
              </div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 p-8">
          <Search className="w-8 h-8 text-slate-300 mx-auto mb-3" />
          <h4 className="text-base font-bold text-sb-navy mb-1">
            Tidak ada mitra yang cocok dengan &quot;{searchQuery}&quot;
          </h4>
          <p className="text-sm text-sb-muted mb-4">
            Coba gunakan kata kunci nama brand seperti Cisco, Panduit, APC, atau Hikvision.
          </p>
          <button
            onClick={() => {
              setSearchQuery("")
              setActiveTab("all")
            }}
            className="px-4 py-2 rounded-full bg-sb-primary text-white text-xs font-semibold hover:bg-sb-primary/90 transition-colors"
          >
            Reset Pencarian
          </button>
        </div>
      )}
    </div>
  )
}
