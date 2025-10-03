import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-10 mt-4 text-center text-5xl max-sm:text-4xl">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}