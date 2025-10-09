"use client";

import { GitBranch, BookOpen, ExternalLink} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ResponsiveModal } from "./ui/responsive-modal";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  hasCode?: boolean;
  codeUrl?: string;
  hasDemo?: boolean;
  demoUrl?: string;
  hasPhotos?: boolean;
  isClientWork?: boolean;
}

function ProjectCard({
  id,
  title,
  description,
  images,
  technologies,
  hasCode,
  codeUrl,
  hasDemo,
  demoUrl,
  hasPhotos,
  isClientWork,
}: Project) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 dark:zinc-500 dark:ring-zinc-500 ring-zinc-600">
      <div className="p-2">
        <h2 className="text-sm sm:text-base mb-1 truncate sm:truncate">{title}</h2>
        <div className="flex items-center gap-1.5 py-1 ps-1 overflow-hidden">
          {technologies.slice(0, 2).map((tech) => (
            <span
              key={tech}
              className="rounded-full px-1.5 py-0.5 text-xs sm:px-2 sm:text-xs ring-1 dark:ring-zinc-500 ring-zinc-600 whitespace-nowrap bg-zinc-100 text-zinc-900 dark:bg-transparent dark:text-zinc-100 flex-shrink-0"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 2 && (
            <TooltipProvider delayDuration={10}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="rounded-full px-1.5 py-0.5 text-xs sm:px-2 sm:text-xs ring-1 dark:ring-zinc-500 ring-zinc-600 whitespace-nowrap bg-zinc-100 text-zinc-900 dark:bg-transparent dark:text-zinc-100 flex-shrink-0 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700">
                    +{technologies.length - 2}
                  </span>
                </TooltipTrigger>
                <TooltipContent className="w-auto p-2">
                  <div className="flex flex-wrap gap-1.5">
                    {technologies.slice(2).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full px-2 py-0.5 text-xs ring-1 dark:ring-zinc-500 ring-zinc-600 whitespace-nowrap bg-zinc-100 text-zinc-900 dark:bg-transparent dark:text-zinc-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
      <div className="p-2">
        <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-400 line-clamp-2 leading-4 sm:leading-5">{description}</p>
      </div>
      <Image
        src={images[0]}
        width={1200}
        height={400}
        alt={`${title} project image`}
        priority={false}
        loading="lazy"
        className="w-full h-32 sm:h-40 object-cover cursor-pointer"
        onClick={() => hasPhotos && setIsModalOpen(true)}
      />
        {(hasCode || hasDemo || hasPhotos || isClientWork) && (
          <div className="flex w-full justify-between">
            {isClientWork ? (
              <TooltipProvider delayDuration={10}>
                <Tooltip open={showTooltip} onOpenChange={setShowTooltip}>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      onClick={() => setShowTooltip(true)}
                      className="flex grow items-center justify-center gap-1 py-2 sm:py-3 text-xs sm:text-sm opacity-60"
                    >
                      <GitBranch strokeWidth={1.4} className="size-4 sm:size-5" />
                      View code
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="w-64 p-3 text-xs leading-5">
                    <p>This project was developed under a client contract. The source code is private and protected by the client.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              hasCode && codeUrl && (
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex grow items-center justify-center gap-1 py-2 sm:py-3 text-xs sm:text-sm transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
                >
                  <GitBranch strokeWidth={1.4} className="size-4 sm:size-5" />
                  View code
                </a>
              )
            )}
            {hasDemo && demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex grow items-center justify-center gap-1 py-2 sm:py-3 text-xs sm:text-sm transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800 border-l border-zinc-400 dark:border-zinc-500"
              >
                <ExternalLink strokeWidth={1.4} className="size-4 sm:size-5" />
                View Demo
              </a>
            )}
            {hasPhotos && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex grow items-center justify-center gap-1 py-2 sm:py-3 text-xs sm:text-sm transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800 border-l border-zinc-400 dark:border-zinc-500"
              >
                <BookOpen strokeWidth={1.4} className="size-4 sm:size-5" />
                Read more
              </button>
            )}
          </div>
        )}
      
      <ResponsiveModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        technologies={technologies}
        className="sm:max-w-2xl"
      >
        <div className="h-full w-full relative">
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            slidesPerView={1}
            className="h-full w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="h-full">
                <div className="h-full w-full flex items-center justify-center p-4 pb-12">
                  <Image
                    src={image}
                    alt={`${title} project image ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-auto h-auto max-w-full max-h-full object-contain rounded"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ResponsiveModal>
    </div>
  );
}

export default ProjectCard;
