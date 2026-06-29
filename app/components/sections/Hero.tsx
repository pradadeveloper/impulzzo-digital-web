"use client";
import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  "🌐 Desarrollo de Páginas Web",
  "🛍️ Tiendas en Shopify",
  "🤖 Agentes con Inteligencia Artificial",
  "📈 Optimización de Ventas Online",
  "⚡ Automatización de Procesos",
  "💬 Chatbots con WhatsApp IA",
  "🎯 Marketing Digital",
  "📊 Analítica y CRM Inteligente",
  "🔧 Integraciones y APIs",
  "🚀 Consultoría de Transformación Digital",
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Floating particles component (client-only randomization to avoid SSR hydration mismatches)
const FloatingParticles = () => {
  const [particles, setParticles] = useState<
    { left: number; top: number; dx: number; dy: number; duration: number; delay: number; size: number; isWhite: boolean }[]
  >([]);

  useEffect(() => {
    const p = Array.from({ length: 120 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      dx: Math.random() * 120 - 60,
      dy: Math.random() * 120 - 60,
      duration: 12 + Math.random() * 12,
      delay: Math.random() * 4,
      size: 2 + Math.random() * 2,
      isWhite: Math.random() < 0.25,
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
            backgroundColor: p.isWhite ? '#FFFFFF' : (Math.random() < 0.5 ? '#2563EB' : '#3B82F6'),
            filter: `blur(${p.size > 3 ? 0.5 : 0}px) drop-shadow(0 0 ${p.size * 2}px ${p.isWhite ? 'rgba(255,255,255,0.6)' : 'rgba(59,130,246,0.8)'})`,
          }}
          animate={{
            x: [0, p.dx, 0],
            y: [0, p.dy, 0],
            opacity: p.isWhite ? [0.2, 0.4, 0.2] : [0.4, 0.7, 0.4],
          }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}
    </div>
  );
};

// Word reveal component
const RevealWords = ({ text, className }: { text: string; className: string }) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className={word.startsWith("la") || word === "era" ? "text-blue" : ""}
        >
          {word}{" "}
        </motion.span>
      ))}
    </>
  );
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark pt-20 pb-16 w-full"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue/[0.06] blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-blue/[0.04] blur-[100px]" />
        <div className="absolute top-1/4 right-0 w-[200px] h-[400px] rounded-full bg-blue/[0.03] blur-[100px]" />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Badge with enhanced pulse */}
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue/30 bg-blue/10 text-blue text-xs sm:text-sm font-medium mb-8">
            <motion.span 
              className="w-1.5 h-1.5 rounded-full bg-blue flex-shrink-0"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            Agencia Digital Premium · Colombia
          </motion.div>

          {/* Headline with reveal animation */}
          <motion.h1
            variants={item}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <RevealWords text="Construimos empresas" className="" />
              <br />
              <RevealWords text="preparadas para la era" className="" />
              <br />
              <RevealWords text="de la Inteligencia Artificial" className="" />
            </motion.div>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-muted text-base sm:text-lg md:text-xl max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Creamos sitios web, tiendas Shopify, automatizaciones, chatbots con IA y estrategias de marketing que generan ventas reales.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 w-full sm:w-auto"
          >
            <motion.a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-blue hover:bg-blue-light text-dark font-semibold rounded-full transition-all duration-200 text-sm sm:text-base cursor-pointer shadow-lg shadow-blue/20"
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Agenda una consultoría
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="#casos"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-blue/50 hover:text-blue text-white font-medium rounded-full transition-all duration-200 text-sm sm:text-base cursor-pointer"
              whileHover={{ scale: 1.02, borderColor: "rgba(37, 99, 235, 0.8)" }}
              whileTap={{ scale: 0.98 }}
            >
              Ver casos de éxito
            </motion.a>
          </motion.div>

          {/* Services marquee */}
          <motion.div variants={item}>
            <p className="text-muted/60 text-xs uppercase tracking-[0.2em] mb-4">
              Servicios destacados
            </p>
            <div className="relative overflow-hidden rounded-full border-t border-b border-white/10 bg-black/10 backdrop-blur-sm group">
              <div className="marquee">
                <div className="marquee__track">
                  {services.map((service, index) => (
                    <span key={`${service}-${index}`} className="marquee__item">
                      {service}
                    </span>
                  ))}
                </div>
                <div className="marquee__track" aria-hidden="true">
                  {services.map((service, index) => (
                    <span key={`${service}-dup-${index}`} className="marquee__item">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted/40"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

