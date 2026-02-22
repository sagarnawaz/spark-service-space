import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'

type InViewOptions = {
  threshold?: number
  rootMargin?: string
}

export const useInView = ({ threshold = 0.18, rootMargin = '0px' }: InViewOptions = {}) => {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return { ref, inView }
}

export const Section = ({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: ReactNode
}) => {
  const { ref, inView } = useInView()
  return (
    <motion.section
      id={id}
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}

export const HeadingReveal = ({ text }: { text: string }) => {
  return (
    <span className='inline-flex flex-wrap'>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ clipPath: 'inset(100% 0 0 0)', y: 16 }}
          whileInView={{ clipPath: 'inset(0% 0 0 0)', y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.04, ease: [0.76, 0, 0.24, 1] }}
          className={char === ' ' ? 'mr-[0.3em]' : ''}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export const SectionHeader = ({
  lead,
  accent,
  poetic,
  centered = false,
}: {
  lead: string
  accent: string
  poetic: string
  centered?: boolean
}) => {
  const centerClass = centered ? ' text-center' : ''
  return (
    <>
      <h2 className={`section-title${centerClass}`}>
        <HeadingReveal text={lead} /> <span className='gradient-title'>{accent}</span>
      </h2>
      <p className={`section-poetic${centerClass}`}>{poetic}</p>
    </>
  )
}

export const MagneticButton = ({
  children,
  className,
  href = '#',
}: {
  children: ReactNode
  className?: string
  href?: string
}) => {
  const ref = useRef<HTMLAnchorElement | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 30
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 30
    setPos({ x, y })
  }

  const onLeave = () => setPos({ x: 0, y: 0 })

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 16 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor-hover='true'
    >
      {children}
    </motion.a>
  )
}

export const ScrambleCounter = ({
  value,
  suffix = '+',
  start,
}: {
  value: number
  suffix?: string
  start: boolean
}) => {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!start) return
    let frame = 0
    const duration = 1500
    const startTime = performance.now()

    const animate = (time: number) => {
      const elapsed = time - startTime
      const progress = Math.min(elapsed / duration, 1)
      if (progress < 0.72) {
        setDisplay(Math.floor(Math.random() * (value + 12)))
      } else {
        const lock = (progress - 0.72) / 0.28
        setDisplay(Math.floor(value * lock))
      }
      if (progress < 1) frame = requestAnimationFrame(animate)
      else setDisplay(value)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [start, value])

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}
