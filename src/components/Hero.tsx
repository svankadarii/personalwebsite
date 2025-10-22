'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const roles = [
  "Prev. Software Developer Intern @ BMO",
  "Soccer Enthusiast",
  "Music Connoisseur",
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-black pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Placeholder - Adjusted size slightly for better mobile fit? */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center order-2 md:order-1"
          >
            <div className="w-60 h-60 sm:w-64 sm:h-64 md:w-96 md:h-96 overflow-hidden border-4 border-[color:var(--accent)] relative">
              <Image 
                src="/headshot2.0.png" 
                alt="Srini Vankadari Headshot" 
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left pl-0 md:pl-12 order-1 md:order-2"
          >
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-black dark:text-white"
            >
              Hi, I&apos;m Srini Vankadari
            </h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8"
            >
              Software Engineering Student @ UWO 
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 h-10 md:h-6"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center sm:text-left px-6 py-2 sm:px-8 sm:py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:bg-[color:var(--accent)] dark:hover:bg-[color:var(--accent)] border border-black dark:border-white hover:border-[color:var(--accent)] dark:hover:border-[color:var(--accent)] transition-colors hover:scale-105 transform duration-200"
              >
                View Resume
              </a>
              <a
                href="#projects"
                className="text-center sm:text-left px-6 py-2 sm:px-8 sm:py-3 border border-[color:var(--accent)] text-black dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-[color:var(--accent)] dark:hover:text-[color:var(--accent)] transition-colors hover:scale-105 transform duration-200"
              >
                View My Work
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 