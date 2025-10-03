"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./dialog";
import { Button } from "./button";
import { ArrowLeft } from "lucide-react";
import { useIsMobile } from "../../hooks/useIsMobile";

interface ResponsiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  technologies?: string[];
  children: React.ReactNode;
  className?: string;
  actionButton?: React.ReactNode;
}

export function ResponsiveModal({
  isOpen,
  onClose,
  title,
  description,
  technologies,
  children,
  className = "",
  actionButton
}: ResponsiveModalProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-zinc-900">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 flex-shrink-0">
          <div className="flex items-center flex-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="mr-2 p-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground">{title}</h2>
              <div className="flex flex-col gap-1">
                {description && (
                  <p className="text-sm text-muted-foreground break-words overflow-hidden max-w-full">{description}</p>
                )}
                {technologies && technologies.length > 0 && (
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Technologies:</span> {technologies.join(', ')}
                  </p>
                )}
              </div>
            </div>
          </div>
          {actionButton && (
            <div className="ml-2">
              {actionButton}
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="hidden sm:block">
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent 
          className={`max-w-[95vw] max-h-[95vh] sm:max-w-[90vw] sm:max-h-[90vh] flex flex-col ${className}`} 
          autoFocus={false}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <DialogHeader className="flex-shrink-0">
            <DialogTitle>{title}</DialogTitle>
            <div className="space-y-2">
              {description && (
                <DialogDescription className="break-words overflow-hidden max-w-full">{description}</DialogDescription>
              )}
              {technologies && technologies.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Technologies:</span> {technologies.join(', ')}
                </p>
              )}
            </div>
          </DialogHeader>

          <div className="flex-1 overflow-hidden">
            {children}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
