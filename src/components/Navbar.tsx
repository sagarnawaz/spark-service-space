import { useMemo, useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { MagneticButton } from '@/lib/animation-helpers'

const Navbar = ({
  solid,
  activeSection,
}: {
  solid: boolean
  activeSection: string
}) => {
  const { t } = useTranslation()
  const [mobileMenu, setMobileMenu] = useState(false)

  const localizedNav = useMemo(
    () => [
      { id: 'home', label: t('nav.home') },
      { id: 'services', label: t('nav.services') },
      { id: 'work', label: t('nav.work') },
      { id: 'about', label: t('nav.about') },
      { id: 'faq', label: t('nav.faq') },
      { id: 'contact', label: t('nav.contact') },
    ],
    [t],
  )

  return (
    <header className={`sovertick-nav ${solid ? 'nav-solid' : ''}`}>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10'>
        <a href='#home' className='brand-mark' data-cursor-hover='true'>
          <img
            src='/branding/sovertick-logo.svg'
            alt='Sovertick digital agency logo'
            className='brand-logo-full'
            loading='eager'
            decoding='async'
          />
        </a>
        <nav className='hidden items-center gap-8 lg:flex'>
          {localizedNav.map(link => (
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
          {t('hero.ctaBuild', "Let's Build")} <ArrowRight className='h-4 w-4' />
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
            {localizedNav.map((link, index) => (
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
  )
}

export default Navbar
