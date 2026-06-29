"use client";
import { motion } from "framer-motion";

const resources = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    badge: "Gratis",
    badgeColor: "bg-green-500/20 text-green-400",
    title: "Recursos Gratuitos",
    desc: "Plantillas, guías y herramientas para potenciar tu negocio digital sin costo.",
    cta: "Descargar recursos →",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
    badge: "Nuevo",
    badgeColor: "bg-blue-500/20 text-blue-400",
    title: "Blog & Artículos",
    desc: "Contenido de valor sobre IA, e-commerce, automatización y marketing digital.",
    cta: "Leer artículos →",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.616 4.5 4.714v9.571c0 1.099.807 2.015 1.907 2.143C7.692 16.5 9.84 16.75 12 16.75s4.308-.25 5.593-.322c1.1-.128 1.907-1.044 1.907-2.143V4.714c0-1.098-.807-2.014-1.907-2.142A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
    badge: "IA",
    badgeColor: "bg-blue/20 text-blue",
    title: "Calculadora de IA",
    desc: "Descubre cuánto puede ahorrarte la IA en tu empresa con nuestra calculadora interactiva.",
    cta: "Calcular ahorro →",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    badge: "Gratis",
    badgeColor: "bg-green-500/20 text-green-400",
    title: "Auditoría Gratuita",
    desc: "Analizamos tu presencia digital actual y te entregamos un informe con oportunidades de mejora.",
    cta: "Solicitar auditoría →",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
      </svg>
    ),
    badge: "E-commerce",
    badgeColor: "bg-purple-500/20 text-purple-400",
    title: "Diagnóstico E-commerce",
    desc: "Evaluamos tu tienda online e identificamos los puntos exactos donde estás perdiendo ventas.",
    cta: "Diagnosticar tienda →",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 6.75c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v13.5c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V6.75zm6-6c0-.621.504-1.125 1.125-1.125h2.25C20.496 0 21 .504 21 1.125v19.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V.75z" />
      </svg>
    ),
    badge: "Nuevo",
    badgeColor: "bg-blue-500/20 text-blue-400",
    title: "Análisis Financiero Digital",
    desc: "Evalúa la rentabilidad de tu negocio digital. ROI por canal, proyecciones de crecimiento y oportunidades de optimización financiera.",
    cta: "Iniciar análisis →",
  },
];

export default function Resources() {
  return (
    <section id="recursos" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue text-sm uppercase tracking-[0.2em] font-medium mb-4">Recursos</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Herramientas para{" "}
            <span className="text-blue">potenciar tu negocio</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-lg mx-auto">
            Contenido y herramientas gratuitas que puedes usar hoy mismo para mejorar tu empresa.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((res, i) => (
            <motion.div
              key={res.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.6)"
              }}
              className="group p-6 bg-surface rounded-2xl border border-white/5 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center text-blue group-hover:bg-blue/20 transition-colors duration-300">
                  {res.icon}
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${res.badgeColor}`}>
                  {res.badge}
                </span>
              </div>
              <h3 className="text-white font-bold text-base mb-2">{res.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">{res.desc}</p>
              <span className="text-blue text-sm font-medium group-hover:text-blue-light transition-colors duration-200">
                {res.cta}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

