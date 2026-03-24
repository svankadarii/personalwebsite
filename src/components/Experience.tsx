'use client'

import { useState, useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import Image from 'next/image' // Import Image for logos

// Define interfaces for experience data
interface ExperienceItem {
  icon?: React.ElementType; // Icon component (e.g., FaBuilding)
  logoSrc?: string; // Or path to a logo image in /public
  title: string;
  company: string;
  companyLink?: string;
  location: string;
  dates: string;
  description: string | string[]; // Allow string array for bullet points
  technologies: string[];
}

interface ExperienceData {
  professional: ExperienceItem[];
  leadership: ExperienceItem[];
}

// Placeholder data - Replace with your actual experience
// Example with logoSrc and description array:
const experienceData: ExperienceData = {
  professional: [
    {
      // icon: FaBuilding, 
      logoSrc: "/bmo.jpg", // Example: Assuming you have bmo.png in public/logos
      title: 'SoftwareDeveloper Intern',
      company: 'BMO',
      // companyLink: 'https://www.bmo.com/',
      location: 'Toronto, ON',
      dates: 'May 2025 - Aug 2025',
      description: [
          'Developed an internal automation tool using PyPDF and Pandas to extract and populate PDF forms with branch data, streamlining document workflows and improving operational efficiency.',
          'Built a data transformation pipeline using IBM Assembler and Python to convert encoded branch messages intostructured tables, processing 1,000+ records and exporting them into Excel for non-technical teams, cutting analysistime by 40%',
          'Conducted end-to-end quality assurance testing on applications, including unit testing, data validation, and edge case analysis, ensuring reliability, accuracy, and alignment with user requirements throughout the Software Development Life Cycle',
          'Collaborated with cross-functional teams to develop and pitch an AI-driven incident response strategy to C-suite executives, demonstrating leadership, adaptability, and strong interpersonal communication.',
      ],
      technologies: ['IBM Mainframe', 'Assembly', 'JCL', 'Python', 'Pandas', 'PyPDF'],
    },
    {
      logoSrc: "/MomentumMind.jpg", // Example: Assuming you have bmo.png in public/logos
      title: 'Web Developer Intern',
      company: 'MomentumMind',  
      // companyLink: '#',
      location: 'Remote',
      dates: 'May 2024 - Aug 2024',
      description: [
        'Created a full-stack web app using React, Tailwind CSS, and Node.js.',
        'Developed on a full-stack web app using React, Tailwind CSS, and Node.js, integrating CI/CD pipelines with GitHub Actions to automate testing and deployment while utilizing Agile practices for iterative development and continuous feedback',
        'Integrated a secure payment platform with Stripe&apos;s API, ensuring PCI-DSS compliance, user-friendly design, and error handling, while monitoring KPIs such as transaction success',
        'Implemented SQL scripts to manage inventory and database updates, optimizing product tracking and utilizing CI/CD processes for continuous testing and deployment.',
        'Analyzed website performance using Google PageSpeed Insights and implemented lazy loading, resulting in a 22% improvement in loading times.'
    ],     
     technologies: ['React', 'Node.js', 'JavaScript', 'Tailwind.css', 'Agile'],
    },
    
    // Add more professional experiences here
  ],
  leadership: [
    {
      // icon: FaBuilding, // Replace with a relevant icon if needed
      logoSrc: "/wcs.jpg", // Example
      title: 'Project Manager',
      company: 'Western Cyber Society',
      companyLink: 'https://westerncybersociety.com/', // Example link
      location: 'London, ON',
      dates: 'Oct 2024 - Apr 2025',
      description: [
          'Led a team of 5 students in agile environment to create BankFrame, a banking application using IBM Mainframe.',
          'Leading a team of 5 to develop BankFrame, a replica of a top-five Canadian bank, utilizing IBM Mainframe, IBM DB2, Java, and RESTful APIs to implement secure user accounts, deposits, withdrawals, and transfers, ensuring efficient transaction processing',
          'Developed a NoHup Python script to automate IBM DB2 backups, ensuring zero downtime and eliminating the need for manual job requests',
          'Presented to RBC, TD, BMO, CIBC, Scotiabank, Sunlife, IBM, Morgon Stanley, and more'
      ],
      technologies: ['Project Management', 'Team Leadership', 'IBM Mainframe', 'Java', 'IBM DB2', 'React', 'Agile', 'JCL', 'Bash', 'Linux'],
    },
    // Add more leadership experiences here
    {
      // icon: FaBuilding, // Replace with a relevant icon if needed
      logoSrc: "/morrissette.jpg", // Example
      title: 'Entrepreneurship Ambassador',
      company: 'Morrissette Entrepreneurship Institute',
      location: 'London, ON',
      dates: 'Oct 2024 - Mar 2025',
      description: [
        'Planned and executed a series of workshops and events to promote entrepreneurship and innovation.',
        'Tracked Headcount and attendance for all events and brainstormed new ideas to promote entrepreneurship and innovation throughout campus',
        'Demonstrated strong organizational, communication, and adaptability skills by planning events, managing logistics, ensuring smooth execution, and tracking participant engagement to optimize future events'
  
    ],
      technologies: ['Event Planning', 'Presenting', 'Organization', 'Communication'],
    },
  ],
}


export default function Experience() {
  const [activeTab, setActiveTab] = useState<'professional' | 'leadership'>('professional')
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const openModal = (experience: ExperienceItem) => {
    setSelectedExperience(experience);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedExperience(null);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalIsOpen]);

  // Close on ESC key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const activeExperiences = experienceData[activeTab]

  const tabVariants = {
    active: { backgroundColor: "var(--surface-2)", color: "var(--accent)", borderColor: "var(--accent)" },
    inactive: { backgroundColor: "transparent", color: "var(--text-muted)", borderColor: "transparent" },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  }

  return (
    <section id="experience" className="pt-10 pb-20" style={{ background: 'var(--background)' }}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' } as React.CSSProperties}
        >
          Places I&apos;ve Worked
        </motion.h2>

        {/* Tabs - Reduced padding on mobile */}
        <div className="flex justify-center mb-8">
          <div className="p-1 rounded-xl flex space-x-1" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <motion.button
              onClick={() => setActiveTab('professional')}
              className="px-4 py-1 sm:px-6 sm:py-2 rounded-lg text-sm font-medium transition-colors border"
              animate={activeTab === 'professional' ? 'active' : 'inactive'}
              variants={tabVariants}
              initial={false}
            >
              Professional
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('leadership')}
              className="px-4 py-1 sm:px-6 sm:py-2 rounded-lg text-sm font-medium transition-colors border"
              animate={activeTab === 'leadership' ? 'active' : 'inactive'}
              variants={tabVariants}
              initial={false}
            >
              Leadership
            </motion.button>
          </div>
        </div>

        {/* Experience Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // Re-trigger animation when tab changes
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="space-y-8 max-w-4xl mx-auto"
          >
            {activeExperiences.map((item, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                variants={contentVariants} // Inherit item animation
                onClick={() => openModal(item)} 
                // MODIFIED: Stack layout vertically on small screens
                className="p-4 sm:p-6 rounded-xl shadow-md flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start cursor-pointer transition-all duration-200"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
              >
                {/* Icon/Logo */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center relative overflow-hidden pointer-events-none" style={{ background: 'var(--surface-2)', color: 'var(--accent)' }}>
                  {item.logoSrc && <Image src={item.logoSrc} alt={`${item.company} logo`} fill style={{objectFit: 'contain'}} />} 
                  {item.icon && !item.logoSrc && <item.icon size={24} />}
                </div>

                {/* Details */}
                <div className="flex-grow pointer-events-none w-full text-center sm:text-left"> {/* Ensure text aligns center when stacked */} 
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-2">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-lg sm:text-xl font-semibold" style={{ color: 'var(--foreground)' }}>{item.title} @ <span style={{ color: 'var(--accent)' }} className="font-medium">{item.company}</span></h3>
                      <p className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>{item.location} | {item.dates}</p>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); openModal(item); }} 
                      className="hidden sm:flex items-center gap-1 px-3 py-1 border rounded-md text-xs transition-colors pointer-events-auto" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }} onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='var(--accent)'; el.style.color='var(--accent)'; }} onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='var(--border)'; el.style.color='var(--text-muted)'; }}
                    >
                      <FaExternalLinkAlt /> Details
                    </button>
                  </div>
                  <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                    {Array.isArray(item.description) ? item.description[0] : item.description.substring(0, 100) + (item.description.length > 100 ? '...' : '')}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-full text-xs border" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)', borderColor: 'var(--border)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button 
                      onClick={(e) => { e.stopPropagation(); openModal(item); }} 
                      className="sm:hidden mt-3 inline-flex items-center gap-1 px-3 py-1 border rounded-md text-xs transition-colors pointer-events-auto" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
                    >
                      <FaExternalLinkAlt /> Details
                    </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Centered modal overlay (no portal, just fixed positioning) ── */}
      {modalIsOpen && selectedExperience && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.82)',
            zIndex: 9999,
            padding: '1rem',
            boxSizing: 'border-box' as const,
          }}
          onClick={closeModal}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '560px',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column' as const,
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
            }}
          >
            {/* Header — always visible */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1.25rem 1.5rem',
                borderBottom: '1px solid var(--border)',
                flexShrink: 0,
              }}
            >
              {selectedExperience.logoSrc && (
                <div style={{ width: 48, height: 48, position: 'relative' as const, background: 'white', borderRadius: 8, overflow: 'hidden', flexShrink: 0 }}>
                  <Image src={selectedExperience.logoSrc} alt={`${selectedExperience.company} logo`} fill style={{ objectFit: 'contain' }} />
                </div>
              )}
              {selectedExperience.icon && !selectedExperience.logoSrc && (
                <div style={{ width: 48, height: 48, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-2)', color: 'var(--accent)', flexShrink: 0 }}>
                  <selectedExperience.icon size={24} />
                </div>
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: 'var(--foreground)', lineHeight: 1.3 }}>
                  {selectedExperience.title} @ <span style={{ color: 'var(--accent)' }}>{selectedExperience.company}</span>
                </h3>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {selectedExperience.location} · {selectedExperience.dates}
                </p>
                {selectedExperience.companyLink && (
                  <a href={selectedExperience.companyLink} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 4, fontSize: '0.75rem', color: 'var(--accent)', textDecoration: 'none' }}>
                    Visit Company <FaExternalLinkAlt size={9} />
                  </a>
                )}
              </div>
              <button
                onClick={closeModal}
                aria-label="Close"
                style={{
                  flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
                  border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--surface-2)', color: 'var(--text-muted)', transition: 'color 0.15s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--foreground)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
              >
                <FaTimes size={13} />
              </button>
            </div>

            {/* Body — scrollable */}
            <div style={{ overflowY: 'auto' as const, padding: '1.25rem 1.5rem', flex: 1 }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ margin: '0 0 0.75rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--accent)' }}>
                  Description
                </h4>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: '0.6rem' }}>
                  {(Array.isArray(selectedExperience.description) ? selectedExperience.description : [selectedExperience.description]).map((point, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                      <span style={{ marginTop: 7, width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.75rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--accent)' }}>
                  Technologies
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.4rem' }}>
                  {selectedExperience.technologies.map(tech => (
                    <span key={tech} style={{ padding: '0.2rem 0.7rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 500, background: 'var(--surface-2)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

// Add basic modal styles to globals.css or here if preferred
// Example (add to globals.css for better organization):
/*
.ModalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ModalContent {
  position: relative;
  max-width: 600px;
  width: 90%;
  background: #1a1a1a; // Dark background for modal
  padding: 2rem;
  border-radius: 8px;
  outline: none;
  border: 1px solid #333;
  color: #fff; 
}
*/ 