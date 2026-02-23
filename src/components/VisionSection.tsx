import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section, SectionHeader } from '@/lib/animation-helpers'
import { visionCards } from '@/data/home'

const VisionSection = () => {
  const { t } = useTranslation()

  return (
    <Section className='section-vision px-4 py-14 sm:px-6 lg:px-10'>
      <div className='mx-auto max-w-7xl'>
        <SectionHeader
          lead={t('future.lead')}
          accent={t('future.accent')}
          poetic={t('future.poetic')}
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
  )
}

export default VisionSection
