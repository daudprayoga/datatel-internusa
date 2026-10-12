import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ success: false, error: 'File tidak ditemukan.' }, { status: 400 })
    }

    // Validasi tipe file
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ success: false, error: 'Format file tidak didukung. Gunakan JPG, PNG, WebP, GIF, atau SVG.' }, { status: 400 })
    }

    // Validasi ukuran file (max 5MB)
    const maxSize = 5 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json({ success: false, error: 'Ukuran file maksimal 5MB.' }, { status: 400 })
    }

    // Tentukan folder target secara aman (default: portfolio)
    const folder = formData.get('folder') as string || 'portfolio'
    const allowedFolders = ['portfolio', 'partners', 'blog', 'avatars']
    const targetFolder = allowedFolders.includes(folder) ? folder : 'portfolio'

    // Buat nama file unik
    const ext = file.name.split('.').pop() || 'jpg'
    const timestamp = Date.now()
    const randomStr = Math.random().toString(36).substring(2, 8)
    const fileName = `${targetFolder}-${timestamp}-${randomStr}.${ext}`

    // Pastikan direktori ada
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', targetFolder)
    await mkdir(uploadDir, { recursive: true })

    // Tulis file
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filePath = path.join(uploadDir, fileName)
    await writeFile(filePath, buffer)

    // Kembalikan URL publik
    const publicUrl = `/uploads/${targetFolder}/${fileName}`

    return NextResponse.json({ success: true, url: publicUrl })
  } catch (error: any) {
    console.error('Error upload file:', error)
    return NextResponse.json({ success: false, error: 'Gagal mengupload file.' }, { status: 500 })
  }
}
