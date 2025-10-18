import { BlogGrid } from "@/components/blog/blog-grid";

export const metadata = {
  title: "Blog | Isaac Akonkwa",
  description:
    "Thoughts on web development, AI, cybersecurity, and the developer journey. Writing about what I learn to think deeper and give back to the community.",
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Blog & <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              Writing about what I learn helps me think deeper and give back to
              the community. Explore my thoughts on web development, AI,
              cybersecurity, and the developer journey.
            </p>
          </div>

          <BlogGrid />
        </div>
      </section>
    </div>
  );
}
