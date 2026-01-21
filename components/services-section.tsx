"use client"

import { motion } from "framer-motion"
import {
  Calculator,
  Users,
  MessageSquare,
  FileCheck,
  Search,
  ClipboardList
} from "lucide-react"

const services = [
  {
    icon: Calculator,
    title: "Impuestos",
    description: "Liquidación y planificación tributaria para optimizar su carga fiscal de manera legal y eficiente.",
  },
  {
    icon: Users,
    title: "Sueldos",
    description: "Gestión integral de nóminas, cargas sociales y cumplimiento de obligaciones laborales.",
  },
  {
    icon: MessageSquare,
    title: "Asesorías",
    description: "Consultoría estratégica en materia contable, financiera y de negocios personalizada.",
  },
  {
    icon: FileCheck,
    title: "Certificaciones",
    description: "Emisión de certificaciones contables y estados financieros con validez profesional.",
  },
  {
    icon: Search,
    title: "Auditorías",
    description: "Auditoría de estados contables y revisión de procesos internos para mayor transparencia.",
  },
  {
    icon: ClipboardList,
    title: "Inscripciones",
    description: "Tramitación de altas, bajas y modificaciones ante organismos fiscales y previsionales.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white text-balance uppercase tracking-widest">
            Nuestros Servicios
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed">
            Ofrecemos un abanico completo de servicios contables y de asesoría,
            diseñados para impulsar el éxito de su empresa.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-taupe/20 flex items-center justify-center mb-5 group-hover:bg-taupe/30 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-taupe" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-taupe/10 rotate-45 group-hover:bg-taupe/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
