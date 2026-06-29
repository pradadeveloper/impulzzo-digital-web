"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Casos de éxito", href: "#casos" },
  { label: "Recursos", href: "#recursos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Blog", href: "#blog" },
];

const AnimatedLink = ({ label, href }: { label: string; href: string }) => (
  <motion.a
    href={href}
    className="text-sm text-muted hover:text-white transition-colors duration-200 cursor-pointer relative group"
  >
    {label}
    <motion.span
      className="absolute bottom-0 left-1/2 h-0.5 bg-blue"
      initial={{ width: 0, x: "-50%" }}
      whileHover={{ width: "100%", x: "-50%" }}
      transition={{ duration: 0.3 }}
    />
  </motion.a>
);

const ShimmerButton = () => {
  const [shimmer, setShimmer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShimmer((prev) => (prev + 3) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.a
      href="#contacto"
      className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-blue hover:bg-blue-light text-dark text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{
          left: ["0%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
        style={{ width: "20%" }}
      />
      <span className="relative z-10">Agenda una consultoría</span>
    </motion.a>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 text-blue flex-shrink-0">
            <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
              <path d="M16 2l2.472 8.528H27.6l-7.272 5.28 2.776 8.528L16 19.056 8.896 24.336l2.776-8.528L4.4 10.528h9.128L16 2z" />
            </svg>
          </div>
          <span className="font-heading font-bold text-[15px] text-white tracking-widest uppercase">
            IMPULZZO <span className="text-blue">DIGITAL</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <AnimatedLink key={link.href} {...link} />
          ))}
        </div>

        {/* Desktop CTA */}
        <ShimmerButton />

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-muted hover:text-white cursor-pointer transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-surface border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-5">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-muted hover:text-white transition-colors cursor-pointer text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                className="mt-2 px-5 py-3 bg-blue hover:bg-blue-light text-dark text-sm font-semibold rounded-full text-center cursor-pointer transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
              >
                Agenda una consultoría
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

