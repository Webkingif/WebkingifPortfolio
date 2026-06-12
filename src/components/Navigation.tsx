import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";

interface NavigationProps {
  onNavClick?: (section: string) => void;
  activeSection?: string;
}

export default function Navigation({ onNavClick, activeSection = "home" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Theme state setup with localStorage check
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (stored !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (!theme) return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Monitor page scroll to apply compact header styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleLinkClick = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);

    if (onNavClick) {
      onNavClick(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-cleanWhite/90 dark:bg-[#0F172A]/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-100 dark:border-slate-805"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <a
              id="nav-logo-link"
              href="#home"
              onClick={(e) => handleLinkClick("home", e)}
              className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-accentBlue/20 rounded-lg p-1"
            >
              {!imageError ? (
                <>
                  <img
                    id="nav-logo-image"
                    src="/logo.jpg"
                    alt="Webkingif Logo"
                    className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={() => setImageError(true)}
                  />
                  <span className="font-display font-extrabold text-xl tracking-tight text-primaryDark dark:text-cleanWhite sm:block">
                    web<span className="text-accentBlue">kingif</span>
                  </span>
                </>
              ) : (
                /* Typography alternative wrapper if image fallback fires */
                <div id="nav-logo-fallback" className="flex items-center gap-2">
                  <div className="h-9 w-9 bg-accentBlue rounded-xl flex items-center justify-center text-cleanWhite font-sans font-bold text-lg shadow-sm shadow-accentBlue/20 transition-transform duration-300 group-hover:scale-105">
                    W
                  </div>
                  <span className="font-display font-extrabold text-xl tracking-tight text-primaryDark dark:text-cleanWhite sm:block">
                    web<span className="text-accentBlue">kingif</span>
                  </span>
                </div>
              )}
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-navigation-menu"
            className="hidden md:flex items-center gap-8 font-sans font-medium text-sm text-mutedGray dark:text-gray-400"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  id={`nav-desktop-link-${link.id}`}
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.id, e)}
                  className={`relative py-2 px-1 transition-colors duration-200 hover:text-primaryDark dark:hover:text-cleanWhite focus:outline-none focus:text-primaryDark dark:focus:text-cleanWhite ${isActive ? "text-primaryDark dark:text-cleanWhite font-semibold" : ""
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accentBlue rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Call To Action & Theme Toggle Switcher */}
          <div className="hidden md:flex items-center gap-4">

            {/* Desktop Theme Switcher */}
            <button
              id="theme-toggle-desktop"
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-slate-800 text-mutedGray hover:text-primaryDark dark:text-gray-400 dark:hover:text-cleanWhite hover:bg-gray-50 dark:hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-accentBlue/40 cursor-pointer"
              title={theme === "dark" ? "Toggle Light mode" : "Toggle Dark mode"}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-4.5 w-4.5 text-yellow-500 animate-[spin_10s_linear_infinite]" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-slate-600" />
              )}
            </button>

            <a
              id="nav-desktop-cta-button"
              href="#contact"
              onClick={(e) => handleLinkClick("contact", e)}
              className="inline-flex items-center gap-2 bg-accentBlue hover:bg-accentBlue/90 active:bg-accentBlue text-cleanWhite px-5 py-2.5 rounded-xl font-sans font-semibold text-sm shadow-sm hover:shadow shadow-accentBlue/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accentBlue/40"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Right layout controller: Theme icon + burger menu trigger */}
          <div className="flex md:hidden items-center gap-2">

            {/* Mobile Theme Switcher Icon */}
            <button
              id="theme-toggle-mobile"
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-gray-150 dark:border-slate-850 text-mutedGray dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none transition-colors"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600" />
              )}
            </button>

            <button
              id="nav-mobile-hamburger-button"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-mutedGray dark:text-gray-400 hover:text-primaryDark dark:hover:text-cleanWhite hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-accentBlue/35 transition-colors duration-155"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-cleanWhite dark:bg-[#0F172A] border-b border-gray-100 dark:border-slate-805 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    id={`nav-mobile-link-${link.id}`}
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(link.id, e)}
                    className={`block px-4 py-3 rounded-xl font-sans font-medium text-base transition-colors ${isActive
                      ? "bg-accentBlue/10 dark:bg-accentBlue/15 text-accentBlue font-bold"
                      : "text-mutedGray dark:text-gray-450 hover:text-primaryDark dark:hover:text-cleanWhite hover:bg-gray-55 dark:hover:bg-slate-800"
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-2 px-4">
                <a
                  id="nav-mobile-cta-button"
                  href="#contact"
                  onClick={(e) => handleLinkClick("contact", e)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-accentBlue text-cleanWhite px-5 py-3 rounded-xl font-sans font-semibold text-base shadow-sm hover:bg-accentBlue/90 active:scale-95 transition-all text-center"
                >
                  Get in Touch
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
