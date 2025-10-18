"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { Project } from "@/lib/projects-data"

interface ProjectNavigationProps {
  nextProject?: Project
  previousProject?: Project
}

export function ProjectNavigation({ nextProject, previousProject }: ProjectNavigationProps) {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {previousProject && (
              <Button asChild variant="outline" size="lg" className="h-auto p-6 justify-start bg-transparent">
                <Link href={`/projects/${previousProject.id}`}>
                  <div className="flex items-center gap-4">
                    <ArrowLeft className="w-5 h-5 flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground mb-1">Previous Project</p>
                      <p className="font-semibold text-balance">{previousProject.title}</p>
                    </div>
                  </div>
                </Link>
              </Button>
            )}
            {nextProject && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-auto p-6 justify-end md:col-start-2 bg-transparent"
              >
                <Link href={`/projects/${nextProject.id}`}>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground mb-1">Next Project</p>
                      <p className="font-semibold text-balance">{nextProject.title}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 flex-shrink-0" />
                  </div>
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
