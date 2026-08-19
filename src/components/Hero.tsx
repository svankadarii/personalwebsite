'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'

const typingPhrases = [
  "Software Engineer",
  "Product + Tech Enthusiast",
  // "Soccer Player & Fan"
]

function useTypingEffect(phrases: string[]) {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    const getDelay = () => {
      if (deleting) return 40 + Math.random() * 20
      return 80 + Math.random() * 40
    }

    timeoutRef.current = setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentPhrase.length) {
          setDisplayed(currentPhrase.slice(0, charIndex + 1))
          setCharIndex((c) => c + 1)
        } else {
          timeoutRef.current = setTimeout(() => setDeleting(true), 1600)
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(currentPhrase.slice(0, charIndex - 1))
          setCharIndex((c) => c - 1)
        } else {
          setDeleting(false)
          setPhraseIndex((i) => (i + 1) % phrases.length)
        }
      }
    }, getDelay())

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [charIndex, deleting, phraseIndex, phrases])

  return displayed
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const typedText = useTypingEffect(typingPhrases)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12"
      style={{ background: 'var(--background)' }}
    >
      {/* Max-width container — keeps content from stretching on wide screens */}
      <div className="w-full mx-auto px-6" style={{ maxWidth: '1100px' }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-center"
          style={{ gap: '3rem' }}
        >

          {/* ── LEFT: Text Content ── */}
          <motion.div
            initial="hidden"
            animate="show"
            className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
          >
            {/* Eyebrow */}
            <motion.span
              custom={0.1}
              variants={fadeUp}
              className="inline-block text-sm sm:text-base font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: 'var(--accent)' }}
            >
              Hi, I&apos;m
            </motion.span>

            {/* Name */}
            <motion.h1
              custom={0.18}
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-[4.25rem] font-bold leading-[1.08] mb-3"
              style={{ color: 'var(--foreground)' }}
            >
              Srini Vankadari
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              custom={0.27}
              variants={fadeUp}
              className="flex items-center gap-2 mb-2 h-9"
            >
              <span
                className="text-lg sm:text-xl font-medium"
                style={{ color: 'var(--accent)' }}
              >
                {typedText}
              </span>
              <span className="typing-cursor" />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              custom={0.35}
              variants={fadeUp}
              className="text-sm sm:text-base font-medium mb-3"
              style={{ color: 'var(--text-muted)' }}
            >
              Software Engineering Student @ Western University
            </motion.p>

            {/* Description */}
            <motion.p
              custom={0.42}
              variants={fadeUp}
              className="text-sm sm:text-base leading-relaxed mb-7"
              style={{ color: 'var(--text-muted)', maxWidth: '420px' }}
            >
              I build clean, scalable products at the intersection of great engineering and intuitive design. Passionate about turning ideas into real, impactful software.
            </motion.p>

            {/* Primary buttons */}
            <motion.div
              custom={0.5}
              variants={fadeUp}
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-5"
            >
              <a
                href="/Srini_Vankadari_SWE_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background: 'var(--accent)',
                  color: '#0d0d0d',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--accent-hover)'
                    ; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(201,168,76,0.3)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--accent)'
                    ; (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                View Resume
              </a>
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 hover:scale-105"
                style={{
                  borderColor: 'var(--accent)',
                  color: 'var(--accent)',
                  background: 'transparent',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--accent-muted)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent'
                }}
              >
                View My Work
              </a>
            </motion.div>

            {/* Social icon buttons */}
            <motion.div
              custom={0.57}
              variants={fadeUp}
              className="flex items-center gap-2.5 justify-center md:justify-start"
            >
              {[
                { href: 'https://linkedin.com/in/svankadari', icon: FaLinkedinIn, label: 'LinkedIn' },
                { href: 'https://github.com/svankadarii', icon: FaGithub, label: 'GitHub' },
                { href: 'mailto:svankada@uwo.ca', icon: FaEnvelope, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200 hover:scale-110"
                  style={{ borderColor: 'var(--border)', background: 'var(--surface-2)' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'var(--accent)'
                    el.style.background = 'var(--accent-muted)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'var(--border)'
                    el.style.background = 'var(--surface-2)'
                  }}
                >
                  <Icon size={15} style={{ color: 'var(--text-muted)' }} className="group-hover:!text-[var(--accent)] transition-colors duration-200" />
                  <span
                    className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                    style={{ background: 'var(--surface-2)', color: 'var(--foreground)', border: '1px solid var(--border)' }}
                  >
                    {label}
                  </span>
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center items-center order-1 md:order-2"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                width: 'min(380px, 90vw)',
                height: 'min(440px, 100vw)',
                border: '1.5px solid var(--border)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,168,76,0.07)',
              }}
            >
              <Image
                src="/Srini Vankadari Headshot.jpeg"
                alt="Srini Vankadari"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                priority
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1/4 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(201,168,76,0.07), transparent)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}