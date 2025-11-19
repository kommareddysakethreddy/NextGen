'use client'

import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { useRef } from 'react'
import Sidebar from './sidebar'




const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const target = e.currentTarget
  const rect = target.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  target.style.setProperty('--x', `${x}px`)
  target.style.setProperty('--y', `${y}px`)
}

const scrollToPortfolio = () => {
  const section = document.getElementById('projects')
  section?.scrollIntoView({ behavior: 'smooth' })
}




export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-black text-white flex flex-col md:flex-row overflow-hidden"
    >
      {/* Left Side: Text + Icons */}
      <div className="flex-1 flex flex-col justify-center px-10 py-12 relative md:pl-32">
        {/* Follow Me vertical */}
        <Sidebar/>

        {/* Main Text */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          I'm Saketh Reddy Kommareddy
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-6 h-10"
        >
          <Typewriter
            words={[
              'I build smart things',
              'I fabricate new ideas',
              'I’m Machine learning enthusiast',
              'I’m a developer',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 mb-8 max-w-xl"
        >
         I'm a computer science engineer who loves tackling complex problems and turning them into simple, practical solutions with clean design.</motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex space-x-4"
        >
          
          <button onClick={scrollToPortfolio} 
                onMouseMove={handleMouseMove}
                className="btn hover-ripple bg-white text-black px-6 py-2 rounded font-semibold transition"
                >
                My Portfolio
            </button>

          <a
            href="#contact"
            className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition font-semibold"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Right Side: Image with Overlay */}
      <div className="flex-1 hidden md:block relative">
        <img
          src="/your-dark-image.jpg"
          alt="Hero Image"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </section>
  )
}


