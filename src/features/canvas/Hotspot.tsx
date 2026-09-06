import Link from "next/link";

interface HotspotProps {
  top: string;
  left: string;
  width: string;
  height: string;
  title: string;
  projectId: string;
}

export default function Hotspot({ top, left, width, height, title, projectId }: HotspotProps) {
  return (
    <Link href={`/projects/${projectId}`}>
      <div 
        className="absolute border border-dashed border-[#536387] group hover:border-2 hover:border-solid hover:bg-[#F2E9CD]/10 transition-all cursor-pointer flex items-center justify-center z-10"
        style={{ top, left, width, height }}
      >
        {/* Corner Brackets for that structural retro feel */}
        <span className="absolute -top-1 -left-1 text-[#536387] text-xs font-mono font-bold group-hover:opacity-0 transition-opacity">+</span>
        <span className="absolute -top-1 -right-1 text-[#536387] text-xs font-mono font-bold group-hover:opacity-0 transition-opacity">+</span>
        <span className="absolute -bottom-1 -left-1 text-[#536387] text-xs font-mono font-bold group-hover:opacity-0 transition-opacity">+</span>
        <span className="absolute -bottom-1 -right-1 text-[#536387] text-xs font-mono font-bold group-hover:opacity-0 transition-opacity">+</span>

        {/* Tooltip */}
        <div className="opacity-0 group-hover:opacity-100 absolute -bottom-12 bg-[#F2E9CD] border-2 border-[#536387] text-[#536387] px-4 py-1 font-display tracking-widest whitespace-nowrap shadow-md transition-opacity duration-200 pointer-events-none">
          {title}
        </div>
      </div>
    </Link>
  );
}