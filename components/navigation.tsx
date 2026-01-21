"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-xl shadow-lg border border-border/50"
        : "bg-background/60 backdrop-blur-md"
        } rounded-full px-6 py-3`}
    >
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-xl font-semibold text-navy tracking-wide flex flex-col items-center">
          <img
            src="/vglogo.png"
            alt="Growth Chart"
            className="w-10 h-10 object-contain"
          />
          <span className="-mt-2">VGS</span>
        </a>

        {/* Desktop Navigation - Center */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-navy/80 hover:text-taupe transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-taupe hover:bg-taupe-dark text-navy font-medium rounded-full px-5 py-2 text-sm transition-all duration-200"
          >
            <a href="#contacto">
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Reunión
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-4 pb-4 border-t border-border/30 pt-4"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-navy/80 hover:text-taupe transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                asChild
                className="bg-taupe hover:bg-taupe-dark text-navy font-medium rounded-full w-full text-sm"
              >
                <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Reunión
                </a>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
