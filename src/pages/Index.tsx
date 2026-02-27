import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import IntroLoader from '@/components/IntroLoader'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import StatsSection from '@/components/StatsSection'
import ProcessSection from '@/components/ProcessSection'
import PortfolioSection from '@/components/PortfolioSection'
import TechStackSection from '@/components/TechStackSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import VisionSection from '@/components/VisionSection'
import AboutSection from '@/components/AboutSection'
import FaqSection from '@/components/FaqSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Seo from '@/components/Seo'

const Index = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.resolvedLanguage ?? 'en'
  const [showLoader, setShowLoader] = useState(true)
  const [navbarSolid, setNavbarSolid] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [cursorHover, setCursorHover] = useState(false)

  const navIds = useMemo(() => ['home', 'services', 'work', 'about', 'faq', 'contact'], [])
  const structuredData = useMemo(
    () => [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Sovertick',
        url: 'https://sovertick.com/',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://sovertick.com/',
          },
        ],
      },
    ],
    [],
  )

  useEffect(() => {
    const isRtl = ['ar', 'ur'].includes(currentLang)
    document.documentElement.lang = currentLang
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
  }, [currentLang])

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLoader(false), 3000)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => setNavbarSolid(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const elements = navIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.45 },
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [navIds])

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setCursorPos({ x: event.clientX, y: event.clientY })
      const hovered = (event.target as HTMLElement | null)?.closest("[data-cursor-hover='true']")
      setCursorHover(Boolean(hovered))
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <Seo
        title='Sovertick | Web, Mobile & AI Development'
        description='Sovertick builds fast websites, mobile apps, and AI solutions for growing businesses, with UI/UX design and scalable engineering from idea to launch globally.'
        keywords='web development agency, mobile app development, AI software development, UI UX design services, custom software company, Sovertick'
        canonicalPath='/'
        image='/branding/sovertick-logo.svg'
        structuredData={structuredData}
      />
      <div className='sovertick-root'>
      <motion.div
        className={`cursor-dot-lite ${cursorHover ? 'cursor-active' : ''}`}
        animate={{ x: cursorPos.x - 6, y: cursorPos.y - 6 }}
        transition={{ type: 'spring', stiffness: 230, damping: 24 }}
      />

      <AnimatePresence>{showLoader && <IntroLoader />}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: showLoader ? 0 : 1, y: showLoader ? 28 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar solid={navbarSolid} activeSection={activeSection} />

        <main role="main" aria-label="Sovertick Digital Agency">
          <HeroSection />
          <ServicesSection />
          <StatsSection />
          <ProcessSection />
          <PortfolioSection />
          <TechStackSection />
          <TestimonialsSection />
          <VisionSection />
          <AboutSection />
          <FaqSection />
          <ContactSection />
        </main>

        <Footer />
        <WhatsAppFloat />
      </motion.div>
      </div>
    </>
  )
}

export default Index
