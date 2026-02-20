import { ArrowRight, Check, ChevronDown, Cloud, Code2, Cpu, Figma, Github, Globe, Instagram, Layers3, Linkedin, Lock, Menu, MonitorSmartphone, Rocket, Server, Sparkles, Star, Twitter, X,} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react'

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

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'careers', label: 'Careers' },
  { id: 'contact', label: 'Contact' },
]

const serviceCards = [
  {
    title: 'Web Development',
    poetic: 'Where Logic Meets Beauty',
    description: 'Scalable web systems built with performance-first architecture.',
    tag: 'Frontend + Backend',
    icon: Code2,
    className: 'md:col-span-2',
  },
  {
    title: 'Mobile Applications',
    poetic: 'Your Vision, In Every Pocket',
    description: 'Fluid mobile experiences engineered for daily retention.',
    tag: 'iOS + Android',
    icon: MonitorSmartphone,
    className: '',
  },
  {
    title: 'AI & Machine Learning',
    poetic: 'Intelligence, Engineered for Impact',
    description: 'Production-grade AI pipelines that move decisions faster.',
    tag: 'Applied AI',
    icon: Cpu,
    className: '',
  },
  {
    title: 'UI/UX Design',
    poetic: 'Interfaces That Feel Like Home',
    description: 'Editorial design systems with deep interaction polish.',
    tag: 'Design Systems',
    icon: Layers3,
    className: 'md:col-span-2',
  },
  {
    title: 'Cloud & DevOps',
    poetic: 'Infrastructure That Breathes',
    description: 'Elastic cloud foundations with airtight delivery pipelines.',
    tag: 'Cloud Native',
    icon: Server,
    className: '',
  },
  {
    title: 'Cybersecurity',
    poetic: 'Fortress-Grade. Human-Friendly.',
    description: 'Zero-trust security posture designed for global operations.',
    tag: 'Security',
    icon: Lock,
    className: '',
  },
]

const portfolio = [
  {
    name: 'PulseGrid Platform',
    tags: ['SaaS', 'Analytics', 'AI'],
    text: 'A real-time operations intelligence suite for enterprise teams.',
  },
  {
    name: 'Motive Commerce',
    tags: ['Ecommerce', 'Cloud', 'Automation'],
    text: 'A composable commerce stack handling global scale and personalization.',
  },
  {
    name: 'ArcHealth Mobile',
    tags: ['HealthTech', 'Security', 'Mobile'],
    text: 'A secure patient experience app with telehealth and smart routing.',
  },
]

const processSteps = [
  { step: '01', title: 'Discover', text: 'Research, interviews, and strategic framing.' },
  { step: '02', title: 'Design', text: 'Narrative UX, systems thinking, and prototyping.' },
  { step: '03', title: 'Develop', text: 'Reliable engineering with measurable velocity.' },
  { step: '04', title: 'Deploy', text: 'Secure release, observability, and ongoing scale.' },
]

const features = [
  'Pixel-Perfect Execution',
  'Agile & Fully Transparent',
  'Global Quality Standards',
  'On-Time, Every Single Time',
  '24/7 Dedicated Partnership',
  'Innovation-First Mindset',
]

const testimonials = [
  {
    quote: 'Sovertick brought executive-level clarity and world-class execution in one team.',
    name: 'Amelia Hart',
    role: 'VP Product',
    company: 'Nexa Global',
  },
  {
    quote:
      'The polish, speed, and architecture quality are unlike any software partner we used before.',
    name: 'Daniel Kim',
    role: 'CTO',
    company: 'StrataOne',
  },
  {
    quote: 'They translated our vision into a product people instantly trust and love to use.',
    name: 'Sara Mendez',
    role: 'Founder',
    company: 'Helio Health',
  },
]

const visionCards = [
  {
    title: 'AI-Powered Enterprise Platform',
    text: 'Decision engines that combine automation, context, and precision at scale.',
  },
  {
    title: 'Unified Developer Ecosystem',
    text: 'A connected system where delivery, observability, and collaboration align.',
  },
  {
    title: 'Intelligent Security Framework',
    text: 'Adaptive defense architecture built for tomorrow’s threat surfaces.',
  },
]

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
  return (
    <svg viewBox='0 0 540 420' className='hero-network' aria-hidden='true'>
      <defs>
        <linearGradient id='sovertickGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#B06EFF' />
          <stop offset='100%' stopColor='#FF6B6B' />
        </linearGradient>
      </defs>
      <path
        d='M90 80 L220 120 L330 65 L470 110'
        stroke='url(#sovertickGradient)'
        strokeWidth='2'
        fill='none'
        className='network-line'
      />
      <path
        d='M90 210 L220 120 L280 240 L410 260'
        stroke='url(#sovertickGradient)'
        strokeWidth='2'
        fill='none'
        className='network-line delay'
      />
      <path
        d='M120 320 L280 240 L360 340 L470 290'
        stroke='url(#sovertickGradient)'
        strokeWidth='2'
        fill='none'
        className='network-line'
      />
      {[
        { x: 90, y: 80 },
        { x: 220, y: 120 },
        { x: 330, y: 65 },
        { x: 470, y: 110 },
        { x: 280, y: 240 },
        { x: 120, y: 320 },
        { x: 470, y: 290 },
      ].map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r='6'
          fill='url(#sovertickGradient)'
          className='network-node'
        />
      ))}
      <rect
        x='185'
        y='148'
        width='180'
        height='110'
        rx='16'
        fill='rgba(255,255,255,0.05)'
        stroke='rgba(176,110,255,0.35)'
      />
      <rect x='205' y='175' width='140' height='7' rx='3.5' fill='rgba(176,110,255,0.7)' />
      <rect x='205' y='191' width='120' height='7' rx='3.5' fill='rgba(255,107,107,0.7)' />
      <rect x='205' y='207' width='98' height='7' rx='3.5' fill='rgba(255,217,61,0.7)' />
    </svg>
  )
}
const Index = () => {
  const [showLoader, setShowLoader] = useState(true)
  const [navbarSolid, setNavbarSolid] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [heroCursor, setHeroCursor] = useState('')
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [cursorHover, setCursorHover] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [portfolioDot, setPortfolioDot] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const portfolioRef = useRef<HTMLDivElement | null>(null)
  const [processVisible, setProcessVisible] = useState(false)
  const processRef = useRef<HTMLElement | null>(null)
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.35 })

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLoader(false), 3000)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const words = ["We Don't Build Software.", "We Build What's Next."]
    const full = words.join('\n')
    const chars = full.split('')
    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setHeroCursor(chars.slice(0, index).join(''))
      if (index >= chars.length) window.clearInterval(timer)
    }, 36)
    return () => window.clearInterval(timer)
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
    const section = processRef.current
    if (!section) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setProcessVisible(true)
    })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

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
    () => [
      'React',
      'Node.js',
      'Python',
      'Flutter',
      'AWS',
      'MongoDB',
      'TypeScript',
      'Docker',
      'Next.js',
      'Figma',
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
              <span className='logo-shape' />
              <span className='brand-text'>SOVERTICK</span>
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
          <Section id='home' className='section-hero px-6 pb-20 pt-28 lg:px-10 lg:pt-32'>
            <div className='mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2'>
              <div>
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className='hero-badge'
                >
                  ✦ Global Software Excellence
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
                  Sovertick engineers digital products that define industries, not follow them.
                </motion.p>
                <motion.p className='mt-3 text-[#6E7191]'>
                  <span className='type-line'>{heroCursor}</span>
                  <span className='blink-caret' />
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 16, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className='mt-8 flex flex-wrap gap-4'
                >
                  <MagneticButton
                    href='#work'
                    className='cta-main pulse-ring inline-flex items-center gap-2 rounded-full px-6 py-3'
                  >
                    See Our Work <ArrowRight className='h-4 w-4' />
                  </MagneticButton>
                  <MagneticButton
                    href='#about'
                    className='cta-ghost inline-flex items-center gap-2 rounded-full px-6 py-3'
                  >
                    Our Story
                  </MagneticButton>
                </motion.div>
              </div>

              <motion.div
                className='hero-visual-wrap'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className='hero-orb-left' />
                <HeroNetwork />
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

          <section className='section-marquee py-4'>
            <div className='marquee-edge'>
              <div className='marquee-track'>
                <span>
                  Web Development ✦ Mobile Apps ✦ AI Solutions ✦ Cloud Architecture ✦ UI/UX Design ✦
                  Cybersecurity ✦ Data Engineering ✦
                </span>
                <span>
                  Web Development ✦ Mobile Apps ✦ AI Solutions ✦ Cloud Architecture ✦ UI/UX Design ✦
                  Cybersecurity ✦ Data Engineering ✦
                </span>
              </div>
            </div>
          </section>

          <Section id='services' className='section-services px-6 py-20 lg:px-10'>
            <div className='mx-auto max-w-7xl'>
              <h2 className='section-title'>
                <HeadingReveal text='What We' /> <span className='gradient-title'>Create</span>
              </h2>
              <p className='section-poetic'>Every solution, a new standard.</p>
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
                    <a
                      href='#contact'
                      className='mt-5 inline-flex items-center gap-1 text-sm text-[#F5F5F7]'
                      data-cursor-hover='true'
                    >
                      Explore <ArrowRight className='h-3.5 w-3.5' />
                    </a>
                  </motion.article>
                ))}
              </div>
            </div>
          </Section>

          <section className='section-marquee py-4'>
            <div className='marquee-edge'>
              <div className='marquee-track reverse'>
                <span>
                  React ✦ Node.js ✦ Python ✦ Flutter ✦ AWS ✦ TypeScript ✦ Docker ✦ MongoDB ✦ Next.js
                  ✦ Figma ✦
                </span>
                <span>
                  React ✦ Node.js ✦ Python ✦ Flutter ✦ AWS ✦ TypeScript ✦ Docker ✦ MongoDB ✦ Next.js
                  ✦ Figma ✦
                </span>
              </div>
            </div>
          </section>

          <section
            ref={statsRef as React.Ref<HTMLElement>}
            className='section-stats px-6 py-14 lg:px-10'
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

          <Section className='section-process px-6 py-20 lg:px-10'>
            <div className='mx-auto max-w-7xl' ref={processRef as React.Ref<HTMLDivElement>}>
              <h2 className='section-title'>
                <HeadingReveal text='How We' /> <span className='gradient-title'>Work</span>
              </h2>
              <p className='section-poetic'>Structured. Human. Relentless.</p>
              <div className='relative mt-12 grid gap-6 md:grid-cols-4'>
                <motion.div
                  className='process-line'
                  initial={{ scaleX: 0 }}
                  animate={processVisible ? { scaleX: 1 } : {}}
                  transition={{ duration: 1.1 }}
                />
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

          <Section id='work' className='section-portfolio px-6 py-20 lg:px-10'>
            <div className='mx-auto max-w-7xl'>
              <h2 className='section-title'>
                <HeadingReveal text='Our' /> <span className='gradient-title'>Work</span>
              </h2>
              <p className='section-poetic'>Built to outlast trends.</p>

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
                      <a
                        href='#contact'
                        className='mt-5 inline-flex items-center gap-2 text-[#F5F5F7]'
                        data-cursor-hover='true'
                      >
                        View Project <ArrowRight className='h-4 w-4' />
                      </a>
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

          <Section className='section-tech px-6 py-20 lg:px-10'>
            <div className='mx-auto max-w-7xl'>
              <h2 className='section-title'>
                <HeadingReveal text='Technologies We' />{' '}
                <span className='gradient-title'>Master</span>
              </h2>
              <p className='section-poetic'>The tools that power our craft.</p>
              <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    className='tech-pill'
                    style={{ animationDelay: `${index * 0.12}s` }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          <Section id='about' className='section-why px-6 py-20 lg:px-10'>
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

          <Section className='section-testimonials px-6 py-20 lg:px-10'>
            <div className='mx-auto max-w-7xl'>
              <h2 className='section-title'>
                <HeadingReveal text='Client' /> <span className='gradient-title'>Stories</span>
              </h2>
              <p className='section-poetic'>The best proof is the people we've worked with.</p>
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

          <Section className='section-vision px-6 py-20 lg:px-10'>
            <div className='mx-auto max-w-7xl'>
              <h2 className='section-title'>
                <HeadingReveal text='Tomorrow,' /> <span className='gradient-title'>Today.</span>
              </h2>
              <p className='section-poetic'>Futures we're already engineering.</p>
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

          <Section id='careers' className='section-cta px-6 py-20 lg:px-10'>
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
          </Section>

          <Section id='contact' className='section-contact px-6 py-20 lg:px-10'>
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

        <footer className='section-footer px-6 pb-10 pt-14 lg:px-10'>
          <div className='footer-line' />
          <div className='mx-auto grid max-w-7xl gap-10 md:grid-cols-5'>
            <div className='md:col-span-2'>
              <p className='brand-text text-lg'>SOVERTICK</p>
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
            © 2025 Sovertick Technologies. All Rights Reserved. | Privacy | Terms
          </p>
        </footer>
      </motion.div>
    </div>
  )
}

export default Index
