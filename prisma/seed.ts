import { PrismaClient } from '@prisma/client'
import { mockBlogs, mockPortfolios, mockMessages, mockServices, mockSettings, mockPartners } from '../lib/mock-data'
import crypto from 'crypto'

const prisma = new PrismaClient()

function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
  return `${salt}:${hash}`
}


async function main() {
  console.log('Memulai seeding database...')

  // 1. Seed BlogCategory
  console.log('Seeding BlogCategory...')
  const defaultCategories = [
    { name: "SEO", slug: "seo" },
    { name: "Design", slug: "design" },
    { name: "Marketing", slug: "marketing" },
    { name: "Development", slug: "development" },
    { name: "Business", slug: "business" },
  ]
  for (const cat of defaultCategories) {
    await prisma.blogCategory.upsert({
      where: { name: cat.name },
      update: {},
      create: {
        name: cat.name,
        slug: cat.slug,
      },
    })
  }

  // 2. Seed Blog
  console.log('Seeding Blog...')
  for (const blog of mockBlogs) {
    await prisma.blog.upsert({
      where: { slug: blog.slug },
      update: {},
      create: {
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        content: blog.content,
        category: blog.category,
        status: blog.status,
        thumbnail: blog.thumbnail,
        author: blog.author,
        createdAt: new Date(blog.createdAt),
        updatedAt: new Date(blog.updatedAt),
      },
    })
  }

  // 2. Seed Portfolio
  console.log('Seeding Portfolio...')
  for (const portfolio of mockPortfolios) {
    await prisma.portfolio.upsert({
      where: { id: portfolio.id },
      update: {},
      create: {
        id: portfolio.id,
        name: portfolio.name,
        description: portfolio.description,
        client: portfolio.client,
        category: portfolio.category,
        technologies: portfolio.technologies,
        image: portfolio.image,
        link: portfolio.link,
        createdAt: new Date(portfolio.createdAt),
      },
    })
  }

  // 3. Seed Message
  console.log('Seeding Message...')
  for (const message of mockMessages) {
    await prisma.message.upsert({
      where: { id: message.id },
      update: {
        followUpStatus: message.followUpStatus,
        followUpNotes: message.followUpNotes,
        followedBy: message.followedBy,
        followedAt: message.followedAt ? new Date(message.followedAt) : null,
      },
      create: {
        id: message.id,
        name: message.name,
        email: message.email,
        phone: message.phone,
        subject: message.subject,
        message: message.message,
        status: message.status,
        followUpStatus: message.followUpStatus || 'Belum Follow Up',
        followUpNotes: message.followUpNotes || null,
        followedBy: message.followedBy || null,
        followedAt: message.followedAt ? new Date(message.followedAt) : null,
        createdAt: new Date(message.createdAt),
      },
    })
  }

  // 4. Seed Service
  console.log('Seeding Service...')
  for (const service of mockServices) {
    await prisma.service.upsert({
      where: { id: service.id },
      update: {},
      create: {
        id: service.id,
        name: service.name,
        description: service.description,
        icon: service.icon,
        features: service.features,
        packages: service.packages,
      },
    })
  }

  // 5. Seed Setting
  console.log('Seeding Setting...')
  await prisma.setting.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      companyName: mockSettings.companyName,
      email: mockSettings.email,
      phone: mockSettings.phone,
      address: mockSettings.address,
      description: mockSettings.description,
      socialMedia: mockSettings.socialMedia,
    },
  })

  // 5.5. Seed Partner
  console.log('Seeding Partner...')
  for (const partner of mockPartners) {
    await prisma.partner.upsert({
      where: { id: partner.id },
      update: {},
      create: {
        id: partner.id,
        name: partner.name,
        logo: partner.logo,
        link: partner.link,
      },
    })
  }

  // 6. Seed Roles
  console.log('Seeding Roles...')
  const pages = ['dashboard', 'blog', 'portofolio', 'layanan', 'pesan', 'akses', 'pengaturan', 'partner', 'crm']
  const actions = ['read', 'add', 'edit', 'delete']
  const superAdminPermissions: string[] = []
  pages.forEach(p => {
    actions.forEach(a => {
      superAdminPermissions.push(`${p}:${a}`)
    })
  })

  const roles = [
    {
      id: 'role-admin',
      name: 'Super Admin',
      permissions: superAdminPermissions
    },
    {
      id: 'role-editor',
      name: 'Editor',
      permissions: [
        'dashboard:read', 'dashboard:edit',
        'blog:read', 'blog:add', 'blog:edit', 'blog:delete',
        'portofolio:read', 'portofolio:add', 'portofolio:edit', 'portofolio:delete',
        'layanan:read', 'layanan:add', 'layanan:edit', 'layanan:delete'
      ]
    },
    {
      id: 'role-staff',
      name: 'Staff',
      permissions: [
        'dashboard:read',
        'pesan:read', 'pesan:edit', 'pesan:delete'
      ]
    },
    {
      id: 'role-client',
      name: 'Client',
      permissions: [
        'dashboard:read'
      ]
    }
  ]

  for (const r of roles) {
    await prisma.role.upsert({
      where: { id: r.id },
      update: { name: r.name, permissions: r.permissions },
      create: {
        id: r.id,
        name: r.name,
        permissions: r.permissions,
      }
    })
  }

  // 7. Seed Users with Roles
  console.log('Seeding Users...')
  const defaultPasswordHash = hashPassword('password123')
  const adminPasswordHash = hashPassword('admin123')

  const users = [
    { name: 'Super Admin', email: 'admin@datatel-internusa.com', password: adminPasswordHash, roleId: 'role-admin' },
    { name: 'Content Editor', email: 'editor@datatel-internusa.com', password: defaultPasswordHash, roleId: 'role-editor' },
    { name: 'Support Staff', email: 'support@datatel-internusa.com', password: defaultPasswordHash, roleId: 'role-staff' },
    {
      name: 'Datatel Client',
      email: 'client@datatel-internusa.com',
      password: defaultPasswordHash,
      roleId: 'role-client',
      companyName: 'PT. Teknologi Sukses Bersama',
      phone: '081234567890',
      address: 'Jl. Sudirman No. 123, Jakarta Selatan',
      pic: 'Daud Pattynama',
      notes: 'Klien loyal untuk pengembangan web dan mobile app.',
      status: 'Active'
    }
  ]

  const seededUsers = []
  for (const u of users) {
    const user = await prisma.user.upsert({
      where: { email: u.email },
      update: {
        roleId: u.roleId,
        companyName: u.companyName || null,
        phone: u.phone || null,
        address: u.address || null,
        pic: u.pic || null,
        notes: u.notes || null,
        status: u.status || 'Active'
      },
      create: {
        name: u.name,
        email: u.email,
        password: u.password,
        roleId: u.roleId,
        companyName: u.companyName || null,
        phone: u.phone || null,
        address: u.address || null,
        pic: u.pic || null,
        notes: u.notes || null,
        status: u.status || 'Active'
      }
    })
    seededUsers.push(user)
  }

  const clientUser = seededUsers.find(u => u.email === 'client@raztech.com')
  if (clientUser) {
    console.log('Seeding ClientServices, Projects, and FollowUps for client...')

    // Clear existing for fresh seed
    await prisma.clientService.deleteMany({ where: { userId: clientUser.id } })
    await prisma.project.deleteMany({ where: { userId: clientUser.id } })
    await prisma.followUp.deleteMany({ where: { userId: clientUser.id } })

    const now = new Date()
    const thirtyDaysLater = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)
    const sixtyDaysLater = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000)
    const tenDaysAgo = new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000)
    const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000)
    const oneDayAgo = new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000)
    const fifteenDaysLater = new Date(now.getTime() + 15 * 24 * 60 * 60 * 1000)
    const ninetyDaysLater = new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000)

    // Seed Services
    await prisma.clientService.create({
      data: {
        userId: clientUser.id,
        domainName: 'datatel-internusa.com',
        serviceType: 'Domain',
        provider: 'Niagahoster',
        expiredDate: thirtyDaysLater,
        purchaseDate: tenDaysAgo,
        renewalDate: thirtyDaysLater,
        price: '150.000',
        hpp: '110.000',
        status: 'Active',
        notes: 'Domain utama perusahaan'
      }
    })

    await prisma.clientService.create({
      data: {
        userId: clientUser.id,
        domainName: 'datatel-internusa.com',
        serviceType: 'Hosting',
        provider: 'DigitalOcean',
        package: 'Premium VPS 2GB',
        serverIp: '139.59.244.15',
        expiredDate: sixtyDaysLater,
        purchaseDate: tenDaysAgo,
        price: '250.000',
        hpp: '180.000',
        status: 'Active',
        notes: 'Server VPS Singapore'
      }
    })

    // Seed Projects
    await prisma.project.create({
      data: {
        userId: clientUser.id,
        name: 'Rebranding Website RAZS Tech',
        pic: 'Yoga',
        progress: 80,
        status: 'Development',
        description: 'Pengembangan website profil perusahaan baru dengan desain modern.',
        startDate: tenDaysAgo,
        deadline: fifteenDaysLater
      }
    })

    await prisma.project.create({
      data: {
        userId: clientUser.id,
        name: 'Mobile App Client Portal',
        pic: 'Daud',
        progress: 20,
        status: 'Planning',
        description: 'Pembuatan aplikasi mobile portal klien untuk memantau layanan.',
        startDate: oneDayAgo,
        deadline: ninetyDaysLater
      }
    })

    // Seed FollowUps
    await prisma.followUp.create({
      data: {
        userId: clientUser.id,
        date: threeDaysAgo,
        type: 'Meeting',
        notes: 'Diskusi progress pengembangan website dan rencana fitur mobile app.',
        picInternal: 'Super Admin',
        status: 'Closed'
      }
    })

    await prisma.followUp.create({
      data: {
        userId: clientUser.id,
        date: oneDayAgo,
        type: 'WhatsApp',
        notes: 'Konfirmasi data login server hosting.',
        picInternal: 'Support Staff',
        status: 'Closed'
      }
    })
  }

  console.log('Seeding selesai dengan sukses! 🎉')
}

main()
  .catch((e) => {
    console.error('Error saat seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
