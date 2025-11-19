'use client'
import { useEffect, useState } from 'react'

const sections = ['home', 'about', 'projects',  
                  'contact']//,'experience']

const Navbar = () => {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const offsets = sections.map(id => {
        const el = document.getElementById(id)
        return el ? el.offsetTop : 0
      })

      for (let i = 0; i < offsets.length; i++) {
        if (scrollY >= offsets[i] - 80 && (i === sections.length - 1 || scrollY < offsets[i + 1] - 80)) {
          setActive(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/50 backdrop-blur-md border border-white/30 shadow-lg px-6 py-2 rounded-full">
      <ul className="flex space-x-6 text-sm font-medium text-gray-600">
        {sections.map(section => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`px-3 py-1 rounded-full transition-all duration-300 ${
                active === section ? 'bg-white shadow text-black font-semibold' : ''
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
