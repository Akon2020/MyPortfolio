"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"

const featuredProjects = [
  {
    id: "security-management",
    title: "Système de Gestion de la Sécurité Publique",
    description:
      "Web & Mobile app for real-time incident reporting and coordination using AI-powered insights and geolocation tracking.",
    image: "/security-management-dashboard.png",
    tags: ["React", "Next.js", "React Native", "Node.js", "Firebase", "Mapbox"],
    link: "/projects/security-management",
  },
  {
    id: "agribot",
    title: "AgriBot",
    description:
      "Mobile AI tool for plant disease detection helping farmers protect crops efficiently using computer vision.",
    image: "/agriculture-mobile-app.jpg",
    tags: ["React Native", "Firebase", "TensorFlow Lite", "AI"],
    link: "/projects/agribot",
  },
  {
    id: "mentorship-platform",
    title: "Mentorship Platform",
    description: "Web & mobile solution connecting mentors and learners across domains with real-time communication.",
    image: "/mentorship-platform-interface.jpg",
    tags: ["React", "FastAPI", "Firestore", "WebRTC"],
    link: "/projects/mentorship-platform",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            A selection of my recent work showcasing my expertise in fullstack development, mobile apps, and AI
            integration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={project.link} className="group block">
                <div className="bg-card border border-border rounded-xl overflow-hidden card-hover">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors text-balance">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed text-pretty">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline" className="group bg-transparent">
            <Link href="/projects">
              See All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
