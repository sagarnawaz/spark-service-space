import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Globe, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { serviceCards } from '@/data/home'

type LocalizedService = { title: string }

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const localizedServices = useMemo(() => {
    const value = t('services.items', { returnObjects: true })
    return Array.isArray(value) ? (value as LocalizedService[]) : []
  }, [t])

  const companyLinks = [
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'work', label: t('nav.work') },
    { id: 'faq', label: t('nav.faq') },
    { id: 'contact', label: t('nav.contact') },
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className='relative overflow-hidden bg-[#030305] px-4 pb-8 pt-20 sm:px-6 lg:px-10'>
      <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent' />

      <div className='pointer-events-none absolute left-1/2 top-0 -translate-x-1/2'>
        <div className='h-[400px] w-[600px] rounded-full bg-primary/5 blur-[120px]' />
      </div>

      <div className='relative mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-16 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 backdrop-blur-xl sm:p-12'
        >
          <div className='flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center'>
            <div>
              <h3 className='text-2xl font-bold text-foreground sm:text-3xl'>
                Ready to build{' '}
                <span className='gradient-title'>something great?</span>
              </h3>
              <p className='mt-2 max-w-md text-muted-foreground'>
                Let's turn your vision into a digital product that users love.
              </p>
            </div>
            <a
              href='#contact'
              className='cta-main inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold sm:whitespace-nowrap'
              data-cursor-hover='true'
            >
              Start a Project <ArrowRight className='h-4 w-4' />
            </a>
          </div>
        </motion.div>

        <div className='grid gap-12 border-b border-white/[0.06] pb-12 sm:grid-cols-2 lg:grid-cols-12'>
          <div className='lg:col-span-4'>
            <img
              src='/branding/sovertick-logo.svg'
              alt='Sovertick'
              className='brand-logo-footer'
            />
            <p className='mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground'>
              {t('footer.tagline')}
            </p>
            <div className='mt-6 flex gap-2.5'>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-cursor-hover='true'
                  className='group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground hover:shadow-[0_0_20px_rgba(176,110,255,0.2)]'
                >
                  <Icon className='h-4 w-4' />
                </a>
              ))}
            </div>
          </div>

          <div className='lg:col-span-2'>
            <h4 className='mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-foreground'>
              {t('footer.company')}
            </h4>
            <ul className='space-y-3'>
              {companyLinks.map(link => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className='text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground'
                    data-cursor-hover='true'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='lg:col-span-3'>
            <h4 className='mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-foreground'>
              {t('footer.services')}
            </h4>
            <ul className='space-y-3'>
              {(localizedServices.length ? localizedServices : serviceCards)
                .slice(0, 5)
                .map(item => (
                  <li key={item.title}>
                    <span className='text-sm text-muted-foreground'>{item.title}</span>
                  </li>
                ))}
            </ul>
          </div>

          <div className='lg:col-span-3'>
            <h4 className='mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-foreground'>
              Get in Touch
            </h4>
            <ul className='space-y-4'>
              <li>
                <a
                  href='mailto:info@sovertick.com'
                  className='flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground'
                  data-cursor-hover='true'
                >
                  <Mail className='h-4 w-4 flex-shrink-0 text-primary' />
                  info@sovertick.com
                </a>
              </li>
              <li>
                <a
                  href='https://wa.me/923180272619'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground'
                  data-cursor-hover='true'
                >
                  <Phone className='h-4 w-4 flex-shrink-0 text-primary' />
                  +92 318 027 2619
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row'>
          <p className='text-xs text-muted-foreground'>(c) {currentYear} Sovertick. All rights reserved.</p>
          <div className='flex flex-wrap items-center justify-center gap-4 sm:justify-end sm:gap-6'>
            <a href='#' className='text-xs text-muted-foreground transition-colors hover:text-foreground' data-cursor-hover='true'>
              Privacy Policy
            </a>
            <a href='#' className='text-xs text-muted-foreground transition-colors hover:text-foreground' data-cursor-hover='true'>
              Terms of Service
            </a>
            <a href='#' className='text-xs text-muted-foreground transition-colors hover:text-foreground' data-cursor-hover='true'>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
