import { Code2, Cpu, Layers3, Lock, MonitorSmartphone, Server } from 'lucide-react'

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const serviceCards = [
  {
    title: 'Web Development',
    poetic: 'Where Logic Meets Beauty',
    description: 'Scalable web systems built with performance-first architecture.',
    tag: 'Frontend + Backend',
    icon: Code2,
    className: '',
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
    className: '',
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

export const portfolio = [
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

export const processSteps = [
  { step: '01', title: 'Discover', text: 'Research, interviews, and strategic framing.' },
  { step: '02', title: 'Design', text: 'Narrative UX, systems thinking, and prototyping.' },
  { step: '03', title: 'Develop', text: 'Reliable engineering with measurable velocity.' },
  { step: '04', title: 'Deploy', text: 'Secure release, observability, and ongoing scale.' },
]

export const features = [
  'Pixel-Perfect Execution',
  'Agile & Fully Transparent',
  'Global Quality Standards',
  'On-Time, Every Single Time',
  '24/7 Dedicated Partnership',
  'Innovation-First Mindset',
]

export const testimonials = [
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

export const visionCards = [
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
    text: "Adaptive defense architecture built for tomorrow's threat surfaces.",
  },
]
