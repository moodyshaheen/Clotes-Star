"use client"
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { FaArrowDown } from "react-icons/fa6";
import { IoBagHandleSharp } from "react-icons/io5";
import { TbUserHeart } from "react-icons/tb";
import { FaTruck ,FaFacebookSquare , FaTwitterSquare ,FaInstagramSquare , FaLinkedin} from "react-icons/fa";





function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className=" absolute inset-0">
              <img alt="Hero Background" src='/9862354fd1e7ac16f9b385a62e773a23.jpg' className="w-full h-full object-cover object-top"/>
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full py-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Your 
            <br />
            Perfect Style
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Shop the latest trends in fashion, electronics, and lifestyle products. Experience seamless online shopping with exclusive deals and fast delivery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CustomButton title='Explore Now' containerStyles='bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer' />
            <CustomButton title='Learn More' containerStyles='bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 whitespace-nowrap cursor-pointer' />
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="w-14 h-14 bg-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <IoBagHandleSharp className='text-3xl text-white'/>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">500k+</h3>
            <p className="text-white/80 text-sm">Products Available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="w-14 h-14 bg-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
               <TbUserHeart className='text-3xl text-white'/>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">100k+</h3>
            <p className="text-white/80 text-sm">Happy Customers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="w-14 h-14 bg-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FaTruck className='text-3xl text-white'/>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
            <p className="text-white/80 text-sm">Fast Delivery</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href ='#' className='text-white/80 hover:text-white transition-colors cursor-pointer' >
        <FaArrowDown/>
        </a>
        </div>
    </section>
  )
}

export default Hero