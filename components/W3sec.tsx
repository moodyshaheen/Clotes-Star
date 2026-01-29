import React from 'react'
import { RiShieldCheckLine ,RiTruckLine ,RiCustomerService2Line ,RiPriceTag3Line ,RiRefreshLine ,RiGiftLine   } from "react-icons/ri";
import CustomButton from './CustomButton';




function W3sec() {
  return (
    <section className='py-24 bg-gradient-to-b from-white to-gray-50'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the best online shopping with our premium features designed to make your shopping journey smooth and enjoyable.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
                    <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <RiShieldCheckLine className='text-3xl text-white'/>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Shopping</h3>
                    <p className="text-gray-600 leading-relaxed">text-gray-600 leading-relaxed</p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
                    <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <RiTruckLine className='text-3xl text-white'/>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Shopping</h3>
                    <p className="text-gray-600 leading-relaxed">text-gray-600 leading-relaxed</p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
                    <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <RiCustomerService2Line  className='text-3xl text-white'/>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Shopping</h3>
                    <p className="text-gray-600 leading-relaxed">text-gray-600 leading-relaxed</p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
                    <div className="w-16 h-16 bg-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <RiPriceTag3Line  className='text-3xl text-white'/>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Shopping</h3>
                    <p className="text-gray-600 leading-relaxed">text-gray-600 leading-relaxed</p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <RiRefreshLine  className='text-3xl text-white'/>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Shopping</h3>
                    <p className="text-gray-600 leading-relaxed">text-gray-600 leading-relaxed</p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
                    <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <RiGiftLine  className='text-3xl text-white'/>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Shopping</h3>
                    <p className="text-gray-600 leading-relaxed">text-gray-600 leading-relaxed</p>
                </div>
            </div>
            <div className="mt-20 bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Shopping?</h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers and discover amazing products at unbeatable prices.</p>
                <CustomButton title='Get Started Today' containerStyles='bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg whitespace-nowrap cursor-pointer' />
            </div>
        </div>

    </section>
  )
}

export default W3sec