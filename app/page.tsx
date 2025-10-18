import { HeroSection } from "@/components/home/hero-section"
import { AboutPreview } from "@/components/home/about-preview"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { ContactBanner } from "@/components/home/contact-banner"

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  )
}
