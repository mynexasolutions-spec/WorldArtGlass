"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar, { WhatsAppIcon } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  Phone,
  MapPin,
  Star,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Ruler,
  Clock,
  Sparkles,
  ExternalLink,
  Layers,
  Award,
  Zap,
  TrendingDown,
  DoorOpen,
  ShowerHead,
  Gem,
  Palette,
  Eye,
  Check,
  X,
  Menu,
  Briefcase,
  Home,
  Store,
  Hotel,
  Compass,
  Hammer
} from "lucide-react";

// Products & Services Data
const servicesList = [
  {
    id: "office-partitions",
    title: "Office Glass Partitions",
    tag: "Corporate Favorite",
    thickness: "10mm / 12mm",
    category: "commercial",
    image: "/images/cat_office_partitions.jpg",
    desc: "Modern acoustic glass partitions for IT corporate cabins, conference rooms, meeting suites and collaborative workspaces.",
    specs: ["Frameless or 45mm Slim Profile", "Acoustic Noise Reduction", "Clear, Frosted or Smart Film"]
  },
  {
    id: "slim-partitions",
    title: "Black Slim 45mm Partitions",
    tag: "Trending Minimalist",
    thickness: "45mm Profile",
    category: "commercial",
    image: "/images/cat_black_slim_partitions_v2.jpg",
    desc: "Ultra-slim 45mm matte black architectural aluminium frame partitions. Industrial loft and Manhattan style grids.",
    specs: ["45mm High-Tensile Aluminium", "Matte Black & Gunmetal Finish", "#1 Interior Designer Choice"]
  },
  {
    id: "sliding-doors",
    title: "Frameless & Sliding Glass Doors",
    tag: "Modern Luxury",
    thickness: "10mm / 12mm",
    category: "doors",
    image: "/images/cat_frameless_sliding_doors.jpg",
    desc: "Smooth gliding sliding doors, automatic doors, and swing doors equipped with heavy-duty Dorma/Ozone hydraulic floor springs.",
    specs: ["SS 304 Patch Fittings & Springs", "Long H-Type Matte Handles", "Soft-Close Sliding Track Systems"]
  },
  {
    id: "shower-cubicles",
    title: "Shower Cubicles & Enclosures",
    tag: "Bathroom Luxury",
    thickness: "10mm Toughened",
    category: "residential",
    image: "/images/cat_shower_cubicles.jpg",
    desc: "Custom-built frameless shower enclosures, corner cubicles, and sliding glass partitions with magnetic water seals.",
    specs: ["10mm Saint-Gobain Extra-Clear", "Anti-Rust Brass / SS304 Hinges", "Anti-Limescale Water Repellent"]
  },
  {
    id: "glass-railings",
    title: "Glass Railings & Balustrades",
    tag: "Safety & Panoramic View",
    thickness: "12mm / Laminated",
    category: "residential",
    image: "/images/cat_glass_railings.jpg",
    desc: "Unobstructed view glass railings for staircases, balconies, and terraces using solid stainless steel spigots or base-shoes.",
    specs: ["Heavy Duty SS 304 / 316 Spigots", "Frameless or Slim SS Handrails", "Engineered for Wind & Impact Load"]
  },
  {
    id: "acp-glazing",
    title: "ACP & Structural Glazing",
    tag: "Commercial Elevation",
    thickness: "Curtain Facade",
    category: "commercial",
    image: "/images/cat_acp_structural_glazing.jpg",
    desc: "Spider glazing, curtain wall structural glazing, and Aluminium Composite Panel (ACP) cladding for showrooms and IT towers.",
    specs: ["Aludecor / Alstone Grade ACP", "Saint-Gobain Solar Control Glass", "Executed Hindware Experience Centre"]
  },
  {
    id: "toughened-glass",
    title: "Toughened Saint-Gobain Glass",
    tag: "Core Specialty",
    thickness: "5mm to 12mm",
    category: "glass",
    image: "/images/cat_toughened_glass.jpg",
    desc: "High-strength thermal toughened safety glass with superior thermal shock resistance, CNC diamond-polished beveled edges.",
    specs: ["5mm, 6mm, 8mm, 10mm, 12mm", "100% Genuine Saint-Gobain", "Laser Logo on Every Panel"]
  },
  {
    id: "led-mirrors",
    title: "LED Mirrors & Smart Vanity",
    tag: "Smart Vanity",
    thickness: "5mm Flabeg",
    category: "decorative",
    image: "/images/cat_led_mirrors.jpg",
    desc: "Luxury backlit LED mirrors with feather-touch dimmer, 3-color light tuning (Warm, Natural, Cool White) and anti-fog heating.",
    specs: ["Capsule, Round, Oval, Irregular", "Touch Sensor & Defogger Pad", "Copper-Free High Definition"]
  },
  {
    id: "stained-glass",
    title: "Stained & Designer Glass",
    tag: "Artisan Craft",
    thickness: "Custom Thickness",
    category: "decorative",
    image: "/images/cat_stained_designer_glass.jpg",
    desc: "Hand-crafted stained glass, decorative leaded glass, floral motifs, acid-etched glass, and lacquered glass for feature walls.",
    specs: ["Pooja Rooms, Domes & Villas", "Sandblasted, Etched & Bevelled", "100% Custom Bespoke Artworks"]
  },
  {
    id: "custom-glass",
    title: "Custom Glass & Interiors",
    tag: "Bespoke Specs",
    thickness: "Custom Tailored",
    category: "decorative",
    image: "/images/cat_custom_glass_interiors.jpg",
    desc: "Custom glass works for interior designers: fluted glass wardrobe doors, lacquered kitchen splashbacks, bend glass & shelves.",
    specs: ["Fluted, Reeded, Tinted Bronze", "Precision CNC Cutting & Routing", "Architectural Grade Lacquered Glass"]
  }
];

// Real Live Projects Data
const liveProjects = [
  {
    id: 1,
    title: "Hindware Experience Centre",
    subtitle: "Structural Glazing & ACP Facade Elevation",
    location: "Hyderabad",
    category: "Commercial Glazing",
    image: "/images/project_hindware_glazing_v2.jpg"
  },
  {
    id: 2,
    title: "Corporate Executive Cabins",
    subtitle: "10mm Saint-Gobain Acoustic Glass Partitions",
    location: "Madhapur, Hyderabad",
    category: "Office Partitions",
    image: "/images/project_office_cabin.jpg"
  },
  {
    id: 3,
    title: "Black Slim 45mm Grid Doors",
    subtitle: "Industrial Architectural Profile with Dorma Hardware",
    location: "Gachibowli, Hyderabad",
    category: "Office Partitions",
    image: "/images/project_grid_doors_v2.jpg"
  },
  {
    id: 4,
    title: "Frameless Double Sliding Doors",
    subtitle: "Commercial Entrance with Floor Springs",
    location: "Banjara Hills, Hyderabad",
    category: "Doors & Sliding",
    image: "/images/project_double_doors.jpg"
  },
  {
    id: 5,
    title: "Luxury Showroom Glass Wall",
    subtitle: "Full Height 12mm Saint-Gobain Clear Display",
    location: "Hitec City, Hyderabad",
    category: "Showroom",
    image: "/images/project_big_partition.jpg"
  },
  {
    id: 6,
    title: "World Art Glass Concept Store",
    subtitle: "Flagship Showroom & Technical Office",
    location: "Aghapura, Goshamahal, Hyderabad",
    category: "Storefront",
    image: "/images/storefront_real.jpg"
  }
];

// Verified Client Reviews Data (8 Detailed Reviews for Auto Carousel)
const reviewsList = [
  {
    name: "Rahul Krishna",
    role: "IT Operations Manager, Madhapur",
    tag: "Office Partition",
    tagColor: "bg-sky-50 text-sky-600",
    text: "World Art Glass installed office partitions with black slim aluminium frames for our 4,000 sq ft office in Madhapur. The finish is top notch, Saint-Gobain 10mm glass is crystal clear, and the team completed everything 2 days before deadline!"
  },
  {
    name: "Syed Ahmed",
    role: "Villa Owner, Jubilee Hills",
    tag: "Shower Cubicle",
    tagColor: "bg-[#7dd91a]/15 text-[#5ea313]",
    text: "Ordered two frameless shower cubicles and staircase glass railings with spigots for our new duplex villa in Jubilee Hills. Their laser measurement was spot on, fittings are heavy duty SS 304, and pricing was honest."
  },
  {
    name: "Vikram Patil",
    role: "Principal Designer, Banjara Hills",
    tag: "Architect Partner",
    tagColor: "bg-purple-50 text-purple-600",
    text: "As an interior designer, I need zero defects. World Art Glass Hyderabad has been my go-to glass fabrication partner for 3 years. From custom LED mirrors to 45mm black slim partitions, their craftsmanship is unmatched."
  },
  {
    name: "Neha Sharma",
    role: "Managing Director, TechSpace Gachibowli",
    tag: "Acoustic Partition",
    tagColor: "bg-sky-50 text-sky-600",
    text: "Exceptional acoustic soundproofing on our board room glass partitions. No echo, zero rattling, and the hydraulic soft-close sliding doors work like butter. Super professional team!"
  },
  {
    name: "Rajeshwar Rao",
    role: "Commercial Developer, Financial District",
    tag: "Structural Glazing",
    tagColor: "bg-amber-50 text-amber-700",
    text: "Executed spider glazing and structural facade glass for our 5-storey commercial complex. They provided official Saint-Gobain batch test certificates and full GST invoices. Highly recommended in Hyderabad."
  },
  {
    name: "Dr. Ananya Reddy",
    role: "Luxury Penthouse Owner, Banjara Hills",
    tag: "Balcony Railing",
    tagColor: "bg-[#7dd91a]/15 text-[#5ea313]",
    text: "Custom smart LED mirrors and frameless glass balcony railings installed with SS 316 spigots. The panoramic view is completely unobstructed and the glass quality feels solid and ultra-safe."
  },
  {
    name: "Mohammed Zeeshan",
    role: "Principal Architect, Studio Matrix, Begumpet",
    tag: "Laser Precision",
    tagColor: "bg-purple-50 text-purple-600",
    text: "Their digital laser site survey is remarkably precise. Even with slight wall misalignments, their custom-cut Saint-Gobain glass fitted with sub-millimeter accuracy without any ugly caulking."
  },
  {
    name: "Sridhar Varma",
    role: "Retail Store Owner, Kondapur",
    tag: "Sliding Doors",
    tagColor: "bg-sky-50 text-sky-600",
    text: "Delivered 12mm heavy-duty sliding glass entrance doors with Dorma floor springs for our retail showroom. Prompt delivery, factory-direct wholesale pricing, and spotless clean installation."
  }
];

const tickerItems = [
  { text: "Toughened Saint-Gobain Glass", highlight: true },
  { text: "Black Slim 45mm Partitions", highlight: false },
  { text: "Frameless Sliding Glass Doors", highlight: false },
  { text: "Free Laser Site Survey in Hyderabad", highlight: true },
  { text: "38dB Acoustic Sound Isolation", highlight: false },
  { text: "Luxury Frameless Shower Cubicles", highlight: false },
  { text: "SS 304 Glass Railings & Balustrades", highlight: false },
  { text: "Spider & Structural Facade Glazing", highlight: false },
  { text: "100% Genuine Saint-Gobain Certified", highlight: true },
  { text: "Smart LED Touch Vanity Mirrors", highlight: false },
  { text: "Official GST Registered Fabricator", highlight: false },
  { text: "1,500+ Completed Projects Across Telangana", highlight: true }
];

export default function WorldArtGlassPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredSolutions = servicesList.slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      
      {/* Persistent Static / Fixed Header Navigation Bar */}
      <Navbar />

      {/* Hero Container with Full-Bleed Luxury Terrace Background */}
      <section id="home" className="relative bg-slate-950 text-slate-900 overflow-hidden min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8">
        {/* Architectural Glass Luxury Terrace Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_luxury_terrace_v2.jpg"
            alt="World Art Glass Modern Architectural Glass Elevation and Terrace Hyderabad"
            fill
            quality={95}
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Hero Section Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Semi-Transparent Frosted Glass Architectural Panel */}
          <div className="max-w-2xl bg-white/70 backdrop-blur-md border border-white/80 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl shadow-slate-900/10">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-sky-500/10 border border-sky-400/40 text-sky-800 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wide uppercase mb-3 sm:mb-4">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-600" />
              Toughened Saint-Gobain Glass Solutions • Hyderabad
            </div>

            {/* Headline in bold black */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight mb-3 sm:mb-4">
              Making Every Space A Masterpiece
            </h1>

            <p className="text-xs sm:text-base text-slate-700 font-medium leading-relaxed mb-5 sm:mb-6">
              We specialize in Toughened Saint-Gobain Glass solutions for IT Companies, Offices, Luxury Villas, Apartments, Showrooms &amp; Commercial Facades across Hyderabad.
            </p>

            {/* Dual Pill Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm px-6 py-2.5 sm:py-3 rounded-full shadow-lg shadow-sky-500/30 transition transform hover:-translate-y-0.5"
              >
                <Layers className="w-4 h-4 text-white" /> Services
              </a>

              <a
                href="https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20want%20to%20book%20a%20Free%20Site%20Measurement%20for%20my%20property%20in%20Hyderabad."
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-[#7dd91a] hover:bg-[#71c917] text-white font-bold text-xs sm:text-sm px-6 py-2.5 sm:py-3 rounded-full shadow-lg shadow-[#7dd91a]/40 transition transform hover:-translate-y-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp Now
              </a>
            </div>

            {/* Trust Motto in Dark Pill with White Text */}
            <div className="inline-flex flex-wrap items-center gap-2.5 sm:gap-4 bg-slate-950/85 backdrop-blur-md px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold text-white tracking-wider uppercase shadow-md">
              <span className="flex items-center gap-1 sm:gap-1.5 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Strong</span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1 sm:gap-1.5 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Stylish</span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1 sm:gap-1.5 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Trusted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar (Positioned below the hero section in the dedicated container area) */}
      <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-4 sm:mt-8 mb-4 sm:mb-8 w-full flex justify-center">
        <div className="w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl md:rounded-full shadow-xl shadow-slate-900/10 border border-slate-100 py-3.5 sm:py-5 px-3 sm:px-8 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-0 divide-y-0 md:divide-x divide-slate-100 text-center items-center">
          
          {/* Stat 1 */}
          <div className="p-1 sm:p-2 md:p-0 md:px-4 flex flex-col items-center">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-base lg:text-xl font-extrabold text-slate-900 tracking-tight">
              <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-sky-50 border border-sky-200/80 text-sky-600 shrink-0">
                <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2]" />
              </span>
              <span>NO.1 in Hyderabad</span>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">
              Top Rated Glass Fabricator
            </div>
          </div>

          {/* Stat 2 */}
          <div className="p-1 sm:p-2 md:p-0 md:px-4 flex flex-col items-center">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-base lg:text-xl font-extrabold text-slate-900 tracking-tight">
              <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-sky-50 border border-sky-200/80 text-sky-600 shrink-0">
                <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2]" />
              </span>
              <span>1,500+ Projects</span>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">
              Completed Installations
            </div>
          </div>

          {/* Stat 3 */}
          <div className="p-1 sm:p-2 md:p-0 md:px-4 flex flex-col items-center">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-base lg:text-xl font-extrabold text-slate-900 tracking-tight">
              <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-amber-50 border border-amber-200/90 text-amber-600 shrink-0">
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-600 stroke-[1.5]" />
              </span>
              <span>4.9 Rating</span>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">
              188+ Google Reviews
            </div>
          </div>

          {/* Stat 4 */}
          <div className="p-1 sm:p-2 md:p-0 md:px-4 flex flex-col items-center">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-base lg:text-xl font-extrabold text-slate-900 tracking-tight">
              <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-emerald-50 border border-emerald-200/80 text-[#7dd91a] shrink-0">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2]" />
              </span>
              <span>100% Genuine</span>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">
              Saint-Gobain Safety Glass
            </div>
          </div>

        </div>
      </div>

      {/* Spotlight Feature Section (Curved Light Sky-Blue Container Matching Reference Image) */}
      <section id="solutions" className="pt-4 sm:pt-6 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-sky-50 via-sky-100/60 to-blue-50 border border-sky-200/70 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              {/* Left Column Text */}
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-200/60 px-3 py-1 rounded-full mb-4">
                  <Building2 className="w-3.5 h-3.5 text-sky-600" /> Comprehensive Glass Platform
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
                  A Premier Architectural Glass Service Provider in Telangana
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  World Art Glass operates a dedicated showroom, fabrication facility, and on-site engineering team based in Goshamahal, Hyderabad. We provide end-to-end solutions — from laser site measurements and 3D architectural layout planning to CNC edge-polishing and on-time professional installation.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/80 backdrop-blur-sm border border-sky-200 rounded-2xl p-4">
                    <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7dd91a]" /> Free Measurement
                    </div>
                    <div className="text-xs text-slate-500">Laser survey anywhere in Hyderabad at zero cost.</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm border border-sky-200 rounded-2xl p-4">
                    <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7dd91a]" /> Official Tax GST
                    </div>
                    <div className="text-xs text-slate-500">Registered entity: 36GPSPS7449Q1ZB.</div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#7dd91a] hover:bg-[#71c917] text-white font-bold text-sm px-6 py-3 rounded-full shadow-md shadow-[#7dd91a]/25 transition transform hover:-translate-y-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
                >
                  Book Free Site Measurement
                </a>
              </div>

              {/* Right Column Image (Official World Art Glass Luxury Concept Storefront) */}
              <div className="relative aspect-video lg:h-[400px] rounded-3xl overflow-hidden shadow-xl border border-sky-200/90 group">
                <Image
                  src="/images/storefront_real.jpg"
                  alt="World Art Glass Luxury Concept Storefront Goshamahal Hyderabad"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Goal / Value Proposition Section ("Our Goal Of Making Every Project A Success") */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Goal Of Making Every <span className="text-sky-600">Project A Success</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Combining authentic Saint-Gobain safety glass with certified in-house craftsmanship.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-sky-50/70 border border-sky-100 rounded-3xl p-6 sm:p-7 transition hover:shadow-md hover:border-sky-300">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1.5">100% Genuine</div>
            <div className="text-sm sm:text-base font-bold text-sky-600 mb-2.5">Saint-Gobain Toughened</div>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              Every glass panel carries official laser-engraved certification stamps for guaranteed safety and high thermal shock resistance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#7dd91a]/10 border border-[#7dd91a]/25 rounded-3xl p-6 sm:p-7 transition hover:shadow-md hover:border-[#7dd91a]">
            <div className="w-12 h-12 rounded-2xl bg-[#7dd91a]/20 text-[#5ea313] flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-[#5ea313]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1.5">35% Faster</div>
            <div className="text-sm sm:text-base font-bold text-[#5ea313] mb-2.5">On-Time Execution</div>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              With full in-house fabrication and local installation vans in Hyderabad, we finish your partitions days ahead of schedule.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-3xl p-6 sm:p-7 transition hover:shadow-md hover:border-blue-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
              <TrendingDown className="w-6 h-6" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1.5">15% Lower Cost</div>
            <div className="text-sm sm:text-base font-bold text-blue-600 mb-2.5">Factory Direct Rates</div>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              Transparent, competitive pricing directly from the supplier with no middleman agent commissions and full GST compliance.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-indigo-50/70 border border-indigo-100 rounded-3xl p-6 sm:p-7 transition hover:shadow-md hover:border-indigo-300">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1.5">99% Quality &amp; Safety</div>
            <div className="text-sm sm:text-base font-bold text-indigo-600 mb-2.5">Precision Installation</div>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              Accurate laser survey, CNC diamond-polished edges, and Dorma/Ozone architectural hardware ensuring zero rattling or sagging.
            </p>
          </div>
        </div>
      </section>

      {/* "Our Solution" / Products & Services Section (Curved Light Sky Container Matching Reference Image) */}
      <section id="services" className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-b from-sky-100/70 via-sky-50 to-white border border-sky-200/80 rounded-3xl p-3 sm:p-6 lg:p-10 shadow-sm">
            
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Our Solutions</h2>
                <p className="text-slate-500 text-sm mt-1">High-performance architectural glass customized for modern spaces.</p>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-full transition shadow-md"
              >
                View All Services
              </Link>
            </div>

            {/* Grid of Featured Cards: 2 cards per row on mobile (grid-cols-2), 4 on desktop (lg:grid-cols-4) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
              {featuredSolutions.map((service, index) => (
                <div
                  key={service.id}
                  className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col group ${
                    index === 0
                      ? "border-sky-500 shadow-md sm:shadow-lg shadow-sky-100 ring-1 sm:ring-2 ring-sky-500/20"
                      : "border-slate-200/90 hover:border-sky-300 hover:shadow-md"
                  }`}
                >
                  {/* Image Header */}
                  <div className="relative h-28 xs:h-36 sm:h-48 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-slate-900/80 backdrop-blur-md text-white text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-white/10">
                      {service.tag}
                    </div>
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-sky-600 text-white text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-md shadow-sm">
                      {service.thickness}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-2.5 sm:p-5 flex flex-col flex-grow">
                    <h3 className="text-xs sm:text-base lg:text-lg font-bold text-slate-900 mb-1 sm:mb-1.5 group-hover:text-sky-600 transition line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-[10px] sm:text-sm text-slate-600 leading-normal sm:leading-relaxed mb-2.5 sm:mb-4 flex-grow line-clamp-2">
                      {service.desc}
                    </p>

                    <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-between pt-2 sm:pt-3 border-t border-slate-100 gap-1.5 mt-auto">
                      <Link
                        href="/services#calculator"
                        className="text-[10px] sm:text-sm font-bold text-sky-600 hover:text-sky-800 transition text-center xs:text-left"
                      >
                        Estimate Cost
                      </Link>
                      <a
                        href={`https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                        target="_blank"
                        className="inline-flex items-center justify-center gap-1 text-[10px] sm:text-xs font-bold bg-[#7dd91a] hover:bg-[#71c917] text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition shadow-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
                      >
                        <WhatsAppIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Inquire
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Precision Craftsmanship & Engineering Section (Image Left, Text Right) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column: Photorealistic Architectural Glass Installation Image */}
            <div className="lg:col-span-6 order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200/90 bg-slate-950 group">
                <div className="relative h-[280px] sm:h-[400px] lg:h-[500px] w-full overflow-hidden">
                  <Image
                    src="/images/architectural_glass_craftsmanship.jpg"
                    alt="World Art Glass Architectural Toughened Glass Fabrication and Installation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={95}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  
                  {/* Floating Top Badge */}
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#7dd91a]" />
                      Genuine Saint-Gobain Toughened Glass
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Narrative & Core Advantages Text */}
            <div className="lg:col-span-6 order-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100/90 border border-sky-200/80 px-3.5 py-1 rounded-full mb-3.5 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" /> Architectural Precision &amp; Engineering
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Engineered With Precision. Built With Genuine Saint-Gobain Glass.
              </h2>

              <p className="text-slate-600 text-xs sm:text-base leading-relaxed mb-6">
                From high-density IT corporate suites in HITEC City and Gachibowli to private luxury villas in Jubilee Hills, World Art Glass delivers bespoke architectural glass installations engineered for acoustic privacy, modern aesthetics, and lifelong safety.
              </p>

              {/* 4 Feature Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                
                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 hover:border-sky-300 transition">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                    <span className="w-6 h-6 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                      <Ruler className="w-3.5 h-3.5" />
                    </span>
                    Laser Site Survey
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
                    Precision 3D laser measurement ensures seamless alignment even against uneven or out-of-plumb walls.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 hover:border-sky-300 transition">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                    <span className="w-6 h-6 rounded-lg bg-emerald-100 text-[#5ea313] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </span>
                    100% Certified Glass
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
                    5x stronger than regular annealed glass, certified with permanent laser logo and GST batch records.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 hover:border-sky-300 transition">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                    <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                      <Building2 className="w-3.5 h-3.5" />
                    </span>
                    38dB Acoustic Comfort
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
                    Slim aluminium profiles with airtight EPDM perimeter gaskets to keep cabins and conference rooms quiet.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 hover:border-sky-300 transition">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                    <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                    </span>
                    Fast Turnaround
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
                    Fabricated at our Goshamahal facility and installed by senior glaziers within promised deadlines.
                  </p>
                </div>

              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20would%20like%20to%20schedule%20a%20Free%20Site%20Measurement%20and%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#7dd91a] hover:bg-[#71c917] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg shadow-[#7dd91a]/30 transition transform hover:-translate-y-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
                >
                  <WhatsAppIcon className="w-4 h-4" /> Book Free Site Measurement
                </a>

                <Link
                  href="/services#calculator"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition"
                >
                  <Layers className="w-4 h-4 text-sky-400" /> Calculate Project Cost
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Real Projects In Action (Deep Blue Architectural Container Matching Reference Image) */}
      <section id="projects" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-sky-400 bg-sky-950/80 border border-sky-800/80 px-3 py-1 rounded-full mb-3 inline-block">
                Verified Executions in Hyderabad
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Real Projects In Action
              </h2>
              <p className="text-slate-400 text-sm mt-1">Inspected and installed across IT parks, showrooms, and villas in Telangana.</p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-full transition shadow-md"
              >
                View Dedicated Projects Page
              </Link>
            </div>
          </div>

          {/* Cards Grid - 2 cards in one row on mobile (grid-cols-2), 4 on desktop (lg:grid-cols-4) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {liveProjects.slice(0, 4).map((project) => (
              <div
                key={project.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-sky-500/50 transition group flex flex-col"
              >
                <div className="relative h-28 xs:h-36 sm:h-52 w-full bg-slate-950 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    quality={95}
                    className={`object-cover ${project.id === 3 ? "object-top" : "object-[center_35%]"} group-hover:scale-105 transition duration-500`}
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-slate-950/80 backdrop-blur-md text-sky-300 text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-sky-800/50">
                    {project.category}
                  </div>
                </div>

                <div className="p-2.5 sm:p-5 flex flex-col flex-grow">
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold text-white mb-0.5 sm:mb-1 group-hover:text-sky-400 transition line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-[10px] sm:text-sm text-slate-400 mb-2 sm:mb-3 line-clamp-1 sm:line-clamp-none">{project.subtitle}</p>

                  <div className="mt-auto pt-2 sm:pt-3 border-t border-slate-800 flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-1">
                    <span className="text-[9px] sm:text-xs text-slate-400 flex items-center gap-1 line-clamp-1">
                      <MapPin className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-sky-400 shrink-0" /> {project.location}
                    </span>
                    <a
                      href={`https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20am%20interested%20in%20a%20project%20like%20${encodeURIComponent(project.title)}.`}
                      target="_blank"
                      className="text-[10px] sm:text-sm font-semibold text-sky-400 hover:text-sky-300 transition text-right xs:text-left"
                    >
                      Inquire Similar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partner / Trust Badge Strip (Matching bottom strip in Image 1) */}
          <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl py-3 px-4 text-xs font-bold text-slate-300">
              Saint-Gobain Certified
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl py-3 px-4 text-xs font-bold text-slate-300">
              Dorma Architectural
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl py-3 px-4 text-xs font-bold text-slate-300">
              Ozone Patch Fittings
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl py-3 px-4 text-xs font-bold text-slate-300">
              Aludecor / Alstone ACP
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl py-3 px-4 text-xs font-bold text-slate-300">
              GST Registered Bill
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl py-3 px-4 text-xs font-bold text-slate-300">
              Free Laser Survey
            </div>
          </div>

        </div>
      </section>



      {/* Ideal For Verticals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-sky-600 bg-sky-100 px-3 py-1 rounded-full mb-3 inline-block">
              Architectural Verticals
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Tailored For Every Commercial &amp; Residential Need
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover:shadow-md transition">
              <Briefcase className="w-8 h-8 text-sky-600 mx-auto mb-2" />
              <div className="font-bold text-xs text-slate-900">IT Companies &amp; Offices</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover:shadow-md transition">
              <Home className="w-8 h-8 text-sky-600 mx-auto mb-2" />
              <div className="font-bold text-xs text-slate-900">Villas &amp; Apartments</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover:shadow-md transition">
              <Store className="w-8 h-8 text-sky-600 mx-auto mb-2" />
              <div className="font-bold text-xs text-slate-900">Showrooms &amp; Retail</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover:shadow-md transition">
              <Hotel className="w-8 h-8 text-sky-600 mx-auto mb-2" />
              <div className="font-bold text-xs text-slate-900">Hotels &amp; Hospitality</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover:shadow-md transition">
              <Compass className="w-8 h-8 text-sky-600 mx-auto mb-2" />
              <div className="font-bold text-xs text-slate-900">Interior Designers</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover:shadow-md transition">
              <Hammer className="w-8 h-8 text-sky-600 mx-auto mb-2" />
              <div className="font-bold text-xs text-slate-900">Renovation Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section (4.9 Stars, 188+ Reviews) - Auto Carousel in a row */}
      <section id="reviews" className="py-16 bg-slate-100/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-amber-700 bg-amber-100/90 border border-amber-200/80 px-3.5 py-1 rounded-full mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-600 stroke-[1.5]" />
              Client Feedback
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Rated 4.9 Stars Across 188+ Real Clients
            </h2>
            <p className="text-slate-500 text-sm mt-1">Read reviews from verified property owners, architects, and IT managers in Hyderabad.</p>
          </div>
        </div>

        {/* Continuous Auto-Scrolling Row of 8 Review Cards bounded by site-wide side padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full overflow-hidden py-4 rounded-3xl">
            {/* Subtle gradient fades on left & right within container */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-slate-100/90 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-slate-100/90 to-transparent z-10 pointer-events-none"></div>

            <div className="animate-marquee flex gap-6">
              {[...reviewsList, ...reviewsList].map((review, i) => (
                <div
                  key={i}
                  className="w-[300px] sm:w-[380px] md:w-[420px] shrink-0 bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1.5 text-amber-400 mb-3.5">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-5">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                  <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="font-extrabold text-sm sm:text-base text-slate-900">{review.name}</div>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">{review.role}</div>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${review.tagColor}`}>
                      {review.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
          <a
            href="https://g.co/kgs/6xvK9Z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 px-5 py-2.5 rounded-full hover:bg-slate-50 transition shadow-sm"
          >
            Read All 188+ Google Reviews on Google Maps <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          {/* Verification & Trust Endorsement Texts */}
          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-4 max-w-2xl mx-auto leading-relaxed">
            Verified ratings from IT corporate clients, architects, and luxury homeowners across Hyderabad &amp; Telangana.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 mt-3 text-[11px] sm:text-xs text-slate-500 font-semibold">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7dd91a]" /> 100% Genuine Feedback
            </span>
            <span className="text-slate-300 hidden sm:inline">&bull;</span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> Certified Saint-Gobain Installations
            </span>
            <span className="text-slate-300 hidden sm:inline">&bull;</span>
            <span className="inline-flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-sky-600" /> Free Hyderabad Site Inspection
            </span>
          </div>
        </div>
      </section>

      {/* Continuous Right-to-Left Scrolling Text Ticker Ribbon */}
      <div className="relative w-full bg-slate-900 border-y border-white/10 py-3.5 sm:py-4 overflow-hidden shadow-inner select-none">
        {/* Subtle Edge Vignette Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-ticker flex items-center gap-6 sm:gap-8 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 sm:gap-8 shrink-0">
              <span
                className={`text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors ${
                  item.highlight
                    ? "text-[#7dd91a] drop-shadow-[0_0_10px_rgba(125,217,26,0.35)]"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {item.text}
              </span>
              <span className="flex items-center justify-center text-sky-400 opacity-70">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Clean Reusable Footer & Floating WhatsApp */}
      <Footer />
      <FloatingWhatsApp />

    </div>
  );
}
