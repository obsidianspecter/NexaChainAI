"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const products = [
  {
    title: "NexaPredict",
    description: "Advanced predictive analytics platform for businesses of all sizes.",
    link: "/products/nexapredict",
  },
  {
    title: "NexaLinguist",
    description: "Powerful NLP toolkit for text analysis, generation, and translation.",
    link: "/products/nexalinguist",
  },
  {
    title: "NexaVision",
    description: "Comprehensive computer vision solution for image and video processing.",
    link: "/products/nexavision",
  },
  {
    title: "NexaLearn",
    description: "Reinforcement learning platform for developing intelligent AI agents.",
    link: "/products/nexalearn",
  },
]

export default function ProductsPage() {
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
            Our AI Products
          </motion.h1>
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                className="bg-card rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
                <p className="mb-4">{product.description}</p>
                <Link href={product.link}>
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

