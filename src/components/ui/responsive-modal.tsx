"use client";

import { Dialog, DialogContent, DialogTitle } from "./dialog";
import { Button } from "./button";
import { ArrowLeft } from "lucide-react";
import { useIsMobile } from "../../hooks/useIsMobile";

interface ResponsiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  actionButton?: React.ReactNode;
}

export function ResponsiveModal({
  isOpen,
  onClose,
  title,
  description,
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
              {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
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
          className={`sm:max-w-[90vw] sm:max-h-[90vh] ${className}`} 
          autoFocus={false}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <DialogTitle className="sr-only">{title}</DialogTitle>
          
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-foreground">{title}</h2>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>

          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}
