import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import GitHubSection from '../components/GitHubSection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <GitHubSection />
      <Contact />
      <Footer />
    </main>
  )
}
