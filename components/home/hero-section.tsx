"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Twitter, Instagram, Facebook } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { ScrollIndicator } from "@/components/scroll-indicator";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 animated-bg" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              👋 Hey, I'm Isaac Akonkwa
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-balance">Fullstack & Mobile Developer</span>
            <br />
            <span className="gradient-text text-balance">
              Building Digital Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-balance"
          >
            AI Enthusiast | Cybersecurity Explorer
            <br />I build scalable, secure, and human-centered digital
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                See My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Let's Collaborate</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <a
              href="https://github.com/Akon2020"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors flex items-center justify-center"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/akonizk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/akon1703"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors flex items-center justify-center"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/akonizk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors flex items-center justify-center"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/Akonkwa.Ushindi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors flex items-center justify-center"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="mailto:akonkwaushindi@gmail.com"
              className="w-12 h-12 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors flex items-center justify-center"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
