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
  Phone,
  Clock,
  CheckCircle2,
  Store,
  ExternalLink,
  ShieldCheck,
  Send
} from "lucide-react";

export default function ContactPage() {
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formService, setFormService] = useState("Office Glass Partitions");
  const [formLocation, setFormLocation] = useState("");
  const [formNotes, setFormNotes] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) {
      alert("Please provide your name and phone number.");
      return;
    }
    setFormSubmitted(true);
    const text = `*New Free Site Measurement Request - World Art Glass*%0A%0A` +
      `• *Client Name:* ${encodeURIComponent(formName)}%0A` +
      `• *Phone Number:* ${encodeURIComponent(formPhone)}%0A` +
      `• *Service Required:* ${encodeURIComponent(formService)}%0A` +
      `• *Location:* ${encodeURIComponent(formLocation || "Hyderabad")}%0A` +
      `• *Notes:* ${encodeURIComponent(formNotes || "Requesting free laser measurement.")}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/919985597294?text=${text}`, "_blank");
    }, 600);
  };

  const areasCovered = [
    "Hitec City", "Gachibowli", "Madhapur", "Financial District",
    "Jubilee Hills", "Banjara Hills", "Begumpet", "Secunderabad",
    "Kondapur", "Kukatpally", "Miyapur", "Manikonda",
    "Nanakramguda", "Somajiguda", "Ameerpet", "Goshamahal"
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* Hero Banner for Contact */}
      <section className="relative bg-slate-950 text-white overflow-hidden pt-28 sm:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_skyscrapers.jpg"
            alt="Contact World Art Glass Hyderabad"
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
              <span className="text-white">Contact</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/30 text-sky-300 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              Direct Fabricator &amp; Showroom
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Connect with World Art Glass Hyderabad
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Book your 100% free laser site survey anywhere in Hyderabad or visit our flagship concept showroom at Goshamahal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content & Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Contact Details Left (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-sky-600 bg-sky-100 px-3 py-1 rounded-full mb-3 inline-block">
                  Flagship Store &amp; Works
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Get in Touch Directly
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
                  Connect with our senior technical estimators for design guidance, profile finishes, and free laser measurement bookings.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Showroom &amp; Office</div>
                    <div className="text-xs sm:text-sm text-slate-600 mt-1">
                      New Aghapura X Road, Goshamahal, Hyderabad – 500001, Telangana.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-2xl bg-[#7dd91a]/15 text-[#5ea313] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#5ea313]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Phone / WhatsApp</div>
                    <div className="text-xs sm:text-sm text-slate-700 mt-1 space-x-2">
                      <a href="tel:+919985597294" className="hover:text-sky-600 font-bold">+91 99855 97294</a>
                      <span>•</span>
                      <a href="tel:+918639219930" className="hover:text-sky-600 font-bold">+91 86392 19930</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Showroom Working Hours</div>
                    <div className="text-xs sm:text-sm text-slate-600 mt-1">
                      Monday to Saturday: 10:30 AM to 9:00 PM (Sunday by Appointment)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Tax Registration</div>
                    <div className="text-xs sm:text-sm text-slate-700 font-semibold mt-1">
                      GSTIN: 36GPSPS7449Q1ZB (Registered Firm)
                    </div>
                  </div>
                </div>
              </div>

              {/* Directory Links */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Online Directory &amp; Social Links:</div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://maps.app.goo.gl/7zvG15waiJp5JxJ2A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-slate-200 hover:border-sky-400 text-slate-700 px-3.5 py-2 rounded-full transition flex items-center gap-1.5 shadow-sm"
                  >
                    <MapPin className="w-3.5 h-3.5 text-sky-500" /> Google Maps
                  </a>
                  <a
                    href="https://www.indiamart.com/world-art-glass/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-slate-200 hover:border-red-400 text-slate-700 px-3.5 py-2 rounded-full transition flex items-center gap-1.5 shadow-sm"
                  >
                    <Store className="w-3.5 h-3.5 text-red-500" /> IndiaMART Profile
                  </a>
                  <a
                    href="https://www.instagram.com/worldart.glass"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-slate-200 hover:border-pink-400 text-slate-700 px-3.5 py-2 rounded-full transition flex items-center gap-1.5 shadow-sm"
                  >
                    Instagram Profile
                  </a>
                  <a
                    href="https://youtube.com/@worldartglasspartitionwork723"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-slate-200 hover:border-red-400 text-slate-700 px-3.5 py-2 rounded-full transition flex items-center gap-1.5 shadow-sm"
                  >
                    YouTube Channel
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">
                Book Free Site Laser Measurement
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill out the details below. Our technical supervisor will contact you to schedule an on-site laser survey.
              </p>

              {formSubmitted && (
                <div className="bg-[#7dd91a]/15 border border-[#7dd91a]/40 text-slate-900 text-xs p-4 rounded-2xl mb-5 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#5ea313] shrink-0" />
                  Thank you! Your inquiry details are formatted and opening in WhatsApp for instant supervisor confirmation.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full text-base sm:text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:border-sky-500 focus:outline-none bg-slate-50 focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile / WhatsApp No. *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 99855 97294"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full text-base sm:text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:border-sky-500 focus:outline-none bg-slate-50 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Required Solution
                    </label>
                    <select
                      value={formService}
                      onChange={(e) => setFormService(e.target.value)}
                      className="w-full text-base sm:text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:border-sky-500 focus:outline-none bg-slate-50 focus:bg-white transition"
                    >
                      <option value="Office Glass Partitions">Office Glass Partitions</option>
                      <option value="Black Slim 45mm Partitions">Black Slim 45mm Partitions</option>
                      <option value="Shower Cubicles & Partitions">Shower Cubicles &amp; Partitions</option>
                      <option value="Frameless & Sliding Doors">Frameless &amp; Sliding Doors</option>
                      <option value="Glass Railings (Balcony/Stairs)">Glass Railings (Balcony/Stairs)</option>
                      <option value="Toughened Glass Supply">Toughened Glass Supply (5mm - 12mm)</option>
                      <option value="ACP & Structural Glazing">ACP &amp; Structural Glazing</option>
                      <option value="LED Mirrors & Art Glass">LED Mirrors &amp; Art Glass</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Project Area / Location in Hyderabad
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Madhapur, Jubilee Hills"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      className="w-full text-base sm:text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:border-sky-500 focus:outline-none bg-slate-50 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Approximate Dimensions or Project Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide height, width, number of cabins, or specific frame requirements..."
                    value={formNotes}
                    onChange={(e) => setFormNotes(e.target.value)}
                    className="w-full text-base sm:text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:border-sky-500 focus:outline-none bg-slate-50 focus:bg-white transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#7dd91a] hover:bg-[#71c917] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-full shadow-lg shadow-[#7dd91a]/30 transition transform hover:-translate-y-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
                >
                  <WhatsAppIcon className="w-5 h-5" /> Book Free Laser Site Visit via WhatsApp
                </button>
                <div className="text-[11px] text-center text-slate-500">
                  100% Free Consultation • Zero Obligation • Quick Response within 30 mins
                </div>
              </form>
            </div>

          </div>

          {/* Service Area Badges */}
          <div className="mt-16 bg-slate-100/70 border border-slate-200 rounded-3xl p-6 sm:p-8">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-600" /> Areas Covered in Hyderabad &amp; Telangana:
            </div>
            <div className="flex flex-wrap gap-2">
              {areasCovered.map((area, i) => (
                <span key={i} className="bg-white border border-slate-200 text-slate-700 text-xs px-3 py-1.5 rounded-full font-medium shadow-2xs">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-8 rounded-3xl overflow-hidden border border-slate-200 h-96 shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.447547161642!2d78.468200!3d17.387900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9754f808db33%3A0x6b77ceb2efc8fca3!2sAghapura%20X%20Road%2C%20Goshamahal%2C%20Hyderabad%2C%20Telangana%20500001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="World Art Glass Goshamahal Hyderabad Location Map"
            ></iframe>
          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

