'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import Modal from 'react-modal'
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
          'Developing and maintaining features for internal banking applications within the IBM Mainframe.',
          'Incoming Summer 2025',
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

// Set app element for accessibility (usually in a layout or app file, but here for simplicity)
// Consider moving this to layout.tsx if using modals elsewhere
if (typeof window !== 'undefined') {
  Modal.setAppElement('body');
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
    setSelectedExperience(null); // Clear selection on close
  };

  const activeExperiences = experienceData[activeTab]

  const tabVariants = {
    active: { backgroundColor: "#333", color: "#fff" },
    inactive: { backgroundColor: "transparent", color: "#ccc" },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  }

  return (
    <section id="experience" className="pt-10 pb-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-black dark:text-white"
        >
          Places I&apos;ve Worked
        </motion.h2>

        {/* Tabs - Reduced padding on mobile */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 dark:bg-gray-900 p-1 rounded-lg border border-gray-300 dark:border-gray-700 flex space-x-1">
            <motion.button
              onClick={() => setActiveTab('professional')}
              className="px-4 py-1 sm:px-6 sm:py-2 rounded-md text-sm font-medium transition-colors"
              animate={activeTab === 'professional' ? 'active' : 'inactive'}
              variants={tabVariants}
              initial={false}
            >
              Professional
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('leadership')}
              className="px-4 py-1 sm:px-6 sm:py-2 rounded-md text-sm font-medium transition-colors"
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
                className="bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start cursor-pointer transition-colors duration-200 hover:border-[color:var(--accent)]"
              >
                {/* Icon/Logo */}
                <div className="flex-shrink-0 w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-md flex items-center justify-center text-[color:var(--accent)] relative overflow-hidden pointer-events-none">
                  {item.logoSrc && <Image src={item.logoSrc} alt={`${item.company} logo`} fill style={{objectFit: 'contain'}} />} 
                  {item.icon && !item.logoSrc && <item.icon size={24} />}
                </div>

                {/* Details */}
                <div className="flex-grow pointer-events-none w-full text-center sm:text-left"> {/* Ensure text aligns center when stacked */} 
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-2">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white">{item.title} @ <span className="text-[color:var(--accent)] font-medium">{item.company}</span></h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{item.location} | {item.dates}</p>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); openModal(item); }} 
                      className="hidden sm:flex items-center gap-1 px-3 py-1 border border-gray-400 dark:border-gray-600 rounded-md text-xs text-gray-600 dark:text-gray-300 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors pointer-events-auto"
                    >
                      <FaExternalLinkAlt /> Details
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    {Array.isArray(item.description) ? item.description[0] : item.description.substring(0, 100) + (item.description.length > 100 ? '...' : '')}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full text-xs border border-gray-300 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button 
                      onClick={(e) => { e.stopPropagation(); openModal(item); }} 
                      className="sm:hidden mt-3 inline-flex items-center gap-1 px-3 py-1 border border-gray-400 dark:border-gray-600 rounded-md text-xs text-gray-600 dark:text-gray-300 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors pointer-events-auto"
                    >
                      <FaExternalLinkAlt /> Details
                    </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- MODAL COMPONENT --- */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Experience Details"
        className="ModalContent"
        overlayClassName="ModalOverlay"
        closeTimeoutMS={300} // Match animation duration
      >
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              aria-label="Close modal"
            >
              <FaTimes size={24} />
            </button>
            <div className="bg-gray-800 text-white rounded-lg overflow-hidden max-w-3xl mx-auto">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  {selectedExperience.logoSrc && (
                    <div className="w-16 h-16 relative bg-white rounded-md overflow-hidden flex-shrink-0">
                      <Image src={selectedExperience.logoSrc} alt={`${selectedExperience.company} logo`} fill style={{objectFit: 'contain'}} />
                    </div>
                  )}
                  {selectedExperience.icon && !selectedExperience.logoSrc && (
                    <div className="w-16 h-16 bg-gray-700 rounded-md flex items-center justify-center text-[color:var(--accent)]">
                      <selectedExperience.icon size={32} />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {selectedExperience.title} @ <span className="text-[color:var(--accent)]">{selectedExperience.company}</span>
                    </h3>
                    <p className="text-gray-300">{selectedExperience.location} | {selectedExperience.dates}</p>
                    {selectedExperience.companyLink && (
                      <a 
                        href={selectedExperience.companyLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-[color:var(--accent)] hover:underline"
                      >
                        Visit Company <FaExternalLinkAlt size={12} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2 text-[color:var(--accent)]">Description</h4>
                  {Array.isArray(selectedExperience.description) ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {selectedExperience.description.map((item, i) => (
                        <li key={i} className="text-gray-200">{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-200">{selectedExperience.description}</p>
                  )}
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-[color:var(--accent)]">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </Modal>
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