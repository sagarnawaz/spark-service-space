import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section, SectionHeader } from '@/lib/animation-helpers'
import { testimonials } from '@/data/home'

const TestimonialsSection = () => {
  const { t } = useTranslation()
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveTestimonial(prev => (prev + 1) % testimonials.length),
      4200,
    )
    return () => window.clearInterval(timer)
  }, [])

  return (
    <Section className='section-testimonials px-4 py-14 sm:px-6 lg:px-10'>
      <div className='mx-auto max-w-7xl'>
        <SectionHeader
          lead={t('testimonials.lead')}
          accent={t('testimonials.accent')}
          poetic={t('testimonials.poetic')}
        />
        <div className='testimonial-stack mt-12'>
          {testimonials.map((item, i) => {
            const distance =
              (i - activeTestimonial + testimonials.length) % testimonials.length
            const position = distance === 0 ? 0 : distance === 1 ? 1 : -1
            return (
              <motion.article
                key={item.name}
                className='testimonial-card'
                animate={{
                  x: position * 60,
                  scale: position === 0 ? 1 : 0.92,
                  opacity: position === 0 ? 1 : 0.5,
                  zIndex: position === 0 ? 3 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className='mb-3 flex gap-1 text-[#FF6B6B]'>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className='h-4 w-4 fill-current' />
                  ))}
                </div>
                <p className='italic text-[#F5F5F7]'>"{item.quote}"</p>
                <p className='mt-6 font-semibold text-[#F5F5F7]'>{item.name}</p>
                <p className='text-sm text-[#6E7191]'>
                  {item.role}, {item.company}
                </p>
              </motion.article>
            )
          })}
        </div>
        <div className='mt-6 flex justify-center gap-2'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`dot ${index === activeTestimonial ? 'dot-active' : ''}`}
              type='button'
              data-cursor-hover='true'
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default TestimonialsSection
