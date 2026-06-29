"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const steps = [
  {
    number: 1,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "Descubrimos tu negocio",
    desc: "Analizamos tu empresa, competencia, procesos y objetivos para entender qué necesitas realmente.",
  },
  {
    number: 2,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Diseñamos la estrategia",
    desc: "Creamos un roadmap tecnológico personalizado con las herramientas exactas que maximizarán tu ROI.",
  },
  {
    number: 3,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Desarrollamos y construimos",
    desc: "Nuestro equipo construye tu solución con las mejores tecnologías del mercado, con entregas continuas.",
  },
  {
    number: 4,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Implementamos IA y automatización",
    desc: "Integramos inteligencia artificial y flujos automáticos que trabajan por ti las 24 horas del día.",
  },
  {
    number: 5,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Escalamos y optimizamos",
    desc: "Medimos resultados, optimizamos continuamente y escalamos lo que funciona para maximizar el crecimiento.",
  },
];

// Counter component
const Counter = ({ number, isInView }: { number: number; isInView: boolean }) => {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const timer = setInterval(() => {
      setDisplayNumber((prev) => (prev < number ? prev + 1 : number));
    }, 50);
    return () => clearInterval(timer);
  }, [number, isInView]);

  return <span>{String(displayNumber).padStart(2, "0")}</span>;
};

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue text-sm uppercase tracking-[0.2em] font-medium mb-4">Metodología</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Así trabajamos <span className="text-blue">juntos</span>
          </h2>
        </motion.div>

        {/* Desktop: horizontal steps */}
        <div className="hidden lg:block relative mb-12">
          {/* Connecting line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-px bg-white/10" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
            className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-blue/0 via-blue/50 to-blue/0"
          />

          <div className="flex justify-between px-[5%]">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center w-[18%]"
              >
                {/* Circle */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 10px 30px rgba(37, 99, 235, 0.2)",
                    borderColor: "rgba(37, 99, 235, 0.6)",
                  }}
                  className="w-20 h-20 rounded-full bg-surface border border-white/10 flex flex-col items-center justify-center mb-6 z-10 transition-all duration-300 cursor-default relative"
                >
                  <span className="text-blue/50 text-xs font-bold absolute top-2">
                    {isInView ? <Counter number={step.number} isInView={isInView} /> : `0${step.number}`}
                  </span>
                  <div className="text-blue mt-2">{step.icon}</div>
                </motion.div>
                <h3 className="text-white font-semibold text-sm mb-2 leading-tight">{step.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical steps */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex gap-5"
            >
              {/* Left: number + line */}
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center flex-shrink-0 text-blue cursor-default"
                >
                  {step.icon}
                </motion.div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-blue/50 to-white/10 mt-3 min-h-[32px]" />
                )}
              </div>
              {/* Right: content */}
              <div className="pb-6">
                <span className="text-blue/50 text-xs font-bold">
                  {isInView ? <Counter number={step.number} isInView={isInView} /> : `0${step.number}`}
                </span>
                <h3 className="text-white font-semibold text-base mt-0.5 mb-1">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue hover:bg-blue-light text-dark font-semibold rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-blue/20"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            Empezar mi proyecto
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

