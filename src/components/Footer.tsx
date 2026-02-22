import { useMemo } from 'react'
import { ArrowRight, Cloud, Figma, Github, Globe, Instagram, Linkedin, Twitter } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { serviceCards } from '@/data/home'

type LocalizedService = {
  title: string
}

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  const whatsappLink = 'https://wa.me/447510078740'

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

  return (
    <footer className='section-footer px-6 pb-8 pt-10 lg:px-10'>
      <div className='footer-line' />
      <div className='footer-shell mx-auto max-w-7xl'>
        <div className='footer-top'>
          <div>
            <img src='/branding/sovertick-logo.svg' alt='Sovertick' className='brand-logo-footer' />
            <p className='mt-3 max-w-md text-[#6E7191]'>{t('footer.tagline')}</p>
          </div>
          <a href='#contact' className='footer-cta' data-cursor-hover='true'>
            Start a Project <ArrowRight className='h-4 w-4' />
          </a>
        </div>

        <div className='footer-grid'>
          <div className='footer-panel'>
            <p className='footer-head'>{t('footer.company')}</p>
            {companyLinks.map(link => (
              <a key={link.id} className='footer-link' href={`#${link.id}`} data-cursor-hover='true'>
                {link.label}
              </a>
            ))}
          </div>

          <div className='footer-panel'>
            <p className='footer-head'>{t('footer.services')}</p>
            {(localizedServices.length ? localizedServices : serviceCards).slice(0, 4).map(item => (
              <p key={item.title} className='footer-link'>
                {item.title}
              </p>
            ))}
          </div>

          <div className='footer-panel'>
            <p className='footer-head'>Contact</p>
            <a className='footer-link' href='mailto:hello@sovertick.com' data-cursor-hover='true'>
              hello@sovertick.com
            </a>
            <a
              className='footer-link'
              href={whatsappLink}
              target='_blank'
              rel='noopener noreferrer'
              data-cursor-hover='true'
            >
              WhatsApp Support
            </a>
            <p className='footer-link'>Remote-first global delivery</p>
          </div>

          <div className='footer-panel'>
            <p className='footer-head'>{t('footer.connect')}</p>
            <div className='mt-3 flex flex-wrap gap-2'>
              {[Linkedin, Github, Twitter, Instagram, Globe, Figma, Cloud].map((Icon, i) => (
                <a key={i} href='#' className='social-icon' data-cursor-hover='true'>
                  <Icon className='h-4 w-4' />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <p>{`© ${currentYear} Sovertick. All rights reserved.`}</p>
          <p>Privacy | Terms</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
