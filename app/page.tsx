"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <motion.section
          className="container py-24 md:py-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Explore NexaChain AI</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/solutions" className="block">
              <Button variant="outline" className="w-full justify-start">
                <span className="mr-2">🔍</span>
                Our Solutions
              </Button>
            </Link>
            <Link href="/products" className="block">
              <Button variant="outline" className="w-full justify-start">
                <span className="mr-2">🚀</span>
                Our Products
              </Button>
            </Link>
            <Link href="/about" className="block">
              <Button variant="outline" className="w-full justify-start">
                <span className="mr-2">ℹ️</span>
                About Us
              </Button>
            </Link>
            <Link href="/blog" className="block">
              <Button variant="outline" className="w-full justify-start">
                <span className="mr-2">📝</span>
                Our Blog
              </Button>
            </Link>
          </div>
        </motion.section>
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

