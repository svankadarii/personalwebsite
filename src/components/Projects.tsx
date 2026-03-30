'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useState } from 'react'
import Modal from './Modal'

const projects = [
  {
    title: 'Amazon Price Tracker Web Scraper',
    description: 'Scrape Amazon Products and get the price history',
    technologies: ['Python', 'Next.js', 'SQL', 'BeautifulSoup', 'D3.js', 'FastAPI'],
    image: '/amazonpricetrackerpng.png',
    link: 'https://github.com/svankadarii/AmazonPriceTracker',
  },
  {
    title: 'Campus Safety App',
    description: 'Campus safety app that allows users to report safety issues and get help walking back from Campus Walkers',
    technologies: ['AWS', 'GOLANG', 'EC2', 'React Native', 'SQL', 'MapboxAPI', 'Docker'],
    image: '/protoxpng.png',
    link: 'https://github.com/svankadarii/Protox---Campus-Safety-App',
  },
  {
    title: 'Security AI Agent',
    description: 'AI Agent that goes through websites and finds vulnerabilities (Under Development)',
    technologies: ['Python', 'OpenAI API', 'PostgreSQL', 'Docker', 'Node.js', 'LLM Integration'],
    image: '/aiagentui.png',
    link: '#',
  },
]

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20" style={{ background: 'var(--background)' }}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' } as React.CSSProperties}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
            >
              <div className="h-48 relative overflow-hidden group" style={{ background: 'var(--surface-2)' }}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 group-hover:scale-105 transition-transform duration-500" style={{ color: 'var(--text-muted)' }}>
                    <span className="text-3xl">🚀</span>
                    <span className="text-xs font-medium">Project Preview</span>
                  </div>
                )}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.75)' }}>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 rounded-full text-sm font-semibold"
                    style={{ background: 'var(--accent)', color: '#0d0d0d' }}
                  >
                    View Project
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>{project.title}</h3>
                <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05, backgroundColor: "var(--accent)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-2 py-1 rounded-full text-xs cursor-pointer transition-colors" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <div className="p-1 rounded-xl flex" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-1 sm:px-6 sm:py-2 rounded-lg text-sm font-medium transition-colors border"
              style={{
                backgroundColor: 'var(--surface-2)',
                borderColor: 'var(--accent)',
                color: 'var(--accent)'
              }}
            >
              View More Projects
            </motion.button>
          </div>
        </motion.div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ color: 'var(--foreground)' }}>
            All Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col h-full gap-5 p-5 rounded-xl shadow-md transition-all duration-200 cursor-pointer group"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)'
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--accent)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--border)';
                }}
              >
                {/* Image Section */}
                {project.image ? (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden flex-shrink-0" style={{ background: 'var(--surface-2)' }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-video rounded-lg flex flex-col items-center justify-center flex-shrink-0" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}>
                    <span className="text-4xl mb-2">🚀</span>
                    <span className="text-sm font-medium">Project Preview</span>
                  </div>
                )}

                {/* Content Section */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2" style={{ color: 'var(--foreground)' }}>
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed opacity-90 line-clamp-3" style={{ color: 'var(--text-muted)' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 6).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase"
                        style={{
                          background: 'var(--surface)',
                          color: 'var(--text-muted)',
                          border: '1px solid var(--border)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase" style={{ background: 'var(--surface)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                        +{project.technologies.length - 6}
                      </span>
                    )}
                  </div>

                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-auto text-sm font-bold hover:opacity-80 transition-opacity w-max"
                      style={{ color: 'var(--accent)' }}
                    >
                      View Details
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Modal>
      </div>
    </section>
  )
} 