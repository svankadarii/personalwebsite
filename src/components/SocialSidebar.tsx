'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub, FaEnvelope, FaFileAlt, FaTimes, FaBars } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const socialLinks = [
  { href: 'https://linkedin.com/in/svankadari', icon: FaLinkedinIn, label: 'LinkedIn' },
  { href: 'https://github.com/svankadarii', icon: FaGithub, label: 'GitHub' },
  { href: 'mailto:svankada@uwo.ca', icon: FaEnvelope, label: 'Email' },
  { href: '/Srini Vankadari SWE Resume.pdf', icon: FaFileAlt, label: 'Resume' },
]

export default function SocialSidebar() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnimatePresence>
      <motion.div
        key="social-sidebar-wrapper"
        initial={{ x: '-100%' }}
        animate={{ x: isVisible ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 flex items-center"
      >
        <div
          className="relative flex flex-col items-center space-y-1 sm:space-y-2 p-2 pt-8 sm:p-3 sm:pt-8 rounded-r-xl shadow-xl"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderLeft: 'none',
          }}
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-1.5 right-1.5 p-1 rounded-md transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--foreground)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
            aria-label="Hide sidebar"
          >
            <FaTimes size={12} />
          </button>

          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') || link.href.startsWith('mailto') || link.href.endsWith('.pdf') ? '_blank' : '_self'}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg transition-all duration-200"
              style={{ color: 'var(--text-muted)' }}
              aria-label={link.label}
              tabIndex={isVisible ? 0 : -1}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'var(--accent)'
                el.style.background = 'var(--accent-muted)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'var(--text-muted)'
                el.style.background = 'transparent'
              }}
            >
              <link.icon size={18} />
              <span
                className="absolute left-full ml-3 whitespace-nowrap px-3 py-1.5 text-xs font-medium rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20"
                style={{
                  background: 'var(--surface-2)',
                  color: 'var(--foreground)',
                  border: '1px solid var(--border)',
                }}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsVisible(true)}
          className={`absolute top-1/2 transform -translate-y-1/2 right-0 translate-x-full p-1.5 rounded-r-md shadow-md transition-opacity duration-300 ${isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderLeft: 'none',
            color: 'var(--text-muted)',
          }}
          aria-label="Show sidebar"
        >
          <FaBars size={12} />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}