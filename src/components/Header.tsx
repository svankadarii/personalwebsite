'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

export default function Header() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Read persisted preference on mount
  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme')
    if (stored === 'light') {
      setIsDark(false)
      document.documentElement.classList.add('light')
    } else {
      setIsDark(true)
      document.documentElement.classList.remove('light')
    }
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md shadow-sm"
      style={{
        background: 'var(--header-bg)',
        borderBottom: '1px solid var(--header-border)',
      }}
    >
      <nav className="mx-auto px-6 py-4 flex justify-between items-center" style={{ maxWidth: '1100px' }}>
        {/* Logo */}
        <Link
          href="#home"
          className="text-lg font-bold tracking-tight transition-colors duration-200"
          style={{ color: 'var(--accent)' }}
        >
          SV
        </Link>

        {/* Nav links */}
        <ul className="flex items-center space-x-6 sm:space-x-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:scale-110"
            style={{
              border: '1px solid var(--border)',
              background: 'var(--surface-2)',
              color: 'var(--text-muted)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--accent)'
              el.style.color = 'var(--accent)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--border)'
              el.style.color = 'var(--text-muted)'
            }}
          >
            {isDark
              ? <FiSun size={16} />
              : <FiMoon size={16} />
            }
          </button>
        )}
      </nav>
    </motion.header>
  )
}