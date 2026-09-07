"use client";

interface CharacterHotspotProps {
  onClick: () => void;
}

export default function CharacterHotspot({ onClick }: CharacterHotspotProps) {
  return (
    <div 
      onClick={onClick}
      className="absolute bottom-12 right-16 cursor-pointer group flex flex-col items-center z-20 transition-all duration-300"
    >
      {/* Tooltip */}
      <div className="opacity-0 group-hover:opacity-100 absolute -top-10 bg-[#F2E9CD] border-2 border-[#536387] text-[#536387] px-3 py-1 font-display text-sm tracking-widest whitespace-nowrap shadow-md transition-opacity duration-200 pointer-events-none">
        [ TALK_TO_CREATOR ]
      </div>

      {/* Character Sprite Placeholder with Stardew Valley Glow Effect */}
      <div className="w-20 h-32 bg-[#536387] border-2 border-[#F2E9CD] flex flex-col items-center justify-between p-2 group-hover:shadow-[0_0_20px_#F2E9CD] group-hover:scale-105 transition-all duration-300">
        {/* Head (Back view) */}
        <div className="w-8 h-8 bg-[#E1CFAB] rounded-sm mt-1"></div>
        {/* Body & Hat/Hair silhouette */}
        <div className="w-12 h-16 bg-[#536387] border border-[#F2E9CD]/40 flex items-center justify-center">
          <span className="font-mono text-[9px] text-[#F2E9CD] text-center leading-none">[ NPC ]</span>
        </div>
      </div>
    </div>
  );
}