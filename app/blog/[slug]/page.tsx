"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"

// This would typically come from a database or CMS
const blogPosts = {
  "future-of-ai-in-business": {
    title: "The Future of AI in Business",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2025-02-15",
  },
  "demystifying-nlp": {
    title: "Demystifying Natural Language Processing",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2025-02-10",
  },
  "ethics-in-ai": {
    title: "Ethics in AI: Navigating the Challenges",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "2025-02-05",
  },
  "rise-of-computer-vision": {
    title: "The Rise of Computer Vision Technologies",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2025-01-30",
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article className="container py-24 md:py-32">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {post.title}
          </motion.h1>
          <motion.p
            className="text-sm text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {post.date}
          </motion.p>
          <motion.div
            className="prose prose-lg dark:prose-invert"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>{post.content}</p>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

