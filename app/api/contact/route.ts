import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'

/**
 * Pengecekan string acak / gibberish (contoh: KKOHGjUINLuBoTHuqiiYUMCf)
 */
function isGibberish(text: string): boolean {
  if (!text) return false
  const trimmed = text.trim()

  // 1. Teks sangat panjang tanpa ada spasi sama sekali (> 20 karakter)
  if (trimmed.length > 20 && !trimmed.includes(' ')) {
    return true
  }

  // 2. Kombinasi campuran huruf besar-kecil acak berlebihan tanpa spasi
  const hasMixedCaseRandom =
    /^[a-zA-Z]{15,}$/.test(trimmed) &&
    /[a-z]/.test(trimmed) &&
    /[A-Z]/.test(trimmed) &&
    !trimmed.includes(' ')

  return hasMixedCaseRandom
}

/**
 * POST /api/contact
 * Menerima data form kontak, verifikasi proteksi anti-spam (honeypot + format + reCAPTCHA v3), lalu simpan pesan.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message, recaptchaToken, website_url } = body

    // 1. Proteksi Honeypot (Jebakan Bot)
    // Jika field tersembunyi `website_url` diisi, berarti dikirim oleh bot otomatis.
    if (website_url) {
      console.warn('Bot terdeteksi via Honeypot field:', { name, email })
      // Kembalikan respon seolah-olah berhasil agar bot tidak mencoba pola lain
      const response = NextResponse.json({ success: true, message: 'Pesan Anda telah terkirim.' })
      response.cookies.set('form_submitted', 'true', {
        path: '/',
        maxAge: 300,
        httpOnly: true,
        sameSite: 'lax',
      })
      return response
    }

    // 2. Validasi field wajib
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: 'Field wajib tidak lengkap.' }, { status: 400 })
    }

    // 3. Validasi Format Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ success: false, error: 'Format email tidak valid.' }, { status: 400 })
    }

    // Pengecekan titik berlebihan di username email (contoh spam: q.er.at.ud.eyo.d.4.0@gmail.com)
    const emailLocalPart = email.split('@')[0] || ''
    if ((emailLocalPart.match(/\./g) || []).length > 3) {
      console.warn('Spam terdeteksi via Email dots pattern:', email)
      return NextResponse.json({ success: false, error: 'Format email terindikasi tidak valid.' }, { status: 400 })
    }

    // 4. Validasi Format Nomor Telepon (jika diisi)
    if (phone && phone.trim().length > 0) {
      const phoneClean = phone.trim()
      // Nomor telepon hanya boleh angka, +, -, spasi, ()
      if (!/^[0-9+\s()-]{6,25}$/.test(phoneClean)) {
        return NextResponse.json(
          { success: false, error: 'Nomor telepon hanya boleh berisi angka dan karakter telepon yang valid.' },
          { status: 400 }
        )
      }
    }

    // 5. Validasi Teks Acak / Gibberish pada Nama
    if (isGibberish(name)) {
      console.warn('Spam terdeteksi via Gibberish Name:', name)
      return NextResponse.json({ success: false, error: 'Nama terindikasi tidak valid.' }, { status: 400 })
    }

    // 6. Verifikasi reCAPTCHA token ke Google (jika RECAPTCHA_SECRET_KEY dikonfigurasi)
    const secretKey = process.env.RECAPTCHA_SECRET_KEY
    if (secretKey) {
      if (!recaptchaToken) {
        return NextResponse.json({ success: false, error: 'reCAPTCHA token tidak ditemukan.' }, { status: 400 })
      }
      const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${secretKey}&response=${recaptchaToken}`,
      })

      const verifyData = await verifyRes.json()

      // Score threshold: perketat ke 0.7 (0.0 = bot, 1.0 = manusia)
      if (!verifyData.success || verifyData.score < 0.7) {
        console.warn('reCAPTCHA gagal/skor rendah:', verifyData)
        return NextResponse.json(
          { success: false, error: 'Verifikasi keamanan reCAPTCHA gagal. Silakan coba lagi.' },
          { status: 400 }
        )
      }
    }

    // 7. Simpan pesan ke database jika lolos semua verifikasi
    const newMessage = await prisma.message.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        phone: phone ? phone.trim() : '',
        subject: subject.trim(),
        message: message.trim(),
        status: 'unread',
      },
    })

    const response = NextResponse.json({ success: true, data: newMessage })
    response.cookies.set('form_submitted', 'true', {
      path: '/',
      maxAge: 300, // Access valid for 5 minutes
      httpOnly: true,
      sameSite: 'lax',
    })
    return response
  } catch (error) {
    console.error('Error POST /api/contact:', error)
    return NextResponse.json({ success: false, error: 'Terjadi kesalahan server.' }, { status: 500 })
  }
}
