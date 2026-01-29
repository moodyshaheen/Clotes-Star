"use client"

import { useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"
import { FaShoppingBag, FaUsers, FaEnvelope, FaSignOutAlt } from "react-icons/fa"
import { signOut } from "next-auth/react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (status === "loading") return
    if (!session || (session.user as any).role !== "ADMIN") {
      router.push("/login")
    }
  }, [session, status, router])

  if (status === "loading" || !session || (session.user as any).role !== "ADMIN") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-40 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold text-gray-900 shrink-0">Admin Dashboard</h1>
              <nav className="flex items-center gap-1" aria-label="Admin navigation">
                <Link
                  href="/admin"
                  className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 ${
                    pathname === "/admin" ? "bg-teal-50 text-teal-700 font-semibold border-b-2 border-teal-500" : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <FaShoppingBag className="mr-2" aria-hidden />
                  Orders
                </Link>
                <Link
                  href="/admin/users"
                  className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 ${
                    pathname === "/admin/users" ? "bg-teal-50 text-teal-700 font-semibold border-b-2 border-teal-500" : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <FaUsers className="mr-2" aria-hidden />
                  Users
                </Link>
                <Link
                  href="/admin/messages"
                  className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 ${
                    pathname === "/admin/messages" ? "bg-teal-50 text-teal-700 font-semibold border-b-2 border-teal-500" : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <FaEnvelope className="mr-2" aria-hidden />
                  Messages
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 hidden sm:inline">{session.user.name}</span>
              <button
                type="button"
                onClick={() => signOut()}
                className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200"
              >
                <FaSignOutAlt className="mr-2" aria-hidden />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        {children}
      </main>
    </div>
  )
}
