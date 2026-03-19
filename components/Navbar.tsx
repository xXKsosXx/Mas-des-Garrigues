"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "La Carte", href: "#carte" },
    { label: "Formules", href: "#formules" },
    { label: "Galerie", href: "#galerie" },
    { label: "Avis", href: "#avis" },
    { label: "Contact", href: "#reservation" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(13,11,8,0.95)] backdrop-blur-[12px] border-b border-[rgba(200,169,110,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-baseline gap-1">
          <span className="font-display text-or text-xl font-light tracking-wide">
            Le Mas
          </span>
          <span className="font-display text-or text-xl font-light italic">
            des Garrigues
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-creme-light opacity-70 hover:opacity-100 transition-opacity uppercase tracking-[0.2em] text-[12px] font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            className="border border-or text-or px-6 py-2.5 uppercase tracking-[0.2em] text-[11px] hover:bg-or hover:text-noir transition-all duration-300"
          >
            Réserver une table
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px bg-or transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-or transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-or transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[rgba(13,11,8,0.98)] backdrop-blur-xl border-t border-[rgba(200,169,110,0.1)]">
          <div className="flex flex-col items-center gap-6 py-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-creme-light opacity-70 hover:opacity-100 transition-opacity uppercase tracking-[0.2em] text-[12px]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={() => setMobileOpen(false)}
              className="border border-or text-or px-6 py-2.5 uppercase tracking-[0.2em] text-[11px] hover:bg-or hover:text-noir transition-all duration-300"
            >
              Réserver une table
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
