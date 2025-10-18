"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
}

interface BlogArticleProps {
  post: BlogPost;
}

export function BlogArticle({ post }: BlogArticleProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          <article className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Badge variant="outline" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                  {post.content}
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground text-center">
                Thanks for reading! Share your thoughts on{" "}
                <a
                  href="https://twitter.com/akon1703"
                  className="text-primary hover:underline"
                >
                  Twitter
                </a>{" "}
                or{" "}
                <a
                  href="https://linkedin.com/in/akonizk"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
