"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

const socialLinks = [
  // { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/estudiocontable_vgs?igsh=NmRlOWx4d3dwZ3B1", label: "Instagram" },
  // { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/vglogoblanco.png" alt="Logo" width={50} height={50} />
            <span className="font-serif text-2xl font-semibold text-white tracking-wide -ml-2">
              VGS
            </span>
            {/* <span className="text-white/40 text-sm">ESTUDIO CONTABLE</span> */}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-taupe hover:text-navy transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
            <span className="text-white/70 text-sm -ml-2">SEGUINOS EN INSTAGRAM</span>
          </div>

          {/* Copyright */}
          <p className="text-white/40 text-sm">
            © 2026 VGS Estudio Contable. Creada por <a href="https://barragan-natalia-portfolio-vert-eight-97.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-taupe transition-colors">Natalia Barragan</a>.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
