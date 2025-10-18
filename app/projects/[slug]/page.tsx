import { notFound } from "next/navigation";
import {
  getProjectById,
  getNextProject,
  getPreviousProject,
} from "@/lib/projects-data";
import { ProjectHeader } from "@/components/project-detail/project-header";
import { ProjectContent } from "@/components/project-detail/project-content";
import { ProjectNavigation } from "@/components/project-detail/project-navigation";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectById(params.slug);
  if (!project) return {};

  return {
    title: `${project.title} | Isaac Akonkwa`,
    description: project.description,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectById(params.slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(params.slug);
  const previousProject = getPreviousProject(params.slug);

  return (
    <div className="pt-16">
      <ProjectHeader project={project} />
      <ProjectContent project={project} />
      <ProjectNavigation
        nextProject={nextProject}
        previousProject={previousProject}
      />
    </div>
  );
}
