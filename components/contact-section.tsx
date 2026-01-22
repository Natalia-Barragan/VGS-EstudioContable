"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Calendar, Send, MapPin, Mail, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("¡Mensaje enviado!", {
          description: "Gracias por contactarnos. Te responderemos a la brevedad.",
          duration: 5000,
          style: {
            background: "#F8F6F4",
            color: "#0F172A",
            border: "1px solid #C5A086"
          }
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        toast.error("Error al enviar", {
          description: "Por favor, intenta nuevamente más tarde.",
          style: {
            background: "#FEF2F2",
            color: "#991B1B",
          }
        })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error("Error al enviar", {
        description: "Por favor, intenta nuevamente más tarde."
      })
    }
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-background">
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
            Contacto y Consultas
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy text-balance">
            Conversemos sobre el futuro de tu empresa.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Coordina con nosotros una asesoría on-line personalizada para mejorar la administración de tu emprendimiento, profesión o negocio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-navy font-medium">
                  Nombre Completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Nombre Apellido"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 rounded-lg border-border/50 focus:border-taupe focus:ring-taupe/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-navy font-medium">
                  Correo Electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 rounded-lg border-border/50 focus:border-taupe focus:ring-taupe/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-navy font-medium">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  placeholder="Contanos cómo podemos ayudarte..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[140px] rounded-lg border-border/50 focus:border-taupe focus:ring-taupe/20 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-navy hover:bg-navy/90 text-white font-medium rounded-lg h-12 transition-all duration-200"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensaje
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-10 pt-10 border-t border-border/50">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-taupe" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Ubicación</p>
                    <p className="text-sm text-muted-foreground">La Plata, Buenos Aires, Argentina.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-taupe" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Instagram</p>
                    <a href="https://www.instagram.com/estudiocontable_vgs?igsh=NmRlOWx4d3dwZ3B1" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-taupe transition-colors">
                      @estudiocontable_vgs
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-taupe" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Email</p>
                    <p className="text-sm text-muted-foreground">estudiocontable.vgs@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-secondary rounded-2xl p-8 lg:p-10 h-full flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-taupe/20 flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-taupe" />
              </div>

              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-navy mb-4">
                Agendá una Reunión
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Reservá una consulta inicial.
                Conversaremos sobre tus necesidades y cómo podemos ayudarte
                a optimizar la gestión contable de tu negocio o profesión.
              </p>

              {/* Calendly Placeholder */}
              <div className="flex-1 bg-background rounded-xl border-2 border-dashed border-border/50 flex flex-col items-center justify-center p-8 min-h-[240px]">
                <Calendar className="w-12 h-12 text-muted-foreground/40 mb-4" />
                <p className="text-sm text-muted-foreground text-center">
                  Calendario de reservas
                </p>
                <p className="text-xs text-muted-foreground/60 text-center mt-1">
                  (PROXIMAMENTE)
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full mt-6 bg-taupe hover:bg-taupe-dark text-navy font-medium rounded-lg h-12 transition-all duration-200"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Seleccionar Horario
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
