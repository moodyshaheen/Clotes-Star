"use client"

import { useEffect, useState } from "react"
import { FaCheckCircle, FaClock, FaTruck, FaTimesCircle } from "react-icons/fa"

interface Order {
  id: string
  status: string
  total: number
  createdAt: string
  user: {
    name: string
    email: string
  }
  items: Array<{
    product: {
      name: string
      image: string
    }
    quantity: number
    price: number
  }>
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/orders")
      if (res.ok) {
        const data = await res.json()
        setOrders(data.orders || [])
      }
    } catch (error) {
      console.error("Failed to fetch orders:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateOrderStatus = async (orderId: string, status: string) => {
    try {
      const res = await fetch("/api/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, status }),
      })
      if (res.ok) {
        fetchOrders()
      }
    } catch (error) {
      alert("Failed to update order status")
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "DELIVERED":
        return <FaCheckCircle className="text-green-500" />
      case "SHIPPED":
        return <FaTruck className="text-blue-500" />
      case "PROCESSING":
        return <FaClock className="text-yellow-500" />
      case "CANCELLED":
        return <FaTimesCircle className="text-red-500" />
      default:
        return <FaClock className="text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "DELIVERED":
        return "bg-green-100 text-green-800"
      case "SHIPPED":
        return "bg-blue-100 text-blue-800"
      case "PROCESSING":
        return "bg-yellow-100 text-yellow-800"
      case "CANCELLED":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (loading) {
    return <div className="text-center py-12 text-gray-600">Loading orders...</div>
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Orders Management</h2>
        <p className="mt-1 text-sm text-gray-600">Manage and track customer orders</p>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {orders.length === 0 ? (
            <li className="px-6 py-12 text-center text-gray-500">No orders found</li>
          ) : (
            orders.map((order) => (
              <li key={order.id} className="px-6 py-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Order #{order.id.slice(-8)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {order.user.name} ({order.user.email})
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(order.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-teal-600">${order.total.toFixed(2)}</p>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      {order.status}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Items:</p>
                  <div className="space-y-2">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{item.product.name}</p>
                          <p className="text-gray-500">Qty: {item.quantity} × ${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {order.status !== "PENDING" && (
                    <button
                      onClick={() => updateOrderStatus(order.id, "PENDING")}
                      className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                    >
                      Set Pending
                    </button>
                  )}
                  {order.status !== "PROCESSING" && (
                    <button
                      onClick={() => updateOrderStatus(order.id, "PROCESSING")}
                      className="px-3 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 rounded hover:bg-yellow-200"
                    >
                      Set Processing
                    </button>
                  )}
                  {order.status !== "SHIPPED" && (
                    <button
                      onClick={() => updateOrderStatus(order.id, "SHIPPED")}
                      className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded hover:bg-blue-200"
                    >
                      Set Shipped
                    </button>
                  )}
                  {order.status !== "DELIVERED" && (
                    <button
                      onClick={() => updateOrderStatus(order.id, "DELIVERED")}
                      className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded hover:bg-green-200"
                    >
                      Set Delivered
                    </button>
                  )}
                  {order.status !== "CANCELLED" && (
                    <button
                      onClick={() => updateOrderStatus(order.id, "CANCELLED")}
                      className="px-3 py-1 text-xs font-medium text-red-700 bg-red-100 rounded hover:bg-red-200"
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}
