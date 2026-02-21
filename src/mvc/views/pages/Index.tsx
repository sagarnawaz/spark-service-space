import { ArrowRight, Check, ChevronDown, Cloud, Code2, Cpu, Figma, Github, Globe, Instagram, Layers3, Linkedin, Lock, Menu, MonitorSmartphone, Rocket, Server, Sparkles, Star, Twitter, X,} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaAws } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { SiDocker, SiFigma, SiFlutter, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTypescript,} from 'react-icons/si'
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import {
  features,
  navLinks,
  portfolio,
  processSteps,
  serviceCards,
  testimonials,
  visionCards,
} from '@/mvc/views/pages/home/data'

type InViewOptions = {
  threshold?: number
  rootMargin?: string
}

type ScrambleCounterProps = {
  value: number
  suffix?: string
  start: boolean
}

type MagneticButtonProps = {
  children: ReactNode
  className?: string
  href?: string
}

type TechItem = {
  name: string
  icon: IconType
}

const useInView = ({ threshold = 0.18, rootMargin = '0px' }: InViewOptions = {}) => {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return { ref, inView }
}

const Section = ({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: ReactNode
}) => {
  const { ref, inView } = useInView()
  return (
    <motion.section
      id={id}
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}

const HeadingReveal = ({ text }: { text: string }) => {
  return (
    <span className='inline-flex flex-wrap'>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ clipPath: 'inset(100% 0 0 0)', y: 16 }}
          whileInView={{ clipPath: 'inset(0% 0 0 0)', y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.04, ease: [0.76, 0, 0.24, 1] }}
          className={char === ' ' ? 'mr-[0.3em]' : ''}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

const SectionHeader = ({
  lead,
  accent,
  poetic,
  centered = false,
}: {
  lead: string
  accent: string
  poetic: string
  centered?: boolean
}) => {
  const centerClass = centered ? ' text-center' : ''
  return (
    <>
      <h2 className={`section-title${centerClass}`}>
        <HeadingReveal text={lead} /> <span className='gradient-title'>{accent}</span>
      </h2>
      <p className={`section-poetic${centerClass}`}>{poetic}</p>
    </>
  )
}

const ScrambleCounter = ({ value, suffix = '+', start }: ScrambleCounterProps) => {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!start) return
    let frame = 0
    const duration = 1500
    const startTime = performance.now()

    const animate = (time: number) => {
      const elapsed = time - startTime
      const progress = Math.min(elapsed / duration, 1)
      if (progress < 0.72) {
        setDisplay(Math.floor(Math.random() * (value + 12)))
      } else {
        const lock = (progress - 0.72) / 0.28
        setDisplay(Math.floor(value * lock))
      }
      if (progress < 1) frame = requestAnimationFrame(animate)
      else setDisplay(value)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [start, value])

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

const MagneticButton = ({ children, className, href = '#' }: MagneticButtonProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 30
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 30
    setPos({ x, y })
  }

  const onLeave = () => setPos({ x: 0, y: 0 })

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 16 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor-hover='true'
    >
      {children}
    </motion.a>
  )
}

const IntroLoader = () => {
  return (
    <motion.div
      className='intro-screen'
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -24, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className='intro-line'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <div className='mt-12 flex flex-col items-center'>
        <div className='flex overflow-hidden text-[42px] font-bold leading-none md:text-[52px]'>
          {'SOVERTICK'.split('').map((letter, index) => (
            <motion.span
              key={letter + index}
              className='brand-loader'
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.8 + index * 0.07, duration: 0.32 }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <motion.p
          className='mt-4 text-sm tracking-[0.25em] text-[#6E7191]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.3 }}
        >
          ENGINEERING TOMORROW
        </motion.p>
        <motion.div
          className='intro-progress mt-6'
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 0.7, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

const HeroNetwork = () => {
  const links = [
    { id: 1, d: 'M165 140 L240 110 L318 146 L372 118', delay: '' },
    { id: 2, d: 'M150 214 L226 176 L300 210 L362 188', delay: 'delay' },
    { id: 3, d: 'M170 278 L250 246 L326 282 L380 252', delay: '' },
    { id: 4, d: 'M208 126 L214 214 L250 302', delay: 'delay' },
    { id: 5, d: 'M332 126 L326 214 L286 302', delay: '' },
  ]
  const nodes = [
    { x: 165, y: 140 },
    { x: 240, y: 110 },
    { x: 318, y: 146 },
    { x: 372, y: 118 },
    { x: 150, y: 214 },
    { x: 226, y: 176 },
    { x: 300, y: 210 },
    { x: 362, y: 188 },
    { x: 170, y: 278 },
    { x: 250, y: 246 },
    { x: 326, y: 282 },
    { x: 380, y: 252 },
  ]

  return (
    <svg viewBox='0 0 540 420' className='hero-network' aria-hidden='true'>
      <defs>
        <linearGradient id='sovertickGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#B06EFF' />
          <stop offset='100%' stopColor='#FF6B6B' />
        </linearGradient>
        <radialGradient id='orbGlow' cx='50%' cy='50%' r='50%'>
          <stop offset='0%' stopColor='rgba(176,110,255,0.24)' />
          <stop offset='100%' stopColor='rgba(176,110,255,0.02)' />
        </radialGradient>
        <radialGradient id='orbCore' cx='48%' cy='42%' r='58%'>
          <stop offset='0%' stopColor='rgba(255,255,255,0.14)' />
          <stop offset='100%' stopColor='rgba(255,255,255,0.02)' />
        </radialGradient>
        <clipPath id='neuralOrbClip'>
          <circle cx='270' cy='210' r='128' />
        </clipPath>
        <filter id='orbLineGlow' x='-40%' y='-40%' width='180%' height='180%'>
          <feGaussianBlur stdDeviation='3' result='blur' />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      <circle cx='270' cy='210' r='170' fill='url(#orbGlow)' />
      <circle cx='270' cy='210' r='128' fill='rgba(11,15,26,0.72)' />
      <circle cx='270' cy='210' r='128' fill='url(#orbCore)' />
      <circle cx='270' cy='210' r='128' fill='none' stroke='rgba(255,255,255,0.2)' />

      <g clipPath='url(#neuralOrbClip)' className='orb-rotor'>
        {links.map(link => (
          <path
            key={link.id}
            d={link.d}
            stroke='url(#sovertickGradient)'
            strokeWidth='1.8'
            fill='none'
            filter='url(#orbLineGlow)'
            className={`network-line ${link.delay}`}
          />
        ))}
        {nodes.map((node, i) => (
          <circle
            key={`${node.x}-${node.y}-${i}`}
            cx={node.x}
            cy={node.y}
            r='4.3'
            fill='url(#sovertickGradient)'
            className='network-node'
          />
        ))}
      </g>

      <circle cx='270' cy='210' r='148' fill='none' stroke='rgba(176,110,255,0.24)' />
      <circle
        cx='270'
        cy='210'
        r='158'
        fill='none'
        stroke='rgba(255,107,107,0.2)'
        strokeDasharray='10 14'
        className='orb-ring'
      />
    </svg>
  )
}
const Index = () => {
  const [showLoader, setShowLoader] = useState(true)
  const [navbarSolid, setNavbarSolid] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [cursorHover, setCursorHover] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [portfolioDot, setPortfolioDot] = useState(0)
  const [activeProject, setActiveProject] = useState<(typeof portfolio)[number] | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const portfolioRef = useRef<HTMLDivElement | null>(null)
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.35 })

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
    const ids = navLinks.map(item => item.id)
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
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
  }, [])

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setCursorPos({ x: event.clientX, y: event.clientY })
      const hovered = (event.target as HTMLElement | null)?.closest("[data-cursor-hover='true']")
      setCursorHover(Boolean(hovered))
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveTestimonial(prev => (prev + 1) % testimonials.length),
      4200,
    )
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!activeProject) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveProject(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeProject])

  const onPortfolioScroll = () => {
    const container = portfolioRef.current
    if (!container) return
    const itemWidth = container.scrollWidth / portfolio.length
    const index = Math.round(container.scrollLeft / itemWidth)
    setPortfolioDot(Math.max(0, Math.min(portfolio.length - 1, index)))
  }

  const jumpPortfolio = (index: number) => {
    const container = portfolioRef.current
    if (!container) return
    const itemWidth = container.scrollWidth / portfolio.length
    container.scrollTo({ left: index * itemWidth, behavior: 'smooth' })
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(false)
    setSending(true)
    window.setTimeout(() => {
      setSending(false)
      setSubmitted(true)
    }, 1300)
  }

  const techStack = useMemo(
    (): TechItem[] => [
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Python', icon: SiPython },
      { name: 'Flutter', icon: SiFlutter },
      { name: 'AWS', icon: FaAws },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Docker', icon: SiDocker },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Figma', icon: SiFigma },
    ],
    [],
  )

  return (
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
        <header className={`sovertick-nav ${navbarSolid ? 'nav-solid' : ''}`}>
          <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10'>
            <a href='#home' className='brand-mark' data-cursor-hover='true'>
              <img src='/branding/sovertick-logo.svg' alt='Sovertick' className='brand-logo-full' />
            </a>
            <nav className='hidden items-center gap-8 lg:flex'>
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`nav-link-dot ${activeSection === link.id ? 'active' : ''}`}
                  data-cursor-hover='true'
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <MagneticButton
              href='#contact'
              className='cta-main hidden items-center gap-2 rounded-full px-5 py-2.5 lg:inline-flex'
            >
              Let's Build <ArrowRight className='h-4 w-4' />
            </MagneticButton>
            <button
              type='button'
              onClick={() => setMobileMenu(v => !v)}
              className='lg:hidden'
              data-cursor-hover='true'
            >
              {mobileMenu ? (
                <X className='h-6 w-6 text-[#F5F5F7]' />
              ) : (
                <Menu className='h-6 w-6 text-[#F5F5F7]' />
              )}
            </button>
          </div>
          <AnimatePresence>
            {mobileMenu && (
              <motion.div
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                className='mobile-menu'
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    className='mobile-link'
                    onClick={() => setMobileMenu(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main>
          <Section id='home' className='section-hero px-6 pb-12 pt-14 lg:px-10 lg:pt-16'>
            <div className='mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-10'>
              <div>
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className='hero-badge'
                >
                  <Globe className='h-3.5 w-3.5' /> Global Software Excellence
                </motion.p>
                <div className='mt-7 space-y-2'>
                  <motion.h1
                    className='hero-title'
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0 }}
                  >
                    We Don't Build Software.
                  </motion.h1>
                  <motion.h1
                    className='hero-title gradient-title shimmer-text'
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    We Build What's Next.
                  </motion.h1>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className='mt-6 max-w-xl text-lg italic text-[#6E7191]'
                >
                  We engineer next-gen AI products, cloud platforms, and intelligent systems for
                  ambitious global enterprises.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 16, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-nowrap sm:items-center'
                >
                  <MagneticButton
                    href='#work'
                    className='cta-main pulse-ring inline-flex items-center gap-2 rounded-full px-6 py-3 whitespace-nowrap'
                  >
                    See Our Work <ArrowRight className='h-4 w-4' />
                  </MagneticButton>
                  <MagneticButton
                    href='#about'
                    className='cta-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 whitespace-nowrap'
                  >
                    Our Story
                  </MagneticButton>
                </motion.div>
              </div>

              <motion.div
                className='hero-visual-wrap mx-auto w-full max-w-[560px]'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className='hero-orb-left' />
                <div className='hero-orb-right' />
                <div className='hero-glass-shell'>
                  <HeroNetwork />
                </div>
              </motion.div>
            </div>
            <motion.a
              href='#services'
              className='scroll-indicator'
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              data-cursor-hover='true'
            >
              <ChevronDown className='h-5 w-5' />
            </motion.a>
          </Section>

          <Section id='services' className='section-services px-6 py-14 lg:px-10'>
            <div className='mx-auto max-w-7xl'>
              <SectionHeader lead='What We' accent='Create' poetic='Every solution, a new standard.' />
              <div className='mt-12 grid gap-6 md:grid-cols-3'>
                {serviceCards.map((card, index) => (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, scaleY: 0.06, transformOrigin: 'top' }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                    className={`service-card ${card.className}`}
                  >
                    <div className='service-topline' />
                    <div className='service-icon-wrap'>
                      <card.icon className='h-6 w-6' />
                    </div>
                    <h3 className='mt-5 text-xl font-semibold text-[#F5F5F7]'>{card.title}</h3>
                    <p className='mt-1 italic text-[#6E7191]'>{card.poetic}</p>
                    <p className='mt-4 text-[#6E7191]'>{card.description}</p>
                    <span className='mt-5 inline-flex rounded-full border border-[#B06EFF33] px-3 py-1 text-xs text-[#B06EFF]'>
                      {card.tag}
                    </span>
                  </motion.article>
                ))}
              </div>
            </div>
          </Section>

          <section
            ref={statsRef as React.Ref<HTMLElement>}
            className='section-stats px-6 py-10 lg:px-10'
          >
            <div className='mx-auto grid max-w-7xl gap-6 md:grid-cols-4'>
              {[
                { n: 50, label: 'Projects' },
                { n: 30, label: 'Clients' },
                { n: 15, label: 'Experts' },
                { n: 98, label: 'Retention', suffix: '%' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.12 }}
                  className='stat-tile'
                >
                  <p className='stat-number'>
                    <ScrambleCounter
                      value={item.n}
                      start={statsInView}
                      suffix={item.suffix ?? '+'}
                    />
                  </p>
                  <p className='mt-1 text-[#6E7191]'>{item.label}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <Section className='section-process px-6 py-14 lg:px-10'>
            <div className='mx-auto max-w-7xl'>
              <SectionHeader lead='How We' accent='Work' poetic='Structured. Human. Relentless.' />
              <div className='relative mt-12 grid gap-6 md:grid-cols-4'>
                {processSteps.map((step, index) => (
                  <motion.article
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className='process-card'
                  >
                    <div className='process-dot'>{step.step}</div>
                    <h3 className='mt-4 text-lg font-semibold text-[#F5F5F7]'>{step.title}</h3>
                    <p className='mt-2 text-sm text-[#6E7191]'>{step.text}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </Section>

          <Section id='work' className='section-portfolio px-6 py-14 lg:px-10'>
            <div className='mx-auto max-w-7xl'>
              <SectionHeader lead='Our' accent='Work' poetic='Built to outlast trends.' />

              <div
                ref={portfolioRef}
                onScroll={onPortfolioScroll}
                className='portfolio-scroll mt-10'
              >
                {portfolio.map(item => (
                  <article key={item.name} className='portfolio-card'>
                    <div className='portfolio-art' />
                    <div className='portfolio-overlay'>
                      <h3 className='text-2xl font-semibold text-[#F5F5F7]'>{item.name}</h3>
                      <p className='mt-2 text-[#6E7191]'>{item.text}</p>
                      <div className='mt-4 flex flex-wrap gap-2'>
                        {item.tags.map(tag => (
                          <span
                            key={tag}
                            className='rounded-full border border-[#ffffff22] px-3 py-1 text-xs text-[#F5F5F7]'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        type='button'
                        onClick={() => setActiveProject(item)}
                        className='mt-5 inline-flex items-center gap-2 text-[#F5F5F7]'
                        data-cursor-hover='true'
                      >
                        View Project <ArrowRight className='h-4 w-4' />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className='mt-5 flex justify-center gap-2'>
                {portfolio.map((_, i) => (
                  <button
                    key={i}
                    type='button'
                    className={`dot ${portfolioDot === i ? 'dot-active' : ''}`}
                    onClick={() => jumpPortfolio(i)}
                    data-cursor-hover='true'
                    aria-label={`Go to project ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </Section>

          <Section className='section-tech px-6 py-14 lg:px-10'>
            <div className='mx-auto max-w-7xl'>
              <SectionHeader
                lead='Technologies We'
                accent='Master'
                poetic='The tools that power our craft.'
              />
              <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className='tech-pill'
                    style={{ animationDelay: `${index * 0.12}s` }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <tech.icon className='tech-pill-icon' aria-hidden='true' />
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          <Section id='about' className='section-why px-6 py-14 lg:px-10'>
            <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-2'>
              <div>
                <h2 className='section-title'>
                  <HeadingReveal text='Built' /> <span className='gradient-title'>Different.</span>
                </h2>
                <p className='section-poetic'>Because average never changed anything.</p>
                <p className='mt-6 max-w-xl text-[#6E7191]'>
                  We combine product depth, visual craft, and operational discipline to ship
                  software that performs globally and feels unmistakably human.
                </p>
                <div className='astronaut-card mt-8'>
                  <Rocket className='h-8 w-8 text-[#FFD93D]' />
                  <p className='text-[#F5F5F7]'>Global ambitions. Grounded execution.</p>
                </div>
              </div>
              <div className='grid gap-4 sm:grid-cols-2'>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className='feature-tile'
                  >
                    <Check className='h-4 w-4 text-[#FF6B6B]' />
                    <p className='text-sm text-[#F5F5F7]'>{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          <Section className='section-testimonials px-6 py-14 lg:px-10'>
            <div className='mx-auto max-w-7xl'>
              <SectionHeader
                lead='Client'
                accent='Stories'
                poetic="The best proof is the people we've worked with."
              />
              <div className='testimonial-stack mt-12'>
                {testimonials.map((item, i) => {
                  const distance =
                    (i - activeTestimonial + testimonials.length) % testimonials.length
                  const position = distance === 0 ? 0 : distance === 1 ? 1 : -1
                  return (
                    <motion.article
                      key={item.name}
                      className='testimonial-card'
                      animate={{
                        x: position * 60,
                        scale: position === 0 ? 1 : 0.92,
                        opacity: position === 0 ? 1 : 0.5,
                        zIndex: position === 0 ? 3 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className='mb-3 flex gap-1 text-[#FF6B6B]'>
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} className='h-4 w-4 fill-current' />
                        ))}
                      </div>
                      <p className='italic text-[#F5F5F7]'>"{item.quote}"</p>
                      <p className='mt-6 font-semibold text-[#F5F5F7]'>{item.name}</p>
                      <p className='text-sm text-[#6E7191]'>
                        {item.role}, {item.company}
                      </p>
                    </motion.article>
                  )
                })}
              </div>
              <div className='mt-6 flex justify-center gap-2'>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`dot ${index === activeTestimonial ? 'dot-active' : ''}`}
                    type='button'
                    data-cursor-hover='true'
                  />
                ))}
              </div>
            </div>
          </Section>

          <Section className='section-vision px-6 py-14 lg:px-10'>
            <div className='mx-auto max-w-7xl'>
              <SectionHeader
                lead='Tomorrow,'
                accent='Today.'
                poetic="Futures we're already engineering."
              />
              <div className='mt-10 grid gap-6 md:grid-cols-3'>
                {visionCards.map((card, index) => (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    className='vision-card'
                  >
                    <div className='vision-illustration'>
                      <Sparkles className='h-6 w-6 text-[#FFD93D]' />
                    </div>
                    <h3 className='mt-5 text-xl font-semibold text-[#F5F5F7]'>{card.title}</h3>
                    <p className='mt-3 text-[#6E7191]'>{card.text}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </Section>

          {/* <Section id='careers' className='section-cta px-6 py-14 lg:px-10'>
            <div className='mx-auto max-w-6xl text-center'>
              <h2 className='section-title text-center'>
                <HeadingReveal text='Ready to Build' />
                <br />
                <span className='gradient-title shimmer-text'>Something Legendary?</span>
              </h2>
              <p className='section-poetic text-center'>
                Let's turn bold ideas into products the world notices.
              </p>
              <div className='mt-8'>
                <MagneticButton
                  href='#contact'
                  className='cta-invert inline-flex items-center gap-2 rounded-full px-8 py-4'
                >
                  Start Your Project <ArrowRight className='h-4 w-4' />
                </MagneticButton>
              </div>
              <p className='mt-5 text-[#6E7191]'>hello@sovertick.com</p>
            </div>
          </Section> */}

          <Section id='about' className='section-why px-6 py-14 lg:px-10'>
            <div className='mx-auto max-w-7xl'>
              <SectionHeader
                lead='About'
                accent='Sovertick'
                poetic='Global AI engineering with clear purpose.'
              />
              <div className='mt-10 grid gap-6 md:grid-cols-2'>
                <motion.article
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='vision-card'
                >
                  <div className='vision-illustration'>
                    <Rocket className='h-6 w-6 text-[#FFD93D]' />
                  </div>
                  <h3 className='mt-5 text-xl font-semibold text-[#F5F5F7]'>Our Mission</h3>
                  <p className='mt-3 text-[#6E7191]'>
                    Build intelligent software that helps ambitious businesses move faster, scale
                    with confidence, and lead their industries.
                  </p>
                </motion.article>
                <motion.article
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className='vision-card'
                >
                  <div className='vision-illustration'>
                    <Sparkles className='h-6 w-6 text-[#B06EFF]' />
                  </div>
                  <h3 className='mt-5 text-xl font-semibold text-[#F5F5F7]'>Our Vision</h3>
                  <p className='mt-3 text-[#6E7191]'>
                    Become the most trusted global AI software partner for companies building the
                    next decade of digital innovation.
                  </p>
                </motion.article>
              </div>
            </div>
          </Section>

          <Section id='contact' className='section-contact px-6 py-14 lg:px-10'>
            <div className='mx-auto max-w-4xl rounded-3xl border border-[#B06EFF44] bg-[#ffffff06] p-8 backdrop-blur-xl'>
              <h2 className='section-title text-center'>
                <HeadingReveal text="Let's Talk." />
              </h2>
              <p className='section-poetic text-center'>
                Tell us what you're building and we'll make it real.
              </p>
              <form className='mt-8 grid gap-4 md:grid-cols-2' onSubmit={onSubmit}>
                <input className='input-premium' placeholder='Name' required />
                <input className='input-premium' type='email' placeholder='Email' required />
                <select className='input-premium md:col-span-2' required defaultValue=''>
                  <option value='' disabled>
                    Service Needed
                  </option>
                  <option>Web Development</option>
                  <option>Mobile Applications</option>
                  <option>AI & Machine Learning</option>
                  <option>Cloud & DevOps</option>
                </select>
                <textarea
                  className='input-premium min-h-32 md:col-span-2'
                  placeholder='Message' 
                  required
                />
                <button
                  type='submit'
                  className='cta-main md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full py-3'
                  data-cursor-hover='true'
                >
                  {sending ? 'Sending...' : 'Submit'}
                  <ArrowRight className='h-4 w-4' />
                </button>
                <AnimatePresence>
                  {submitted && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className='md:col-span-2 rounded-xl border border-[#FF6B6B55] bg-[#FF6B6B22] px-4 py-3 text-center text-sm text-[#F5F5F7]'
                    >
                      Message sent. The Sovertick team will reach out shortly.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </Section>
        </main>

        <AnimatePresence>
          {activeProject && (
            <motion.div
              className='fixed inset-0 z-[120] flex items-center justify-center bg-[#05060Dcc] px-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                className='w-full max-w-xl rounded-2xl border border-[#B06EFF55] bg-[#0E1220f2] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl'
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                onClick={event => event.stopPropagation()}
              >
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <p className='text-xs tracking-[0.18em] text-[#6E7191]'>PROJECT OVERVIEW</p>
                    <h3 className='mt-2 text-2xl font-semibold text-[#F5F5F7]'>
                      {activeProject.name}
                    </h3>
                  </div>
                  <button
                    type='button'
                    onClick={() => setActiveProject(null)}
                    className='rounded-full border border-[#ffffff22] p-2 text-[#F5F5F7]'
                    aria-label='Close project modal'
                  >
                    <X className='h-4 w-4' />
                  </button>
                </div>
                <p className='mt-4 text-[#6E7191]'>{activeProject.text}</p>
                <div className='mt-5 flex flex-wrap gap-2'>
                  {activeProject.tags.map(tag => (
                    <span
                      key={tag}
                      className='rounded-full border border-[#ffffff22] px-3 py-1 text-xs text-[#F5F5F7]'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='mt-6 flex flex-wrap gap-3'>
                  <a
                    href='#contact'
                    onClick={() => setActiveProject(null)}
                    className='cta-main inline-flex items-center gap-2 rounded-full px-5 py-2.5'
                  >
                    Start Similar Project <ArrowRight className='h-4 w-4' />
                  </a>
                  <button
                    type='button'
                    onClick={() => setActiveProject(null)}
                    className='cta-ghost inline-flex items-center rounded-full px-5 py-2.5'
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className='section-footer px-6 pb-8 pt-10 lg:px-10'>
          <div className='footer-line' />
          <div className='mx-auto grid max-w-7xl gap-10 md:grid-cols-5'>
            <div className='md:col-span-2'>
              <img src='/branding/sovertick-logo.svg' alt='Sovertick' className='brand-logo-footer' />
              <p className='mt-3 max-w-xs text-[#6E7191]'>
                Engineering tomorrow. Delivering today.
              </p>
            </div>
            <div>
              <p className='footer-head'>Company</p>
              <a className='footer-link' href='#about' data-cursor-hover='true'>
                About
              </a>
              <a className='footer-link' href='#careers' data-cursor-hover='true'>
                Careers
              </a>
              <a className='footer-link' href='#contact' data-cursor-hover='true'>
                Contact
              </a>
            </div>
            <div>
              <p className='footer-head'>Services</p>
              <p className='footer-link'>Web Development</p>
              <p className='footer-link'>AI Solutions</p>
              <p className='footer-link'>Cloud & DevOps</p>
            </div>
            <div>
              <p className='footer-head'>Connect</p>
              <div className='mt-3 flex gap-2'>
                {[Linkedin, Github, Twitter, Instagram, Globe, Figma, Cloud].map((Icon, i) => (
                  <a key={i} href='#' className='social-icon' data-cursor-hover='true'>
                    <Icon className='h-4 w-4' />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <p className='mx-auto mt-10 max-w-7xl border-t border-[#ffffff12] pt-6 text-sm text-[#6E7191]'>
            © 2026 Sovertick Technologies. All Rights Reserved. | Privacy | Terms
          </p>
        </footer>
      </motion.div>
    </div>
  )
}

export default Index
