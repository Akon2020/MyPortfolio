"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import type { Project } from "@/lib/projects-data"

interface ProjectContentProps {
  project: Project
}

export function ProjectContent({ project }: ProjectContentProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Problem & Objective */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">
                The <span className="gradient-text">Problem</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">{project.problem}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">
                The <span className="gradient-text">Objective</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">{project.objective}</p>
            </div>
          </motion.div>

          {/* My Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">
              My <span className="gradient-text">Role</span>
            </h2>
            <div className="bg-card border border-border rounded-xl p-8">
              <p className="text-muted-foreground leading-relaxed text-pretty">{project.role}</p>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.techStack.map((tech, index) => (
                <div key={index} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-pretty">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Screenshots Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">
                Project <span className="gradient-text">Gallery</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="relative aspect-video rounded-xl overflow-hidden border border-border">
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Results & Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">
              Results & <span className="gradient-text">Impact</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{result}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
