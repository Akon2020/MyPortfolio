"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function AboutPreview() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/Me.jpg"
                  alt="Isaac Akonkwa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
              I'm a multidisciplinary developer who believes technology is a
              tool for impact. From building secure backend systems to designing
              intuitive mobile experiences, I focus on solving real problems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              My journey into tech started with curiosity about how systems
              work, how data moves, and how technology can protect and improve
              lives. Today, I'm passionate about creating solutions that empower
              communities.
            </p>
            <Button asChild className="group">
              <Link href="/about">
                Read More About Me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
