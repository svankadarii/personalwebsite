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
  description: React.ReactNode | React.ReactNode[]; // Allow React nodes for styling (like bold text)
  shortDescription?: React.ReactNode; // Optional short description for the card front
  technologies?: string[];
  skills?: string[];
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
      logoSrc: "/Interac.png",
      title: 'Incoming Software Engineer',
      company: 'Interac Corp.',
      location: 'Toronto, ON',
      dates: 'Sep 2026 - Dec 2026',
      shortDescription: 'Working on Infrastrucutre that over 30 million Canadians use everyday!.',
      description: [
        <>Building scalable  engineering and AI solutions that scale and automate infrastructure.</>,
      ],
      technologies: ['Python', 'AWS', 'Terraform', 'Agentic AI', 'Machine Learning', 'AWS Lambda', 'MLOps', 'CI/CD', 'Docker', 'Kubernetes'],
    },
    {
      logoSrc: "/bmo.jpg",
      title: 'Software Developer Intern',
      company: 'BMO',
      location: 'Toronto, ON',
      dates: 'May 2026 - Aug 2026',
      shortDescription: 'Migrating critical legacy applications to Git, supporting platform engineering with DevOps pipelines, and testing applications concurrently.',
      description: [
        <>Migrating critical legacy applications to Git, modernizing version control practices and improving team collaboration across the development lifecycle.</>,
        <>Supporting the platform engineering team in building and maintaining DevOps pipelines, enabling automated builds, testing, and deployments.</>,
        <>Testing applications concurrently to validate functionality, performance, and reliability across multiple workstreams simultaneously.</>,
      ],
      technologies: ['Git', 'DevOps', 'CI/CD', 'Testing', 'Jenkins','Ansible','Apache Spark'],
    },
    {
      // icon: FaBuilding,
      logoSrc: "/bmo.jpg",
      title: 'SoftwareDeveloper Intern',
      company: 'BMO',
      location: 'Toronto, ON',
      dates: 'May 2025 - Aug 2025',
      shortDescription: 'Created Python-based automation tools and data pipelines on the IBM Mainframe, reducing manual analysis time and streamlining enterprise document workflows',
      description: [
        <>Developed an internal automation tool using PyPDF and Pandas to extract and populate PDF forms with branch data, streamlining document workflows and improving operational efficiency.</>,
        <>Built a data transformation pipeline using IBM Assembler and Python to convert encoded branch messages into structured tables, processing <b>1,000+</b> records and exporting them into Excel for non-technical teams, cutting analysis time by <b>40%</b>.</>,
        <>Conducted end-to-end quality assurance testing on applications, including unit testing, data validation, and edge case analysis, ensuring reliability, accuracy, and alignment with user requirements throughout the Software Development Life Cycle.</>,
        <>Collaborated with cross-functional teams to develop and pitch an AI-driven incident response strategy that increases operational efficiency by <b>55%</b> to C-suite executives, demonstrating leadership, adaptability, and strong interpersonal communication.</>,
      ],
      technologies: ['IBM Mainframe', 'Assembly', 'JCL', 'Python', 'Pandas', 'PyPDF'],
    },
    {
      logoSrc: "/momentummind_research_logo.jpg",
      title: 'Web Developer Intern',
      company: 'MomentumMind',
      location: 'Remote',
      dates: 'May 2024 - Aug 2024',
      shortDescription: 'Built an end-to-end scalable web application with React and Node.js, featuring automated CI/CD pipelines and a real-time Stripe payment integration.',
      description: [
        <>Developed and deployed a scalable application using React, Tailwind CSS, and Node.js, implementing CI/CD workflows in GitHub Actions that cut deployment time by <b>45%</b> and minimized production errors.</>,
        <>Designed and shipped a real-time payment system using Stripe Webhooks to automate billing status updates, reducing manual transaction verification by <b>10 hours</b> per week.</>,
        <>Optimized PostgreSQL inventory queries and indexing strategies, integrating automated schema validation into CI/CD to prevent deployment errors and improve query execution speed by <b>25%</b>.</>
      ],
      technologies: ['React', 'Node.js', 'JavaScript', 'Tailwind CSS', 'PostgreSQL', 'Stripe', 'GitHub Actions', 'Agile'],
    },

    // Add more professional experiences here
  ],
  leadership: [
    {

      logoSrc: "/wcs.jpg",
      title: 'Project Manager',
      company: 'Western Cyber Society',
      location: 'London, ON',
      dates: 'Oct 2024 - Apr 2026',
      shortDescription: 'Directed a team of 5 developers in an agile environment to architect BankFrame, a full-stack banking simulator utilizing IBM Mainframe and RESTful APIs.',
      description: [
        <strong key="h1" data-header style={{ color: 'var(--foreground)' }}>2025-2026 Term (LendIQ):</strong>,
        <>Leading a team of 5 in <b>Agile</b> for the development of a real-time credit risk evaluation platform on an IBM z/OS mainframe using zCX, integrating a <b>Node.js</b> frontend with a <b>FastAPI</b> backend and executing low-latency ML inference via an ONNX-hosted XGBoost model containerized using Docker.</>,
        <>Implemented explainable AI using <b>SHAP</b> to provide feature-level transparency for credit decisions, persisting risk scores and explanations in <b>IBM Db2</b> to support auditability, compliance, and downstream analysis.</>,
        <strong key="h2" data-header style={{ color: 'var(--foreground)', marginTop: '0.8rem', display: 'block' }}>2024-2025 Term (BankFrame):</strong>,
        <>Led a team of 5 students to develop BankFrame, a replica of a top-five Canadian bank, utilizing <b>IBM Mainframe</b>, <b>IBM Db2</b>, Java, and RESTful APIs to implement secure accounts and efficient transaction processing.</>,
        <>Developed a NoHup Python script to automate <b>IBM Db2</b> backups, ensuring zero downtime and eliminating the need for manual job requests.</>,
        <hr></hr>,
        <>Presented both BankFrame and LendIQ to industry partners including RBC, TD, BMO, CIBC, Scotiabank, Sun Life, IBM, and Morgan Stanley.</>
      ],
      technologies: ['Project Management', 'Agile', 'IBM z/OS', 'IBM Db2', 'Java', 'Python', 'Node.js', 'FastAPI', 'Docker', 'XGBoost', 'SHAP', 'ONNX', 'REST APIs'],
    },
    // Add more leadership experiences here
    {
      logoSrc: "/morrissette.jpg",
      title: 'Entrepreneurship Ambassador',
      company: 'Morrissette Entrepreneurship Institute',
      location: 'London, ON',
      dates: 'Oct 2024 - Mar 2025',
      shortDescription: 'Spearheaded campus-wide entrepreneurial initiatives, driving student engagement through the strategic planning and execution of high-impact workshops and events.',
      description: [
        'Planned and executed a series of workshops and events to promote entrepreneurship and innovation.',
        'Tracked Headcount and attendance for all events and brainstormed new ideas to promote entrepreneurship and innovation throughout campus',
        'Demonstrated strong organizational, communication, and adaptability skills by planning events, managing logistics, ensuring smooth execution, and tracking participant engagement to optimize future events'

      ],
      skills: ['Event Planning', 'Presenting', 'Organization', 'Communication'],
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
                  {item.logoSrc && <Image src={item.logoSrc} alt={`${item.company} logo`} fill style={{ objectFit: 'contain' }} />}
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
                      className="hidden sm:flex items-center gap-1 px-3 py-1 border rounded-md text-xs transition-colors pointer-events-auto" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }} onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--accent)'; el.style.color = 'var(--accent)'; }} onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.color = 'var(--text-muted)'; }}
                    >
                      <FaExternalLinkAlt /> Details
                    </button>
                  </div>
                  <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                    {item.shortDescription || (Array.isArray(item.description) ? item.description[0] : (typeof item.description === 'string' ? item.description.substring(0, 100) + (item.description.length > 100 ? '...' : '') : item.description))}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {(item.technologies || item.skills || []).map((tech) => (
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
                  {(Array.isArray(selectedExperience.description) ? selectedExperience.description : [selectedExperience.description]).map((point, i) => {
                    const isHeader = typeof point === 'object' && point !== null && (point as any)?.props?.['data-header'];
                    const isDivider = typeof point === 'object' && point !== null && (point as any)?.type === 'hr';
                    const hideBullet = isHeader || isDivider;
                    return (
                      <li key={i} style={{ display: 'flex', gap: hideBullet ? '0' : '0.6rem', fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                        {!hideBullet && <span style={{ marginTop: 7, width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />}
                        <div style={{ width: '100%' }}>{point}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {(selectedExperience.technologies || selectedExperience.skills) && (
                <div>
                  <h4 style={{ margin: '0 0 0.75rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--accent)' }}>
                    {selectedExperience.technologies ? 'Technologies' : 'Skills'}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.4rem' }}>
                    {(selectedExperience.technologies || selectedExperience.skills || []).map(tech => (
                      <span key={tech} style={{ padding: '0.2rem 0.7rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 500, background: 'var(--surface-2)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
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