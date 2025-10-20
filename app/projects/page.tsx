import { ProjectsGrid } from "@/components/projects/projects-grid";

export const metadata = {
  title: "Projects | Isaac Akonkwa",
  description:
    "Explore my portfolio of web, mobile, AI, and security projects showcasing fullstack development expertise.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              A collection of my work spanning web development, mobile
              applications, AI integration and cybersecurity. Each project
              represents a commitment to building secure, scalable and
              impactful solutions.
            </p>
          </div>

          <ProjectsGrid />
        </div>
      </section>
    </div>
  );
}
