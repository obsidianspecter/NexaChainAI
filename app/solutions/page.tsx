"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const solutions = [
  {
    title: "Predictive Analytics",
    description: "Harness the power of machine learning to forecast trends and make data-driven decisions.",
    slug: "predictive-analytics",
  },
  {
    title: "Natural Language Processing",
    description: "Advanced NLP capabilities for understanding and generating human-like text.",
    slug: "natural-language-processing",
  },
  {
    title: "Computer Vision",
    description: "State-of-the-art image and video analysis for various applications.",
    slug: "computer-vision",
  },
  {
    title: "Reinforcement Learning",
    description: "Develop AI agents that learn and improve through interaction with their environment.",
    slug: "reinforcement-learning",
  },
]

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="container py-24 md:py-32">
          <motion.h1
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our AI Solutions
          </motion.h1>
          <div className="grid gap-8 md:grid-cols-2">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.slug}
                className="bg-card rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-semibold mb-4">{solution.title}</h2>
                <p className="mb-4">{solution.description}</p>
                <Link href={`/solutions/${solution.slug}`}>
                  <Button>Learn More</Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

