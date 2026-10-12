import Link from "next/link"
import { Demo21Navbar } from "@/components/demo21/navbar"
import { Demo21Footer } from "@/components/demo21/footer"
import { Home, ArrowLeft, PhoneCall } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-[#60697b] font-sans antialiased selection:bg-[#3f78e0] selection:text-white">
      <Demo21Navbar />

      <main className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-50 text-sb-primary font-bold text-3xl mb-6 shadow-xs border border-blue-100">
            404
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-base text-slate-600 mb-8 leading-relaxed">
            Maaf, halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau alamat URL yang Anda masukkan salah.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sb-primary hover:bg-sb-primary-hover text-white font-semibold text-sm shadow-md transition-all duration-200"
            >
              <Home className="w-4 h-4" />
              Kembali ke Beranda
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200 transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4" />
              Hubungi Kami
            </Link>
          </div>
        </div>
      </main>

      <Demo21Footer />
    </div>
  )
}
