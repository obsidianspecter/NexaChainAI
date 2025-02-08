"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"

const solutions = {
  "predictive-analytics": {
    title: "Predictive Analytics",
    description: "Harness the power of machine learning to forecast trends and make data-driven decisions.",
    content:
      "Our predictive analytics solution uses advanced machine learning algorithms to analyze historical data and predict future trends. This enables businesses to make informed decisions, optimize operations, and stay ahead of the competition.",
  },
  "natural-language-processing": {
    title: "Natural Language Processing",
    description: "Advanced NLP capabilities for understanding and generating human-like text.",
    content:
      "Our NLP solution leverages state-of-the-art language models to understand, interpret, and generate human-like text. This technology can be applied to chatbots, sentiment analysis, content generation, and more, revolutionizing how businesses interact with textual data.",
  },
  "computer-vision": {
    title: "Computer Vision",
    description: "State-of-the-art image and video analysis for various applications.",
    content:
      "Our computer vision solution employs cutting-edge deep learning techniques to analyze and interpret visual data from images and videos. This technology has applications in facial recognition, object detection, autonomous vehicles, and quality control in manufacturing.",
  },
  "reinforcement-learning": {
    title: "Reinforcement Learning",
    description: "Develop AI agents that learn and improve through interaction with their environment.",
    content:
      "Our reinforcement learning solution enables the development of AI agents that can learn and optimize their behavior through interaction with their environment. This technology is particularly useful in robotics, game AI, and optimizing complex systems like supply chains or energy grids.",
  },
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = solutions[params.slug as keyof typeof solutions]

  if (!solution) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="container py-24 md:py-32">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {solution.title}
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {solution.description}
          </motion.p>
          <motion.div
            className="prose prose-lg dark:prose-invert"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>{solution.content}</p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

