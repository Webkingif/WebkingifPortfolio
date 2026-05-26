import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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
  };

  return (
    <footer id="global-portfolio-footer" className="bg-[#0B0F13] text-cleanWhite py-12 md:py-16 border-t border-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12">

        {/* Top block structure */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-gray-800">

          {/* Brand block on Left */}
          <div className="flex items-center gap-3">
            <img
              id="nav-logo-image"
              src="/logo.jpg"
              alt="Webkingif Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"

            />
            <span className="font-display font-extrabold text-xl tracking-tight text-cleanWhite">
              web<span className="text-accentBlue">kingif</span>
            </span>
          </div>

          {/* Navigation link group in Center */}
          <nav aria-label="Footer navigation links map" className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-sans font-semibold text-sm text-mutedGray">
            {footerLinks.map((link) => (
              <a
                id={`footer-link-${link.name.toLowerCase()}`}
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(link.href.replace("#", ""), e)}
                className="hover:text-cleanWhite transition-colors duration-160 focus:outline-none focus:text-cleanWhite"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Scroll back to top button on Right */}
          <button
            id="footer-scroll-to-top-btn"
            type="button"
            onClick={handleScrollToTop}
            className="flex items-center justify-center h-10 w-10 bg-neutralLight/10 hover:bg-accentBlue text-gray-300 hover:text-cleanWhite rounded-xl transition-all duration-200 active:scale-90"
            aria-label="Scroll back to top of the screen"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        {/* Bottom copyright metadata block */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-mutedGray text-center sm:text-left">
          <p className="leading-relaxed">
            &copy; {currentYear} Idowu Femi (Webkingif). Built to standard guidelines. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <span className="h-1.5 w-1.5 bg-accentBlue rounded-full"></span>
            <span>Premium Web engineering</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
