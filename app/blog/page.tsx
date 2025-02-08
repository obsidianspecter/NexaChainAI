"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { motion } from "framer-motion"

const blogPosts = [
  {
    title: "The Future of AI in Business",
    excerpt:
      "Explore how artificial intelligence is reshaping industries and driving innovation across the business landscape.",
    date: "2025-02-15",
    slug: "future-of-ai-in-business",
  },
  {
    title: "Demystifying Natural Language Processing",
    excerpt: "A deep dive into the world of NLP and its applications in modern technology.",
    date: "2025-02-10",
    slug: "demystifying-nlp",
  },
  {
    title: "Ethics in AI: Navigating the Challenges",
    excerpt: "Examining the ethical considerations and challenges in developing responsible AI systems.",
    date: "2025-02-05",
    slug: "ethics-in-ai",
  },
  {
    title: "The Rise of Computer Vision Technologies",
    excerpt: "How computer vision is revolutionizing industries from healthcare to autonomous vehicles.",
    date: "2025-01-30",
    slug: "rise-of-computer-vision",
  },
]

export default function BlogPage() {
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
            NexaChain AI Blog
          </motion.h1>
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                className="bg-card rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-semibold mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
                <p className="mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                  Read more
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

