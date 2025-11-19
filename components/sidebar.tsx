'use client'
import { useEffect, useState } from 'react'

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Sidebar = () => {
  const [showIcons, setShowIcons] = useState(true)
useEffect(() => {
  const handleScroll = () => {
    const heroSection = document.getElementById('hero')
    if (!heroSection) return

    const heroBottom = heroSection.getBoundingClientRect().bottom
    const heroHeight = heroSection.offsetHeight
    const heroVisible = heroBottom > heroHeight / 2

    setShowIcons(heroVisible)
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])


  if (!showIcons) return null

  return (
     <div className="hidden md:flex flex-col items-center fixed left-4 top-1/2 transform -translate-y-1/2 z-50 px-2 py-4 bg-transparent">
                <span className="p-4 rotate-[-90deg] text-xs tracking-widest text-gray-400 mb-6">
                    FOLLOW ME
                </span>
              <div className="flex flex-col space-y-4 text-lg text-white">
                <a href="https://twitter.com/saketh63" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://github.com/kommareddysakethreddy" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="mailto:sakethkommareddy@email.com">
                  <FaEnvelope />
                </a>
                <a href="https://linkedin.com/kommareddysakethreddy" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
  )
}

export default Sidebar
