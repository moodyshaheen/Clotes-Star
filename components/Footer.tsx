import React from 'react'
import CustomButton from './CustomButton'
import { FaTruck ,FaFacebookSquare , FaTwitterSquare ,FaInstagramSquare , FaLinkedin} from "react-icons/fa";


function Footer() {
  return (
    <footer className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div>
                <img src="/2d8532e6-f134-4eb8-a036-8c3aec7f2ad2.png" className='h-12 w-auto mb-6' alt="logo footer" />
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Your trusted online shopping destination for fashion, electronics, and lifestyle products. Shop with confidence and style.
                </p>
                <div className="flex items-center gap-3">
                <CustomButton title={<FaFacebookSquare/>} containerStyles='w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer' />
                <CustomButton title={<FaInstagramSquare/>} containerStyles='w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer' />
                <CustomButton title={<FaTwitterSquare/>} containerStyles='w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer' />
                <CustomButton title={<FaLinkedin/>} containerStyles='w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer' />
                </div>
                </div>
                      <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                    <ul className='space-y-3'>
                        <li>
                <CustomButton title='Home' containerStyles='text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer' />
                        </li>
                        <li>
                <CustomButton title='Features' containerStyles='text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer' />
                        </li>
                        <li>
                <CustomButton title='Pricing' containerStyles='text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer' />
                        </li>
                        <li>
                <CustomButton title='Testimonials' containerStyles='text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer' />
                        </li>
                        <li>
                <CustomButton title='Contact' containerStyles='text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer' />
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-6">Customer Service</h4>
                    <ul className='space-y-3'>
                        <li>
                <CustomButton title='Help Center' containerStyles='text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer' />
                        </li>
                        <li>
                <CustomButton title='Track Order' containerStyles='text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer' />
                        </li>
                        <li>
                <CustomButton title='Returns & Refunds' containerStyles='text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer' />
                        </li>
                        <li>
                <CustomButton title='Shipping Info' containerStyles='text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer' />
                        </li>
                        <li>
                <CustomButton title='FAQs' containerStyles='text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer' />
                        </li>
                    </ul>
                </div>
                <div>
                <h4 className="text-lg font-bold mb-6">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers and updates.
                </p>
                <form  className="space-y-3">
                    <input type="text" placeholder='Your email address' className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all text-sm' />
                    <CustomButton title='Subscribe' containerStyles='w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer' />
                </form>
                </div>
            </div>
            <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-sm text-center md:text-left">
                © 2025 EBazary. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                <CustomButton title='Privacy Policy' containerStyles='text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer' />
                <CustomButton title='Terms of Service' containerStyles='text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer' />
                <CustomButton title='Powered by Readdy' containerStyles='text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer' />
                </div>
            </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer