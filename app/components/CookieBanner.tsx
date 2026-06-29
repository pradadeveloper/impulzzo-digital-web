'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookies-accepted')
    if (!accepted) setVisible(true)
  }, [])

  const accept = (type: 'all' | 'essential') => {
    localStorage.setItem('cookies-accepted', type)
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-4 sm:pb-6"
        >
          <div
            className="w-full max-w-4xl rounded-2xl px-5 py-4 sm:px-8 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{
              background: '#111111',
              borderTop: '2px solid #2563EB',
              boxShadow: '0 -4px 40px rgba(37,99,235,0.12), 0 8px 40px rgba(0,0,0,0.5)',
            }}
          >
            {/* Text */}
            <p className="text-gray-400 text-sm leading-relaxed flex-1">
              Usamos cookies para mejorar tu experiencia y analizar el tráfico del sitio. Al continuar navegando aceptas nuestra{' '}
              <a href="#" className="text-[#2563EB] hover:underline underline-offset-2 transition-colors">
                política de cookies
              </a>
              .
            </p>

            {/* Actions */}
            <div className="flex flex-row gap-2 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={() => accept('essential')}
                className="flex-1 sm:flex-none px-4 py-2.5 border border-white/15 hover:border-[#2563EB]/50 text-gray-400 hover:text-white text-xs font-medium rounded-full transition-all duration-200 cursor-pointer"
              >
                Solo esenciales
              </button>
              <button
                onClick={() => accept('all')}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-[#2563EB] hover:bg-blue-500 text-white text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-blue-600/20"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
