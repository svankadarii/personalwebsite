'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'Home', href: '#' }, // Link to top or Hero ID if you add one
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  // { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div></div>

        <ul className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link 
                href={item.href} 
                className="text-sm font-medium text-black dark:text-white hover:text-[color:var(--accent)] transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>
    </motion.header>
  )
} 