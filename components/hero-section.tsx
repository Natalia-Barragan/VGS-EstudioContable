"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-10 lg:px-32 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-taupe rounded-full animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Estudio Contable
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-navy leading-[1.1] tracking-tight text-balance"
            >
              Asesoramiento Contable,{" "}
              <span className="text-taupe">Gestion Integral</span> Y Eficiente.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Asesoramiento integral para empresas y profesionales.
              Transformamos la complejidad fiscal en oportunidades de crecimiento.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-taupe hover:bg-taupe-dark text-navy font-medium rounded-full px-8 py-6 text-base transition-all duration-200 shadow-lg shadow-taupe/20"
              >
                <a href="#contacto">
                  Agendar Reunión
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-navy/20 text-navy hover:bg-navy hover:text-white rounded-full px-8 py-6 text-base transition-all duration-200 bg-transparent"
              >
                <a href="#servicios">Ver Servicios</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Brand Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-taupe/30 rounded-full" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-navy/10 rounded-full" />

              {/* Main image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] bg-gradient-to-br from-secondary to-muted rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl shadow-navy/10">
                <div className="text-center p-8">
                  <div className="flex justify-center">
                    <img
                      src="/chart-icon-definitive.jpg"
                      alt="Growth Chart"
                      className="w-55 h-55 object-contain mix-blend-multiply"
                    />
                  </div>
                  <div className="font-serif text-6xl lg:text-8xl font-bold text-navy/10 mb-4 -mt-10">
                    VGS
                  </div>
                  <div className="text-sm text-muted-foreground font-medium tracking-widest uppercase">
                    Estudio Contable
                  </div>
                  <div className="mt-6 w-16 h-[2px] bg-taupe mx-auto" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-taupe animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
