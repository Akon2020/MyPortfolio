"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Smartphone, Cloud, Brain, Shield } from "lucide-react"

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    level: "Advanced",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    icon: Database,
    title: "Backend",
    level: "Advanced",
    skills: ["Node.js", "Express", "REST API", "GraphQL", "WebSockets"],
  },
  {
    icon: Database,
    title: "Database & ORM",
    level: "Proficient",
    skills: ["Prisma", "Sequelize", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    level: "Advanced",
    skills: ["React Native", "Expo", "Native Modules", "Mobile UI/UX"],
  },
  {
    icon: Cloud,
    title: "Cloud & BaaS",
    level: "Proficient",
    skills: ["Firebase", "Google Cloud Platform", "Vercel", "Supabase"],
  },
  {
    icon: Brain,
    title: "AI & Python",
    level: "Proficient",
    skills: ["FastAPI", "Flask", "Machine Learning", "TensorFlow", "Computer Vision"],
  },
  {
    icon: Shield,
    title: "Security",
    level: "Intermediate",
    skills: ["Bug Bounty", "Pentesting", "CTFs", "Ethical Hacking", "Security Audits", "OWASP"],
  },
]

const levelColors = {
  Advanced: "bg-accent/10 text-accent border-accent/20",
  Proficient: "bg-primary/10 text-primary border-primary/20",
  Intermediate: "bg-muted text-muted-foreground border-border",
}

export function SkillsMatrix() {
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
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            A comprehensive overview of my technical capabilities across the full development stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <Badge className={levelColors[category.level as keyof typeof levelColors]} variant="outline">
                  {category.level}
                </Badge>
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
