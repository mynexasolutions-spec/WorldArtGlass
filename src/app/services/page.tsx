"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar, { WhatsAppIcon } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  Sparkles,
  Layers,
  ShieldCheck,
  Building2,
  Check,
  Ruler,
  DoorOpen,
  ShowerHead,
  Gem,
  Palette,
  Eye,
  ExternalLink
} from "lucide-react";

const servicesData = [
  {
    id: "office-partitions",
    title: "Office Glass Partitions",
    tag: "Corporate Favorite",
    thickness: "10mm / 12mm",
    category: "commercial",
    image: "/images/cat_office_partitions.jpg",
    desc: "Modern acoustic glass partitions for IT corporate cabins, conference rooms, executive suites, and collaborative workspaces across Hyderabad.",
    features: [
      "Frameless or 45mm Slim Profile",
      "Acoustic Noise Reduction (Up to 38dB)",
      "Clear, Frosted or Switchable Smart Film",
      "Heavy-duty SS 304 floor springs and hydraulic pivots"
    ]
  },
  {
    id: "slim-partitions",
    title: "Black Slim 45mm Partitions",
    tag: "Trending Minimalist",
    thickness: "45mm Profile",
    category: "commercial",
    image: "/images/cat_black_slim_partitions_v2.jpg",
    desc: "Ultra-slim 45mm matte black architectural aluminium frame partitions. Industrial loft and Manhattan style grids highly favored by top architects.",
    features: [
      "45mm High-Tensile Architectural Aluminium",
      "Matte Black & Gunmetal Anodized Finish",
      "#1 Interior Designer & Architect Choice",
      "Concealed wiring and door pivot integration"
    ]
  },
  {
    id: "sliding-doors",
    title: "Frameless & Sliding Glass Doors",
    tag: "Modern Luxury",
    thickness: "10mm / 12mm",
    category: "doors",
    image: "/images/cat_frameless_sliding_doors.jpg",
    desc: "Smooth gliding sliding doors, automatic sensor doors, and swing doors equipped with heavy-duty Dorma/Ozone hydraulic floor springs.",
    features: [
      "SS 304 Heavy-Duty Patch Fittings & Floor Springs",
      "Long H-Type Matte Black / Brushed Steel Handles",
      "Soft-Close Sliding Overhead Track Systems",
      "Tested for over 500,000 opening cycles"
    ]
  },
  {
    id: "shower-cubicles",
    title: "Shower Cubicles & Enclosures",
    tag: "Bathroom Luxury",
    thickness: "10mm Toughened",
    category: "residential",
    image: "/images/cat_shower_cubicles.jpg",
    desc: "Custom-built frameless shower enclosures, corner cubicles, and sliding glass partitions with magnetic water seals.",
    features: [
      "10mm Saint-Gobain Extra-Clear Toughened Glass",
      "Anti-Rust Brass / SS 304 Hinges and Reinforcement Bars",
      "Anti-Limescale Water Repellent Coating",
      "Magnetic PVC seals preventing water leakage"
    ]
  },
  {
    id: "glass-railings",
    title: "Glass Railings & Balustrades",
    tag: "Safety & Panoramic View",
    thickness: "12mm / Laminated",
    category: "residential",
    image: "/images/cat_glass_railings.jpg",
    desc: "Unobstructed view glass railings for staircases, balconies, and terraces using solid stainless steel spigots or aluminium base-shoes.",
    features: [
      "Heavy Duty SS 304 / 316 Spigots & Base Shoes",
      "Frameless or Slim SS Top Handrails",
      "Engineered for high wind load and impact resistance",
      "Compliant with international safety building codes"
    ]
  },
  {
    id: "acp-glazing",
    title: "ACP & Structural Glazing",
    tag: "Commercial Elevation",
    thickness: "Curtain Facade",
    category: "commercial",
    image: "/images/cat_acp_structural_glazing.jpg",
    desc: "Spider glazing, curtain wall structural glazing, and Aluminium Composite Panel (ACP) cladding for showrooms, retail outlets, and corporate towers.",
    features: [
      "Aludecor / Alstone Premium Grade ACP Sheets",
      "Saint-Gobain Solar Control Energy Efficient Glass",
      "Executed Hindware Experience Centre & Commercial Hubs",
      "Weather-sealed with Dow Corning structural silicone"
    ]
  },
  {
    id: "toughened-supply",
    title: "Toughened Glass Supply (5mm - 12mm)",
    tag: "Factory Direct",
    thickness: "5mm to 12mm",
    category: "commercial",
    image: "/images/cat_toughened_glass.jpg",
    desc: "Direct wholesale and retail supply of genuine Saint-Gobain toughened glass cut to exact site dimensions with computer-controlled CNC edge polishing.",
    features: [
      "100% Genuine Saint-Gobain Glass with permanent laser logo",
      "CNC Flat Edge Polishing & Hole Drilling",
      "Wholesale factory pricing without intermediaries",
      "Full GST compliant tax invoices"
    ]
  },
  {
    id: "stained-designer",
    title: "Stained & Designer Glass Panels",
    tag: "Bespoke Artistry",
    thickness: "8mm / 10mm",
    category: "decorative",
    image: "/images/cat_stained_designer_glass.jpg",
    desc: "Handcrafted stained glass, fluted glass, frosted geometric motifs, and decorative lacquered glass panels for pooja units and luxury feature walls.",
    features: [
      "Custom artistic patterns, religious motifs & corporate logos",
      "Acid-etched, fluted, and tinted glass variants",
      "UV-bonded colored vitrified glass inlays",
      "Ideal for partition accents, doors, and backdrops"
    ]
  },
  {
    id: "led-mirrors",
    title: "Custom Smart LED Mirrors",
    tag: "Interior Elegance",
    thickness: "5mm Saint-Gobain",
    category: "decorative",
    image: "/images/cat_led_mirrors.jpg",
    desc: "High-definition copper-free Saint-Gobain mirrors equipped with capacitive touch sensors, defogger pads, and tri-color ambient LED backlighting.",
    features: [
      "Saint-Gobain Mirox High-Definition Copper-Free Glass",
      "Touch sensor switch with dimming capabilities",
      "Anti-fog heating film for steam-free clarity",
      "Warm White, Natural White & Cool Daylight lighting"
    ]
  },
  {
    id: "custom-wardrobes",
    title: "Luxury Glass Wardrobes & Interiors",
    tag: "Interior Luxury",
    thickness: "Slim Aluminium",
    category: "residential",
    image: "/images/cat_custom_glass_interiors.jpg",
    desc: "Bespoke glass wardrobes, walk-in dressing suites, and interior display cabinets with integrated ambient LED lighting and sleek anodized aluminium frames.",
    features: [
      "Ultra-slim anodized aluminium profiles with concealed hinges",
      "Smoked grey, bronze tinted, fluted, or clear toughened glass",
      "Integrated sensor-activated warm LED strip illumination",
      "Custom internal shelving, luxury organizers and drawers"
    ]
  },
  {
    id: "glass-canopies-skylights",
    title: "Glass Pergolas & Architectural Skylights",
    tag: "Outdoor Luxury",
    thickness: "12mm Laminated SGP",
    category: "residential",
    image: "/images/cat_glass_pergolas_skylights.jpg",
    desc: "Heavy-duty laminated toughened glass pergolas, terrace canopies, and architectural skylights engineered for high wind resistance, UV protection, and leak-proof drainage.",
    features: [
      "12mm / 15mm Heat-strengthened Laminated SGP Toughened Glass",
      "Heavy MS / Galvanized Steel framework with PU epoxy anti-rust coating",
      "100% Leak-proof EPDM gaskets with structural silicone weather sealing",
      "Blocks 99% harmful UV radiation while maximizing natural sunlight"
    ]
  },
  {
    id: "smart-privacy-glass",
    title: "Smart Switchable Privacy Glass (PDLC)",
    tag: "PDLC Smart Tech",
    thickness: "10mm / 12mm PDLC",
    category: "commercial",
    image: "/images/cat_smart_privacy_glass.jpg",
    desc: "Electrically switchable PDLC glass partitions that toggle from crystal clear to frosted privacy in milliseconds via remote, wall switch, or mobile automation.",
    features: [
      "Instant millisecond switching from transparent to frosted privacy",
      "Ideal for IT boardrooms, director cabins, clinic suites & luxury villas",
      "Compatible with smart home automation, RF remote & wall touch switches",
      "Saint-Gobain Extra Clear Low-Iron laminated PDLC core film"
    ]
  }
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Calculator State
  const [calcService, setCalcService] = useState("slim_partition");
  const [calcThickness, setCalcThickness] = useState("10mm");
  const [calcProfile, setCalcProfile] = useState("black_slim_45mm");
  const [calcWidth, setCalcWidth] = useState(12);
  const [calcHeight, setCalcHeight] = useState(9);

  // Cost calculation
  const baseRates: Record<string, number> = {
    office_partition: 240,
    slim_partition: 380,
    shower_cubicle: 320,
    glass_railing: 420,
    sliding_doors: 310,
    toughened_glass: 160,
    stained_designer: 350,
    led_mirrors: 450,
    acp_glazing: 480,
    glass_pergolas: 550,
    smart_glass: 950
  };

  const thicknessMultipliers: Record<string, number> = {
    "5mm": 0.85,
    "8mm": 1.0,
    "10mm": 1.25,
    "12mm": 1.5
  };

  const profileMultipliers: Record<string, number> = {
    frameless: 1.0,
    black_slim_45mm: 1.35,
    ss_patch: 1.2,
    spider: 1.45
  };

  const areaSqFt = Math.max(1, Math.round(Number(calcWidth) * Number(calcHeight) * 10) / 10);
  const ratePerSqFt = (baseRates[calcService] || 250) * (thicknessMultipliers[calcThickness] || 1.25) * (profileMultipliers[calcProfile] || 1.35);
  const minEstimated = Math.round(areaSqFt * ratePerSqFt * 0.92);
  const maxEstimated = Math.round(areaSqFt * ratePerSqFt * 1.08);

  const handleCalculatorWhatsApp = () => {
    const serviceName = calcService.replace("_", " ").toUpperCase();
    const text = `Hello World Art Glass Hyderabad,%0A%0AI used your website estimator on the Services page and would like a Free Site Measurement & final quotation:%0A` +
      `• *Service:* ${serviceName}%0A` +
      `• *Glass Thickness:* ${calcThickness} Saint-Gobain%0A` +
      `• *Frame/Profile:* ${calcProfile}%0A` +
      `• *Dimensions:* ${calcWidth} ft (W) x ${calcHeight} ft (H) = ${areaSqFt} Sq.Ft%0A` +
      `• *Estimated Budget:* ₹${minEstimated.toLocaleString("en-IN")} - ₹${maxEstimated.toLocaleString("en-IN")}%0A` +
      `• *Location:* Hyderabad / Telangana%0A%0APlease connect with me for site survey.`;
    window.open(`https://wa.me/919985597294?text=${text}`, "_blank");
  };

  const filtered = activeCategory === "all"
    ? servicesData
    : activeCategory === "commercial"
    ? servicesData.filter(s => s.category === "commercial" || s.category === "doors")
    : activeCategory === "residential"
    ? servicesData.filter(s => s.category === "residential")
    : servicesData.filter(s => s.category === "decorative");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* Hero Banner for Services */}
      <section className="relative bg-slate-950 text-white overflow-hidden pt-28 sm:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_skyscrapers.jpg"
            alt="World Art Glass Services Hyderabad"
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
              <span className="text-white">Services</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/30 text-sky-300 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              Complete Architectural Glass Portfolio
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Architectural Glass Solutions &amp; Custom Fabrication
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We fabricate and install genuine Toughened Saint-Gobain Glass for commercial IT towers, luxury residential villas, storefronts, and interior architectural projects across Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Listing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header & Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Solutions ({filtered.length})
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Precision-engineered Toughened Glass with certified hardware &amp; lifetime structural warranty.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full sm:w-auto bg-white border border-slate-200 p-1.5 rounded-2xl sm:rounded-full shadow-sm">
              <button
                onClick={() => setActiveCategory("all")}
                className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-full shrink-0 transition ${
                  activeCategory === "all" ? "bg-sky-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All Solutions ({servicesData.length})
              </button>
              <button
                onClick={() => setActiveCategory("commercial")}
                className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-full shrink-0 transition ${
                  activeCategory === "commercial" ? "bg-sky-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Commercial &amp; Offices
              </button>
              <button
                onClick={() => setActiveCategory("residential")}
                className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-full shrink-0 transition ${
                  activeCategory === "residential" ? "bg-sky-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Villas &amp; Railings
              </button>
              <button
                onClick={() => setActiveCategory("decorative")}
                className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-full shrink-0 transition ${
                  activeCategory === "decorative" ? "bg-sky-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                LED Mirrors &amp; Decorative
              </button>
            </div>
          </div>

          {/* Services Grid: 2 cards in one row on mobile (grid-cols-2) */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
            {filtered.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col group scroll-mt-32"
              >
                {/* Image Header */}
                <div className="relative h-32 xs:h-40 sm:h-56 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-slate-900/85 backdrop-blur-md text-white text-xs sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/10 shadow-sm">
                    {service.tag}
                  </div>
                  <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-sky-600 text-white text-xs sm:text-xs font-bold px-2.5 sm:px-2.5 py-0.5 rounded-md shadow-sm">
                    {service.thickness}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2 group-hover:text-sky-600 transition leading-snug line-clamp-2 min-h-[2.8rem] sm:min-h-0">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-3 sm:mb-4 flex-grow line-clamp-3">
                    {service.desc}
                  </p>

                  <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-between pt-2.5 sm:pt-3 border-t border-slate-100 mt-auto gap-2">
                    <a
                      href="#calculator"
                      onClick={() => {
                        const serviceKeyMap: Record<string, string> = {
                          "office-partitions": "office_partition",
                          "slim-partitions": "slim_partition",
                          "sliding-doors": "sliding_doors",
                          "shower-cubicles": "shower_cubicle",
                          "glass-railings": "glass_railing",
                          "acp-glazing": "acp_glazing",
                          "toughened-supply": "toughened_glass",
                          "stained-designer": "stained_designer",
                          "led-mirrors": "led_mirrors",
                          "custom-wardrobes": "slim_partition",
                          "glass-canopies-skylights": "glass_pergolas",
                          "smart-privacy-glass": "smart_glass"
                        };
                        if (serviceKeyMap[service.id]) {
                          setCalcService(serviceKeyMap[service.id]);
                        }
                      }}
                      className="text-xs sm:text-sm font-bold text-sky-700 hover:text-sky-900 transition text-center xs:text-left py-1 xs:py-0"
                    >
                      Estimate Cost
                    </a>

                    <a
                      href={`https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.%20Please%20share%20quotation%20and%20schedule%20free%20laser%20site%20measurement.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full xs:w-auto inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold bg-[#7dd91a] hover:bg-[#71c917] text-white px-3 sm:px-4 py-2 sm:py-2 rounded-full transition shadow-md shadow-[#7dd91a]/25 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
                    >
                      <WhatsAppIcon className="w-4 h-4 shrink-0" /> <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Glass Project Cost Estimator */}
      <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-wider font-bold text-sky-600 bg-sky-100 px-3 py-1 rounded-full mb-3 inline-block">
              Budget Planning Engine
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Instant Glass Project Cost Estimator
            </h2>
            <p className="text-slate-500 text-sm mt-1">Get an instant estimate based on genuine Saint-Gobain glass rates in Hyderabad.</p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Input Controls Left (7 cols) */}
            <div className="p-6 sm:p-8 lg:col-span-7 bg-white flex flex-col justify-between">
              <div className="space-y-4">
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    1. Select Service / Project Type
                  </label>
                  <select
                    value={calcService}
                    onChange={(e) => setCalcService(e.target.value)}
                    className="w-full text-base sm:text-sm font-medium border border-slate-200 rounded-xl px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:outline-none focus:border-sky-500 transition"
                  >
                    <option value="slim_partition">Black Slim 45mm Aluminium Partitions</option>
                    <option value="office_partition">Office Glass Partitions (Acoustic / Frameless)</option>
                    <option value="shower_cubicle">Shower Cubicles &amp; Bathroom Partitions</option>
                    <option value="glass_railing">Glass Railings (Balcony &amp; Staircase)</option>
                    <option value="sliding_doors">Frameless &amp; Sliding Glass Doors</option>
                    <option value="glass_pergolas">Glass Pergolas &amp; Architectural Skylights</option>
                    <option value="smart_glass">Smart Switchable Privacy Glass (PDLC)</option>
                    <option value="toughened_glass">Toughened Glass Supply (5mm - 12mm)</option>
                    <option value="stained_designer">Stained &amp; Designer Glass Panels</option>
                    <option value="led_mirrors">Custom Smart LED Mirrors</option>
                    <option value="acp_glazing">ACP &amp; Structural Glazing Facade</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      2. Glass Thickness
                    </label>
                    <select
                      value={calcThickness}
                      onChange={(e) => setCalcThickness(e.target.value)}
                      className="w-full text-base sm:text-sm font-medium border border-slate-200 rounded-xl px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:outline-none focus:border-sky-500 transition"
                    >
                      <option value="5mm">5mm Toughened</option>
                      <option value="8mm">8mm Toughened</option>
                      <option value="10mm">10mm Saint-Gobain (Standard)</option>
                      <option value="12mm">12mm Heavy-Duty Saint-Gobain</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      3. Frame &amp; Profile Style
                    </label>
                    <select
                      value={calcProfile}
                      onChange={(e) => setCalcProfile(e.target.value)}
                      className="w-full text-base sm:text-sm font-medium border border-slate-200 rounded-xl px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:outline-none focus:border-sky-500 transition"
                    >
                      <option value="black_slim_45mm">Black Slim 45mm Aluminium</option>
                      <option value="frameless">Frameless (Minimal Patch)</option>
                      <option value="ss_patch">SS 304 Dorma/Ozone Fitting</option>
                      <option value="spider">Spider Glazing System</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Width (Feet)
                    </label>
                    <input
                      type="number"
                      min="1"
                      step="0.5"
                      value={calcWidth}
                      onChange={(e) => setCalcWidth(Number(e.target.value))}
                      className="w-full text-base sm:text-sm font-medium border border-slate-200 rounded-xl px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:outline-none focus:border-sky-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Height (Feet)
                    </label>
                    <input
                      type="number"
                      min="1"
                      step="0.5"
                      value={calcHeight}
                      onChange={(e) => setCalcHeight(Number(e.target.value))}
                      className="w-full text-base sm:text-sm font-medium border border-slate-200 rounded-xl px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:outline-none focus:border-sky-500 transition"
                    />
                  </div>
                </div>

                <p className="text-[11px] text-slate-500">
                  *Not sure about exact sizes? Our technician will measure your site for free!
                </p>

              </div>
            </div>

            {/* Output Panel Right (5 cols) */}
            <div className="p-6 sm:p-8 lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-sky-400">Estimated Project Value</span>
                
                <div className="text-sm text-slate-300 mt-2 mb-4">
                  Calculated Surface Area: <strong className="text-white text-base">{areaSqFt}</strong> Sq.Ft
                </div>

                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2 tracking-tight break-words">
                  <span className="text-sky-400 text-xl sm:text-2xl font-bold mr-1">₹</span>
                  {minEstimated.toLocaleString("en-IN")} - {maxEstimated.toLocaleString("en-IN")}
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed mb-6">
                  Includes Saint-Gobain Toughened Glass, hardware fittings &amp; standard installation in Hyderabad. Final price locked upon free laser site survey.
                </p>
              </div>

              <div>
                <button
                  onClick={handleCalculatorWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#7dd91a] hover:bg-[#71c917] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-lg shadow-[#7dd91a]/30 transition drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
                >
                  <WhatsAppIcon className="w-4 h-4" /> Send Estimate to WhatsApp
                </button>
                <div className="text-[10px] text-center text-slate-400 mt-2">
                  Direct connection with World Art Glass Engineers
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Glass Specifications Guide Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-wider font-bold text-sky-600 bg-sky-100 px-3 py-1 rounded-full mb-3 inline-block">
              Technical Reference
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Saint-Gobain Glass Thickness &amp; Applications Guide
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Select the appropriate glass thickness based on structural load, height, and safety compliance.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <th className="py-3.5 px-6 font-bold">Thickness</th>
                  <th className="py-3.5 px-6 font-bold">Recommended Application</th>
                  <th className="py-3.5 px-6 font-bold">Max Safe Height</th>
                  <th className="py-3.5 px-6 font-bold">Safety Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="py-3 px-6 font-bold text-slate-900">5mm Toughened</td>
                  <td className="py-3 px-6">Small window panes, LED mirror glass, display cabinets</td>
                  <td className="py-3 px-6">Up to 4 Feet</td>
                  <td className="py-3 px-6 text-[#7dd91a] font-semibold">IS 2553 Compliant</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-bold text-slate-900">8mm Toughened</td>
                  <td className="py-3 px-6">Internal partition dividers, low-traffic sliding panels</td>
                  <td className="py-3 px-6">Up to 7 Feet</td>
                  <td className="py-3 px-6 text-[#7dd91a] font-semibold">IS 2553 Compliant</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-bold text-slate-900 bg-sky-50/50">10mm Saint-Gobain (Standard)</td>
                  <td className="py-3 px-6 bg-sky-50/50 font-semibold text-slate-900">Standard office partitions, shower enclosures, meeting cabins</td>
                  <td className="py-3 px-6 bg-sky-50/50">Up to 9.5 Feet</td>
                  <td className="py-3 px-6 bg-sky-50/50 text-[#7dd91a] font-bold">100% Genuine Certified</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-bold text-slate-900">12mm Saint-Gobain (Heavy Duty)</td>
                  <td className="py-3 px-6">Frameless entrance doors, high-rise balcony railings, spider glazing</td>
                  <td className="py-3 px-6">Up to 12 Feet</td>
                  <td className="py-3 px-6 text-[#7dd91a] font-bold">100% Genuine Certified</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-bold text-slate-900">13.52mm Laminated PVB</td>
                  <td className="py-3 px-6">Public terrace railings, overhead skylights, high-security storefronts</td>
                  <td className="py-3 px-6">Structural Grade</td>
                  <td className="py-3 px-6 text-[#7dd91a] font-bold">Zero Shatter Fall Risk</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Free Site Visit Call to Action Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-sky-900/60 to-slate-900 border border-sky-700/50 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-wider font-bold text-sky-400 bg-sky-950 px-3 py-1 rounded-full mb-3 inline-block">
              Free Site Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Need Exact Measurements for Your Hyderabad Space?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Book a 100% free laser site survey with our senior technical supervisor. We inspect the layout, recommend frame profiles, and provide a comprehensive GST estimate.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-sky-500/25 transition transform hover:-translate-y-0.5"
            >
              Book Site Visit
            </Link>

            <a
              href="https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20want%20to%20book%20a%20Free%20Site%20Measurement."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7dd91a] hover:bg-[#71c917] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-[#7dd91a]/30 transition transform hover:-translate-y-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

