import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section, SectionHeader } from '@/lib/animation-helpers'
import { portfolio } from '@/data/home'

const PortfolioSection = () => {
  const { t } = useTranslation()
  const [portfolioDot, setPortfolioDot] = useState(0)
  const [activeProject, setActiveProject] = useState<(typeof portfolio)[number] | null>(null)
  const portfolioRef = useRef<HTMLDivElement | null>(null)

  const onPortfolioScroll = () => {
    const container = portfolioRef.current
    if (!container) return
    const itemWidth = container.scrollWidth / portfolio.length
    const index = Math.round(container.scrollLeft / itemWidth)
    setPortfolioDot(Math.max(0, Math.min(portfolio.length - 1, index)))
  }

  const jumpPortfolio = (index: number) => {
    const container = portfolioRef.current
    if (!container) return
    const itemWidth = container.scrollWidth / portfolio.length
    container.scrollTo({ left: index * itemWidth, behavior: 'smooth' })
  }

  return (
    <>
      <Section id='work' className='section-portfolio px-6 py-14 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <SectionHeader
            lead={t('work.lead')}
            accent={t('work.accent')}
            poetic={t('work.poetic')}
          />

          <div
            ref={portfolioRef}
            onScroll={onPortfolioScroll}
            className='portfolio-scroll mt-10'
          >
            {portfolio.map(item => (
              <article key={item.name} className='portfolio-card'>
                <div className='portfolio-art' />
                <div className='portfolio-overlay'>
                  <h3 className='text-2xl font-semibold text-[#F5F5F7]'>{item.name}</h3>
                  <p className='mt-2 text-[#6E7191]'>{item.text}</p>
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className='rounded-full border border-[#ffffff22] px-3 py-1 text-xs text-[#F5F5F7]'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type='button'
                    onClick={() => setActiveProject(item)}
                    className='mt-5 inline-flex items-center gap-2 text-[#F5F5F7]'
                    data-cursor-hover='true'
                  >
                    {t('work.viewProject')} <ArrowRight className='h-4 w-4' />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className='mt-5 flex justify-center gap-2'>
            {portfolio.map((_, i) => (
              <button
                key={i}
                type='button'
                className={`dot ${portfolioDot === i ? 'dot-active' : ''}`}
                onClick={() => jumpPortfolio(i)}
                data-cursor-hover='true'
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Section>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className='fixed inset-0 z-[120] flex items-center justify-center bg-[#05060Dcc] px-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className='w-full max-w-xl rounded-2xl border border-[#B06EFF55] bg-[#0E1220f2] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl'
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={event => event.stopPropagation()}
            >
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <p className='text-xs tracking-[0.18em] text-[#6E7191]'>{t('modal.overview')}</p>
                  <h3 className='mt-2 text-2xl font-semibold text-[#F5F5F7]'>
                    {activeProject.name}
                  </h3>
                </div>
                <button
                  type='button'
                  onClick={() => setActiveProject(null)}
                  className='rounded-full border border-[#ffffff22] p-2 text-[#F5F5F7]'
                  aria-label='Close project modal'
                >
                  <X className='h-4 w-4' />
                </button>
              </div>
              <p className='mt-4 text-[#6E7191]'>{activeProject.text}</p>
              <div className='mt-5 flex flex-wrap gap-2'>
                {activeProject.tags.map(tag => (
                  <span
                    key={tag}
                    className='rounded-full border border-[#ffffff22] px-3 py-1 text-xs text-[#F5F5F7]'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className='mt-6 flex flex-wrap gap-3'>
                <a
                  href='#contact'
                  onClick={() => setActiveProject(null)}
                  className='cta-main inline-flex items-center gap-2 rounded-full px-5 py-2.5'
                >
                  {t('modal.start')} <ArrowRight className='h-4 w-4' />
                </a>
                <button
                  type='button'
                  onClick={() => setActiveProject(null)}
                  className='cta-ghost inline-flex items-center rounded-full px-5 py-2.5'
                >
                  {t('modal.close')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PortfolioSection
