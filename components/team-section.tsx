"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Victoria Galello",
    title: "Contadora Pública",
    bio: "Recibida en Facultad de Ciencias Económicas de la Universidad Nacional de La Plata. Matriculada en la Provincia de Buenos Aires.",
    image: "/Victoria.jpeg",
    initials: "VG",
    linkedin: "https://www.linkedin.com/in/victoria-galello-a086a4139",
    email: "mailto:estudiocontable.vgs@gmail.com",
  },
  {
    name: "Gonzalo Serrano",
    title: "Contador Público",
    bio: "Recibido en Facultad de Ciencias Económicas de la Universidad Nacional de La Plata. Matriculado en la Provincia de Buenos Aires.",
    image: "/Gonzalo.jpeg",
    initials: "GS",
    linkedin: "https://www.linkedin.com/in/gonzalo-martin-serrano-4a0638182",
    email: "mailto:estudiocontable.vgs@gmail.com",
  },
]

export function TeamSection() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-taupe tracking-widest uppercase">
            El Equipo
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy text-balance">
            ¿Quienes <span className="text-taupe">somos?</span>
          </h2>
          {/* <p className="mt-6 text-muted-foreground leading-relaxed">
            Nuestro equipo combina experiencia técnica con un enfoque personalizado,
            brindando soluciones adaptadas a las necesidades únicas de cada cliente.
          </p> */}
        </motion.div>

        {/* Team Grid */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group w-full max-w-md"
            >
              <div className="bg-secondary rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-navy/5">
                {/* Photo Placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-muted to-secondary rounded-xl overflow-hidden mb-6 relative">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-6xl lg:text-7xl font-bold text-navy/10">
                          {member.initials}
                        </span>
                      </div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 bg-taupe/20" />
                    </>
                  )}
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <h3 className="font-serif text-xl lg:text-2xl font-semibold text-navy">
                    {member.name}
                  </h3>
                  <p className="text-taupe font-medium text-sm tracking-wide">
                    {member.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-navy/5 flex items-center justify-center text-navy/60 hover:bg-taupe hover:text-navy transition-all duration-200"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={member.email}
                        className="w-9 h-9 rounded-full bg-navy/5 flex items-center justify-center text-navy/60 hover:bg-taupe hover:text-navy transition-all duration-200"
                        aria-label={`Email de ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div >
    </section >
  )
}
