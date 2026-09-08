"use client";

interface NavBarProps {
  onOpenAbout: () => void;
  onOpenContact: () => void;
  uiScale?: number;
}

export default function NavBar({ onOpenAbout, onOpenContact, uiScale = 1 }: NavBarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full nav-dither z-40 pointer-events-auto overflow-auto" style={{ height: `${Math.max(8, 8 * uiScale)}rem` }}>
      <div className="nav-inner flex items-start justify-between px-8 pt-6 pointer-events-none" style={{ width: `${100 / uiScale}%`, height: `${100 / uiScale}%`, transform: `scale(${uiScale})`, transformOrigin: "top left" }}>
        <div className="text-[#F2E9CD] pointer-events-auto">
          <h1 className="font-display tracking-widest text-3xl">[ MARIAM KALDAS ]</h1>
          <p className="font-mono text-xs mt-1">SYS.STATUS: [ONLINE]</p>
        </div>
      
        <div className="nav-links flex gap-6 text-[#F2E9CD] font-display text-xl tracking-wider pointer-events-auto">
        <button 
          onClick={onOpenAbout}
          className="hover:text-[#E1CFAB] transition-colors cursor-pointer"
        >
          [ ABOUT ]
        </button>
        <button 
          onClick={onOpenContact}
          className="hover:text-[#E1CFAB] transition-colors cursor-pointer"
        >
          [ CONTACT ]
        </button>
        {/* Direct link to your PDF */}
        <a 
          href="/mariam-kaldas-resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-[#E1CFAB] transition-colors cursor-pointer"
        >
          [ RESUME ]
        </a>
        </div>
      </div>
    </nav>
  );
}