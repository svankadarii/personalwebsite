'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Material UI', 'Bootstrap', 'Vercel', 'd3.js'],
  },
  {
    category: 'Backend & Data',
    items: ['Python', 'Node.js', 'Go', 'Java', 'FastAPI', 'PostgreSQL', 'SQL', 'IBM Db2', 'C/C++', 'Pandas', 'XGBoost', 'OpenAI API'],
  },
  {
    category: 'Tools & Cloud',
    items: ['AWS', 'Google Cloud (GCP)', 'Docker', 'GitHub Actions', 'Git', 'Linux', 'IBM Mainframe', 'Postman', 'Stripe', 'Agile', 'Jira'],
  },
]

interface CertificationItem {
  name: string;
  issuer: string;
  date: string; // e.g., "Issued Dec 2023"
  credentialLink?: string;
  icon?: React.ElementType;
}

const certifications: CertificationItem[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Issued Sep 2025",
    credentialLink: "#", // Add actual credential link when available
    icon: FaCertificate
  },
  {
    name: "IBM Mainframe Advanced Concepts Badge",
    issuer: "IBM",
    date: "Issued Dec 2024",
    // credentialLink: "https://www.credly.com/badges/030a1c34-16a5-434b-910d-4a43016b5d07/public_url", // Add actual link
    icon: FaCertificate
  },
  // Add more certifications here
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'skills' | 'certifications'>('certifications');

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const tabVariants = {
    active: { backgroundColor: "var(--surface-2)", color: "var(--accent)", borderColor: "var(--accent)" },
    inactive: { backgroundColor: "transparent", color: "var(--text-muted)", borderColor: "transparent" },
  }

  return (
    <section id="skills" className="py-20" style={{ background: 'var(--background)' }}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' } as React.CSSProperties}
        >
          Skills & Certifications
        </motion.h2>

        <div className="flex justify-center mb-10">
          <div className="p-1 rounded-xl flex space-x-1" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <motion.button
              onClick={() => setActiveTab('certifications')}
              className="px-4 py-1 sm:px-6 sm:py-2 rounded-lg text-sm font-medium transition-colors border"
              animate={activeTab === 'certifications' ? 'active' : 'inactive'}
              variants={tabVariants}
              initial={false}
            >
              Certifications
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('skills')}
              className="px-4 py-1 sm:px-6 sm:py-2 rounded-lg text-sm font-medium transition-colors border"
              animate={activeTab === 'skills' ? 'active' : 'inactive'}
              variants={tabVariants}
              initial={false}
            >
              Skills
            </motion.button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'skills' && (
            <motion.div
              key="skills-grid"
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
            >
              {skills.map((skillGroup) => (
                <motion.div
                  key={skillGroup.category}
                  variants={itemVariants}
                  className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {skillGroup.items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, backgroundColor: "var(--accent)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm cursor-pointer transition-colors" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'certifications' && (
            <motion.div
              key="certifications-list"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4 sm:space-y-6 max-w-3xl mx-auto"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl shadow-md transition-all duration-200"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
                >
                  <div className="flex-shrink-0 text-[color:var(--accent)]">
                    {cert.icon ? <cert.icon size={24} className="sm:h-7 sm:w-7" /> : <FaCertificate size={24} className="sm:h-7 sm:w-7" />}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-sm sm:text-base" style={{ color: 'var(--foreground)' }}>{cert.name}</h4>
                    <p className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>{cert.issuer} - {cert.date}</p>
                  </div>
                  {cert.credentialLink && cert.credentialLink !== '#' && (
                    <a
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-1 sm:p-2 text-gray-400 hover:text-[color:var(--accent)] transition-colors"
                      aria-label={`Verify ${cert.name} credential`}
                    >
                      <FaExternalLinkAlt className="h-3 w-3 sm:h-4 sm:w-4" />
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
} 