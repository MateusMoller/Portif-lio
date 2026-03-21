import { motion as Motion } from 'framer-motion'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import DifferentialsSection from './components/DifferentialsSection'
import Footer from './components/Footer'
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProfileSection from './components/ProfileSection'
import ProjectsSection from './components/ProjectsSection'
import ScrollProgressBar from './components/ScrollProgressBar'
import SkillsSection from './components/SkillsSection'
import ValueSection from './components/ValueSection'
import VisualFXLayer from './components/VisualFXLayer'
import { portfolioData } from './data/portfolioData'

function App() {
  return (
    <div className="relative">
      <VisualFXLayer />
      <ScrollProgressBar />

      <Navbar
        name={portfolioData.personal.name}
        navigation={portfolioData.navigation}
        links={portfolioData.links}
        resumeUrl={portfolioData.personal.resumeUrl}
      />

      <Motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 pb-20 pt-8 sm:px-6 lg:px-8"
      >
        <HeroSection
          personal={portfolioData.personal}
          links={portfolioData.links}
          highlights={portfolioData.heroHighlights}
        />

        <ValueSection value={portfolioData.valueProposition} />

        <AboutSection about={portfolioData.about} />

        <DifferentialsSection differentials={portfolioData.differentials} />

        <SkillsSection technologies={portfolioData.technologies} />

        <ProjectsSection projects={portfolioData.projects} />

        <ProfileSection credibility={portfolioData.credibility} />

        <ContactSection
          personal={portfolioData.personal}
          links={portfolioData.links}
          contact={portfolioData.contact}
        />
      </Motion.main>

      <FloatingWhatsAppButton whatsapp={portfolioData.links.whatsapp} />

      <Footer
        name={portfolioData.personal.name}
        navigation={portfolioData.navigation}
        statement={portfolioData.footer.statement}
      />
    </div>
  )
}

export default App
