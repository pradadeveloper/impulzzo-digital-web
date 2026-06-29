"use client";
import { motion } from "framer-motion";

const cases = [
  {
    company: "Ferragro",
    category: "E-commerce Industrial",
    title: "E-commerce completo B2B para distribuidor industrial",
    metrics: [
      { label: "+220%", desc: "en ventas online" },
      { label: "+70%", desc: "eficiencia operativa" },
    ],
    description:
      "Desarrollamos plataforma Shopify B2B con catálogo de +3.000 productos, integración ERP y flujos automatizados de pedidos.",
    tags: ["Shopify B2B", "Automatización", "ERP"],
  },
  {
    company: "Marca de Moda",
    category: "Fashion E-commerce",
    title: "Optimización de tienda online de moda femenina",
    metrics: [
      { label: "+150%", desc: "en ventas" },
      { label: "-35%", desc: "costo adquisición" },
    ],
    description:
      "Rediseño completo, optimización de conversión y estrategia de Meta Ads que triplicó el ROAS en 90 días.",
    tags: ["Shopify", "Meta Ads", "CRO"],
  },
  {
    company: "Empresa Solar",
    category: "Energía Renovable",
    title: "Calculadora IA para cotización de paneles solares",
    metrics: [
      { label: "+300%", desc: "en leads" },
      { label: "+40%", desc: "tasa de conversión" },
    ],
    description:
      "Herramienta de IA que calcula en tiempo real el ahorro energético y genera cotizaciones personalizadas automáticamente.",
    tags: ["IA", "Lead Gen", "Next.js"],
  },
  {
    company: "Empresa Industrial",
    category: "Manufactura",
    title: "Automatización de procesos con Power Automate",
    metrics: [
      { label: "-80%", desc: "tareas manuales" },
      { label: "+90%", desc: "productividad" },
    ],
    description:
      "Flujos automatizados para gestión de inventario, pedidos y reportería que eliminaron 40 horas semanales de trabajo manual.",
    tags: ["Power Automate", "n8n", "APIs"],
  },
];

export default function Cases() {
  return (
    <section id="casos" className="py-24 bg-dark">
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
            Casos de éxito
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Historias reales.{" "}
            <span className="text-blue">Resultados reales.</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-lg mx-auto">
            Proyectos que transformaron negocios colombianos con tecnología e IA.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cases.map((c, i) => (
            <motion.div
              key={c.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)",
                borderColor: "rgba(37, 99, 235, 0.6)"
              }}
              className="group p-6 bg-surface rounded-2xl border border-white/5 transition-all duration-300 cursor-default"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="text-xs text-blue/70 uppercase tracking-widest">{c.category}</span>
                  <h3 className="text-white font-bold text-base sm:text-lg mt-1 leading-tight">{c.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center flex-shrink-0 ml-3 group-hover:bg-blue/20 transition-colors duration-300">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex gap-4 mb-4">
                {c.metrics.map((m) => (
                  <div key={m.label} className="bg-surface-2 rounded-xl px-4 py-3 flex-1 text-center">
                    <p className="text-blue font-bold text-xl sm:text-2xl font-heading">{m.label}</p>
                    <p className="text-muted text-xs mt-0.5">{m.desc}</p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-4">{c.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-surface-2 border border-white/10 rounded-full text-xs text-muted/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="#contacto"
            className="inline-flex items-center gap-2 text-blue hover:text-blue-light font-medium transition-colors duration-200 cursor-pointer text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver todos los casos
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

