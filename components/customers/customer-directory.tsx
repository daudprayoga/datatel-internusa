"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {
  Search,
  Building2,
  CheckCircle2,
  X,
  ChevronRight,
  Factory,
  Flame,
  Landmark,
  Radio,
  Building,
  BadgeDollarSign,
} from "lucide-react"
import type { CustomerSector } from "@/lib/customers-data"

const sectorIcons: Record<string, React.ElementType> = {
  Factory,
  Flame,
  Landmark,
  Radio,
  Building2,
  BadgeDollarSign,
}

export function CustomerFilterDirectory({ sectors }: { sectors: CustomerSector[] }) {
  const [activeTab, setActiveTab] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Flatten all clients with sector information
  const allClientsWithSector = useMemo(() => {
    const list: { client: string; sector: CustomerSector; subcategory?: string }[] = []
    sectors.forEach((sec) => {
      sec.clients.forEach((c) => {
        // find subcategory if any
        let subName: string | undefined
        if (sec.subcategories) {
          const matchedSub = sec.subcategories.find((sub) => sub.clients.includes(c))
          if (matchedSub) {
            subName = matchedSub.name
          }
        }
        list.push({ client: c, sector: sec, subcategory: subName })
      })
    })
    return list
  }, [sectors])

  // Filter based on active tab and search query
  const filteredClients = useMemo(() => {
    let items = allClientsWithSector

    if (activeTab !== "all") {
      items = items.filter((item) => item.sector.slug === activeTab)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      items = items.filter(
        (item) =>
          item.client.toLowerCase().includes(q) ||
          item.sector.title.toLowerCase().includes(q) ||
          (item.subcategory && item.subcategory.toLowerCase().includes(q))
      )
    }

    return items
  }, [allClientsWithSector, activeTab, searchQuery])

  return (
    <div className="space-y-8">
      {/* Search Bar & Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama perusahaan atau klien (e.g. BP, Telkom, Alila, Sharp)..."
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
          Menampilkan <span className="text-sb-primary font-bold">{filteredClients.length}</span> dari{" "}
          {allClientsWithSector.length} klien
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setActiveTab("all")}
          className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            activeTab === "all"
              ? "bg-sb-navy text-white shadow-xs"
              : "bg-white text-sb-body border border-slate-200 hover:border-sb-primary hover:text-sb-primary"
          }`}
        >
          Semua Sektor ({allClientsWithSector.length})
        </button>

        {sectors.map((sec) => (
          <button
            key={sec.slug}
            onClick={() => setActiveTab(sec.slug)}
            className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeTab === sec.slug
                ? "bg-sb-primary text-white shadow-xs"
                : "bg-white text-sb-body border border-slate-200 hover:border-sb-primary hover:text-sb-primary"
            }`}
          >
            {sec.navLabel.split(",")[0]} ({sec.clients.length})
          </button>
        ))}
      </div>

      {/* Client Grid */}
      {filteredClients.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredClients.map((item, idx) => {
            const Icon = sectorIcons[item.sector.iconName] || Building2
            return (
              <div
                key={`${item.client}-${idx}`}
                className="group flex flex-col justify-between p-4 rounded-xl bg-white border border-slate-200/80 hover:border-sb-primary/50 hover:shadow-xs transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-sb-soft-primary/70 border border-sb-border/60 flex items-center justify-center shrink-0 text-sb-primary group-hover:bg-sb-primary group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold text-sb-navy group-hover:text-sb-primary transition-colors leading-snug">
                      {item.client}
                    </div>
                    {item.subcategory && (
                      <span className="inline-block mt-0.5 text-[0.7rem] font-medium text-slate-500">
                        {item.subcategory}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[0.72rem]">
                  <Link
                    href={`/customers/${item.sector.slug}`}
                    className="font-semibold text-sb-muted hover:text-sb-primary transition-colors truncate max-w-[170px]"
                    title={item.sector.title}
                  >
                    {item.sector.navLabel}
                  </Link>
                  <span className="inline-flex items-center gap-1 text-emerald-600 font-medium shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                    Klien Terverifikasi
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 p-8">
          <Search className="w-8 h-8 text-slate-300 mx-auto mb-3" />
          <h4 className="text-base font-bold text-sb-navy mb-1">
            Tidak ada klien yang cocok dengan &quot;{searchQuery}&quot;
          </h4>
          <p className="text-sm text-sb-muted mb-4">
            Coba gunakan kata kunci lain atau pilih tab &quot;Semua Sektor&quot;.
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
