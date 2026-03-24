'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const projects = [
  {
    title: 'Amazon Price Tracker Web Scrapper',
    description: 'Scrape Amazon Products and get the price history',
    technologies: ['Python', 'Next.js', 'SQL', 'BeautifulSoup', 'D3.js', 'FastAPI'],
    image: '/amazonpricetrackerpng.png',
    link: 'https://github.com/svankadarii/AmazonPriceTracker',
  },
  {
    title: 'Campus Saftety App',
    description: 'Campus safety app that allows users to report safety issues and get help walking back from Campus Walkers',
    technologies: ['AWS', 'GOLANG', 'EC2', 'React Native', 'SQL', 'MapboxAPI', 'Docker'],
    image: '/project2.jpg',
    link: '#',
  },
  {
    title: 'Seurity AI Agent',
    description: 'AI Agent that goes through websites and finds vulnerabilities (Under Developement)',
    technologies: ['Python', 'OpenAI API', 'PostgreSQL', 'Docker', 'Node.js', 'LLM Integration'],
    image: '/project3.jpg',
    link: '#',
  },
]

export default function Projects() {
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
      </div>
    </section>
  )
} 