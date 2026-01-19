"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className=" fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-[#f9fafb]/80 dark:bg-gray-950/80 backdrop-blur-sm p-1">
      <div className="container mx-auto flex h-16 items-center justify-between ">
        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-4 px-4 ">
          <ThemeToggle />
          <LanguageSwitcher />

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <MobileMenu open={isMobileMenuOpen} />
    </header>
  );
}
