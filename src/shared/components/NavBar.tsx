"use client";
import { useState } from "react";
import AboutModal from "./AboutModal";

export default function NavBar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-32 nav-dither z-40 flex items-start justify-between px-8 pt-6">
        <div className="text-[#F2E9CD]">
          <h1 className="font-display tracking-widest text-3xl">[MARIAM HANY KALDAS]</h1>
          <p className="font-mono text-xs mt-1">SYS.STATUS: [ONLINE]</p>
        </div>
        
        <div className="flex gap-6 text-[#F2E9CD] font-display text-xl tracking-wider">
          <button 
            onClick={() => setIsAboutOpen(true)}
            className="hover:text-[#E1CFAB] transition-colors"
          >
            [ ABOUT ]
          </button>
          <button className="hover:text-[#E1CFAB] transition-colors">[ CONTACT ]</button>
          <button className="hover:text-[#E1CFAB] transition-colors">[ RESUME ]</button>
        </div>
      </nav>

      {isAboutOpen && <AboutModal onClose={() => setIsAboutOpen(false)} />}
    </>
  );
}