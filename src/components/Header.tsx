"use client";

import { ChevronLeft, Triangle, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../contexts/ThemeContext";

export default function Header() {
  const path = usePathname();
  const isHome = path === "/";
  const { theme, setTheme, resolvedTheme, mounted } = useTheme();

  return (
    <header className="mx-auto max-w-prose py-8 max-sm:pt-4">
      <nav className="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
        <Link
          className={`group relative -m-12 -my-2 -mr-4 flex items-center rounded py-6 pl-12 pr-4 ${isHome ? "ring-0" : "ring-1"} ring-sky-500 ring-opacity-0 transition-transform max-sm:text-center sm:hover:ring-opacity-100 dark:ring-sky-600 dark:ring-opacity-0`}
          href="/"
          aria-label="Back to home"
        >
          <div
            className={`${isHome ? "hidden" : "absolute"} left-1 flex size-4 h-full w-12 items-center px-2`}
          >
            <ChevronLeft strokeWidth={1.4} />
          </div>
          <div className="flex flex-col max-sm:items-center">
            Paulo Paiva
            <span className="text-zinc-500 dark:text-zinc-400">
              Software Developer
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="group relative flex items-center"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? (
                <Moon
                  strokeWidth={1.4}
                  className="size-5 fill-gray-700 transition-transform dark:fill-zinc-200"
                />
              ) : (
                <Sun
                  strokeWidth={1.4}
                  className="size-5 fill-yellow-300 transition-transform sm:hover:rotate-45"
                />
              )}
            </button>
          )}
          <Link
            className="group relative rounded px-2 py-px sm:hover:ring-1 ring-sky-500 transition-transform dark:ring-sky-600 dark:ring-opacity-0"
            href="/"
            aria-label="View projects"
            aria-current={path === "/" ? "page" : undefined}
          >
            /home
            <Triangle
              aria-hidden="true"
              className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-aria-[current=page]:block dark:fill-sky-600 dark:text-transparent"
            />
          </Link>
          <Link
            className="group relative rounded px-2 py-px sm:hover:ring-1 ring-sky-500 transition-transform dark:ring-sky-600 dark:ring-opacity-0"
            href="/projects"
            aria-label="View projects"
            aria-current={path === "/projects" ? "page" : undefined}
          >
            /projects
            <Triangle
              aria-hidden="true"
              className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-aria-[current=page]:block dark:fill-sky-600 dark:text-transparent"
            />
          </Link>
          <Link
            className="group relative rounded px-2 py-px sm:hover:ring-1 ring-sky-500 transition-transform dark:ring-sky-600 dark:ring-opacity-0"
            href="/about"
            aria-label="View about page"
            aria-current={path === "/about" ? "page" : undefined}
          >
            /about
            <Triangle
              aria-hidden="true"
              className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-aria-[current=page]:block dark:fill-sky-600 dark:text-transparent"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
