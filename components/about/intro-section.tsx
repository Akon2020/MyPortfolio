"use client";

import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
            My <span className="gradient-text">Journey</span>
          </h1>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg text-pretty">
              My journey into tech started with curiosity about how to create a
              website, how systems work, how data moves and how technology can
              protect and improve lives. Today, I'm a Fullstack Developer
              passionate about building secure and impactful systems for
              communities.
            </p>
            <p className="text-lg text-pretty">
              From crafting intuitive mobile experiences with React Native to
              architecting robust backend systems with Node.js and Python, I
              thrive at the intersection of innovation and practicality. My work
              spans web development, mobile applications, AI integration, and
              cybersecurity, always with a focus on creating solutions that
              matter.
            </p>
            <p className="text-lg text-pretty">
              Beyond code, I'm deeply involved in the tech community as a mentor
              and Co-Organizer Alumni of GDG On Campus UCB and a speaker at
              DevFest 2024 at Bujumbura. I believe in the power of knowledge
              sharing and collaborative growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
