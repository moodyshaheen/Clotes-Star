"use client"

import { useState, useCallback } from "react"
import { FaStar } from "react-icons/fa"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"

const testimonials = [
  {
    id: 1,
    text: "Amazing shopping experience! The quality of products exceeded my expectations, and the delivery was incredibly fast. I love the personalized recommendations that help me discover new styles.",
    name: "Sarah Johnson",
    role: "Fashion Enthusiast",
    avatar: "/2b8c44dda64bb88fe86c04deaacb089a.jpg",
    rating: 5,
  },
  {
    id: 2,
    text: "Best online store I've ever used. Great prices, fast shipping, and the customer service team was so helpful when I had a question about sizing.",
    name: "Michael Chen",
    role: "Tech Reviewer",
    avatar: "/7dcad2dccd9f72e4d0feab044eafc634.jpg",
    rating: 5,
  },
  {
    id: 3,
    text: "I keep coming back for the quality and variety. The checkout process is smooth and my orders always arrive on time. Highly recommend!",
    name: "Emma Williams",
    role: "Lifestyle Blogger",
    avatar: "/8429fa7bd9b8bfaea090f2176cbc9d02.jpg",
    rating: 5,
  },
  {
    id: 4,
    text: "Finally a store that gets it right. Clear product photos, honest reviews, and returns are hassle-free. This is how shopping should be.",
    name: "David Martinez",
    role: "Frequent Shopper",
    avatar: "/11663fdf8bb7e5c07603da0d4e43c668.jpg",
    rating: 5,
  },
  {
    id: 5,
    text: "The curated collections save me so much time. I found exactly what I was looking for and the packaging was beautiful. Will definitely order again.",
    name: "Lisa Anderson",
    role: "Style Advisor",
    avatar: "/ab10b1c8bb43ed488dd3bbf0043b1d27.jpg",
    rating: 5,
  },
  {
    id: 6,
    text: "Outstanding service from start to finish. Quick delivery, easy returns, and the product quality is consistently great. My go-to shop now.",
    name: "James Wilson",
    role: "Verified Buyer",
    avatar: "/db4ad8800a4698dc1f52e036e8df4d66.jpg",
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  }, [])

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their shopping needs.
          </p>
        </div>

        <div className="relative flex items-center gap-4">
          {/* Prev arrow */}
          <button
            type="button"
            onClick={goPrev}
            className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 items-center justify-center text-gray-700 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <IoChevronBack className="text-xl" />
          </button>

          {/* Card slot */}
          <div className="flex-1 min-w-0">
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-300 ${
                  index === activeIndex
                    ? "opacity-100 block"
                    : "opacity-0 hidden"
                }`}
                role="tabpanel"
                aria-hidden={index !== activeIndex}
              >
                <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-8 sm:p-10 text-center">
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-xl ${
                          i < item.rating ? "text-yellow-400" : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                    &ldquo;{item.text}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="relative shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-teal-500/30 ring-offset-2"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next arrow */}
          <button
            type="button"
            onClick={goNext}
            className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 items-center justify-center text-gray-700 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <IoChevronForward className="text-xl" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === activeIndex ? "bg-teal-500" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">
              98%
            </div>
            <p className="text-gray-600 text-sm">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">
              50K+
            </div>
            <p className="text-gray-600 text-sm">5-Star Reviews</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">
              100K+
            </div>
            <p className="text-gray-600 text-sm">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">
            24/7
            </div>
            <p className="text-gray-600 text-sm">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
