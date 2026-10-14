import Link from "next/link"

export function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/622187734050"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/25 transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5d]"
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden="true">
        <path d="M12.04 2a9.8 9.8 0 0 0-8.48 14.72L2 22l5.45-1.52A9.8 9.8 0 1 0 12.04 2Zm0 17.9a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.23.9.92-3.14-.2-.32A8.08 8.08 0 1 1 12.04 19.9Zm4.43-6.07c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.57 4.07 3.6.57.25 1.01.4 1.36.51.57.18 1.09.15 1.5.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </Link>
  )
}
