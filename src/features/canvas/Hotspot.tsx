"use client";

interface HotspotProps {
  top: string;
  left: string;
  width: string;
  height: string;
  title: string;
  onClick: () => void;
  uiScale?: number;
}

export default function Hotspot({ top, left, width, height, title, onClick, uiScale = 1 }: HotspotProps) {
  return (
    <div 
      onClick={onClick}
      className="absolute border-2 border-dashed border-[#536387] bg-[#536387]/10 group hover:border-solid hover:border-4 hover:bg-[#F2E9CD]/20 transition-all cursor-pointer flex items-center justify-center z-10"
      style={{ top, left, width, height, borderWidth: `${Math.max(2, 2 * uiScale)}px` }}
    >
      {/* Corner Brackets */}
      <span className="absolute -top-2 -left-2 text-[#536387] text-sm font-mono font-bold group-hover:opacity-0 transition-opacity">+</span>
      <span className="absolute -top-2 -right-2 text-[#536387] text-sm font-mono font-bold group-hover:opacity-0 transition-opacity">+</span>
      <span className="absolute -bottom-2 -left-2 text-[#536387] text-sm font-mono font-bold group-hover:opacity-0 transition-opacity">+</span>
      <span className="absolute -bottom-2 -right-2 text-[#536387] text-sm font-mono font-bold group-hover:opacity-0 transition-opacity">+</span>

      {/* Tooltip */}
      <div style={{ borderWidth: `${Math.max(2, 2 * uiScale)}px`, fontSize: `${Math.max(0.75, uiScale)}rem` }} className="opacity-35 group-hover:opacity-100 absolute -bottom-12 bg-[#F2E9CD] border-2 border-[#536387] text-[#536387] px-4 py-1 font-display tracking-widest whitespace-nowrap shadow-md transition-opacity duration-200 pointer-events-none">
        {title}
      </div>
    </div>
  );
}