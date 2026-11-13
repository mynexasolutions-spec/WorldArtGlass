import React from "react";
import { WhatsAppIcon } from "./Navbar";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <a
        href="https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20am%20interested%20in%20glass%20partition%20and%20interior%20solutions."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 bg-[#7dd91a] hover:bg-[#71c917] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#7dd91a]/40 transition transform hover:scale-110 relative group"
        aria-label="WhatsApp World Art Glass"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] transition transform group-hover:scale-105" />
        <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 flex h-3 w-3 sm:h-3.5 sm:w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7dd91a] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-[#7dd91a]"></span>
        </span>
      </a>
    </div>
  );
}

