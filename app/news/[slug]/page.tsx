import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Demo21Navbar } from "@/components/demo21/navbar"
import { Demo21Footer } from "@/components/demo21/footer"
import { ScrollToTop } from "@/components/demo21/scroll-to-top"
import { PageHeader } from "@/components/demo21/page-header"
import { CtaBanner } from "@/components/sandbox/ui"
import {
  newsArticles,
  getNewsBySlug,
  getRecentNews,
  newsCategories,
} from "@/lib/news-data"
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  FolderOpen,
  Tag,
  Phone,
  Mail,
  CheckCircle2,
  Quote,
} from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getNewsBySlug(slug)

  if (!article) {
    return {
      title: "Article Not Found | PT. Datatel Inter Nusa",
    }
  }

  return {
    title: `${article.title} | PT. Datatel Inter Nusa`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getNewsBySlug(slug)

  if (!article) {
    notFound()
  }

  // Find index for Prev/Next navigation
  const currentIndex = newsArticles.findIndex((item) => item.slug === slug)
  const prevArticle = currentIndex > 0 ? newsArticles[currentIndex - 1] : null
  const nextArticle =
    currentIndex < newsArticles.length - 1 ? newsArticles[currentIndex + 1] : null

  // Recent news excluding current
  const recentPosts = getRecentNews(4, article.slug)
  const allTags = Array.from(new Set(newsArticles.flatMap((item) => item.tags)))

  return (
    <div className="min-h-screen bg-white text-sb-body font-sans antialiased selection:bg-sb-primary selection:text-white">
      <Demo21Navbar />

      <main>
        {/* Page Header (Sandbox style) */}
        <PageHeader
          badge={article.category}
          title={article.title}
          description={article.excerpt}
          breadcrumb={[
            { label: "News", href: "/news" },
            { label: article.title },
          ]}
        />

        {/* Article Details Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="sb-container">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
              
              {/* Left Column: Full Post Body */}
              <div className="lg:col-span-8 space-y-10">
                <article className="sb-card overflow-hidden">
                  
                  {/* Hero Thumbnail */}
                  <div className="relative w-full h-72 sm:h-96 md:h-[440px] bg-slate-100">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 850px"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="sb-card-body p-6 sm:p-10 space-y-6">
                    
                    {/* Meta Bar */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-sb-muted pb-4 border-b border-slate-100">
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
                      <span className="sb-badge bg-sb-pale-primary text-sb-primary ml-auto">
                        {article.category}
                      </span>
                    </div>

                    {/* Content Paragraphs */}
                    <div className="space-y-5 text-base text-sb-body leading-relaxed">
                      {article.content.map((paragraph, idx) => {
                        // Check if paragraph contains bullet lines
                        if (paragraph.includes("\n• ") || paragraph.includes("\n1. ")) {
                          const lines = paragraph.split("\n\n")
                          return (
                            <div key={idx} className="space-y-4">
                              {lines.map((line, lIdx) => (
                                <p key={lIdx} className="whitespace-pre-line">
                                  {line}
                                </p>
                              ))}
                            </div>
                          )
                        }
                        return (
                          <p key={idx} className="whitespace-pre-line">
                            {paragraph}
                          </p>
                        )
                      })}
                    </div>

                    {/* Blockquote highlight (Sandbox style) */}
                    {article.quote && (
                      <div className="my-8 p-6 sm:p-8 rounded-2xl bg-sb-soft-primary border-l-4 border-sb-primary relative">
                        <Quote className="w-8 h-8 text-sb-primary/30 absolute top-4 right-4" />
                        <p className="text-base sm:text-lg font-medium text-sb-navy italic leading-relaxed mb-3">
                          &ldquo;{article.quote.text}&rdquo;
                        </p>
                        <div className="text-xs font-bold text-sb-primary uppercase tracking-wider">
                          &mdash; {article.quote.author}
                        </div>
                      </div>
                    )}

                    {/* Image Gallery Showcase (Sandbox style) */}
                    {article.galleryImages && article.galleryImages.length > 0 && (
                      <div className="pt-2">
                        <h3 className="text-base font-bold text-sb-navy mb-4">
                          Event &amp; Solution Showcase
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {article.galleryImages.map((gImg, gIdx) => (
                            <div
                              key={gIdx}
                              className="relative h-48 sm:h-56 rounded-xl overflow-hidden bg-slate-100 group"
                            >
                              <Image
                                src={gImg}
                                alt={`Showcase ${gIdx + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="400px"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Post Footer: Tags & Share */}
                    <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-sb-navy mr-1">
                          Tags:
                        </span>
                        {article.tags.map((t) => (
                          <Link
                            key={t}
                            href={`/news?q=${encodeURIComponent(t)}`}
                            className="text-xs px-3 py-1 rounded-full bg-sb-gray hover:bg-sb-pale-primary text-sb-body hover:text-sb-primary transition-colors font-medium"
                          >
                            #{t}
                          </Link>
                        ))}
                      </div>

                      {/* Share */}
                      <div className="flex items-center gap-2 text-xs font-bold text-sb-navy">
                        <Share2 className="w-4 h-4 text-sb-primary" />
                        <span>Bagikan Berita</span>
                      </div>
                    </div>

                    {/* Author Box (Sandbox style) */}
                    <div className="mt-8 p-6 rounded-2xl bg-sb-gray/60 border border-slate-200/80 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm bg-sb-pale-primary">
                        <Image
                          src={article.author.avatar}
                          alt={article.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center sm:text-left space-y-1">
                        <h4 className="text-base font-bold text-sb-navy">
                          {article.author.name}
                        </h4>
                        <div className="text-xs text-sb-primary font-semibold">
                          {article.author.role}
                        </div>
                        <p className="text-xs text-sb-body leading-relaxed pt-1">
                          Tim editorial dan teknis resmi PT. Datatel Inter Nusa yang menyajikan informasi terkini seputar arsitektur jaringan, pusat data, dan integrasi sistem.
                        </p>
                      </div>
                    </div>

                    {/* Prev / Next Article Nav */}
                    <div className="pt-8 border-t border-slate-100 grid sm:grid-cols-2 gap-4">
                      {prevArticle ? (
                        <Link
                          href={`/news/${prevArticle.slug}`}
                          className="p-4 rounded-xl border border-slate-100 hover:border-sb-primary/30 hover:bg-sb-soft-primary/40 transition-all flex items-start gap-3 group"
                        >
                          <ArrowLeft className="w-4 h-4 text-sb-primary shrink-0 mt-1 transition-transform group-hover:-translate-x-1" />
                          <div>
                            <span className="text-[11px] font-bold text-sb-muted uppercase tracking-wider block">
                              Previous Article
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-sb-navy group-hover:text-sb-primary line-clamp-1 transition-colors">
                              {prevArticle.title}
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <div />
                      )}

                      {nextArticle ? (
                        <Link
                          href={`/news/${nextArticle.slug}`}
                          className="p-4 rounded-xl border border-slate-100 hover:border-sb-primary/30 hover:bg-sb-soft-primary/40 transition-all flex items-start justify-end text-right gap-3 group"
                        >
                          <div>
                            <span className="text-[11px] font-bold text-sb-muted uppercase tracking-wider block">
                              Next Article
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-sb-navy group-hover:text-sb-primary line-clamp-1 transition-colors">
                              {nextArticle.title}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-sb-primary shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
                        </Link>
                      ) : (
                        <div />
                      )}
                    </div>

                  </div>
                </article>
              </div>

              {/* Right Column: Sidebar */}
              <div className="lg:col-span-4 space-y-8">
                
                {/* Back to News Button */}
                <Link
                  href="/news"
                  className="sb-btn sb-btn-white w-full justify-center text-sm font-bold shadow-xs"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Semua Berita
                </Link>

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
                    Konsultasi Solusi IT
                  </h4>
                  <p className="text-xs text-sb-body leading-relaxed mb-4">
                    Hubungi spesialis kami untuk bantuan perancangan jaringan dan fasilitas data center.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+622187734050"
                      className="sb-btn sb-btn-primary sb-btn-sm w-full"
                    >
                      <Phone className="w-3.5 h-3.5 mr-1" />
                      +62 21 8773 4050
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
          title="Ingin Mengembangkan Infrastruktur IT Perusahaan Anda?"
          description="PT. Datatel Inter Nusa siap mendampingi dari perencanaan hingga pemeliharaan 24x7."
        />
      </main>

      <Demo21Footer />
      <ScrollToTop />
    </div>
  )
}
