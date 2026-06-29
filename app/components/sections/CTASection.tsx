"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const contactOptions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    sublabel: "Respuesta inmediata",
    href: "https://wa.me/573043838770",
    color: "hover:border-green-500/50 hover:bg-green-500/5",
    iconColor: "text-green-400",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
    label: "Calendly",
    sublabel: "Agenda una llamada",
    href: "https://calendly.com/juanfelipepradaing/30min",
    color: "hover:border-blue-500/50 hover:bg-blue-500/5",
    iconColor: "text-blue-400",
  },
];

const SERVICIOS = [
  "Desarrollo web",
  "Automatización con IA",
  "Estrategia digital",
  "E-commerce",
  "Otro",
];

export default function CTASection() {
  const [form, setForm] = useState({ nombre: "", email: "", empresa: "", mensaje: "", servicio: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setSubmitted(true);
    } catch {
      setError("No pudimos enviar tu mensaje. Intenta por WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="relative py-24 bg-surface overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue/[0.05] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-blue text-sm uppercase tracking-[0.2em] font-medium mb-4">Contacto</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Hablemos de <span className="text-blue">tu proyecto</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-lg mx-auto">
            Cuéntanos sobre tu negocio y encontraremos la solución perfecta para llevar tu empresa al siguiente nivel.
          </p>
        </motion.div>

        {/* Quick contact options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {contactOptions.map((opt) => (
            <a
              key={opt.label}
              href={opt.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 px-6 py-4 bg-surface-2 border border-white/10 rounded-2xl transition-all duration-300 cursor-pointer ${opt.color}`}
            >
              <div className={`${opt.iconColor} flex-shrink-0`}>{opt.icon}</div>
              <div>
                <p className="text-white font-semibold text-sm">{opt.label}</p>
                <p className="text-muted text-xs">{opt.sublabel}</p>
              </div>
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-muted ml-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-muted text-sm">o escríbenos directamente</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="bg-surface-2 rounded-2xl border border-white/10 p-6 sm:p-8"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-blue/20 flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">¡Mensaje recibido!</h3>
              <p className="text-muted text-sm">Te contactaremos en las próximas 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nombre" className="block text-sm text-muted mb-1.5">Nombre *</label>
                <input
                  id="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white placeholder-muted/40 text-sm focus:outline-none focus:border-blue/50 transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted mb-1.5">Email *</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="tu@empresa.com"
                  className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white placeholder-muted/40 text-sm focus:outline-none focus:border-blue/50 transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="empresa" className="block text-sm text-muted mb-1.5">Empresa</label>
                <input
                  id="empresa"
                  type="text"
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  placeholder="Nombre de tu empresa"
                  className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white placeholder-muted/40 text-sm focus:outline-none focus:border-blue/50 transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="servicio" className="block text-sm text-muted mb-1.5">Servicio de interés</label>
                <select
                  id="servicio"
                  value={form.servicio}
                  onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                  className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue/50 transition-colors duration-200 appearance-none"
                >
                  <option value="" style={{ background: "#0f0f11" }}>Selecciona un servicio</option>
                  {SERVICIOS.map((s) => (
                    <option key={s} value={s} style={{ background: "#0f0f11" }}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="mensaje" className="block text-sm text-muted mb-1.5">Mensaje *</label>
                <textarea
                  id="mensaje"
                  required
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  placeholder="Cuéntanos sobre tu proyecto, qué necesitas y cuál es tu objetivo principal..."
                  className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white placeholder-muted/40 text-sm focus:outline-none focus:border-blue/50 transition-colors duration-200 resize-none"
                />
              </div>
              {error && (
                <div className="sm:col-span-2">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue hover:bg-blue-light text-dark font-semibold rounded-full transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando..." : "Enviar mensaje"}
                  {!loading && (
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

