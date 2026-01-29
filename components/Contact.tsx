"use client"

import { useState } from "react"
import CustomButton from "./CustomButton"
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa"

const MAX_MESSAGE_LENGTH = 500

export default function Contact() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const messageLength = message.length
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, subject, message }),
      })

      if (res.ok) {
        setSuccess(true)
        setFullName('')
        setEmail('')
        setSubject('')
        setMessage('')
        setTimeout(() => setSuccess(false), 5000)
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help you with
            anything you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 mb-14">
          {/* Contact Form - left, takes 2 cols on large */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us more about your inquiry..."
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value.slice(0, MAX_MESSAGE_LENGTH))
                  }
                  maxLength={MAX_MESSAGE_LENGTH}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-y"
                />
                <p className="mt-1.5 text-sm text-gray-500">
                  {messageLength}/{MAX_MESSAGE_LENGTH} characters
                </p>
              </div>
              <CustomButton
                title={loading ? "Sending..." : "Send Message"}
                btnType="submit"
                isDisabled={loading}
                containerStyles="w-full bg-teal-600 text-white py-3.5 rounded-lg text-base font-semibold hover:bg-teal-700 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </form>
          </div>

          {/* Contact Information box - right */}
          <div className="lg:col-span-1">
            <div className="bg-teal-600 rounded-2xl shadow-lg shadow-teal-600/20 p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center text-white">
                    <FaMapMarkerAlt className="text-sm" />
                  </span>
                  <div className="text-teal-50 text-sm leading-relaxed">
                    123 Shopping Street, Commerce District
                    <br />
                    New York, NY 10001, USA
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center text-white">
                    <FaPhone className="text-sm" />
                  </span>
                  <div className="text-teal-50 text-sm leading-relaxed">
                    +1 (555) 123-4567
                    <br />
                    +1 (555) 987-6543
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center text-white">
                    <FaEnvelope className="text-sm" />
                  </span>
                  <div className="text-teal-50 text-sm leading-relaxed">
                    support@clotes-star.com
                    <br />
                    info@clotes-star.com
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center text-white">
                    <FaClock className="text-sm" />
                  </span>
                  <div className="text-teal-50 text-sm leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Follow Us
          </h3>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-teal-600 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookSquare className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-teal-600 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitterSquare className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-teal-600 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagramSquare className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-teal-600 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
