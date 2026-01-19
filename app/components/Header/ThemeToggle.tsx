"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const resolvedTheme = storedTheme ?? (prefersDark ? "dark" : "light");
    setTheme(resolvedTheme);

    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  if (!mounted) return null;

  return (
    <div
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "relative w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer ",
        "dark:text-gray-400 dark:hover:text-gray-50",
        "focus:outline-none  rounded-full",
        
      )}
    >
      <Sun
        className={cn(
          "absolute inset-0 h-full w-full transition-all duration-300 ease-in-out",
          theme === "dark" ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
        )}
      />
      <Moon
        className={cn(
          "absolute inset-0 h-full w-full transition-all duration-300 ease-in-out",
          theme === "light" ? "opacity-0 -rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
        )}
      />
    </div>

  );
}
