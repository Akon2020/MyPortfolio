"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
    >
      <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll to explore</span>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
        <ChevronDown className="w-5 h-5 text-primary" />
      </motion.div>
    </motion.div>
  )
}
