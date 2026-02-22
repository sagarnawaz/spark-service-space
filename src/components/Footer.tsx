import { Cloud, Figma, Github, Globe, Instagram, Linkedin, Twitter } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className='section-footer px-6 pb-8 pt-10 lg:px-10'>
      <div className='footer-line' />
      <div className='mx-auto grid max-w-7xl gap-10 md:grid-cols-5'>
        <div className='md:col-span-2'>
          <img src='/branding/sovertick-logo.svg' alt='Sovertick' className='brand-logo-footer' />
          <p className='mt-3 max-w-xs text-[#6E7191]'>{t('footer.tagline')}</p>
        </div>
        <div>
          <p className='footer-head'>{t('footer.company')}</p>
          <a className='footer-link' href='#about' data-cursor-hover='true'>{t('footer.about')}</a>
          <a className='footer-link' href='#careers' data-cursor-hover='true'>Careers</a>
          <a className='footer-link' href='#contact' data-cursor-hover='true'>{t('footer.contact')}</a>
        </div>
        <div>
          <p className='footer-head'>{t('footer.services')}</p>
          <p className='footer-link'>{t('footer.web')}</p>
          <p className='footer-link'>{t('footer.ai')}</p>
          <p className='footer-link'>{t('footer.cloud')}</p>
        </div>
        <div>
          <p className='footer-head'>{t('footer.connect')}</p>
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
        {t('footer.rights')}
      </p>
    </footer>
  )
}

export default Footer
