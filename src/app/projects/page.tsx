"use client";

import { ExternalLink } from "lucide-react";
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
}


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
        <div className="flex items-center gap-1.5 flex-wrap max-sm:gap-1">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full px-2 py-0.5 text-xs ring-1 dark:ring-zinc-500 ring-zinc-600 whitespace-nowrap bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
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
      <div className="space-y-20">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
}
