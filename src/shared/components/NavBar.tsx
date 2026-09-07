"use client";

interface NavBarProps {
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export default function NavBar({ onOpenAbout, onOpenContact }: NavBarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full h-32 nav-dither z-40 flex items-start justify-between px-8 pt-6 pointer-events-none">
      <div className="text-[#F2E9CD] pointer-events-auto">
        <h1 className="font-display tracking-widest text-3xl">[ MARIAM KALDAS ]</h1>
        <p className="font-mono text-xs mt-1">SYS.STATUS: [ONLINE]</p>
      </div>
      
      <div className="flex gap-6 text-[#F2E9CD] font-display text-xl tracking-wider pointer-events-auto">
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
        <button className="hover:text-[#E1CFAB] transition-colors cursor-pointer">[ RESUME ]</button>
      </div>
    </nav>
  );
}