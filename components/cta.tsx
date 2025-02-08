"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="border-t">
      <motion.div
        className="container flex flex-col items-center gap-4 py-24 text-center md:py-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Ready to harness the power of AI?</h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Join leading companies who trust NexaChain AI to drive their AI-powered transformation and stay ahead in the
          rapidly evolving tech landscape.
        </p>
        <Button size="lg" className="mt-4">
          Get Started Today
        </Button>
      </motion.div>
    </section>
  )
}

