"use client"

import { Brain, MessageSquare, Eye, Target } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    name: "Predictive Analytics",
    description: "Harness the power of machine learning to forecast trends and make data-driven decisions.",
    icon: Brain,
  },
  {
    name: "Natural Language Processing",
    description: "Advanced NLP capabilities for understanding and generating human-like text.",
    icon: MessageSquare,
  },
  {
    name: "Computer Vision",
    description: "State-of-the-art image and video analysis for various applications.",
    icon: Eye,
  },
  {
    name: "Reinforcement Learning",
    description: "Develop AI agents that learn and improve through interaction with their environment.",
    icon: Target,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <motion.div
        className="mx-auto max-w-[58rem] text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">AI-Powered Solutions</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how NexaChain AI can revolutionize your business with our cutting-edge AI technologies.
        </p>
      </motion.div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature, index) => (
          <motion.div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-background p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

