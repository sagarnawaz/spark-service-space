import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section, HeadingReveal } from '@/lib/animation-helpers'
import { serviceCards } from '@/data/home'

type LocalizedService = { title: string }

const ContactSection = () => {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const localizedServices = useMemo(() => {
    const value = t('services.items', { returnObjects: true })
    return Array.isArray(value) ? (value as LocalizedService[]) : []
  }, [t])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(false)
    setSending(true)
    window.setTimeout(() => {
      setSending(false)
      setSubmitted(true)
    }, 1300)
  }

  return (
    <Section id='contact' className='section-contact px-4 py-14 sm:px-6 lg:px-10'>
      <div className='mx-auto max-w-4xl rounded-3xl border border-[#B06EFF44] bg-[#ffffff06] p-5 backdrop-blur-xl sm:p-8'>
        <h2 className='section-title text-center'>
          <HeadingReveal text={t('contact.lead')} />
        </h2>
        <p className='section-poetic text-center'>{t('contact.poetic')}</p>
        <form className='mt-8 grid gap-4 md:grid-cols-2' onSubmit={onSubmit}>
          <input className='input-premium' placeholder={t('contact.name')} required />
          <input className='input-premium' type='email' placeholder={t('contact.email')} required />
          <select className='input-premium md:col-span-2' required defaultValue=''>
            <option value='' disabled>{t('contact.serviceNeeded')}</option>
            {(localizedServices.length ? localizedServices : serviceCards)
              .slice(0, 4)
              .map(item => (
                <option key={item.title}>{item.title}</option>
              ))}
          </select>
          <textarea
            className='input-premium min-h-32 md:col-span-2'
            placeholder={t('contact.message')}
            required
          />
          <button
            type='submit'
            className='cta-main md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full py-3'
            data-cursor-hover='true'
          >
            {sending ? t('contact.sending') : t('contact.submit')}
            <ArrowRight className='h-4 w-4' />
          </button>
          <AnimatePresence>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className='md:col-span-2 rounded-xl border border-[#FF6B6B55] bg-[#FF6B6B22] px-4 py-3 text-center text-sm text-[#F5F5F7]'
              >
                {t('contact.sent')}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>
    </Section>
  )
}

export default ContactSection
