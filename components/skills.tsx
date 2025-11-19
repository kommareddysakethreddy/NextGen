'use client'

import { useEffect, useRef, useState } from 'react'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaCuttlefish,
  FaBrain,
  FaJsSquare,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiExpress,
  SiAmazon,
  SiDjango,
  SiFlask,
  SiFigma,
  SiMysql,
} from 'react-icons/si'

const skills = [
  // Languages
  { icon: <FaPython size={32} />, name: 'Python' },
  { icon: <FaJava size={32} />, name: 'Java' },
  { icon: <FaJsSquare size={32} />, name: 'JavaScript' },
  { icon: <SiTypescript size={32} />, name: 'TypeScript' },
  { icon: <FaCuttlefish size={32} />, name: 'C++' },

  // Web & Frameworks
  { icon: <FaReact size={32} />, name: 'React' },
  { icon: <SiNextdotjs size={32} />, name: 'Next.js' },
  { icon: <FaNodeJs size={32} />, name: 'Node.js' },
  { icon: <SiExpress size={32} />, name: 'Express.js' },
  { icon: <SiDjango size={32} />, name: 'Django' },
  { icon: <SiFlask size={32} />, name: 'Flask' },
  { icon: <SiTailwindcss size={32} />, name: 'Tailwind CSS' },

  // AI / ML
  { icon: <FaBrain size={32} />, name: 'Machine Learning' },
  { icon: <SiTensorflow size={32} />, name: 'TensorFlow' },
  { icon: <SiPytorch size={32} />, name: 'PyTorch' },

  // Databases & Cloud
  { icon: <SiPostgresql size={32} />, name: 'PostgreSQL' },
  { icon: <SiMongodb size={32} />, name: 'MongoDB' },
  { icon: <SiMysql size={32} />, name: 'MySQL' },
  { icon: <SiAmazon size={32} />, name: 'AWS' },
  { icon: <SiDocker size={32} />, name: 'Docker' },

  // Tools
  { icon: <FaGitAlt size={32} />, name: 'Git' },
  { icon: <SiFigma size={32} />, name: 'Figma' },
]

const SkillsScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (!isHovered) {
      interval = setInterval(() => {
        const container = scrollRef.current
        if (!container) return

        container.scrollLeft += 1

        const halfWidth = container.scrollWidth / 2
        // Infinite-loop effect: once we've scrolled past half (because we duplicated the list),
        // jump back by half so visually it never snaps to the start
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth
        }
      }, 20)
    }

    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <section className="py-20 bg-black-300" id="skills">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        My Skillset
      </h2>
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="mx-auto max-w-6xl flex space-x-10 overflow-hidden scroll-smooth whitespace-nowrap px-4 py-6"
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 h-24 flex flex-col items-center justify-center
                       bg-neutral-900 border border-neutral-700 rounded-full shadow-md
                       hover:scale-110 hover:shadow-lg transition-transform duration-300"
          >
            <div className="text-white">{skill.icon}</div>
            <span className="text-xs mt-1 font-medium text-white text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsScroll
