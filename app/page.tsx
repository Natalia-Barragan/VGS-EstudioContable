import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TeamSection } from "@/components/team-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TeamSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
