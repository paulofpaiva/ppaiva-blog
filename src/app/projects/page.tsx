"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState, useMemo } from "react";
import { projects } from "../../data/projects";
import ProjectImageModal from "../../components/ProjectImageModal";

interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
}

// Memoize the color mapping to avoid recreating on every render
const getTechnologyColor = (tech: string) => {
  const colors: { [key: string]: string } = {
    "React.js": "bg-[#00D8FE] text-zinc-950",
    "TypeScript": "bg-[#007ACC] text-zinc-100",
    ".NET": "bg-[#512BD4] text-zinc-100",
    "PostgreSQL": "bg-[#336791] text-zinc-100",
    "AI": "bg-gradient-to-r from-purple-500 to-pink-500 text-zinc-100",
    "Mistral": "bg-[#FF6B35] text-zinc-100",
    "ASP.NET Core": "bg-[#512BD4] text-zinc-100",
    "Razor Views": "bg-[#512BD4] text-zinc-100",
    "MVC": "bg-[#512BD4] text-zinc-100",
    "JavaScript": "bg-[#F7DF1E] text-zinc-950",
    "PL/SQL": "bg-[#F80000] text-zinc-100",
    "Swagger": "bg-[#85EA2D] text-zinc-950",
  };
  return colors[tech] || "bg-zinc-500 text-zinc-100";
};

function ProjectCard({
  id,
  title,
  description,
  images,
  technologies,
}: Project) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 dark:zinc-500 dark:ring-zinc-500 ring-zinc-600">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col max-sm:items-start">
        <h2 className="text-xl">{title}</h2>
        <div className="flex items-center gap-2 flex-wrap max-sm:gap-1">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`rounded-full px-2.5 py-0.5 text-sm ring-1 dark:ring-zinc-500 ring-zinc-600 whitespace-nowrap ${getTechnologyColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <Image
        src={images[0]}
        width={1200}
        height={630}
        alt={`${title} project image`}
        priority={false}
        loading="lazy"
      />
      <div className="flex w-full justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 py-4 px-8 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
        >
          View photos
          <ExternalLink strokeWidth={1.4} className="size-4" />
        </button>
      </div>
      
      <ProjectImageModal
        project={{ title, description, images }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default function ProjectsPage() {
  const memoizedProjects = useMemo(() => projects, []);

  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projects
      </h1>
      <div className="space-y-20">
        {memoizedProjects.map((project: Project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
}
