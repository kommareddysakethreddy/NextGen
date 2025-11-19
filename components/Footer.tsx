'use client'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-6 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left: Name */}
      <p className="text-white text-sm mb-3 md:mb-0">
        © 2025 Saketh Reddy Kommareddy
      </p>

      {/* Right: Portfolio link + Icons */}
      <div className="flex items-center space-x-6">
        {/* Link to another portfolio/project */}
        <a
          href="https://kommareddysakethreddy.github.io/portfolio" // 🔁 replace with your actual URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 text-sm border border-gray-600 rounded-full px-3 py-1 hover:bg-white hover:text-black transition"
        >
          View Other Portfolio
        </a>

        {/* Social icons */}
        <a
          href="https://github.com/kommareddysakethreddy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/kommareddysakethreddy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://twitter.com/sakethreddy63"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <FaTwitter size={20} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
