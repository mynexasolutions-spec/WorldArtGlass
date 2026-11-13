"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar, { WhatsAppIcon } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  Sparkles,
  MapPin,
  CheckCircle2,
  Building2,
  Calendar,
  ShieldCheck,
  Star
} from "lucide-react";

const projectList = [
  {
    id: "hindware-showroom",
    title: "Hindware Experience Centre",
    client: "Hindware Commercial Showroom",
    location: "Hyderabad, Telangana",
    category: "commercial",
    image: "/images/project_hindware_glazing_v2.jpg",
    area: "3,200 Sq.Ft",
    glass: "12mm Saint-Gobain Solar Control",
    hardware: "Aludecor ACP & Heavy Duty Spider Brackets",
    time: "12 Working Days",
    desc: "Complete architectural exterior elevation featuring spider-supported structural glazing and premium metallic ACP cladding."
  },
  {
    id: "madhapur-it-office",
    title: "Corporate Executive Cabins",
    client: "Global Software Services",
    location: "Hitec City / Madhapur",
    category: "corporate",
    image: "/images/project_office_cabin.jpg",
    area: "4,500 Sq.Ft",
    glass: "10mm Saint-Gobain Toughened",
    hardware: "Black Slim 45mm Aluminium Profile & Dorma Floor Springs",
    time: "7 Working Days",
    desc: "Acoustic conference rooms, executive private cabins, and collaborative breakout cubicles with matte black minimalist frames."
  },
  {
    id: "jubilee-hills-villa",
    title: "Jubilee Hills Luxury Villa",
    client: "Private Residence",
    location: "Road No. 36, Jubilee Hills",
    category: "residential",
    image: "/images/cat_glass_railings.jpg",
    area: "1,800 Sq.Ft",
    glass: "12mm Toughened Extra-Clear",
    hardware: "Solid SS 316 Base Spigots & Minimal Handrail",
    time: "5 Working Days",
    desc: "Frameless panoramic glass balustrades installed on outdoor balconies and interior floating cantilever staircases."
  },
  {
    id: "gachibowli-tech-park",
    title: "Black Slim 45mm Grid Doors",
    client: "FinTech Enterprise Hub",
    location: "Financial District, Gachibowli",
    category: "corporate",
    image: "/images/project_grid_doors_v2.jpg",
    area: "5,800 Sq.Ft",
    glass: "12mm Acoustic Toughened",
    hardware: "Ozone Hydraulic Patch Fittings & SS 304 Pull Handles",
    time: "10 Working Days",
    desc: "Full floor interior glass partitions and grid doors designed for maximum acoustic sound insulation up to 38dB."
  },
  {
    id: "banjara-hills-storefront",
    title: "Banjara Hills Concept Storefront",
    client: "World Art Glass Concept Store",
    location: "Goshamahal / Banjara Hills",
    category: "commercial",
    image: "/images/storefront_real.jpg",
    area: "2,400 Sq.Ft",
    glass: "12mm Saint-Gobain Architectural Glass",
    hardware: "SS 304 Patch Fittings & Concealed Overhead Closers",
    time: "Completed",
    desc: "Flagship luxury showroom front displaying ultra-clear toughened panels with custom etched frosted architectural patterns."
  },
  {
    id: "kondapur-penthouse",
    title: "Kondapur Luxury Penthouse",
    client: "High-Rise Sky Villa",
    location: "Kondapur, Hyderabad",
    category: "residential",
    image: "/images/cat_shower_cubicles.jpg",
    area: "650 Sq.Ft",
    glass: "10mm Saint-Gobain Toughened",
    hardware: "Anti-Rust Brass Hinges & Magnetic Water Seals",
    time: "3 Working Days",
    desc: "Custom corner and sliding frameless shower cubicles with anti-limescale water repellent coating."
  }
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all"
    ? projectList
    : projectList.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* Hero Banner for Projects */}
      <section className="relative bg-slate-950 text-white overflow-hidden pt-28 sm:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_skyscrapers.jpg"
            alt="World Art Glass Projects Hyderabad"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-4 uppercase tracking-wider">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <span className="text-white">Projects</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/30 text-sky-300 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              1,500+ Verified Installations
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Real Architectural Projects Across Hyderabad
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore our verified Toughened Glass installations across IT companies in Hitec City, commercial showrooms in Banjara Hills, and luxury villas in Jubilee Hills.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header & Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Featured Executions ({filtered.length})
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Completed on schedule with 100% genuine Saint-Gobain glass &amp; official GST billing.
              </p>
            </div>

            {/* Filter Pills with Horizontal Scrolling on Mobile */}
            <div className="flex items-center gap-2 bg-white border border-slate-200 p-1.5 rounded-2xl sm:rounded-full shadow-sm overflow-x-auto max-w-full">
              <button
                onClick={() => setFilter("all")}
                className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-full transition whitespace-nowrap shrink-0 ${
                  filter === "all" ? "bg-sky-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All Projects ({projectList.length})
              </button>
              <button
                onClick={() => setFilter("corporate")}
                className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-full transition whitespace-nowrap shrink-0 ${
                  filter === "corporate" ? "bg-sky-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                IT &amp; Corporate Offices
              </button>
              <button
                onClick={() => setFilter("commercial")}
                className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-full transition whitespace-nowrap shrink-0 ${
                  filter === "commercial" ? "bg-sky-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Commercial Facades &amp; Showrooms
              </button>
              <button
                onClick={() => setFilter("residential")}
                className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-full transition whitespace-nowrap shrink-0 ${
                  filter === "residential" ? "bg-sky-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Luxury Villas &amp; Railings
              </button>
            </div>
          </div>

          {/* Project Cards Grid: 2 cards in one row on mobile (grid-cols-2) */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-28 xs:h-36 sm:h-64 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    quality={95}
                    className={`object-cover ${project.id === "gachibowli-tech-park" ? "object-top" : "object-[center_35%]"} group-hover:scale-105 transition duration-500`}
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-slate-950/80 backdrop-blur-md text-white text-xs sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/10 flex items-center gap-1 shadow-sm">
                    <MapPin className="w-3 h-3 text-sky-400 shrink-0" /> <span className="line-clamp-1">{project.location}</span>
                  </div>
                  <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-[#7dd91a] text-white text-xs sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
                    {project.area}
                  </div>
                </div>

                <div className="p-2.5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-slate-900 mb-1 group-hover:text-sky-600 transition leading-snug line-clamp-2 min-h-[2.8rem] sm:min-h-0">
                    {project.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-slate-500 mb-2 sm:mb-3 line-clamp-1">
                    Client: {project.client}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-normal sm:leading-relaxed mb-3 sm:mb-4 flex-grow line-clamp-3">
                    {project.desc}
                  </p>

                  <div className="hidden sm:block bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-5 space-y-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">Glass:</span> {project.glass}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">Fittings:</span> {project.hardware}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">Timeline:</span> {project.time}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20saw%20your%20project%20*${encodeURIComponent(project.title)}*%20and%20want%20a%20similar%20glass%20solution%20for%20my%20site.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#7dd91a] hover:bg-[#71c917] text-white font-bold text-xs sm:text-sm py-2 sm:py-2.5 px-3 sm:px-4 rounded-full transition shadow-md shadow-[#7dd91a]/25 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] mt-auto"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> <span className="line-clamp-1">Inquire Similar</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Free Site Measurement CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs uppercase tracking-wider font-bold text-sky-400 bg-sky-950 border border-sky-800 px-3 py-1 rounded-full mb-3 inline-block">
              Start Your Project
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Want to Discuss Your Commercial or Residential Space?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
              Our expert fabrication team provides free site visits, 3D architectural mockups, and laser-accurate measurements across all areas in Hyderabad.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-sky-500/25 transition transform hover:-translate-y-0.5"
              >
                Book Free Site Visit
              </Link>
              <a
                href="https://wa.me/919985597294"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7dd91a] hover:bg-[#71c917] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-[#7dd91a]/30 transition transform hover:-translate-y-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
              >
                <WhatsAppIcon className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

