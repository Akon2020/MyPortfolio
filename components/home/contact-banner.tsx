"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ContactBanner() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
            <div className="relative bg-card border border-border rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Let's build something <span className="gradient-text">impactful</span> together
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Contact Me
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
