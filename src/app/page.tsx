import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
// import Projects from '@/components/Projects'
// import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: "Srini Vankadari | Personal Portfolio",
  description: "Welcome to Srini Vankadari's personal portfolio website",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Skills />
      {/* <Projects /> */}
      {/* <Contact /> */}
    </main>
  )
}
