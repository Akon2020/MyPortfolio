"use client"

import { motion } from "framer-motion"
import { Heart, Target, Users, Zap } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Empathy-Driven",
    description: "Technology should serve people, not the other way around. I build with users in mind.",
  },
  {
    icon: Target,
    title: "Impact-Focused",
    description: "Every line of code should contribute to solving real problems and creating meaningful change.",
  },
  {
    icon: Users,
    title: "Community-Oriented",
    description: "Growth happens together. I believe in sharing knowledge and lifting others up.",
  },
  {
    icon: Zap,
    title: "Innovation-Minded",
    description: "Staying curious and embracing new technologies to build better solutions.",
  },
]

export function Philosophy() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Philosophy & <span className="gradient-text">Vision</span>
          </h2>
          <div className="bg-card border border-border rounded-xl p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
              I see technology as a catalyst for transformation — not just code, but solutions that empower people. My
              goal is to merge engineering, security, and empathy into every project I build.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Whether it's developing secure backend systems, creating intuitive mobile experiences, or exploring AI
              applications, I approach each challenge with the mindset that technology should make lives better, safer,
              and more connected.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
