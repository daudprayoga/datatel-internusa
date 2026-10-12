"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import UnderlineExtension from "@tiptap/extension-underline"
import LinkExtension from "@tiptap/extension-link"
import ImageExtension from "@tiptap/extension-image"
import { TextStyle } from "@tiptap/extension-text-style"
import { Color } from "@tiptap/extension-color"
import Highlight from "@tiptap/extension-highlight"
import TextAlign from "@tiptap/extension-text-align"
import { Table, TableRow, TableCell, TableHeader } from "@tiptap/extension-table"
import Placeholder from "@tiptap/extension-placeholder"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Bold, Italic, Underline, Strikethrough, Type,
  List, ListOrdered, Link as LinkIcon, Image as ImageIcon,
  Loader2, Trash2, ChevronDown,
  Quote, Code, Code2, Minus,
  AlignLeft, AlignCenter, AlignRight,
  Highlighter, Table as TableIcon, UploadCloud, Link2,
} from "lucide-react"
import { toast } from "sonner"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover, PopoverContent, PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Extend TextStyle to support fontSize attribute
const TextStyleFontSize = TextStyle.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      fontSize: {
        default: null,
        parseHTML: (element: HTMLElement) => element.style.fontSize || null,
        renderHTML: (attributes: Record<string, unknown>) => {
          if (!attributes.fontSize) return {}
          return { style: `font-size: ${attributes.fontSize}` }
        },
      },
    }
  },
})

// Keep parseMarkdown export for the blog public page
export function parseMarkdown(text: string): string {
  if (!text) return ""
  const isHtml = /<[a-z][\s\S]*>/i.test(text)
  if (isHtml) return text

  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

  html = html.replace(/^### (.*?)$/gm, '<h4 class="text-lg font-bold mt-4 mb-2 text-foreground">$1</h4>')
  html = html.replace(/^## (.*?)$/gm, '<h3 class="text-xl font-bold mt-6 mb-3 text-foreground border-b border-border pb-1.5">$1</h3>')
  html = html.replace(/^# (.*?)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4 text-foreground">$1</h2>')
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>")
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="rounded-xl max-h-[400px] w-full md:w-auto object-cover my-5 border border-border shadow-sm" />')
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">$1</a>')
  html = html.replace(/^\s*-\s*(.*?)$/gm, '<li class="ml-6 list-disc mt-1 text-foreground/90">$1</li>')
  html = html.replace(/^\s*\d+\.\s*(.*?)$/gm, '<li class="ml-6 list-decimal mt-1 text-foreground/90">$1</li>')
  html = html.replace(/\n/g, "<br />")
  return html
}

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const FONT_SIZES = [
  { label: "Sangat Kecil (Catatan Kaki)", size: "12px" },
  { label: "Kecil (Keterangan)", size: "14px" },
  { label: "Normal (Bawaan)", size: "16px" },
  { label: "Sedang", size: "18px" },
  { label: "Besar", size: "20px" },
  { label: "Sangat Besar", size: "24px" },
]

const TEXT_COLORS = [
  { label: "Default", color: null },
  { label: "Merah", color: "#ef4444" },
  { label: "Oranye", color: "#f97316" },
  { label: "Kuning", color: "#eab308" },
  { label: "Hijau", color: "#22c55e" },
  { label: "Biru", color: "#3b82f6" },
  { label: "Ungu", color: "#a855f7" },
  { label: "Pink", color: "#ec4899" },
  { label: "Abu-abu", color: "#6b7280" },
]

const HIGHLIGHT_COLORS = [
  { label: "Hapus Highlight", color: null },
  { label: "Kuning", color: "#fef08a" },
  { label: "Hijau", color: "#bbf7d0" },
  { label: "Biru", color: "#bfdbfe" },
  { label: "Pink", color: "#fbcfe8" },
  { label: "Oranye", color: "#fed7aa" },
  { label: "Ungu", color: "#e9d5ff" },
  { label: "Merah", color: "#fecaca" },
]

export function MarkdownEditor({
  value,
  onChange,
  placeholder = "Tulis konten artikel di sini...",
}: MarkdownEditorProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [currentFontSize, setCurrentFontSize] = useState("16px")
  const [currentColor, setCurrentColor] = useState<string | null>(null)
  const [linkPopoverOpen, setLinkPopoverOpen] = useState(false)
  const [linkUrl, setLinkUrl] = useState("")
  const [imagePopoverOpen, setImagePopoverOpen] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const [tablePopoverOpen, setTablePopoverOpen] = useState(false)
  const [tableRows, setTableRows] = useState("3")
  const [tableCols, setTableCols] = useState("3")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const isExternalUpdate = useRef(false)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
        bulletList: { keepMarks: true, keepAttributes: false, HTMLAttributes: { class: "tiptap-bullet-list" } },
        orderedList: { keepMarks: true, keepAttributes: false, HTMLAttributes: { class: "tiptap-ordered-list" } },
        codeBlock: { HTMLAttributes: { class: "tiptap-code-block" } },
        blockquote: { HTMLAttributes: { class: "tiptap-blockquote" } },
      }),
      UnderlineExtension,
      TextStyleFontSize,
      Color,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Table.configure({ resizable: false, HTMLAttributes: { class: "tiptap-table" } }),
      TableRow,
      TableHeader,
      TableCell,
      LinkExtension.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-primary underline font-medium", target: "_blank", rel: "noopener noreferrer" },
      }),
      ImageExtension.configure({
        HTMLAttributes: { class: "rounded-xl max-h-[400px] w-auto object-cover my-5 border border-border shadow-sm" },
      }),
      Placeholder.configure({ placeholder }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      if (!isExternalUpdate.current) {
        onChange(editor.isEmpty ? "" : editor.getHTML())
      }
    },
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "tiptap-editor w-full p-6 outline-none min-h-[350px] max-h-[600px] overflow-y-auto text-base text-foreground leading-relaxed",
      },
    },
  })

  useEffect(() => {
    if (!editor) return
    const currentHtml = editor.getHTML()
    if (currentHtml !== value && value !== undefined) {
      isExternalUpdate.current = true
      editor.commands.setContent(value || "")
      isExternalUpdate.current = false
    }
  }, [value, editor])

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !editor) return
    const formData = new FormData()
    formData.append("file", file)
    setIsUploading(true)
    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData })
      const result = await res.json()
      if (result.success) {
        editor.chain().focus().setImage({ src: result.url, alt: file.name.split(".")[0] }).run()
        toast.success("Gambar berhasil diunggah!")
        setImagePopoverOpen(false)
      } else {
        toast.error(result.error || "Gagal mengunggah gambar.")
      }
    } catch {
      toast.error("Terjadi kesalahan saat mengunggah gambar.")
    } finally {
      setIsUploading(false)
      if (e.target) e.target.value = ""
    }
  }

  const handleInsertImageUrl = () => {
    if (!editor || !imageUrl.trim()) return
    editor.chain().focus().setImage({ src: imageUrl.trim(), alt: "gambar" }).run()
    setImagePopoverOpen(false)
    setImageUrl("")
  }

  // Link handlers
  const handleOpenLinkPopover = () => {
    if (!editor) return
    setLinkUrl(editor.getAttributes("link").href || "")
    setLinkPopoverOpen(true)
  }
  const handleApplyLink = () => {
    if (!editor) return
    if (!linkUrl.trim()) {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
    } else {
      editor.chain().focus().extendMarkRange("link").setLink({ href: linkUrl.trim() }).run()
    }
    setLinkPopoverOpen(false)
    setLinkUrl("")
  }
  const handleRemoveLink = () => {
    if (!editor) return
    editor.chain().focus().extendMarkRange("link").unsetLink().run()
    setLinkPopoverOpen(false)
    setLinkUrl("")
  }

  // Table handler
  const handleInsertTable = () => {
    if (!editor) return
    const rows = Math.max(1, parseInt(tableRows) || 3)
    const cols = Math.max(1, parseInt(tableCols) || 3)
    editor.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run()
    setTablePopoverOpen(false)
    setTableRows("3")
    setTableCols("3")
  }

  const handleSetFontSize = (size: string) => {
    if (!editor) return
    setCurrentFontSize(size)
    editor.chain().focus().setMark("textStyle", { fontSize: size }).run()
  }

  const handleSetColor = (color: string | null) => {
    if (!editor) return
    setCurrentColor(color)
    if (color) { editor.chain().focus().setColor(color).run() }
    else { editor.chain().focus().unsetColor().run() }
  }

  const handleSetHighlight = (color: string | null) => {
    if (!editor) return
    if (color) { editor.chain().focus().setHighlight({ color }).run() }
    else { editor.chain().focus().unsetHighlight().run() }
  }

  if (!editor) return null

  const btnBase = "h-8 w-8 text-muted-foreground hover:text-foreground transition-colors"
  const btnActive = "h-8 w-8 text-primary bg-primary/10 transition-colors"
  const btnSmBase = "h-8 px-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
  const btnSmActive = "h-8 px-2 text-xs font-semibold text-primary bg-primary/10 transition-colors"
  const divider = <div className="h-4 w-[1px] bg-border mx-0.5 flex-shrink-0" />

  return (
    <div className="w-full border border-border rounded-lg overflow-hidden bg-card shadow-sm">

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 border-b border-border bg-muted/20 p-1.5">

        {/* === ROW 1: Text Formatting === */}
        <Button type="button" variant="ghost" size="icon" className={editor.isActive("bold") ? btnActive : btnBase} title="Tebal (Bold)" onClick={() => editor.chain().focus().toggleBold().run()}><Bold className="h-4 w-4" /></Button>
        <Button type="button" variant="ghost" size="icon" className={editor.isActive("italic") ? btnActive : btnBase} title="Miring (Italic)" onClick={() => editor.chain().focus().toggleItalic().run()}><Italic className="h-4 w-4" /></Button>
        <Button type="button" variant="ghost" size="icon" className={editor.isActive("underline") ? btnActive : btnBase} title="Garis Bawah" onClick={() => editor.chain().focus().toggleUnderline().run()}><Underline className="h-4 w-4" /></Button>
        <Button type="button" variant="ghost" size="icon" className={editor.isActive("strike") ? btnActive : btnBase} title="Teks Dicoret" onClick={() => editor.chain().focus().toggleStrike().run()}><Strikethrough className="h-4 w-4" /></Button>

        {divider}

        {/* Font Size */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button type="button" variant="ghost" size="sm" className="h-8 px-2 text-xs font-semibold text-foreground hover:bg-muted/50 flex items-center gap-1" title="Ukuran Font">
              <span>{currentFontSize}</span><ChevronDown className="h-3 w-3 opacity-70" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48 p-1">
            {FONT_SIZES.map(({ label, size }) => (
              <DropdownMenuItem key={size} onSelect={() => handleSetFontSize(size)} className="flex items-center justify-between py-1.5 px-2 text-xs cursor-pointer">
                <span className={currentFontSize === size ? "font-semibold text-primary" : "text-foreground"}>{label}</span>
                <span className="text-[10px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{size}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Text Color */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button type="button" variant="ghost" size="sm" className="h-8 px-2 flex items-center gap-1 text-muted-foreground hover:text-foreground" title="Warna Teks">
              <span className="text-xs font-bold" style={{ color: currentColor || undefined }}>A</span>
              <div className="w-3 h-1 rounded-full" style={{ backgroundColor: currentColor || "hsl(var(--foreground))" }} />
              <ChevronDown className="h-3 w-3 opacity-70" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-40 p-1.5">
            {TEXT_COLORS.map(({ label, color }) => (
              <DropdownMenuItem key={label} onSelect={() => handleSetColor(color)} className="flex items-center gap-2 py-1.5 px-2 text-xs cursor-pointer">
                <div className="w-4 h-4 rounded-full border border-border flex-shrink-0" style={{ backgroundColor: color || "transparent", border: color ? undefined : "1px dashed hsl(var(--border))" }} />
                <span className={currentColor === color ? "font-semibold text-primary" : "text-foreground"}>{label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Highlight */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button type="button" variant="ghost" size="sm" className={`h-8 px-2 flex items-center gap-1 transition-colors ${editor.isActive("highlight") ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"}`} title="Sorot Teks (Highlight)">
              <Highlighter className="h-4 w-4" />
              <ChevronDown className="h-3 w-3 opacity-70" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-40 p-1.5">
            {HIGHLIGHT_COLORS.map(({ label, color }) => (
              <DropdownMenuItem key={label} onSelect={() => handleSetHighlight(color)} className="flex items-center gap-2 py-1.5 px-2 text-xs cursor-pointer">
                <div className="w-4 h-4 rounded border border-border flex-shrink-0" style={{ backgroundColor: color || "transparent", border: color ? undefined : "1px dashed hsl(var(--border))" }} />
                <span className="text-foreground">{label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {divider}

        {/* Headings */}
        <Button type="button" variant="ghost" size="sm" className={editor.isActive("heading", { level: 2 }) ? btnSmActive : btnSmBase} title="Sub-judul H2" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</Button>
        <Button type="button" variant="ghost" size="sm" className={editor.isActive("heading", { level: 3 }) ? btnSmActive : btnSmBase} title="Sub-judul H3" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</Button>
        <Button type="button" variant="ghost" size="sm" className={editor.isActive("paragraph") ? btnSmActive : btnSmBase} title="Paragraf" onClick={() => editor.chain().focus().setParagraph().run()}><Type className="h-4 w-4" /></Button>

        {divider}

        {/* Text Align */}
        <Button type="button" variant="ghost" size="icon" className={editor.isActive({ textAlign: "left" }) ? btnActive : btnBase} title="Rata Kiri" onClick={() => editor.chain().focus().setTextAlign("left").run()}><AlignLeft className="h-4 w-4" /></Button>
        <Button type="button" variant="ghost" size="icon" className={editor.isActive({ textAlign: "center" }) ? btnActive : btnBase} title="Rata Tengah" onClick={() => editor.chain().focus().setTextAlign("center").run()}><AlignCenter className="h-4 w-4" /></Button>
        <Button type="button" variant="ghost" size="icon" className={editor.isActive({ textAlign: "right" }) ? btnActive : btnBase} title="Rata Kanan" onClick={() => editor.chain().focus().setTextAlign("right").run()}><AlignRight className="h-4 w-4" /></Button>

        {divider}

        {/* Lists */}
        <Button type="button" variant="ghost" size="icon" className={editor.isActive("bulletList") ? btnActive : btnBase} title="List Bulat" onClick={() => editor.chain().focus().toggleBulletList().run()}><List className="h-4 w-4" /></Button>
        <Button type="button" variant="ghost" size="icon" className={editor.isActive("orderedList") ? btnActive : btnBase} title="List Angka" onClick={() => editor.chain().focus().toggleOrderedList().run()}><ListOrdered className="h-4 w-4" /></Button>
        <Button type="button" variant="ghost" size="icon" className={editor.isActive("blockquote") ? btnActive : btnBase} title="Kutipan (Blockquote)" onClick={() => editor.chain().focus().toggleBlockquote().run()}><Quote className="h-4 w-4" /></Button>

        {divider}

        {/* Code */}
        <Button type="button" variant="ghost" size="icon" className={editor.isActive("code") ? btnActive : btnBase} title="Kode Inline" onClick={() => editor.chain().focus().toggleCode().run()}><Code className="h-4 w-4" /></Button>
        <Button type="button" variant="ghost" size="icon" className={editor.isActive("codeBlock") ? btnActive : btnBase} title="Blok Kode" onClick={() => editor.chain().focus().toggleCodeBlock().run()}><Code2 className="h-4 w-4" /></Button>
        <Button type="button" variant="ghost" size="icon" className={btnBase} title="Garis Pemisah" onClick={() => editor.chain().focus().setHorizontalRule().run()}><Minus className="h-4 w-4" /></Button>

        {divider}

        {/* Link */}
        <Popover open={linkPopoverOpen} onOpenChange={setLinkPopoverOpen}>
          <PopoverTrigger asChild>
            <Button type="button" variant="ghost" size="icon" className={editor.isActive("link") ? btnActive : btnBase} title="Sisipkan Tautan" onClick={handleOpenLinkPopover}><LinkIcon className="h-4 w-4" /></Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4" align="start">
            <div className="space-y-3">
              <div className="space-y-1">
                <Label className="text-xs font-semibold">URL Tautan</Label>
                <Input autoFocus placeholder="https://contoh.com" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleApplyLink() } if (e.key === "Escape") setLinkPopoverOpen(false) }}
                  className="h-8 text-sm" />
              </div>
              <div className="flex items-center gap-2">
                <Button type="button" size="sm" className="flex-1 h-8 text-xs" onClick={handleApplyLink}>{linkUrl ? "Simpan Tautan" : "Hapus Tautan"}</Button>
                {editor.isActive("link") && (
                  <Button type="button" variant="outline" size="sm" className="h-8 text-xs text-destructive hover:text-destructive" onClick={handleRemoveLink}>Hapus</Button>
                )}
                <Button type="button" variant="ghost" size="sm" className="h-8 text-xs" onClick={() => setLinkPopoverOpen(false)}>Batal</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Image Popover */}
        <Popover open={imagePopoverOpen} onOpenChange={setImagePopoverOpen}>
          <PopoverTrigger asChild>
            <Button type="button" variant="ghost" size="icon" className={btnBase} title="Sisipkan Gambar" onClick={() => setImagePopoverOpen(true)}>
              {isUploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImageIcon className="h-4 w-4" />}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4" align="start">
            <div className="space-y-3">
              <p className="text-xs font-semibold text-foreground">Sisipkan Gambar</p>
              {/* URL Input */}
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground flex items-center gap-1"><Link2 className="h-3 w-3" /> Dari URL</Label>
                <div className="flex gap-2">
                  <Input placeholder="https://..." value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleInsertImageUrl() } if (e.key === "Escape") setImagePopoverOpen(false) }}
                    className="h-8 text-sm flex-1" />
                  <Button type="button" size="sm" className="h-8 text-xs px-3" onClick={handleInsertImageUrl} disabled={!imageUrl.trim()}>Sisip</Button>
                </div>
              </div>
              {/* Divider */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-border" />
                <span className="text-[10px] text-muted-foreground">atau</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              {/* Upload */}
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground flex items-center gap-1"><UploadCloud className="h-3 w-3" /> Unggah File</Label>
                <Button type="button" variant="outline" size="sm" className="w-full h-8 text-xs" disabled={isUploading} onClick={() => fileInputRef.current?.click()}>
                  {isUploading ? <><Loader2 className="h-3.5 w-3.5 animate-spin mr-1" />Mengunggah...</> : "Pilih File Gambar"}
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Table Popover */}
        <Popover open={tablePopoverOpen} onOpenChange={setTablePopoverOpen}>
          <PopoverTrigger asChild>
            <Button type="button" variant="ghost" size="icon" className={editor.isActive("table") ? btnActive : btnBase} title="Sisipkan Tabel" onClick={() => setTablePopoverOpen(true)}><TableIcon className="h-4 w-4" /></Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-4" align="start">
            <div className="space-y-3">
              <p className="text-xs font-semibold text-foreground">Buat Tabel Baru</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Baris</Label>
                  <Input type="number" min="1" max="20" value={tableRows} onChange={(e) => setTableRows(e.target.value)} className="h-8 text-sm text-center" />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Kolom</Label>
                  <Input type="number" min="1" max="10" value={tableCols} onChange={(e) => setTableCols(e.target.value)} className="h-8 text-sm text-center" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="button" size="sm" className="flex-1 h-8 text-xs" onClick={handleInsertTable}>Buat Tabel</Button>
                <Button type="button" variant="ghost" size="sm" className="h-8 text-xs" onClick={() => setTablePopoverOpen(false)}>Batal</Button>
              </div>
              {editor.isActive("table") && (
                <div className="pt-2 border-t border-border space-y-1">
                  <p className="text-[10px] text-muted-foreground font-medium">Aksi Tabel</p>
                  <div className="grid grid-cols-2 gap-1">
                    <Button type="button" variant="outline" size="sm" className="h-7 text-[10px]" onClick={() => editor.chain().focus().addRowAfter().run()}>+ Baris</Button>
                    <Button type="button" variant="outline" size="sm" className="h-7 text-[10px]" onClick={() => editor.chain().focus().addColumnAfter().run()}>+ Kolom</Button>
                    <Button type="button" variant="outline" size="sm" className="h-7 text-[10px] text-destructive hover:text-destructive" onClick={() => editor.chain().focus().deleteRow().run()}>- Baris</Button>
                    <Button type="button" variant="outline" size="sm" className="h-7 text-[10px] text-destructive hover:text-destructive" onClick={() => editor.chain().focus().deleteColumn().run()}>- Kolom</Button>
                    <Button type="button" variant="outline" size="sm" className="h-7 text-[10px] text-destructive hover:text-destructive col-span-2" onClick={() => editor.chain().focus().deleteTable().run()}>Hapus Tabel</Button>
                  </div>
                </div>
              )}
            </div>
          </PopoverContent>
        </Popover>

        {/* Clear Formatting */}
        <Button type="button" variant="ghost" size="sm"
          className="h-8 px-2 ml-auto flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
          title="Hapus semua format pada teks yang diseleksi (Bold, Warna, dll)"
          onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
        >
          <Trash2 className="h-3.5 w-3.5" />
          <span>Hapus Format</span>
        </Button>

        <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
      </div>

      {/* Editor Body */}
      <div className="bg-card">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
