"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { FaShoppingCart, FaTimes, FaPlus, FaMinus, FaTrash } from "react-icons/fa"
import CustomButton from "./CustomButton"
import Link from "next/link"

interface CartItem {
  id: string
  product: {
    id: string
    name: string
    price: number
    image: string
  }
  quantity: number
}

export default function Cart() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(false)

  const fetchCart = async () => {
    if (!session) return
    try {
      const res = await fetch("/api/cart")
      if (res.ok) {
        const data = await res.json()
        setCartItems(data.items || [])
      }
    } catch (error) {
      console.error("Failed to fetch cart:", error)
    }
  }

  useEffect(() => {
    if (session) {
      fetchCart()
    }
  }, [session])

  useEffect(() => {
    const onCartUpdated = () => fetchCart()
    window.addEventListener('cart-updated', onCartUpdated)
    return () => window.removeEventListener('cart-updated', onCartUpdated)
  }, [session])

  useEffect(() => {
    if (isOpen && session) fetchCart()
  }, [isOpen, session])

  const updateQuantity = async (productId: string, quantity: number) => {
    if (!session) return
    setLoading(true)
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity }),
      })
      if (res.ok) {
        await fetchCart()
      }
    } catch (error) {
      console.error("Failed to update cart:", error)
    } finally {
      setLoading(false)
    }
  }

  const removeItem = async (productId: string) => {
    if (!session) return
    setLoading(true)
    try {
      const res = await fetch("/api/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      })
      if (res.ok) {
        await fetchCart()
      }
    } catch (error) {
      console.error("Failed to remove item:", error)
    } finally {
      setLoading(false)
    }
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  if (!session) {
    return (
      <Link href="/login">
        <button className="relative p-2 text-gray-700 hover:text-teal-600 transition-colors">
          <FaShoppingCart className="text-xl" />
        </button>
      </Link>
    )
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-gray-700 hover:text-teal-600 transition-colors"
      >
        <FaShoppingCart className="text-xl" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-teal-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <FaShoppingCart className="text-6xl text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 border border-gray-200 rounded-lg"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {item.product.name}
                        </h3>
                        <p className="text-teal-600 font-bold">
                          ${item.product.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                            disabled={loading}
                            className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
                          >
                            <FaMinus className="text-xs" />
                          </button>
                          <span className="font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            disabled={loading}
                            className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
                          >
                            <FaPlus className="text-xs" />
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            disabled={loading}
                            className="ml-auto p-2 text-red-600 hover:bg-red-50 rounded disabled:opacity-50"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t p-6 space-y-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-teal-600">${total.toFixed(2)}</span>
                </div>
                <CustomButton
                  title="Place Order"
                  containerStyles="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                  handleClick={async () => {
                    try {
                      const res = await fetch("/api/orders", {
                        method: "POST",
                      })
                      if (res.ok) {
                        setIsOpen(false)
                        alert("Order placed successfully!")
                        await fetchCart()
                      }
                    } catch (error) {
                      alert("Failed to place order")
                    }
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
