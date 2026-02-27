import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section, MagneticButton } from '@/lib/animation-helpers'

const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <Section id='home' className='section-hero px-4 pb-12 pt-14 sm:px-6 lg:px-10 lg:pt-16'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid items-center gap-10 lg:gap-16'>
          <div>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className='hero-badge'
            >
              <Globe className='h-3.5 w-3.5' /> {t('hero.badge')}
            </motion.p>
            <div className='mt-7 space-y-2'>
              <motion.h1
                className='hero-title'
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
              >
                {t('hero.title1')}
              </motion.h1>
              <motion.h1
                className='hero-title gradient-title shimmer-text'
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t('hero.title2')}
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className='mt-6 max-w-xl text-lg italic text-[#6E7191]'
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8 }}
              className='mt-8 flex flex-col gap-3 sm:flex-row sm:items-center'
            >
              <MagneticButton
                href='#work'
                className='cta-main pulse-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 sm:whitespace-nowrap'
              >
                {t('hero.ctaWork')} <ArrowRight className='h-4 w-4' />
              </MagneticButton>
              <MagneticButton
                href='#about'
                className='cta-ghost inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 sm:whitespace-nowrap'
              >
                {t('hero.ctaStory')}
              </MagneticButton>
            </motion.div>
          </div>
        </div>
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
  )
}

export default HeroSection
