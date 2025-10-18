import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog/blog-article";

// This would normally come from a CMS or database
const blogPosts = [
  {
    id: "building-secure-apis",
    title: "Building Secure REST APIs: Best Practices for 2025",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Web Dev",
    tags: ["Security", "API", "Backend"],
    content: `
# Building Secure REST APIs: Best Practices for 2025

Security is not an afterthought—it's a fundamental requirement for any modern API. In this comprehensive guide, I'll share the essential practices I've learned from building production APIs.

## Authentication & Authorization

The foundation of API security starts with proper authentication. Here are the key approaches:

### JWT Tokens
JSON Web Tokens remain the gold standard for stateless authentication. Always use strong signing algorithms (RS256 over HS256) and implement proper token rotation.

### API Keys
For service-to-service communication, API keys provide a simple yet effective solution. Store them securely and rotate them regularly.

## Rate Limiting

Protect your API from abuse with intelligent rate limiting:

- Implement per-user and per-IP rate limits
- Use sliding window algorithms for accuracy
- Provide clear rate limit headers in responses

## Input Validation

Never trust user input. Always validate and sanitize:

- Use schema validation libraries (Zod, Joi)
- Implement whitelist validation over blacklist
- Sanitize data before database operations

## Conclusion

Building secure APIs requires constant vigilance and adherence to best practices. Stay updated with the latest security advisories and always test your security measures.
    `,
  },
];

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.id === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Isaac Akonkwa`,
    description: post.content.substring(0, 160),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-16">
      <BlogArticle post={post} />
    </div>
  );
}
