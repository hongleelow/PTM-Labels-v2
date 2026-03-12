"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white border-b border-ptm-gray-light transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo + tagline */}
        <Link href="/" className="flex flex-col" onClick={closeMobile}>
          <span className="font-heading text-xl font-bold text-ptm-navy">
            {siteConfig.name}
          </span>
          <span className="text-caption text-ptm-slate-light">To Care</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-body-sm font-medium transition-colors duration-200 ${
                isActive(item.href)
                  ? "text-ptm-blue"
                  : "text-ptm-slate hover:text-ptm-blue"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="block h-0.5 bg-ptm-blue rounded-full mt-0.5" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm" href={siteConfig.nav.cta.href}>
            {siteConfig.nav.cta.label}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ptm-navy md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile slide-in panel */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-ptm-gray-light px-4 py-4">
          {siteConfig.nav.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className={`rounded-md px-3 py-2 text-body-md font-medium transition-colors duration-200 ${
                isActive(item.href)
                  ? "bg-ptm-blue/5 text-ptm-blue"
                  : "text-ptm-slate hover:bg-ptm-ice hover:text-ptm-blue"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-3 px-3">
            <Button
              variant="primary"
              size="md"
              href={siteConfig.nav.cta.href}
              className="w-full"
            >
              {siteConfig.nav.cta.label}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
