import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Demo21Navbar } from "@/components/demo21/navbar"
import { Demo21Footer } from "@/components/demo21/footer"
import { ScrollToTop } from "@/components/demo21/scroll-to-top"
import { PageHeader } from "@/components/demo21/page-header"
import { CtaBanner } from "@/components/sandbox/ui"
import { newsArticles, newsCategories } from "@/lib/news-data"
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Search,
  FolderOpen,
  Tag,
  Phone,
  Mail,
} from "lucide-react"

export const metadata: Metadata = {
  title: "News & Articles | PT. Datatel Inter Nusa",
  description:
    "Welcome to PT. Datatel Inter Nusa journal. Explore the latest company updates, technical roadshows, data center innovations, and enterprise IT insights.",
}

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>
}) {
  const params = await searchParams
  const activeCategory = params.category || "All"
  const searchQuery = (params.q || "").toLowerCase().trim()

  // Filter articles based on active category and search query
  const filteredArticles = newsArticles.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory
    const matchesQuery =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery) ||
      item.excerpt.toLowerCase().includes(searchQuery) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery))
    return matchesCategory && matchesQuery
  })

  // Recent 4 posts for sidebar
  const recentPosts = newsArticles.slice(0, 4)

  // Collect all unique tags for sidebar
  const allTags = Array.from(new Set(newsArticles.flatMap((item) => item.tags)))

  return (
    <div className="min-h-screen bg-white text-sb-body font-sans antialiased selection:bg-sb-primary selection:text-white">
      <Demo21Navbar />

      <main>
        {/* Page Title Header (Sandbox style) */}
        <PageHeader
          badge="Company Journal"
          title="Business News & Insights"
          description="Welcome to our journal. Here you can find the latest company news, technical roadshows, and enterprise IT infrastructure insights from PT. Datatel Inter Nusa."
          breadcrumb={[{ label: "News" }]}
        />

        {/* Main Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="sb-container">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {newsCategories.map((cat) => {
                const isActive = activeCategory === cat
                return (
                  <Link
                    key={cat}
                    href={cat === "All" ? "/news" : `/news?category=${encodeURIComponent(cat)}`}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? "bg-sb-primary text-white shadow-sm"
                        : "bg-sb-gray hover:bg-sb-pale-primary text-sb-navy hover:text-sb-primary"
                    }`}
                  >
                    {cat}
                  </Link>
                )
              })}
            </div>

            {/* Layout Grid: 8 Cols Main Posts, 4 Cols Sidebar */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
              
              {/* Left Column: Post Articles */}
              <div className="lg:col-span-8 space-y-10">
                {filteredArticles.length === 0 ? (
                  <div className="rounded-2xl bg-sb-gray/50 border border-slate-200 p-12 text-center">
                    <p className="text-base text-sb-body font-medium mb-3">
                      Tidak ditemukan artikel dengan kategori atau kata kunci tersebut.
                    </p>
                    <Link
                      href="/news"
                      className="sb-btn sb-btn-primary sb-btn-sm"
                    >
                      Lihat Semua Berita
                    </Link>
                  </div>
                ) : (
                  filteredArticles.map((article) => (
                    <article
                      key={article.id}
                      className="sb-card overflow-hidden group hover:shadow-xl transition-all duration-300"
                    >
                      {/* Image Thumbnail */}
                      <Link
                        href={`/news/${article.slug}`}
                        className="relative block w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-slate-100"
                      >
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                        />
                        <div className="absolute top-4 left-4 z-10">
                          <span className="sb-badge bg-white/95 text-sb-primary shadow-xs">
                            {article.category}
                          </span>
                        </div>
                      </Link>

                      {/* Card Content */}
                      <div className="sb-card-body p-6 sm:p-8 space-y-4">
                        {/* Meta Row */}
                        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-sb-muted">
                          <span className="inline-flex items-center gap-1.5 text-sb-body">
                            <Calendar className="w-3.5 h-3.5 text-sb-primary" />
                            {article.date}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-sb-body">
                            <User className="w-3.5 h-3.5 text-sb-primary" />
                            {article.author.name}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-sb-body">
                            <Clock className="w-3.5 h-3.5 text-sb-primary" />
                            {article.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl sm:text-2xl font-bold text-sb-navy group-hover:text-sb-primary transition-colors leading-snug">
                          <Link href={`/news/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h2>

                        {/* Excerpt */}
                        <p className="sb-text text-sm sm:text-base leading-relaxed">
                          {article.excerpt}
                        </p>

                        {/* Action Link */}
                        <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                          <Link
                            href={`/news/${article.slug}`}
                            className="sb-more text-sm font-bold"
                          >
                            Read Full Article
                            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                          </Link>
                          
                          <div className="flex flex-wrap gap-1.5">
                            {article.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-sb-gray text-sb-body"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))
                )}
              </div>

              {/* Right Column: Sidebar (Sandbox style) */}
              <div className="lg:col-span-4 space-y-8">
                
                {/* Search Widget */}
                <div className="p-6 rounded-2xl bg-sb-gray/60 border border-slate-200/80">
                  <h3 className="sb-title !text-base mb-3 flex items-center gap-2">
                    <Search className="w-4 h-4 text-sb-primary" />
                    Search Journal
                  </h3>
                  <form action="/news" method="GET" className="relative">
                    <input
                      type="text"
                      name="q"
                      defaultValue={searchQuery}
                      placeholder="Cari artikel..."
                      className="sb-input pr-10 text-sm"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-sb-body hover:text-sb-primary"
                      aria-label="Cari"
                    >
                      <Search className="w-4 h-4" />
                    </button>
                  </form>
                </div>

                {/* About Datatel Widget */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="sb-title !text-base mb-3">
                    About Datatel
                  </h3>
                  <p className="sb-text !text-[0.85rem] leading-relaxed mb-4">
                    PT. Datatel Inter Nusa adalah National Private Enterprise terdepan yang berfokus pada Computer Network &amp; System Integrators sejak 2005 di seluruh Indonesia.
                  </p>
                  <Link
                    href="/vision-mission"
                    className="sb-more text-xs font-bold"
                  >
                    Learn About Our Company
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>

                {/* Recent News Widget */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="sb-title !text-base mb-4">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <Link
                        key={post.id}
                        href={`/news/${post.slug}`}
                        className="flex items-start gap-3.5 group"
                      >
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <div className="text-xs text-sb-muted font-medium mb-1">
                            {post.date}
                          </div>
                          <h4 className="text-xs sm:text-sm font-bold text-sb-navy group-hover:text-sb-primary line-clamp-2 transition-colors">
                            {post.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories Widget */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="sb-title !text-base mb-3 flex items-center gap-2">
                    <FolderOpen className="w-4 h-4 text-sb-primary" />
                    Categories
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {newsCategories.filter((c) => c !== "All").map((cat) => {
                      const count = newsArticles.filter((a) => a.category === cat).length
                      return (
                        <li key={cat}>
                          <Link
                            href={`/news?category=${encodeURIComponent(cat)}`}
                            className="flex items-center justify-between text-sb-body hover:text-sb-primary transition-colors py-1"
                          >
                            <span>{cat}</span>
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sb-gray text-sb-muted">
                              {count}
                            </span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                {/* Tags Widget */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="sb-title !text-base mb-3 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-sb-primary" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/news?q=${encodeURIComponent(tag)}`}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-sb-gray hover:bg-sb-pale-primary text-sb-body hover:text-sb-primary transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact Help Widget */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-sb-soft-primary to-white border border-sb-primary/20 shadow-xs text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-sb-primary/10 text-[11px] font-bold uppercase tracking-wider text-sb-primary mb-3">
                    Need Assistance?
                  </span>
                  <h4 className="text-base font-bold text-sb-navy mb-2">
                    Hubungi Tim Datatel
                  </h4>
                  <p className="text-xs text-sb-body leading-relaxed mb-4">
                    Konsultasikan proyek infrastruktur jaringan dan data center Anda bersama engineer kami.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+622157901453"
                      className="sb-btn sb-btn-primary sb-btn-sm w-full"
                    >
                      <Phone className="w-3.5 h-3.5 mr-1" />
                      (021) 5790 1453
                    </a>
                    <a
                      href="mailto:sales@datatel-internusa.com"
                      className="sb-btn sb-btn-white sb-btn-sm w-full text-xs"
                    >
                      <Mail className="w-3.5 h-3.5 mr-1 text-sb-primary" />
                      sales@datatel-internusa.com
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CtaBanner
          title="Looking for Enterprise IT Solutions?"
          description="PT. Datatel Inter Nusa provides turnkey consultation, installation, and 24x7 support."
        />
      </main>

      <Demo21Footer />
      <ScrollToTop />
    </div>
  )
}
