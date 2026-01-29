import React from 'react'
import { RiCheckLine,RiShieldCheckLine ,RiTruckLine ,RiCustomerService2Line ,RiPriceTag3Line ,RiRefreshLine ,RiGiftLine } from "react-icons/ri";
import CustomButton from './CustomButton';


function Plan() {
  return (
    <section className='py-24 bg-white'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Select the perfect membership plan that fits your shopping needs and enjoy exclusive benefits.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                        <p className="text-gray-600 text-sm mb-6">Perfect for casual shoppers</p>
                        <div className="mb-2">               
                          <span className="text-5xl font-bold text-gray-900">$0</span>
                        </div>
                        <p className="text-gray-600 text-sm">Free Forever</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Access to all products</span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Standard shipping
                             </span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Email support
                             </span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Basic product recommendations
                             </span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Secure checkout
                             </span>
                        </li>
                    </ul>
                    <CustomButton title='Start Free' containerStyles='w-full py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer bg-gray-100 text-gray-900 hover:bg-gray-200' />
                </div>
                <div className="relative bg-white rounded-2xl p-8 border-2 border-teal-600 shadow-2xl scale-105 transition-all duration-300">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap">Most Popular</span>
                    </div>
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Pramum</h3>
                        <p className="text-gray-600 text-sm mb-6">Best for regular shoppers</p>
                        <div className="mb-2">               
                          <span className="text-5xl font-bold text-gray-900">$29</span>
                        </div>
                        <p className="text-gray-600 text-sm">Per Month</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Access to all products</span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Standard shipping
                             </span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Email support
                             </span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Basic product recommendations
                             </span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Secure checkout
                             </span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Secure checkout
                             </span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Secure checkout
                             </span>
                        </li>
                    </ul>
                    <CustomButton title='Get premium' containerStyles='w-full py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer bg-teal-600 text-white hover:bg-teal-700 shadow-lg' />
                </div>
                <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">VIP</h3>
                        <p className="text-gray-600 text-sm mb-6">Ultimate shopping experience</p>
                        <div className="mb-2">               
                          <span className="text-5xl font-bold text-gray-900">$99</span>
                        </div>
                        <p className="text-gray-600 text-sm">per month</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Access to all products</span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Standard shipping
                             </span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Email support
                             </span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Basic product recommendations
                             </span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Secure checkout
                             </span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Secure checkout
                             </span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Secure checkout
                             </span>
                        </li>
                        <li className="flex items-start">
                             <RiCheckLine className='text-teal-600 text-xl mr-3 flex-shrink-0 mt-0.5'/>
                             <span className="text-gray-700 text-sm">Secure checkout
                             </span>
                        </li>
                    </ul>
                    <CustomButton title='Go VIP' containerStyles='w-full py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer bg-gray-100 text-gray-900 hover:bg-gray-200' />
                </div>
            </div>
            <div className="mt-16 text-center">
                <p className="text-gray-600 mb-4">All plans include our 30-day money-back guarantee</p>
                <div className="flex items-center justify-center gap-8 flex-wrap">
                    <div className="flex items-center gap-2">
                        <RiShieldCheckLine className='text-teal-600 text-xl'/>
                        <span className="text-sm text-gray-700">Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <RiRefreshLine className='text-teal-600 text-xl'/>
                        <span className="text-sm text-gray-700">Cancel Anytime</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <RiCustomerService2Line className='text-teal-600 text-xl'/>
                        <span className="text-sm text-gray-700">24/7 Support</span>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Plan