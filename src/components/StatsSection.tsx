import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useInView, ScrambleCounter } from '@/lib/animation-helpers'

const StatsSection = () => {
  const { t } = useTranslation()
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.35 })

  const stats = [
    { n: 50, label: t('stats.projects', 'Projects') },
    { n: 30, label: t('stats.clients', 'Clients') },
    { n: 15, label: t('stats.experts', 'Experts') },
    { n: 98, label: t('stats.retention', 'Retention'), suffix: '%' },
  ]

  return (
    <section
      ref={statsRef as React.Ref<HTMLElement>}
      className='section-stats px-4 py-10 sm:px-6 lg:px-10'
    >
      <div className='mx-auto grid max-w-7xl gap-6 md:grid-cols-4'>
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.12 }}
            className='stat-tile'
          >
            <p className='stat-number'>
              <ScrambleCounter
                value={item.n}
                start={statsInView}
                suffix={item.suffix ?? '+'}
              />
            </p>
            <p className='mt-1 text-[#6E7191]'>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default StatsSection
