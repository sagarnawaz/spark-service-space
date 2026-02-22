import { motion } from 'framer-motion'

const IntroLoader = () => {
  return (
    <motion.div
      className='intro-screen'
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -24, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className='intro-line'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <div className='mt-12 flex flex-col items-center'>
        <div className='flex overflow-hidden text-[42px] font-bold leading-none md:text-[52px]'>
          {'SOVERTICK'.split('').map((letter, index) => (
            <motion.span
              key={letter + index}
              className='brand-loader'
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.8 + index * 0.07, duration: 0.32 }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <motion.p
          className='mt-4 text-sm tracking-[0.25em] text-[#6E7191]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.3 }}
        >
          ENGINEERING TOMORROW
        </motion.p>
        <motion.div
          className='intro-progress mt-6'
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 0.7, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

export default IntroLoader
