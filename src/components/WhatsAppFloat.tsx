import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '923180272619'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

const WhatsAppFloat = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_URL}
          target='_blank'
          rel='noopener noreferrer'
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.08, y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className='fixed bottom-6 right-6 z-[95] flex items-center gap-2.5 rounded-full px-5 py-3 font-semibold text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)]'
          style={{
            background: 'linear-gradient(135deg, #25d366, #128c44)',
          }}
          aria-label='Chat on WhatsApp'
        >
          <FaWhatsapp className='h-5 w-5' />
          <span className='hidden text-sm sm:inline'>WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export default WhatsAppFloat
