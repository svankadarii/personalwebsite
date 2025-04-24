export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I&apos;m Srini Vankadari, a passionate Full Stack Developer with a strong focus on creating
            efficient, scalable, and user-friendly applications. With expertise in
            both frontend and backend technologies, I strive to build solutions
            that make a difference.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            My journey in software development began with a deep curiosity for technology and problem-solving. Since then, I&apos;ve
            worked on various projects ranging from small business websites to
            complex web applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-[color:var(--accent)] transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">What I Do</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2 text-[color:var(--accent)]">•</span>
                  Web Development
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[color:var(--accent)]">•</span>
                  Mobile App Development
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[color:var(--accent)]">•</span>
                  UI/UX Design
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[color:var(--accent)]">•</span>
                  API Development
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-[color:var(--accent)] transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">My Approach</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2 text-[color:var(--accent)]">•</span>
                  Clean Code
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[color:var(--accent)]">•</span>
                  Best Practices
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[color:var(--accent)]">•</span>
                  Continuous Learning
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[color:var(--accent)]">•</span>
                  User-Centric Design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 