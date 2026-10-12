/**
 * Fungsi regex sederhana untuk mem-parse sintaks Markdown dasar menjadi HTML aman.
 * Jika teks berupa HTML (dideteksi dengan keberadaan tag HTML), kembalikan langsung.
 */
export function parseMarkdown(text: string) {
  if (!text) return ""

  // Jika teks sudah berupa HTML (WYSIWYG editor output), return teks tersebut langsung
  const isHtml = /<[a-z][\s\S]*>/i.test(text)
  if (isHtml) {
    return text
  }

  // Escape HTML dasar untuk keamanan jika berupa markdown teks mentah
  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

  // Headers (H1, H2, H3)
  html = html.replace(/^### (.*?)$/gm, '<h4 class="text-lg font-bold mt-4 mb-2 text-foreground">$1</h4>')
  html = html.replace(/^## (.*?)$/gm, '<h3 class="text-xl font-bold mt-6 mb-3 text-foreground border-b border-border pb-1.5">$1</h3>')
  html = html.replace(/^# (.*?)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4 text-foreground">$1</h2>')

  // Bold & Italic
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>")

  // Images: ![alt](url)
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="rounded-xl max-h-[400px] w-full md:w-auto object-cover my-5 border border-border shadow-sm" />')

  // Links: [text](url)
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">$1</a>')

  // Lists (- item)
  html = html.replace(/^\s*-\s*(.*?)$/gm, '<li class="ml-6 list-disc mt-1 text-foreground/90">$1</li>')
  
  // Numbered Lists (1. item)
  html = html.replace(/^\s*\d+\.\s*(.*?)$/gm, '<li class="ml-6 list-decimal mt-1 text-foreground/90">$1</li>')

  // Line breaks (\n)
  html = html.replace(/\n/g, "<br />")

  return html
}
