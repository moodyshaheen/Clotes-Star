"use client"
import React, { useMemo, useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import CustomButton from './CustomButton'
import { FaStar,FaShoppingCart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

type ProductItem = {
  id: string
  name: string
  category: string
  image: string
  price: number
  oldPrice?: number | null
  rating: number
  reviews: number
  badge?: string | null
}

function Categoris() {
  const { data: session } = useSession()
  const [addingToCart, setAddingToCart] = useState<string | null>(null)
  const [apiProducts, setApiProducts] = useState<ProductItem[]>([])
  const [productsLoading, setProductsLoading] = useState(true)

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.ok ? res.json() : [])
      .then((data) => setApiProducts(Array.isArray(data) ? data : []))
      .catch(() => setApiProducts([]))
      .finally(() => setProductsLoading(false))
  }, [])

  const addToCart = async (productId: string) => {
    if (!session) {
      window.location.href = '/login'
      return
    }

    if (apiProducts.length === 0) {
      alert('يجب تشغيل قاعدة البيانات أولاً. في الطرفية نفّذ: npm run db:push ثم npm run db:seed')
      return
    }

    setAddingToCart(productId)
    try {
      const res = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity: 1 }),
      })
      if (res.ok) {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('cart-updated'))
        }
        alert('تمت إضافة المنتج للسلة!')
      } else {
        const data = await res.json().catch(() => ({}))
        alert(data.error || 'فشل إضافة المنتج للسلة')
      }
    } catch (error) {
      alert('فشل إضافة المنتج للسلة')
    } finally {
      setAddingToCart(null)
    }
  }

  const fallbackProducts = useMemo(
    () => [
      {
        id: 'p1',
        name: 'Premium Leather Jacket',
        category: 'Fashion',
        image: '/2acef841a29b609c0b386d4cfedc1bf7.jpg',
        price: 299.9,
        oldPrice: 399.9,
        rating: 3,
        reviews: 124,
        badge: 'Sale',
      },
      {
        id: 'p2',
        name: 'Classic Denim Sneakers',
        category: 'Fashion',
        image: '/09ae64b35205a66a1cbfe81f1df12a77.jpg',
        price: 89.9,
        oldPrice: 129.9,
        rating: 4,
        reviews: 87,
        badge: 'Hot',
      },
      {
        id: 'p3',
        name: 'Wireless Noise-Cancel Headphones',
        category: 'Electronics',
        image: '/c1f7299ef1214daa4eebea5bee2324fb.jpg',
        price: 149.9,
        oldPrice: 199.9,
        rating: 4,
        reviews: 312,
        badge: 'Best',
      },
      {
        id: 'p4',
        name: 'Smart Watch Series Pro',
        category: 'Electronics',
        image: '/6b8031aad730ce05495d6d253903a0ca.jpg',
        price: 219.9,
        oldPrice: 279.9,
        rating: 4,
        reviews: 208,
        badge: 'New',
      },
      {
        id: 'p5',
        name: 'Gold Plated Necklace',
        category: 'Jewarly',
        image: '/c77740b151be85747f6c544295b8de05.jpg',
        price: 59.9,
        oldPrice: 79.9,
        rating: 4,
        reviews: 65,
        badge: 'Sale',
      },
      {
        id: 'p6',
        name: 'Minimal Silver Ring',
        category: 'Jewarly',
        image: '/ed9d4b366f26c4393904a015eaa3a82e.jpg',
        price: 39.9,
        oldPrice: 49.9,
        rating: 3,
        reviews: 41,
        badge: 'New',
      },
      {
        id: 'p7',
        name: 'Modern Table Lamp',
        category: 'Home',
        image: '/2acef841a29b609c0b386d4cfedc1bf7.jpg',
        price: 34.9,
        oldPrice: 49.9,
        rating: 4,
        reviews: 102,
        badge: 'Deal',
      },
      {
        id: 'p8',
        name: 'Soft Cotton Throw Pillow',
        category: 'Home',
        image: '/c77740b151be85747f6c544295b8de05.jpg',
        price: 19.9,
        oldPrice: 29.9,
        rating: 4,
        reviews: 56,
        badge: 'Hot',
      },
    ],
    []
  )

  const products: ProductItem[] = apiProducts.length > 0 ? apiProducts : fallbackProducts

  const categories = useMemo(
    () => [
      { key: 'All', label: 'All' },
      { key: 'Fashion', label: 'Fashion' },
      { key: 'Electronics', label: 'Electronics' },
      { key: 'Jewarly', label: 'Jewarly' },
      { key: 'Home', label: 'Home' },
    ],
    []
  )

  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]['key']>('All')

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products
    return products.filter((p) => p.category === activeCategory)
  }, [activeCategory, products])

  const categoryCounts = useMemo(() => {
    const counts = products.reduce<Record<string, number>>((acc, p) => {
      acc[p.category] = (acc[p.category] ?? 0) + 1
      return acc
    }, {})
    return {
      All: products.length,
      ...counts,
    } as Record<(typeof categories)[number]['key'], number>
  }, [products])

  const badgeClass = (badge: string) => {
    switch (badge) {
      case 'Sale':
        return 'bg-red-500'
      case 'New':
        return 'bg-teal-600'
      case 'Hot':
        return 'bg-orange-500'
      case 'Best':
        return 'bg-indigo-600'
      case 'Deal':
        return 'bg-emerald-600'
      default:
        return 'bg-gray-900'
    }
  }

  return (
    <section className='py-20 bg-gradient-to-b from-white to-gray-50'>
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Products</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Handpicked selections from our premium collection</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                {categories.map((cat) => {
                  const isActive = cat.key === activeCategory
                  return (
                    <CustomButton
                      key={cat.key}
                      title={
                        <>
                          {cat.label}{' '}
                          <span className="ml-2 text-xs opacity-75">{categoryCounts[cat.key] ?? 0}</span>
                        </>
                      }
                      handleClick={() => setActiveCategory(cat.key)}
                      containerStyles={[
                        'px-6 py-2.5 rounded-full font-medium text-sm transition-all whitespace-nowrap cursor-pointer',
                        isActive
                          ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/30'
                          : 'bg-white text-gray-700 border border-gray-200 hover:border-teal-200 hover:text-teal-700 hover:bg-teal-50',
                      ].join(' ')}
                    />
                  )
                })}

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((p) => (
                      <div
                        key={p.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                      >
                        <div className="relative w-full h-80 overflow-hidden bg-gray-100">
                          <div
                            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white z-10 ${badgeClass(
                              p.badge ?? ''
                            )}`}
                          >
                            {p.badge ?? ''}
                          </div>
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-5">
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{p.name}</h3>
                            <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">
                              {p.category}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 mb-3">
                            {Array.from({ length: 4 }).map((_, i) => (
                              <FaStar
                                key={`${p.id}-star-${i}`}
                                className={`text-sm ${i < p.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              />
                            ))}
                            <span className="text-xs text-gray-500">({p.reviews})</span>
                          </div>

                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl font-bold text-teal-600">${p.price}</span>
                            {p.oldPrice != null && (
                              <span className="text-sm text-gray-400 line-through">${p.oldPrice}</span>
                            )}
                          </div>

                          <CustomButton
                            title={
                              <>
                                <FaShoppingCart className="text-lg" />
                                {addingToCart === p.id ? 'Adding...' : 'Add To Cart'}
                              </>
                            }
                            containerStyles="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer disabled:opacity-50"
                            handleClick={() => addToCart(p.id)}
                            isDisabled={addingToCart === p.id}
                          />
                        </div>
                      </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                <CustomButton
                            title={
                              <>
                                View All Products
                                <FaArrowRight/>
                              </>
                            }
                            containerStyles="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors border-2 border-teal-600 whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
                          />
                </div>
             </div>

    </section>
  )
}

export default Categoris