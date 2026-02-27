import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section, SectionHeader } from '@/lib/animation-helpers'
import { portfolio } from '@/data/home'

const categoryColors: Record<string, string> = {
  Web: 'from-blue-500/80 to-purple-500/80',
  App: 'from-purple-500/80 to-pink-500/80',
  'AI SaaS': 'from-cyan-400/80 to-blue-500/80',
}

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
      <Section id='work' className='section-portfolio px-4 py-20 sm:px-6 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <SectionHeader
            lead={t('work.lead')}
            accent={t('work.accent')}
            poetic={t('work.poetic')}
          />

          <div
            ref={portfolioRef}
            onScroll={onPortfolioScroll}
            className='portfolio-scroll mt-12'
          >
            {portfolio.map((item, i) => (
              <motion.article
                key={item.name}
                className='portfolio-card group relative cursor-pointer'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveProject(item)}
              >
                {/* Mockup Image */}
                <figure className='portfolio-shot'>
                  <img
                    src={item.image}
                    alt={`${item.name} project preview`}
                    className='portfolio-shot-image'
                    loading='lazy'
                    decoding='async'
                  />
                </figure>

                {/* Category Badge */}
                {'category' in item && (
                  <div className='absolute left-4 top-4 z-10'>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${categoryColors[item.category] || 'from-purple-500/80 to-pink-500/80'} px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white shadow-lg backdrop-blur-md`}
                    >
                      {item.category}
                    </span>
                  </div>
                )}

                {/* Glow effect on hover */}
                <div className='pointer-events-none absolute inset-0 rounded-[1.2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                  style={{
                    boxShadow: 'inset 0 0 60px rgba(176, 110, 255, 0.15), 0 0 40px rgba(176, 110, 255, 0.1)',
                  }}
                />

                {/* Overlay */}
                <div className='portfolio-overlay'>
                  <h3 className='text-2xl font-bold text-foreground'>{item.name}</h3>
                  <p className='mt-2 text-sm text-muted-foreground'>{item.text}</p>
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type='button'
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveProject(item)
                    }}
                    className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-all hover:gap-3'
                    data-cursor-hover='true'
                  >
                    {t('work.viewProject')} <ArrowRight className='h-4 w-4' />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className='mt-6 flex justify-center gap-2'>
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className='fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-sm sm:items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className='max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-primary/30 bg-card/95 shadow-[0_20px_80px_rgba(176,110,255,0.2)] backdrop-blur-xl'
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={event => event.stopPropagation()}
            >
              {/* Modal Image */}
              <div className='relative h-56 overflow-hidden sm:h-72'>
                <img
                  src={activeProject.image}
                  alt={`${activeProject.name} detailed preview`}
                  className='h-full w-full object-cover'
                  loading='lazy'
                  decoding='async'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent' />
                {'category' in activeProject && (
                  <div className='absolute left-5 top-5'>
                    <span
                      className={`inline-flex items-center rounded-full bg-gradient-to-r ${categoryColors[activeProject.category] || ''} px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg`}
                    >
                      {activeProject.category}
                    </span>
                  </div>
                )}
              </div>

              <div className='p-6'>
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <p className='text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground'>
                      {t('modal.overview')}
                    </p>
                    <h3 className='mt-2 text-2xl font-bold text-foreground'>
                      {activeProject.name}
                    </h3>
                  </div>
                  <button
                    type='button'
                    onClick={() => setActiveProject(null)}
                    className='rounded-full border border-white/10 bg-white/5 p-2 text-foreground transition-colors hover:bg-white/10'
                    aria-label='Close project modal'
                  >
                    <X className='h-4 w-4' />
                  </button>
                </div>
                <p className='mt-4 leading-relaxed text-muted-foreground'>{activeProject.text}</p>
                <div className='mt-5 flex flex-wrap gap-2'>
                  {activeProject.tags.map(tag => (
                    <span
                      key={tag}
                      className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-foreground'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='mt-6 flex flex-wrap gap-3'>
                  <a
                    href='#contact'
                    onClick={() => setActiveProject(null)}
                    className='cta-main inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold'
                  >
                    {t('modal.start')} <ArrowRight className='h-4 w-4' />
                  </a>
                  <button
                    type='button'
                    onClick={() => setActiveProject(null)}
                    className='cta-ghost inline-flex items-center rounded-full px-5 py-2.5 font-medium'
                  >
                    {t('modal.close')}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PortfolioSection
