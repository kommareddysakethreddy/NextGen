
'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionTitle from './SectionTitle'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!formRef.current) return

    emailjs
      .sendForm(     // <-- Replace this
      'service_o2sqiyn',     // 🔁 Replace this
      'template_di47lfb',    // 🔁 Replace this
        formRef.current,
      'OKB3d5_zT41ciRhp7' 
      )
      .then(() => {
        setLoading(false)
        setSent(true)
        formRef.current?.reset()
      })
      .catch((error) => {
        console.error('EmailJS Error:', error?.text || error);
        console.error('EmailJS Error:', error)
        setLoading(false)
      })
  }

  return (
    <section id="contact" className="bg-white text-black py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Contact" />

        {sent && (
          <p className="text-green-600 font-medium mb-4">Message sent successfully!</p>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              name="name" // Must match EmailJS template variable
              required
              className="w-full border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              name="email" // Must match EmailJS template variable
              required
              className="w-full border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              name="message" // Must match EmailJS template variable
              rows={5}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
