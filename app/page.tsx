'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar' // 👈 Make sure you have this
import About from '@/components/About'
import EducationTimeline from '@/components/Education'
// import PhotoGallery from '@/components/Photo'
import ProjectScroll from '@/components/projects'
import SkillsScroll from '@/components/skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
// import PhotoGallery from '@/components/PhotoGallery'
import '../app/globals.css'

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.9 // show navbar after 90% of hero
      setShowNavbar(window.scrollY > triggerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      {/* ✅ Navbar appears after scroll */}
      {showNavbar && <Navbar />}

      <section id="hero" className="min-h-screen"> 
        <Hero />
      </section>


      {/* REST OF THE PAGE */}
      <About/>
      <EducationTimeline/>
      
      <ProjectScroll/>

      <SkillsScroll/>
      <Contact/>
      {/* <PhotoGallery/> */}
      <Footer/>
      
    </div>
  )
}
