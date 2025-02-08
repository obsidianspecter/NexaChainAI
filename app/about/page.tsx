"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function AboutPage() {
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
            About NexaChain AI
          </motion.h1>
          <motion.div
            className="prose prose-lg dark:prose-invert"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              NexaChain AI is at the forefront of artificial intelligence innovation, dedicated to transforming
              businesses through cutting-edge AI solutions. Our team of world-class researchers and engineers work
              tirelessly to push the boundaries of what's possible in machine learning, natural language processing,
              computer vision, and reinforcement learning.
            </p>
            <p>
              Founded in 2020, NexaChain AI has quickly become a leader in the AI industry, partnering with Fortune 500
              companies and innovative startups alike to solve complex problems and drive growth through the power of
              artificial intelligence.
            </p>
            <p>
              Our mission is to democratize access to advanced AI technologies, enabling businesses of all sizes to
              harness the transformative power of artificial intelligence. We believe that AI has the potential to solve
              some of the world's most pressing challenges, and we're committed to developing ethical, responsible, and
              transparent AI solutions that benefit society as a whole.
            </p>
            <p>
              At NexaChain AI, we're not just building the future of AI – we're shaping a better, more intelligent world
              for everyone.
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

