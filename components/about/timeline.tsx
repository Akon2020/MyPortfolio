"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

const timelineEvents = [
  {
    year: "2025",
    title: "Developer at Code Growth Alive",
    location: "Remote",
    description: "Building innovative solutions and mentoring aspiring developers in modern web technologies.",
    type: "work",
  },
  {
    year: "2024",
    title: "Speaker at DevFest Bujumbura",
    location: "Bujumbura, Burundi",
    description: "Presented on modern web development practices and the future of AI in software engineering.",
    type: "speaking",
  },
  {
    year: "2023",
    title: "Co-Organizer GDG On Campus – UCB",
    location: "Bukavu, DRC",
    description: "Leading tech community initiatives, organizing workshops, and fostering developer growth.",
    type: "community",
  },
  {
    year: "2021–2025",
    title: "BSc in Software Engineering",
    location: "Université Catholique de Bukavu",
    description: "Specialized in software architecture, mobile development, and cybersecurity fundamentals.",
    type: "education",
  },
]

const typeColors = {
  work: "border-accent",
  speaking: "border-primary",
  community: "border-primary",
  education: "border-muted-foreground",
}

export function Timeline() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            My professional journey and academic background in software engineering.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-8 w-px h-full ${typeColors[event.type as keyof typeof typeColors]} hidden md:block`}
                  />
                  <div className="absolute left-6 w-5 h-5 rounded-full bg-background border-2 border-primary hidden md:block" />

                  <div className="md:ml-20">
                    <div className="bg-card border border-border rounded-xl p-6">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                          <Calendar className="w-4 h-4" />
                          {event.year}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-pretty">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
