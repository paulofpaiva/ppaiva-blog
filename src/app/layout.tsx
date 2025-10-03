import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "../components/scroll-to-top";
import { Analytics } from "@vercel/analytics/next";
import Header from "../components/Header";
import { ThemeProvider } from "../contexts/ThemeContext";

export const metadata: Metadata = {
  title: "Paulo Paiva",
  description: "Paulo Paiva's personal website",
};

const karla = Karla({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (theme === 'dark' || (!theme && systemPrefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  // Fallback to system preference
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${karla.className} min-h-screen px-6`}>
        <ThemeProvider>
          <Analytics />
          <Header />
          <main className="mx-auto max-w-prose pb-4">
            {children}
            <ScrollToTop />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
