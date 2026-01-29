"use client"

import { useEffect, useState } from "react"
import { FaEnvelope, FaEnvelopeOpen, FaUser, FaCalendar } from "react-icons/fa"

interface Message {
  id: string
  fullName: string
  email: string
  subject: string
  message: string
  read: boolean
  createdAt: string
  user: {
    name: string
    email: string
  } | null
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/messages")
      if (res.ok) {
        const data = await res.json()
        setMessages(data.messages || [])
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error)
    } finally {
      setLoading(false)
    }
  }

  const markAsRead = async (messageId: string, read: boolean) => {
    try {
      const res = await fetch("/api/messages", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messageId, read }),
      })
      if (res.ok) {
        fetchMessages()
        if (selectedMessage?.id === messageId) {
          setSelectedMessage({ ...selectedMessage, read })
        }
      }
    } catch (error) {
      alert("Failed to update message status")
    }
  }

  const unreadCount = messages.filter((m) => !m.read).length

  if (loading) {
    return <div className="text-center py-12 text-gray-600">Loading messages...</div>
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Messages</h2>
          <p className="mt-1 text-sm text-gray-600">
            Customer inquiries and contact form submissions
          </p>
        </div>
        {unreadCount > 0 && (
          <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
            {unreadCount} unread
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 border-b">
              <h3 className="text-sm font-medium text-gray-900">All Messages</h3>
            </div>
            <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
              {messages.length === 0 ? (
                <div className="px-4 py-12 text-center text-gray-500">No messages</div>
              ) : (
                messages.map((message) => (
                  <button
                    key={message.id}
                    onClick={() => setSelectedMessage(message)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                      selectedMessage?.id === message.id ? "bg-teal-50 border-l-4 border-teal-500" : ""
                    } ${!message.read ? "bg-blue-50" : ""}`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <p className={`text-sm font-medium ${!message.read ? "text-gray-900" : "text-gray-600"}`}>
                        {message.subject}
                      </p>
                      {!message.read && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 truncate">{message.fullName}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(message.createdAt).toLocaleString()}
                    </p>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          {selectedMessage ? (
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b bg-gray-50">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {selectedMessage.subject}
                  </h3>
                  {!selectedMessage.read && (
                    <button
                      onClick={() => markAsRead(selectedMessage.id, true)}
                      className="px-3 py-1 text-xs font-medium text-white bg-teal-600 rounded hover:bg-teal-700"
                    >
                      Mark as Read
                    </button>
                  )}
                </div>
              </div>
              <div className="px-6 py-4 space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <FaUser />
                    <span className="font-medium">From:</span>
                    <span>{selectedMessage.fullName}</span>
                    {selectedMessage.user && (
                      <span className="text-gray-400">({selectedMessage.user.name})</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <FaEnvelope />
                    <span className="font-medium">Email:</span>
                    <a
                      href={`mailto:${selectedMessage.email}`}
                      className="text-teal-600 hover:underline"
                    >
                      {selectedMessage.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCalendar />
                    <span className="font-medium">Date:</span>
                    <span>{new Date(selectedMessage.createdAt).toLocaleString()}</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium text-gray-700 mb-2">Message:</p>
                  <p className="text-gray-600 whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow rounded-lg flex items-center justify-center h-64">
              <div className="text-center text-gray-500">
                <FaEnvelope className="text-4xl mx-auto mb-2 text-gray-300" />
                <p>Select a message to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
