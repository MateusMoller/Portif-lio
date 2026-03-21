import { motion as Motion } from 'framer-motion'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProfileSection from './components/ProfileSection'
import ProjectsSection from './components/ProjectsSection'
import ScrollProgressBar from './components/ScrollProgressBar'
import SkillsSection from './components/SkillsSection'
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
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-24 pt-10 sm:px-6 lg:px-8"
      >
        <HeroSection
          personal={portfolioData.personal}
          links={portfolioData.links}
          highlights={portfolioData.highlights}
        />

        <AboutSection about={portfolioData.about} />

        <SkillsSection skills={portfolioData.skills} />

        <ProjectsSection projects={portfolioData.projects} />

        <ProfileSection profile={portfolioData.professionalProfile} />

        <ContactSection
          personal={portfolioData.personal}
          links={portfolioData.links}
          contact={portfolioData.contact}
        />
      </Motion.main>

      <FloatingWhatsAppButton whatsapp={portfolioData.links.whatsapp} />

      <Footer name={portfolioData.personal.name} navigation={portfolioData.navigation} />
    </div>
  )
}

export default App

