"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingParticles = () => {
  const [particles, setParticles] = useState<
    { left: number; top: number; dx: number; dy: number; duration: number; delay: number; size: number }[]
  >([]);

  useEffect(() => {
    const p = Array.from({ length: 40 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      dx: Math.random() * 80 - 40,
      dy: Math.random() * 80 - 40,
      duration: 12 + Math.random() * 10,
      delay: Math.random() * 4,
      size: 1.5 + Math.random() * 2,
    }));
    setParticles(p);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: i % 4 === 0 ? '#ffffff' : '#3B82F6',
            filter: `drop-shadow(0 0 ${p.size * 2}px rgba(59,130,246,0.7))`,
          }}
          animate={{ x: [0, p.dx, 0], y: [0, p.dy, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}
    </div>
  );
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden px-4">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <FloatingParticles />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-16"
        >
          <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center text-white font-bold text-sm">✦</div>
          <span className="text-white font-bold tracking-widest text-sm uppercase">
            IMPULZZO <span className="text-[#2563EB]">DIGITAL</span>
          </span>
        </motion.div>

        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-6"
        >
          <span
            className="text-[10rem] sm:text-[14rem] font-black leading-none select-none"
            style={{
              color: '#2563EB',
              textShadow: '0 0 40px rgba(37,99,235,0.6), 0 0 80px rgba(37,99,235,0.3)',
            }}
          >
            404
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white font-bold text-2xl sm:text-3xl mb-4"
        >
          Página no encontrada
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-400 text-base sm:text-lg mb-10 max-w-md"
        >
          La página que buscas no existe o fue movida.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
        >
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2563EB] hover:bg-blue-500 text-white font-semibold rounded-full transition-all duration-200 text-sm shadow-lg shadow-blue-600/30 w-full sm:w-auto"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </a>
          <a
            href="/#contacto"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-[#2563EB]/60 hover:text-[#2563EB] text-white font-medium rounded-full transition-all duration-200 text-sm w-full sm:w-auto"
          >
            Contactar soporte
          </a>
        </motion.div>
      </div>
    </div>
  );
}
