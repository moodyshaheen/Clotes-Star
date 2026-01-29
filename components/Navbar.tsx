"use client"

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import CustomButton from './CustomButton'
import Cart from './Cart'
import { MdMenu, MdClose } from "react-icons/md";


function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isAuthPage = pathname === '/login' || pathname === '/register'
  const useSolidNav = isAuthPage || isScrolled

  const goHome = () => {
    setIsMenuOpen(false)
    if (isAuthPage) {
      router.push('/')
      return
    }
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollTo = (id: string) => {
    setIsMenuOpen(false)
    if (isAuthPage) {
      router.push(`/#${id}`)
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isAuthPage) return
    const threshold = 80
    const onScroll = () => setIsScrolled(window.scrollY >= threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isAuthPage])

  const navBg = useSolidNav ? 'bg-white shadow-md' : 'bg-transparent'
  const linkClass = useSolidNav ? 'text-gray-800 hover:text-teal-600' : 'text-white hover:text-teal-300'
  const btnSolidClass = useSolidNav ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-white/10 text-white hover:bg-white/20'
  const mobileBg = useSolidNav ? 'bg-white' : 'bg-gray-900/95'
  const mobileLinkClass = useSolidNav ? 'text-gray-800 hover:bg-teal-50 hover:text-teal-600' : 'text-white hover:bg-white/20'
  const menuIconClass = useSolidNav ? 'text-gray-900' : 'text-white'

  return (
    <nav
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        navBg,
      ].join(' ')}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <div className="flex items-center cursor-pointer" onClick={goHome} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && goHome()}>
                    <img src="/2d8532e6-f134-4eb8-a036-8c3aec7f2ad2.png" className='h-12 w-auto' alt="logo" />
                </div>
                <div className="hidden md:flex items-center space-x-8">
                <CustomButton title='Home' containerStyles={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${linkClass}`} handleClick={goHome} />
                <CustomButton title='Features' containerStyles={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${linkClass}`} handleClick={() => scrollTo('features')} />
                <CustomButton title='Pricing' containerStyles={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${linkClass}`} handleClick={() => scrollTo('plan')} />
                <CustomButton title='Testimonials' containerStyles={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${linkClass}`} handleClick={() => scrollTo('testimonials')} />
                <CustomButton title='Contact' containerStyles={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${linkClass}`} handleClick={() => scrollTo('contact')} />
                <CustomButton title='Get Started' containerStyles={`${btnSolidClass} px-6 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap cursor-pointer`} handleClick={() => scrollTo('contact')} />
                </div>
                <div className="flex items-center gap-4">
                  <Cart />
                  {session ? (
                    <>
                      {session.user.role === 'ADMIN' && (
                        <CustomButton
                          title="Admin"
                          containerStyles={`text-sm font-medium px-4 py-2 rounded-lg ${btnSolidClass} transition-colors`}
                          handleClick={() => window.location.href = '/admin'}
                        />
                      )}
                      <CustomButton
                        title="Logout"
                        containerStyles={`text-sm font-medium px-4 py-2 rounded-lg ${linkClass} transition-colors`}
                        handleClick={() => signOut()}
                      />
                    </>
                  ) : (
                    <CustomButton
                      title="Login"
                      containerStyles={`text-sm font-medium px-4 py-2 rounded-lg ${btnSolidClass} transition-colors`}
                      handleClick={() => window.location.href = '/login'}
                    />
                  )}
                </div>
                <CustomButton
                  title={isMenuOpen ? <MdClose className='text-2xl' /> : <MdMenu className='text-2xl' />}
                  containerStyles={`md:hidden p-2 rounded-lg cursor-pointer ${menuIconClass}`}
                  handleClick={() => setIsMenuOpen((prev) => !prev)}
                />
            </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`px-4 pb-6 pt-2 ${mobileBg} backdrop-blur shadow-sm`}>
            <div className="flex flex-col gap-1">
              <CustomButton title='Home' containerStyles={`text-left py-3 px-4 rounded-lg text-sm font-medium ${mobileLinkClass}`} handleClick={goHome} />
              <CustomButton title='Features' containerStyles={`text-left py-3 px-4 rounded-lg text-sm font-medium ${mobileLinkClass}`} handleClick={() => scrollTo('features')} />
              <CustomButton title='Pricing' containerStyles={`text-left py-3 px-4 rounded-lg text-sm font-medium ${mobileLinkClass}`} handleClick={() => scrollTo('plan')} />
              <CustomButton title='Testimonials' containerStyles={`text-left py-3 px-4 rounded-lg text-sm font-medium ${mobileLinkClass}`} handleClick={() => scrollTo('testimonials')} />
              <CustomButton title='Contact' containerStyles={`text-left py-3 px-4 rounded-lg text-sm font-medium ${mobileLinkClass}`} handleClick={() => scrollTo('contact')} />
              <CustomButton title='Get Started' containerStyles='mt-2 bg-teal-600 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors text-center' handleClick={() => scrollTo('contact')} />
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar