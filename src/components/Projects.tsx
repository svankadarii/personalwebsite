'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: 'Amazon Price Tracker Web Scrapper',
    description: 'Scrape Amazon Products and get the price history',
    technologies: ['Python', 'Next.js', 'SQL', 'BeautifulSoup', 'D3.js', 'FastAPI'],
    image: '/project1.jpg',
    link: '#',
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
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-black dark:text-white"
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
              className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-800 hover:border-[color:var(--accent)]"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden group">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500 group-hover:scale-110 transition-transform duration-500">
                  Project Image
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-1 sm:px-6 sm:py-2 text-center bg-[color:var(--accent)] text-white dark:text-black rounded-full text-sm"
                  >
                    View Project
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05, backgroundColor: "var(--accent)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full text-xs cursor-pointer transition-colors"
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