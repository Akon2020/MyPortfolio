"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

const blogPosts = [
  {
    id: "building-secure-apis",
    title: "Building Secure REST APIs: Best Practices for 2025",
    excerpt:
      "A comprehensive guide to securing your REST APIs with modern authentication, rate limiting, and input validation techniques.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Web Dev",
    tags: ["Security", "API", "Backend"],
  },
  {
    id: "react-native-performance",
    title: "Optimizing React Native Performance: Lessons from Production",
    excerpt:
      "Real-world strategies for improving React Native app performance, from reducing bundle size to optimizing re-renders.",
    date: "2025-01-08",
    readTime: "10 min read",
    category: "Mobile Dev",
    tags: ["React Native", "Performance", "Mobile"],
  },
  {
    id: "ai-integration-guide",
    title: "Integrating AI into Your Web Apps: A Practical Guide",
    excerpt:
      "Learn how to add AI capabilities to your applications using modern APIs and frameworks, with real examples and code.",
    date: "2024-12-20",
    readTime: "12 min read",
    category: "AI",
    tags: ["AI", "Machine Learning", "Integration"],
  },
  {
    id: "cybersecurity-basics",
    title: "Cybersecurity Fundamentals Every Developer Should Know",
    excerpt:
      "Essential security concepts and practices that every developer needs to understand to build safer applications.",
    date: "2024-12-10",
    readTime: "7 min read",
    category: "Cybersecurity",
    tags: ["Security", "Best Practices", "OWASP"],
  },
  {
    id: "developer-journey",
    title: "My Journey from Student to Fullstack Developer",
    excerpt: "Reflections on my path into tech, the challenges I faced, and lessons learned along the way.",
    date: "2024-11-25",
    readTime: "6 min read",
    category: "Dev Life",
    tags: ["Career", "Learning", "Personal"],
  },
  {
    id: "nextjs-app-router",
    title: "Mastering Next.js App Router: A Complete Guide",
    excerpt:
      "Deep dive into Next.js App Router, server components, and how to build modern, performant web applications.",
    date: "2024-11-15",
    readTime: "15 min read",
    category: "Web Dev",
    tags: ["Next.js", "React", "Frontend"],
  },
]

const categoryColors: Record<string, string> = {
  "Web Dev": "bg-primary/10 text-primary border-primary/20",
  "Mobile Dev": "bg-accent/10 text-accent border-accent/20",
  AI: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Cybersecurity: "bg-red-500/10 text-red-400 border-red-500/20",
  "Dev Life": "bg-blue-500/10 text-blue-400 border-blue-500/20",
}

export function BlogGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {blogPosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={`/blog/${post.id}`} className="group block h-full">
            <div className="bg-card border border-border rounded-xl p-6 card-hover h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Badge className={categoryColors[post.category]} variant="outline">
                  {post.category}
                </Badge>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors text-balance">
                {post.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1 text-pretty">{post.excerpt}</p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
