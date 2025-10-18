"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const categories = ["All", "Web", "Mobile", "AI", "Security"]

const projects = [
  {
    id: "security-management",
    title: "Système de Gestion de la Sécurité Publique",
    description:
      "Web & Mobile app for real-time incident reporting and coordination using AI-powered insights and geolocation tracking.",
    image: "/security-management-dashboard.png",
    tags: ["React", "Next.js", "React Native", "Node.js", "Firebase", "Mapbox", "AI"],
    categories: ["Web", "Mobile", "AI", "Security"],
    link: "/projects/security-management",
  },
  {
    id: "agribot",
    title: "AgriBot",
    description:
      "Mobile AI tool for plant disease detection helping farmers protect crops efficiently using computer vision.",
    image: "/agriculture-mobile-app.jpg",
    tags: ["React Native", "Firebase", "TensorFlow Lite", "Computer Vision"],
    categories: ["Mobile", "AI"],
    link: "/projects/agribot",
  },
  {
    id: "mentorship-platform",
    title: "Mentorship Platform",
    description: "Web & mobile solution connecting mentors and learners across domains with real-time communication.",
    image: "/mentorship-platform-interface.jpg",
    tags: ["React", "FastAPI", "Firestore", "WebRTC"],
    categories: ["Web", "Mobile"],
    link: "/projects/mentorship-platform",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-featured online marketplace with payment integration, inventory management, and analytics.",
    image: "/ecommerce-dashboard-interface.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    categories: ["Web"],
    link: "/projects/ecommerce-platform",
  },
  {
    id: "health-tracker",
    title: "Health Tracker App",
    description:
      "Mobile application for tracking fitness goals, nutrition, and health metrics with AI recommendations.",
    image: "/health-fitness-mobile-app.jpg",
    tags: ["React Native", "Expo", "Firebase", "ML Kit"],
    categories: ["Mobile", "AI"],
    link: "/projects/health-tracker",
  },
  {
    id: "security-audit-tool",
    title: "Security Audit Tool",
    description: "Automated security scanning and vulnerability assessment tool for web applications.",
    image: "/cybersecurity-dashboard-interface.png",
    tags: ["Python", "FastAPI", "OWASP", "Pentesting"],
    categories: ["Security", "Web"],
    link: "/projects/security-audit-tool",
  },
  {
    id: "chat-application",
    title: "Real-Time Chat Application",
    description: "Secure messaging platform with end-to-end encryption, file sharing, and group conversations.",
    image: "/messaging-app-interface.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    categories: ["Web"],
    link: "/projects/chat-application",
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description: "Web application leveraging AI to generate marketing content, blog posts, and social media captions.",
    image: "/ai-content-generation-interface.jpg",
    tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
    categories: ["Web", "AI"],
    link: "/projects/ai-content-generator",
  },
]

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.categories.includes(activeCategory))

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="min-w-24"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link href={project.link} className="group block h-full">
              <div className="bg-card border border-border rounded-xl overflow-hidden card-hover h-full flex flex-col">
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
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors text-balance">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1 text-pretty">
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
      </motion.div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-muted-foreground"
        >
          <p>No projects found in this category.</p>
        </motion.div>
      )}
    </div>
  )
}
