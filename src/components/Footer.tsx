import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <Link href="/" className="inline-block relative h-12 w-48 mb-3">
            <Image 
              src="/images/world_art_glass_official_logo.png" 
              alt="World Art Glass Logo" 
              fill 
              className="object-contain object-left"
            />
          </Link>
          <p className="text-slate-400 leading-relaxed mb-3">
            Hyderabad’s premier supplier and installer of Toughened Saint-Gobain Glass solutions. Dedicated to structural strength, modern styling, and dependable project execution.
          </p>
          <div className="text-[#7dd91a] text-xs font-semibold">GSTIN: 36GPSPS7449Q1ZB</div>
        </div>

        <div>
          <div className="text-white font-bold text-sm mb-3">Products &amp; Services</div>
          <ul className="space-y-1.5">
            <li><Link href="/services#office-partitions" className="hover:text-white transition">Office Glass Partitions</Link></li>
            <li><Link href="/services#slim-partitions" className="hover:text-white transition">Black Slim 45mm Partitions</Link></li>
            <li><Link href="/services#sliding-doors" className="hover:text-white transition">Frameless Sliding Doors</Link></li>
            <li><Link href="/services#shower-cubicles" className="hover:text-white transition">Shower Cubicles &amp; Enclosures</Link></li>
            <li><Link href="/services#glass-railings" className="hover:text-white transition">Glass Railings &amp; Balustrades</Link></li>
            <li><Link href="/services#acp-glazing" className="hover:text-white transition">ACP &amp; Structural Glazing</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-bold text-sm mb-3">Quick Navigation</div>
          <ul className="space-y-1.5">
            <li><Link href="/" className="hover:text-white transition">Home Overview</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Our Services</Link></li>
            <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
            <li><Link href="/why-us" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            <li><Link href="/services#calculator" className="hover:text-white transition">Glass Cost Estimator</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-bold text-sm mb-3">Contact &amp; Works</div>
          <p className="mb-2">New Aghapura X Road, Goshamahal, Hyderabad – 500001, Telangana.</p>
          <p className="mb-2">Phone: +91 99855 97294 / +91 86392 19930</p>
          <a
            href="https://wa.me/919985597294"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#7dd91a] hover:text-[#95e63e] font-semibold mt-1"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" /> Chat with Senior Fabricator
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800/80 flex flex-wrap justify-between items-center gap-3 text-slate-500">
        <div>
          © 2026 World Art Glass Hyderabad. All Rights Reserved.
        </div>
        <div>
          Strong • Stylish • Trusted • Premium Saint-Gobain Toughened Glass Solutions
        </div>
      </div>
    </footer>
  );
}

