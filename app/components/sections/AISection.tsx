"use client";
import { motion } from "framer-motion";

const aiTools = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Chatbot WhatsApp",
    desc: "Atiende clientes 24/7 en WhatsApp con IA que entiende y resuelve consultas automáticamente.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Asesor Comercial IA",
    desc: "Agente inteligente que guía a tus prospectos en el proceso de compra y cierra ventas automáticamente.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.616 4.5 4.714v9.571c0 1.099.807 2.015 1.907 2.143C7.692 16.5 9.84 16.75 12 16.75s4.308-.25 5.593-.322c1.1-.128 1.907-1.044 1.907-2.143V4.714c0-1.098-.807-2.014-1.907-2.142A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
    title: "Cotizador Inteligente",
    desc: "Genera cotizaciones personalizadas en segundos analizando las necesidades del cliente con IA.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Agente IA Autónomo",
    desc: "Agente que ejecuta tareas complejas de forma autónoma: investigación, análisis y toma de decisiones.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "Call Center IA",
    desc: "Sistema de llamadas automatizadas con voz IA que califica leads y agenda citas sin intervención humana.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    title: "Automatización ERP",
    desc: "Conecta tu ERP con IA para automatizar inventario, pedidos, facturación y reportería en tiempo real.",
  },
];

const comparison = [
  { aspect: "Atención al cliente", traditional: "Horario de oficina", digital: "24/7 con IA" },
  { aspect: "Cotizaciones", traditional: "1–3 días hábiles", digital: "Instantáneo" },
  { aspect: "Seguimiento de leads", traditional: "Manual y olvidable", digital: "Automatizado 100%" },
  { aspect: "Reportes", traditional: "Semanales / manuales", digital: "Tiempo real" },
  { aspect: "Costos operativos", traditional: "Crecen con el equipo", digital: "Escalan sin costo" },
];

export default function AISection() {
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
            Inteligencia Artificial
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            La IA ya está transformando{" "}
            <span className="text-blue">las empresas.</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-xl mx-auto">
            ¿Tu competencia ya la usa? Implementamos IA práctica que genera resultados medibles desde el primer mes.
          </p>
        </motion.div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {aiTools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true, margin: "-40px" }}
              className="group p-6 bg-surface-2 rounded-2xl border border-white/5 hover:border-blue/30 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mb-4 text-blue group-hover:bg-blue/20 transition-colors duration-300">
                {tool.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{tool.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{tool.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-bold text-xl sm:text-2xl font-heading text-center mb-8">
            Empresa <span className="text-muted">Tradicional</span> vs Empresa{" "}
            <span className="text-blue">Digital</span>
          </h3>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-surface-2 border-b border-white/10">
              <div className="px-5 py-4 text-muted text-sm font-medium">Aspecto</div>
              <div className="px-5 py-4 text-muted text-sm font-medium text-center border-l border-white/10">
                Empresa Tradicional
              </div>
              <div className="px-5 py-4 text-blue text-sm font-semibold text-center border-l border-white/10">
                Empresa Digital + IA
              </div>
            </div>
            {/* Rows */}
            {comparison.map((row, i) => (
              <motion.div
                key={row.aspect}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className={`grid grid-cols-3 border-b border-white/5 last:border-0 ${
                  i % 2 === 0 ? "bg-surface" : "bg-surface/50"
                }`}
              >
                <div className="px-5 py-3.5 text-white text-sm font-medium">{row.aspect}</div>
                <div className="px-5 py-3.5 text-muted text-sm text-center border-l border-white/5">
                  {row.traditional}
                </div>
                <div className="px-5 py-3.5 text-blue text-sm font-medium text-center border-l border-white/5">
                  {row.digital}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

