"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar, { WhatsAppIcon } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  X,
  Award,
  Zap,
  TrendingDown,
  Star,
  ChevronDown,
  FileText,
  BadgeCheck,
  Clock,
  Ruler,
  Layers,
  Building2
} from "lucide-react";

export default function WhyUsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How can I verify that the glass is genuine Saint-Gobain Toughened Glass?",
      a: "Every single glass sheet supplied and installed by World Art Glass features the permanent laser-engraved Saint-Gobain trademark and toughened glass quality certification code. We also issue official GST Tax invoices specifying the Saint-Gobain batch details."
    },
    {
      q: "Do you provide free laser site measurement across Hyderabad?",
      a: "Yes! We offer 100% free site visits anywhere in Hyderabad (including Hitec City, Gachibowli, Madhapur, Financial District, Jubilee Hills, Banjara Hills, Begumpet, Secunderabad, etc.). Our technical supervisor brings digital laser measurement tools to ensure millimetric precision."
    },
    {
      q: "What is the difference between 10mm and 12mm toughened glass?",
      a: "10mm toughened glass is the industry standard for indoor office partitions, shower enclosures, and standard doors. For structural heights exceeding 9.5 feet, heavy-traffic commercial showroom entries, and frameless exterior balcony railings, 12mm Saint-Gobain toughened glass is recommended for maximum rigidity and safety."
    },
    {
      q: "How long does fabrication and installation take?",
      a: "From the date of laser site measurement approval, custom toughening and edge polishing takes 4 to 6 working days. On-site installation is completed cleanly within 1 to 2 days by our in-house master technicians."
    },
    {
      q: "What hardware and fitting brands do you install?",
      a: "We exclusively use heavy-duty architectural grade stainless steel (SS 304 / 316) and heavy-gauge aluminium profiles from Dorma, Ozone, Geze, and certified hardware manufacturers with anti-rust warranties."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* Hero Banner for Why Choose Us */}
      <section className="relative bg-slate-950 text-white overflow-hidden pt-28 sm:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_skyscrapers.jpg"
            alt="Why Choose World Art Glass"
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
              <span className="text-white">About Us</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/30 text-sky-300 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              Certified Glass Fabricator
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Why Leading Clients &amp; Architects Trust World Art Glass
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We stand apart from local unorganized vendors through verified Saint-Gobain glass authenticity, digital laser measurement, certified Dorma/Ozone hardware, and official GST tax compliance.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-sky-600 bg-sky-100 px-3 py-1 rounded-full mb-3 inline-block">
              Core Commitments
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 4 Pillars of Excellence
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-2xl mx-auto">
              Combining genuine materials, in-house craftsmanship, and complete commercial transparency.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            <div className="bg-sky-50/70 border border-sky-100 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 transition hover:shadow-md hover:border-sky-300">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center mb-2.5 sm:mb-4">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-sm sm:text-xl font-bold text-slate-900 mb-0.5 sm:mb-1">100% Genuine</div>
              <div className="text-xs font-semibold text-sky-600 mb-1.5 sm:mb-2">Saint-Gobain Toughened</div>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                Every single panel carries permanent laser-etched Saint-Gobain stamps for verified structural safety and high thermal shock resistance.
              </p>
            </div>

            <div className="bg-[#7dd91a]/10 border border-[#7dd91a]/25 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 transition hover:shadow-md hover:border-[#7dd91a]">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#7dd91a]/20 text-[#5ea313] flex items-center justify-center mb-2.5 sm:mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#5ea313]" />
              </div>
              <div className="text-sm sm:text-xl font-bold text-slate-900 mb-0.5 sm:mb-1">35% Faster</div>
              <div className="text-xs font-semibold text-[#5ea313] mb-1.5 sm:mb-2">On-Time Execution</div>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                With our own dedicated fabrication unit in Goshamahal and mobile installation teams, we deliver projects days ahead of schedule.
              </p>
            </div>

            <div className="bg-blue-50/70 border border-blue-100 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 transition hover:shadow-md hover:border-blue-300">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-2.5 sm:mb-4">
                <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-sm sm:text-xl font-bold text-slate-900 mb-0.5 sm:mb-1">15% Lower Cost</div>
              <div className="text-xs font-semibold text-blue-600 mb-1.5 sm:mb-2">Direct Supplier Rates</div>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                Transparent wholesale pricing directly from the fabricator with zero broker commissions, hidden extras, or inflated rates.
              </p>
            </div>

            <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 transition hover:shadow-md hover:border-indigo-300">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-2.5 sm:mb-4">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-sm sm:text-xl font-bold text-slate-900 mb-0.5 sm:mb-1">99% Quality &amp; Safety</div>
              <div className="text-xs font-semibold text-indigo-600 mb-1.5 sm:mb-2">Precision Engineering</div>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                Digital laser surveys, CNC diamond-polished edges, and Dorma/Ozone hardware ensuring zero rattling, sagging, or glass stress points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Fabrication & In-House Workshop Section (Image + Texts) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-6 order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200 bg-slate-950 group">
                <div className="relative h-[280px] sm:h-[400px] lg:h-[500px] w-full overflow-hidden">
                  <Image
                    src="/images/glass_fabrication_engineering.jpg"
                    alt="World Art Glass In-House Fabrication Studio and Precision Inspection Hyderabad"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={95}
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Floating Top Badge */}
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#7dd91a]" />
                      Direct In-House Fabrication
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Texts */}
            <div className="lg:col-span-6 order-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100/90 border border-sky-200/80 px-3.5 py-1 rounded-full mb-3.5 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" /> In-House Engineering &amp; Craftsmanship
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Precision Fabricated At Our Goshamahal Unit, Installed Flawlessly At Your Site
              </h2>

              <p className="text-slate-600 text-xs sm:text-base leading-relaxed mb-6">
                Unlike typical brokers or unorganized vendors who outsource your glass panels to third parties, World Art Glass operates its own dedicated fabrication facility in Goshamahal, Hyderabad. We personally supervise every laser measurement, CNC diamond edge-polishing, and hardware installation to guarantee millimeter-accurate results.
              </p>

              {/* 3 Advantage Highlights */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3 bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 hover:border-sky-300 transition">
                  <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Ruler className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">Sub-Millimeter 3D Laser Site Surveys</h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
                      We map wall plumb, floor gradients, and ceiling levels with digital laser instruments, eliminating uneven gaps or unsightly caulking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 hover:border-sky-300 transition">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#5ea313] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">Laser-Etched Saint-Gobain Trademark Code</h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
                      Every panel carries genuine manufacturer laser markings, backed by official GST Tax invoices and batch authenticity documentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 hover:border-sky-300 transition">
                  <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">Heavy-Duty Architectural Hardware Standards</h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
                      We pair our glass exclusively with certified SS 304/316 fittings, Dorma/Ozone hydraulic floor springs, and acoustic EPDM perimeter seals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20would%20like%20to%20discuss%20my%20architectural%20glass%20project%20and%20schedule%20a%20site%20visit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#7dd91a] hover:bg-[#71c917] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg shadow-[#7dd91a]/30 transition transform hover:-translate-y-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
                >
                  <WhatsAppIcon className="w-4 h-4" /> Talk to Senior Fabricator
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

      {/* Comparison Table Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-sky-600 bg-sky-100 px-3 py-1 rounded-full mb-3 inline-block">
              Engineering Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Leading Clients Choose World Art Glass
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 mb-3">
              Compare our certified standards against unorganized local vendors.
            </p>
            <div className="text-[11px] font-medium text-sky-600 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full inline-block sm:hidden">
              Scroll horizontally to compare
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="py-4 px-6 font-bold text-slate-900">Feature / Standard</th>
                  <th className="py-4 px-6 font-bold text-sky-700 bg-sky-50/70">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-sky-600" /> WORLD ART GLASS</span>
                  </th>
                  <th className="py-4 px-6 font-bold text-slate-500">Ordinary Local Vendors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                <tr>
                  <td className="py-3.5 px-6 font-medium text-slate-900">Glass Authenticity</td>
                  <td className="py-3.5 px-6 text-slate-900 bg-sky-50/40 font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7dd91a]" /> 100% Saint-Gobain with permanent laser logo
                  </td>
                  <td className="py-3.5 px-6 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500" /> Unbranded glass prone to thermal breakage
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-slate-900">Site Measurement</td>
                  <td className="py-3.5 px-6 text-slate-900 bg-sky-50/40 font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7dd91a]" /> 100% Free digital laser measurement
                  </td>
                  <td className="py-3.5 px-6 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500" /> Manual tape guesswork causing edge gaps
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-slate-900">Edge Processing</td>
                  <td className="py-3.5 px-6 text-slate-900 bg-sky-50/40 font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7dd91a]" /> CNC diamond-polished, smooth beveled edges
                  </td>
                  <td className="py-3.5 px-6 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500" /> Rough hand-ground edges with chipping risk
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-slate-900">Hardware &amp; Fittings</td>
                  <td className="py-3.5 px-6 text-slate-900 bg-sky-50/40 font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7dd91a]" /> Certified SS 304 Dorma / Ozone hardware
                  </td>
                  <td className="py-3.5 px-6 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500" /> Cheap zinc alloy fittings that rust quickly
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-slate-900">Tax Invoice &amp; Billing</td>
                  <td className="py-3.5 px-6 text-slate-900 bg-sky-50/40 font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7dd91a]" /> Official Tax GST Invoice (36GPSPS7449Q1ZB)
                  </td>
                  <td className="py-3.5 px-6 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500" /> Cash only, no legal bill or warranty
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-wider font-bold text-sky-600 bg-sky-100 px-3 py-1 rounded-full mb-3 inline-block">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Common Questions Answered
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-bold text-sm text-slate-900 hover:text-sky-600 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition transform ${openFaq === index ? "rotate-180 text-sky-600" : ""}`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Ready to Upgrade Your Commercial or Home Space?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
              Contact us today for a free laser measurement visit anywhere in Hyderabad. We bring glass samples, catalog profiles, and digital quotation estimates.
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
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp Now
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

