import { motion } from 'framer-motion'
import { Check, Rocket, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section, SectionHeader } from '@/lib/animation-helpers'
import { coreValues, beliefs } from '@/data/home'

const AboutSection = () => {
  const { t } = useTranslation()

  return (
    <Section id='about' className='section-why px-6 py-14 lg:px-10'>
      <div className='mx-auto max-w-7xl'>
        <SectionHeader
          lead={t('about.lead')}
          accent={t('about.accent')}
          poetic={t('about.poetic')}
        />
        <p className='mt-6 max-w-4xl text-[#6E7191]'>{t('about.intro')}</p>

        <div className='mt-10 grid gap-6 lg:grid-cols-2'>
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='vision-card'
          >
            <div className='vision-illustration'>
              <Rocket className='h-6 w-6 text-[#FFD93D]' />
            </div>
            <h3 className='mt-5 text-xl font-semibold text-[#F5F5F7]'>{t('about.visionTitle')}</h3>
            <p className='mt-3 text-[#6E7191]'>{t('about.visionText1')}</p>
            <p className='mt-3 text-[#6E7191]'>{t('about.visionText2')}</p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className='vision-card'
          >
            <div className='vision-illustration'>
              <Sparkles className='h-6 w-6 text-[#B06EFF]' />
            </div>
            <h3 className='mt-5 text-xl font-semibold text-[#F5F5F7]'>{t('about.missionTitle')}</h3>
            <p className='mt-3 text-[#6E7191]'>{t('about.missionText1')}</p>
            <p className='mt-3 text-[#6E7191]'>{t('about.missionText2')}</p>
            <p className='mt-3 font-semibold text-[#F5F5F7]'>{t('about.missionText3')}</p>
          </motion.article>
        </div>

        <div className='mt-8'>
          <h3 className='text-xl font-semibold text-[#F5F5F7]'>{t('about.coreValuesTitle')}</h3>
          <div className='mt-4 grid gap-4 md:grid-cols-3'>
            {coreValues.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className='feature-tile'
              >
                <Check className='h-4 w-4 text-[#FF6B6B]' />
                <div>
                  <p className='text-sm font-semibold text-[#F5F5F7]'>{item.title}</p>
                  <p className='mt-1 text-xs text-[#6E7191]'>{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className='mt-8'>
          <h3 className='text-xl font-semibold text-[#F5F5F7]'>{t('about.beliefsTitle')}</h3>
          <div className='mt-4 grid gap-3'>
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className='feature-tile'
              >
                <span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#B06EFF66] text-[11px] font-semibold text-[#B06EFF]'>
                  {index + 1}
                </span>
                <p className='text-sm text-[#F5F5F7]'>{belief}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutSection
