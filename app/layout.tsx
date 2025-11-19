import './globals.css'
import type { Metadata } from 'next'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Student Developer Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 scroll-smooth">
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
