"use client";

import { ExternalLink, GitBranch } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { projects } from "../../data/projects";
import { ResponsiveModal } from "../../components/ui/responsive-modal";
import { ImageGallery } from "../../components/ImageGallery";

interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  hasCode?: boolean;
  codeUrl?: string;
  hasPhotos?: boolean;
}


function ProjectCard({
  id,
  title,
  description,
  images,
  technologies,
  hasCode,
  codeUrl,
  hasPhotos,
}: Project) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 dark:zinc-500 dark:ring-zinc-500 ring-zinc-600">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col max-sm:items-start">
        <h2 className="text-xl">{title}</h2>
        <div className="flex items-center gap-1.5 flex-wrap max-sm:gap-1">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full px-2 py-0.5 text-xs ring-1 dark:ring-zinc-500 ring-zinc-600 whitespace-nowrap bg-zinc-100 text-zinc-900 dark:bg-transparent dark:text-zinc-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="p-4 text-zinc-700 dark:text-zinc-400">{description}</p>
      </div>
      <Image
        src={images[0]}
        width={1200}
        height={400}
        alt={`${title} project image`}
        priority={false}
        loading="lazy"
        className="w-full h-32 sm:h-48 md:h-56 lg:h-64 object-cover"
      />
        <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
          {hasCode && codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
            >
              <GitBranch strokeWidth={1.4} className="size-5" />
              View code
            </a>
          )}
          {hasPhotos && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
            >
              <ExternalLink strokeWidth={1.4} className="size-5" />
              View photos
            </button>
          )}
        </div>
      
      <ResponsiveModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        className="sm:max-w-[55vw] sm:max-h-[95vh] overflow-hidden"
      >
        <div className="w-full h-[70vh] overflow-hidden">
          <ImageGallery images={images} title={title} />
        </div>
      </ResponsiveModal>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-10 mt-4 text-center text-5xl max-sm:text-4xl">
        Projects
      </h1>
      <div className="space-y-10">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
}
