'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub, FaEnvelope, FaFileAlt, FaTimes, FaBars } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const socialLinks = [
  {
    href: 'https://linkedin.com/in/svankadari',
    icon: FaLinkedinIn,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/svankadarii',
    icon: FaGithub,
    label: 'GitHub',
  },
  {
    href: 'mailto:svankada@uwo.ca',
    icon: FaEnvelope,
    label: 'Email',
  },
  {
    href: '/resume.pdf',
    icon: FaFileAlt,
    label: 'Resume',
  },
]

export default function SocialSidebar() {
  const [isVisible, setIsVisible] = useState(true);

  const sidebarVariants = {
      visible: { x: 0 },
      hidden: { x: "-100%" }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="social-sidebar-wrapper"
        variants={sidebarVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 flex items-center"
      >
        <div 
          className={`relative flex flex-col items-center space-y-1 sm:space-y-2 bg-gray-200 dark:bg-gray-800 p-2 pt-8 sm:p-3 sm:pt-8 rounded-r-lg shadow-md border border-l-0 border-[color:var(--accent)]`}
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-1 right-1 p-1.5 bg-transparent text-black dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors z-10"
            aria-label="Hide sidebar"
          >
            <FaTimes size={14}/>
          </button>

          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') || link.href.startsWith('mailto') || link.href.endsWith('.pdf') ? '_blank' : '_self'}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-black dark:text-white hover:text-[color:var(--accent)] transition-colors duration-200"
              aria-label={link.label}
              tabIndex={isVisible ? 0 : -1}
            >
              <link.icon size={20} className="sm:group-hover:scale-110 transition-transform"/>
              <span 
                className="absolute left-full ml-3 whitespace-nowrap px-3 py-1.5 text-sm font-medium text-white dark:text-black bg-gray-800 dark:bg-gray-200 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20"
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        <button 
          onClick={() => setIsVisible(true)}
          className={`absolute top-1/2 transform -translate-y-1/2 right-0 translate-x-full p-1.5 bg-gray-200 dark:bg-gray-800 rounded-r-md border border-l-0 border-[color:var(--accent)] text-black dark:text-white shadow-md transition-opacity duration-300 ${isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-label="Show sidebar"
        >
          <FaBars size={14} />
        </button>
      </motion.div>
    </AnimatePresence>
  )
} 