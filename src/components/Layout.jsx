import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import FloatingActions from './FloatingActions'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'

function Layout() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const location = useLocation()
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    const updateCursor = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateCursor)
    return () => window.removeEventListener('mousemove', updateCursor)
  }, [])

  useEffect(() => {
    setIsNavigating(true)
    const timeout = setTimeout(() => setIsNavigating(false), 400)
    return () => clearTimeout(timeout)
  }, [location.pathname])

  return (
    <div className="relative min-h-screen bg-slate-50 selection:bg-orange-500 selection:text-white font-sans overflow-x-hidden transition-colors duration-700">
      
      {/* Global CA Vibe Premium Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50 mix-blend-multiply">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#1B3942]/10 blur-[140px] rounded-full animate-spin-slow" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-orange-400/5 blur-[150px] rounded-full animate-float-slow" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      {/* Global Custom Premium Cursor (Desktop Only) */}
      <div 
        className="fixed w-96 h-96 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none z-[-1] transition-transform duration-700 ease-out hidden lg:block mix-blend-screen"
        style={{ transform: `translate(${mousePos.x - 192}px, ${mousePos.y - 192}px)` }}
      />
      <div 
        className="fixed w-8 h-8 rounded-full border border-orange-400/50 pointer-events-none z-[100] transition-all duration-100 ease-out hidden lg:flex items-center justify-center mix-blend-difference"
        style={{ transform: `translate(${mousePos.x - 16}px, ${mousePos.y - 16}px)` }}
      >
        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen pt-20 lg:pt-32">
        <ScrollToTop />
        <Navbar />
        
        {/* Page Content with smooth fade animation on route change */}
        <main 
          className={`flex-grow transition-all duration-700 ${
            isNavigating 
              ? 'opacity-0 translate-y-8 scale-[0.99] blur-sm' 
              : 'opacity-100'
          }`}
        >
          <Outlet />
        </main>
        
        <Footer />
        <FloatingActions />
      </div>
    </div>
  )
}

export default Layout
