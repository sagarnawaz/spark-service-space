import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section, SectionHeader } from '@/lib/animation-helpers'
import { serviceCards } from '@/data/home'

type LocalizedService = {
  title: string
  poetic: string
  description: string
  tag: string
}

const ServicesSection = () => {
  const { t } = useTranslation()

  const localizedServices = useMemo(() => {
    const value = t('services.items', { returnObjects: true })
    return Array.isArray(value) ? (value as LocalizedService[]) : []
  }, [t])

  return (
    <Section id='services' className='section-services px-4 py-14 sm:px-6 lg:px-10'>
      <div className='mx-auto max-w-7xl'>
        <SectionHeader
          lead={t('services.lead')}
          accent={t('services.accent')}
          poetic={t('services.poetic')}
        />
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
              <h2 className='mt-5 text-xl font-semibold text-[#F5F5F7]'>
                {localizedServices[index]?.title ?? card.title}
              </h2>
              <p className='mt-1 italic text-[#6E7191]'>
                {localizedServices[index]?.poetic ?? card.poetic}
              </p>
              <p className='mt-4 text-[#6E7191]'>
                {localizedServices[index]?.description ?? card.description}
              </p>
              <span className='mt-5 inline-flex rounded-full border border-[#B06EFF33] px-3 py-1 text-xs text-[#B06EFF]'>
                {localizedServices[index]?.tag ?? card.tag}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ServicesSection
