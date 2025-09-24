"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectImageModalProps {
  project: {
    title: string;
    description: string;
    images: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProjectImageModal = ({ project, isOpen, onClose }: ProjectImageModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  // Reset to first image when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Touch/swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const startX = touch.clientX;
    
    const handleTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const endX = touch.clientX;
      const diff = startX - endX;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          nextImage(); // Swipe left - next image
        } else {
          prevImage(); // Swipe right - previous image
        }
      }
      
      document.removeEventListener('touchend', handleTouchEnd);
    };
    
    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full max-h-[95vh] p-0 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700">
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
        <DialogDescription className="sr-only">
          {project.description}
        </DialogDescription>
        <div className="relative">

          {/* Project Title */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 sm:py-2">
            <h3 className="text-sm sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100">{project.title}</h3>
          </div>

          {/* Main Image */}
          <div className="relative" onTouchStart={handleTouchStart}>
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-[50vh] sm:h-[60vh] object-contain bg-zinc-50 dark:bg-zinc-900 select-none"
            />
            
            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-zinc-50/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  onClick={prevImage}
                >
                  <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-zinc-50/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  onClick={nextImage}
                >
                  <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                </Button>
              </>
            )}
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3">
            <span className="text-xs sm:text-sm text-zinc-900 dark:text-zinc-100">
              {currentImageIndex + 1} / {project.images.length}
            </span>
          </div>

          {/* Project Description */}
          <div className="px-4 py-3 sm:p-4 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700">
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-xs sm:text-sm">
              {project.description}
            </p>
          </div>

          {/* Thumbnail Navigation */}
          {project.images.length > 1 && (
            <div className="px-4 pb-4 bg-zinc-50 dark:bg-zinc-900">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-sky-500'
                        : 'border-zinc-200 dark:border-zinc-700 hover:border-sky-500/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectImageModal;
