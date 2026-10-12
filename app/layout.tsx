import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'
import Script from 'next/script'
import prisma from '@/lib/db'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

// Sandbox template typeface (sandbox320/dist/assets/fonts/urbanist)
const urbanist = localFont({
  src: [
    { path: './fonts/urbanist/Urbanist-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/urbanist/Urbanist-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/urbanist/Urbanist-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/urbanist/Urbanist-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-urbanist',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.datatel-internusa.com'),
  title: {
    default: 'PT. Datatel Inter Nusa | Computer Network & System Integrators',
    template: '%s | PT. Datatel Inter Nusa'
  },
  description: 'PT. Datatel Inter Nusa adalah National Private Enterprise terkemuka yang berfokus pada Computer Network & System Integrators sejak 2005. Menyediakan layanan Data Center TIA-942, Structured Cabling, Active Networking, Digital CCTV, dan Access Control System di seluruh Indonesia.',
  keywords: [
    'Datatel Inter Nusa',
    'computer network',
    'system integrators',
    'data center design build',
    'TIA-942',
    'structured cabling system',
    'digital cctv surveillance',
    'access control system',
    'IT infrastructure indonesia',
    'network engineer jakarta'
  ],
  generator: 'Datatel Inter Nusa',
  icons: {
    icon: '/datatel-icon.svg',
    apple: '/datatel-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.datatel-internusa.com',
    siteName: 'PT. Datatel Inter Nusa',
    title: 'PT. Datatel Inter Nusa | Computer Network & System Integrators',
    description: 'Solusi terpadu IT Infrastructure, Data Center TIA-942, Structured Cabling, Active Networking, Digital CCTV, dan Access Control System sejak 2005.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT. Datatel Inter Nusa | Computer Network & System Integrators',
    description: 'Solusi terpadu IT Infrastructure, Data Center TIA-942, Structured Cabling, Active Networking, Digital CCTV, dan Access Control System sejak 2005.',
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  let settings: any = null
  if (process.env.DATABASE_URL) {
    try {
      settings = await prisma.setting.findUnique({
        where: { id: 1 },
      }).catch(() => null)
    } catch {
      settings = null
    }
  }

  const gtmId = (settings as any)?.googleTagManagerId
  const companyName = settings?.companyName || "PT. Datatel Inter Nusa"
  const email = settings?.email || "sales@datatel-internusa.com"
  const phone = settings?.phone || "+62 21 5790 1453"
  const address = settings?.address || "Jl. Penjernihan I No.30, Bendungan Hilir, Jakarta Pusat 10210"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": companyName,
    "image": "https://www.datatel-internusa.com/datatel-logo.svg",
    "@id": "https://www.datatel-internusa.com/#localbusiness",
    "url": "https://www.datatel-internusa.com",
    "telephone": phone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressLocality": "Jakarta Pusat",
      "postalCode": "10210",
      "addressCountry": "ID"
    }
  }

  return (
    <html lang="id">
      <body className={`${inter.variable} ${urbanist.variable} font-sans antialiased overflow-x-hidden`}>
        {/* Google Tag Manager — noscript fallback (harus jadi elemen pertama di dalam body) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Toaster richColors position="top-right" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      {/* Google Tag Manager — JS snippet */}
      {gtmId && (
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      )}
    </html>
  )
}
