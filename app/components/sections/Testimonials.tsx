"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Director de E-commerce",
    company: "Ferragro",
    initials: "CR",
    quote:
      "Impulzzo Digital transformó completamente nuestra presencia digital. En 6 meses pasamos de vender solo de forma presencial a tener una tienda online que genera el 40% de nuestros ingresos totales. La automatización que implementaron nos ahorró semanas de trabajo mensual.",
    rating: 5,
  },
  {
    name: "Andrea Morales",
    role: "Gerente General",
    company: "Marca de Moda",
    initials: "AM",
    quote:
      "Juan Felipe y su equipo entendieron nuestro negocio desde el primer día. El rediseño de Shopify y la estrategia de Meta Ads triplicaron nuestras ventas online. Lo más valioso fue la transparencia y los resultados medibles desde la primera semana.",
    rating: 5,
  },
  {
    name: "Sebastián Vargas",
    role: "CEO",
    company: "SolarTech Colombia",
    initials: "SV",
    quote:
      "La calculadora de IA que desarrollaron para nosotros fue un game changer. Antes tardábamos 2 días en hacer una cotización, ahora tarda 2 minutos. Los leads aumentaron 300% y la tasa de cierre mejoró enormemente porque los clientes llegan mejor informados.",
    rating: 5,
  },
  {
    name: "Patricia Gómez",
    role: "Gerente de Operaciones",
    company: "Empresa Industrial",
    initials: "PG",
    quote:
      "Teníamos miedo de automatizar procesos que funcionaban, pero Impulzzo nos guió perfectamente. Hoy nuestro equipo hace en 1 hora lo que antes hacía en un día. La integración con nuestro ERP fue impecable y el soporte post-implementación es excelente.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue text-sm uppercase tracking-[0.2em] font-medium mb-4">
            Testimonios
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Lo que dicen nuestros <span className="text-blue">clientes</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 sm:p-12 bg-surface-2 rounded-2xl border border-white/5"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, j) => (
                    <svg key={j} viewBox="0 0 24 24" className="w-5 h-5 text-blue" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue font-bold text-sm">{testimonials[current].initials}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonials[current].name}</p>
                    <p className="text-muted text-sm">{testimonials[current].role} · {testimonials[current].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => goToSlide(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-blue w-3 h-3"
                    : "bg-white/20 hover:bg-white/40 w-2 h-2"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-blue/10 hover:bg-blue/20 flex items-center justify-center text-blue transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-blue/10 hover:bg-blue/20 flex items-center justify-center text-blue transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

