import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { IconType } from 'react-icons'
import { FaAws } from 'react-icons/fa'
import { SiDocker, SiFigma, SiFlutter, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTypescript } from 'react-icons/si'
import { Section, SectionHeader } from '@/lib/animation-helpers'

type TechItem = { name: string; icon: IconType }

const TechStackSection = () => {
  const { t } = useTranslation()

  const techStack = useMemo(
    (): TechItem[] => [
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Python', icon: SiPython },
      { name: 'Flutter', icon: SiFlutter },
      { name: 'AWS', icon: FaAws },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Docker', icon: SiDocker },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Figma', icon: SiFigma },
    ],
    [],
  )

  return (
    <Section className='section-tech px-6 py-14 lg:px-10'>
      <div className='mx-auto max-w-7xl'>
        <SectionHeader
          lead={t('tech.lead')}
          accent={t('tech.accent')}
          poetic={t('tech.poetic')}
        />
        <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className='tech-pill'
              style={{ animationDelay: `${index * 0.12}s` }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <tech.icon className='tech-pill-icon' aria-hidden='true' />
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default TechStackSection
