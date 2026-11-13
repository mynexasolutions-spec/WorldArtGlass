"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
    </svg>
  );
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/why-us" },
  { name: "Contact", href: "/contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#17364b]/95 via-[#214863]/95 to-[#33617e]/90 backdrop-blur-xl border-b border-white/15 shadow-lg shadow-black/20 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-2.5 sm:py-3.5 flex items-center justify-between relative">
        
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center group py-0.5 shrink-0">
          <div className="relative h-9 sm:h-11 w-40 sm:w-52 transition transform group-hover:scale-105">
            <Image 
              src="/images/world_art_glass_official_logo.png" 
              alt="World Art Glass Hyderabad" 
              fill 
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  active
                    ? "text-[#7dd91a] drop-shadow-sm font-bold"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Phone Number Pill & WhatsApp */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Outlined Phone Number Pill */}
          <a
            href="tel:+919985597294"
            className="inline-flex items-center gap-1.5 sm:gap-2 border border-white/40 hover:border-white text-white font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition hover:bg-white/10 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-sky-300 shrink-0" />
            <span className="hidden xs:inline tracking-wide">+91 99855 97294</span>
          </a>

          {/* WhatsApp Direct Action Button */}
          <a
            href="https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20need%20a%20quotation%20for%20glass%20partition%20and%20interior%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 sm:gap-1.5 bg-[#7dd91a] hover:bg-[#71c917] text-white font-bold text-xs px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full shadow-md shadow-[#7dd91a]/25 transition transform hover:-translate-y-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" /> <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-white/90 hover:text-white focus:outline-none rounded-lg"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#17364b]/98 backdrop-blur-xl border-b border-white/15 px-4 sm:px-6 py-4 flex flex-col gap-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium py-2.5 px-3 rounded-xl transition-colors ${
                  active
                    ? "text-[#7dd91a] font-bold bg-white/10 border-l-4 border-[#7dd91a]"
                    : "text-white/90 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-white/15 mt-1 space-y-2">
            <a
              href="tel:+919985597294"
              className="w-full inline-flex items-center justify-center gap-2 border border-white/30 text-white font-bold text-xs py-2.5 rounded-xl hover:bg-white/10 transition"
            >
              <Phone className="w-4 h-4 text-sky-300" /> Call +91 99855 97294
            </a>
            <a
              href="https://wa.me/919985597294"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#7dd91a] text-white font-bold text-xs py-2.5 rounded-xl shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
