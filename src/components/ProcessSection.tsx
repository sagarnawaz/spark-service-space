import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section, SectionHeader } from '@/lib/animation-helpers'
import { processSteps } from '@/data/home'

type LocalizedProcess = { title: string; text: string }

const ProcessSection = () => {
  const { t } = useTranslation()
  const safeT = (key: string, fallback: string) => {
    const value = t(key)
    return value === key ? fallback : value
  }

  const localizedProcess = useMemo(() => {
    const value = t('process.items', { returnObjects: true })
    return Array.isArray(value) ? (value as LocalizedProcess[]) : []
  }, [t])

  return (
    <Section className='section-process px-4 py-14 sm:px-6 lg:px-10'>
      <div className='mx-auto max-w-7xl'>
        <SectionHeader
          lead={safeT('process.lead', 'Our')}
          accent={safeT('process.accent', 'Process')}
          poetic={safeT('process.poetic', 'A clear path from idea to impact.')}
        />
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
              <h3 className='mt-4 text-lg font-semibold text-[#F5F5F7]'>
                {localizedProcess[index]?.title ?? step.title}
              </h3>
              <p className='mt-2 text-sm text-[#6E7191]'>
                {localizedProcess[index]?.text ?? step.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ProcessSection
