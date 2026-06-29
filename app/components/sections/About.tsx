"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2019",
    company: "Universal / Landers y CIA S.A.S",
    role: "Analista E-Commerce",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    year: "2020-2025",
    company: "Pilatos Marketplace / Estudio de Moda S.A.S",
    role: "Jefe de Proyectos Digitales / Vtex",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 2l1 4h10l1-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 6h14v14H5z" />
      </svg>
    ),
  },
  {
    year: "2020-2025",
    company: "Superdry / Estudio de Moda S.A.S",
    role: "Jefe de Proyectos Digitales / Vtex",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 2l1 4h10l1-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 6h14v14H5z" />
      </svg>
    ),
  },
  {
    year: "2020-2025",
    company: "Diesel Colombia / Estudio de Moda S.A.S",
    role: "Jefe de Proyectos Digitales / Vtex",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 2l1 4h10l1-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 6h14v14H5z" />
      </svg>
    ),
  },
  {
    year: "2025",
    company: "Ferragro B2C / B2B Shopify",
    role: "Director Canales Digitales / Shopify",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 14l3-4 4 6 3-8" />
      </svg>
    ),
  },
  {
    year: "2025",
    company: "Quest - QST Colombia y México / NCS Brands S.A.S",
    role: "Director Canales Digitales / Shopify",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20" />
      </svg>
    ),
  },
  { year: "2026", company: "Impulzzo Digital", role: "Fundador & CEO", highlight: true, icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91l-5-3.64 5.91-.99L12 2z" />
      </svg>
    ) },
];

const skills = [
  "Ingeniería Industrial",
  "Full Stack Development",
  "Shopify Expert",
  "E-commerce Strategy",
  "IA Aplicada a Negocios",
  "Automatización",
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue text-sm uppercase tracking-[0.2em] font-medium mb-4">Sobre mí</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Hola, soy <span className="text-blue">Juan Felipe Prada.</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
              Ingeniero Industrial apasionado por la tecnología. Durante los últimos años he liderado proyectos digitales para empresas nacionales e internacionales desarrollando e-commerce, estrategias digitales, automatización e inteligencia artificial aplicada a negocios.
            </p>
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-8">
              Fundé Impulzzo Digital con la misión de democratizar el acceso a tecnología de punta para empresas colombianas, ayudándolas a competir en la economía digital global.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-surface-2 border border-white/10 rounded-full text-xs text-muted/80 hover:border-blue/40 hover:text-blue transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-96">
                <div className="absolute inset-0 rounded-2xl bg-blue/10 blur-3xl scale-110" />
                <div className="relative w-full h-full rounded-2xl bg-surface-2 border border-white/10 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/juan-felipe.jpg"
                    alt="Juan Felipe Prada"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue/40 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue/40 rounded-bl-2xl" />
                </div>
              </div>
          </motion.div>
        </div>

        {/* Timeline — oculto temporalmente
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-semibold text-lg mb-8 text-center">Trayectoria profesional</h3>

          {/* Desktop timeline *\/}
          <div className="hidden md:block relative">
            <div className="absolute top-5 left-0 right-0 h-px bg-white/10" />
            <div className="flex justify-between relative">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center max-w-[100px]"
                >
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-3 z-10 transition-colors duration-300 ${
                      item.highlight
                        ? "bg-blue border-blue"
                        : "bg-surface-2 border-white/20 hover:border-blue/50"
                    }`}
                  >
                    <span className={`text-[10px] font-bold ${item.highlight ? "text-dark" : "text-muted"}`}>
                      {item.year.slice(-2)}
                    </span>
                  </div>
                  <div className="mb-2">{item.icon}</div>
                  <p className={`text-xs font-bold mb-0.5 ${item.highlight ? "text-blue" : "text-white"}`}>
                    {item.company}
                  </p>
                  <p className="text-muted text-[10px] leading-tight">{item.role}</p>
                  <p className="text-muted/50 text-[10px]">{item.year}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile timeline *\/}
          <div className="md:hidden space-y-4">
            {timeline.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div
                  className={`mt-0.5 w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    item.highlight ? "bg-blue border-blue" : "bg-surface-2 border-white/20"
                  }`}
                >
                  <span className={`text-[9px] font-bold ${item.highlight ? "text-dark" : "text-muted"}`}>
                    {item.year.slice(-2)}
                  </span>
                </div>
                <div>
                  <div className="mb-1">{item.icon}</div>
                  <p className={`font-semibold text-sm ${item.highlight ? "text-blue" : "text-white"}`}>
                    {item.company}
                  </p>
                  <p className="text-muted text-xs">{item.role} · {item.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
}

