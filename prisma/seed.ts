import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@clotes-star.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@clotes-star.com',
      password: adminPassword,
      role: 'ADMIN',
    },
  })

  console.log('Admin user created:', admin.email)

  // Create sample products
  const products = [
    {
      name: 'Premium Leather Jacket',
      description: 'High-quality leather jacket',
      price: 299.9,
      oldPrice: 399.9,
      image: '/2acef841a29b609c0b386d4cfedc1bf7.jpg',
      category: 'Fashion',
      badge: 'Sale',
      rating: 3,
      reviews: 124,
      stock: 50,
    },
    {
      name: 'Classic Denim Sneakers',
      description: 'Comfortable denim sneakers',
      price: 89.9,
      oldPrice: 129.9,
      image: '/09ae64b35205a66a1cbfe81f1df12a77.jpg',
      category: 'Fashion',
      badge: 'Hot',
      rating: 4,
      reviews: 87,
      stock: 100,
    },
    {
      name: 'Wireless Noise-Cancel Headphones',
      description: 'Premium wireless headphones',
      price: 149.9,
      oldPrice: 199.9,
      image: '/c1f7299ef1214daa4eebea5bee2324fb.jpg',
      category: 'Electronics',
      badge: 'Best',
      rating: 4,
      reviews: 312,
      stock: 75,
    },
    {
      name: 'Smart Watch Series Pro',
      description: 'Latest smartwatch technology',
      price: 219.9,
      oldPrice: 279.9,
      image: '/6b8031aad730ce05495d6d253903a0ca.jpg',
      category: 'Electronics',
      badge: 'New',
      rating: 4,
      reviews: 208,
      stock: 60,
    },
    {
      name: 'Gold Plated Necklace',
      description: 'Elegant gold plated necklace',
      price: 59.9,
      oldPrice: 79.9,
      image: '/c77740b151be85747f6c544295b8de05.jpg',
      category: 'Jewarly',
      badge: 'Sale',
      rating: 4,
      reviews: 65,
      stock: 120,
    },
    {
      name: 'Minimal Silver Ring',
      description: 'Simple and elegant silver ring',
      price: 39.9,
      oldPrice: 49.9,
      image: '/ed9d4b366f26c4393904a015eaa3a82e.jpg',
      category: 'Jewarly',
      badge: 'New',
      rating: 3,
      reviews: 41,
      stock: 150,
    },
    {
      name: 'Modern Table Lamp',
      description: 'Contemporary table lamp design',
      price: 34.9,
      oldPrice: 49.9,
      image: '/2acef841a29b609c0b386d4cfedc1bf7.jpg',
      category: 'Home',
      badge: 'Deal',
      rating: 4,
      reviews: 102,
      stock: 80,
    },
    {
      name: 'Soft Cotton Throw Pillow',
      description: 'Comfortable cotton throw pillow',
      price: 19.9,
      oldPrice: 29.9,
      image: '/c77740b151be85747f6c544295b8de05.jpg',
      category: 'Home',
      badge: 'Hot',
      rating: 4,
      reviews: 56,
      stock: 200,
    },
  ]

  for (const product of products) {
    const existing = await prisma.product.findFirst({
      where: { name: product.name },
    })
    if (!existing) {
      await prisma.product.create({
        data: product,
      })
    }
  }

  console.log('Products seeded successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
