/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        '*.ngrok-free.app'
      ]
    }
  },
  async redirects() {
    return [
      {
        source: '/layanan',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/layanan/active-networking-system',
        destination: '/services/networking-system',
        permanent: true,
      },
      {
        source: '/layanan/access-control',
        destination: '/services/access-control',
        permanent: true,
      },
      {
        source: '/layanan/data-center-infrastructure',
        destination: '/services/data-center-design-build',
        permanent: true,
      },
      {
        source: '/layanan/digital-cctv',
        destination: '/services/digital-cctv',
        permanent: true,
      },
      {
        source: '/layanan/structured-cabling-systems',
        destination: '/services/structured-cabling-system',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/vision-mission',
        permanent: true,
      },
      {
        source: '/tentang-kami',
        destination: '/vision-mission',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/our-valuable-customers',
        destination: '/customers',
        permanent: true,
      },
      {
        source: '/our-valuable-customers/:slug*',
        destination: '/customers/:slug*',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/hubungi-kami',
        destination: '/contact',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
