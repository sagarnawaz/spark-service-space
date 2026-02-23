import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section, SectionHeader } from '@/lib/animation-helpers'
import { faqItems } from '@/data/home'

const FaqSection = () => {
  const { t } = useTranslation()
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0)

  return (
    <Section id='faq' className='section-contact px-4 py-10 sm:px-6 lg:px-10'>
      <div className='mx-auto max-w-5xl'>
        <SectionHeader
          lead={t('faq.lead')}
          accent={t('faq.accent')}
          poetic={t('faq.poetic')}
        />
        <div className='mt-6 grid gap-3'>
          {faqItems.map((faq, index) => (
            <motion.article
              key={faq.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className='vision-card p-0'
            >
              <button
                type='button'
                onClick={() =>
                  setActiveFaqIndex(prev => (prev === index ? null : index))
                }
                className='flex w-full items-center justify-between gap-4 px-5 py-4 text-left'
              >
                <h3 className='text-base font-semibold text-[#F5F5F7]'>{faq.question}</h3>
                <ChevronDown
                  className={`h-4 w-4 text-[#B06EFF] transition-transform ${
                    activeFaqIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {activeFaqIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className='overflow-hidden px-5 pb-4 text-sm text-[#6E7191]'
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default FaqSection
