'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sakethImage from '@/public/your-dark-image.jpg' // make sure image exists
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-15 md:px-20 py-16 bg-white text-black"
    >
      {/* Text Content */}

      <motion.div
        className="md:w-1/2 space-y-6 text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        
          <div className="max-w-6xl mx-auto">
            <SectionTitle title="About Me" />

            {/* Your project cards / scroll content goes here */}
          </div>
        <p className="text-lg leading-relaxed">
          Hi! I'm <span className="font-semibold text-red-600">Saketh Reddy Kommareddy</span>,
          a web developer and machine learning enthusiast currently pursuing my Master's in Computer Science
          at <span className="font-semibold italic">Oregon State University, Corvallis, OR.</span> I love building impactful tech — from clean user interfaces to intelligent models.
        </p>

        <p className="text-lg leading-relaxed">
          In <span className="font-semibold italic">Web Development</span>, I've built full-stack platforms like
           VEHERE (Tour Management System), VIEAT (Online Food Ordering & Delivery),
          and a performance-optimized Portfolio Website.
        </p>

        <p className="text-lg leading-relaxed">
          On the <span className="font-semibold italic">AI/ML side</span>, I've developed projects like
           Mask2former based segmentation model(ICPRS)
           Multimodal RAG for medical learning (Med-Vision),
           SRGAN for image super-resolution, and
          a Speech Recognition System using CNNs and data augmentation.
        </p>

        <p className="text-lg leading-relaxed">
          I enjoy solving problems — whether it's debugging complex JavaScript issues or optimizing model performance.
          Outside of coding, I'm active in <span className="font-semibold italic">competitive programming</span> and love algorithmic challenges on platforms like LeetCode and CodeChef.
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        className="hidden md:flex md:w-1/2 mt-10 md:mt-0 justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Image
          src={sakethImage}
          alt="Saketh Reddy Kommareddy"
          width={300}
          height={300}
          className="rounded-xl shadow-lg object-cover"
        />
      </motion.div>
    </section>
  )
}

export default About
