"use client";

export default function AboutModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay p-4">
      <div className="relative bg-[#F2E9CD] border-4 border-[#536387] w-full max-w-2xl flex flex-col md:flex-row shadow-2xl">
        
        {/* Terminal Header */}
        <div className="absolute -top-4 -right-4 bg-[#536387] text-[#F2E9CD] px-3 py-1 font-mono text-sm cursor-pointer hover:bg-[#111111]" onClick={onClose}>
          [X] CLOSE
        </div>

        {/* Placeholder Image Box */}
        <div className="w-full md:w-1/2 border-b-4 md:border-b-0 md:border-r-4 border-[#536387] bg-[#E1CFAB] min-h-[300px] flex items-center justify-center">
          <span className="font-mono text-[#536387] text-sm">[ HEADSHOT_RENDER.JPG ]</span>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="font-display text-3xl text-[#536387] mb-4 uppercase">Industrial Designer</h2>
          <p className="text-sm text-[#111111] leading-relaxed font-sans">
            I am a designer bridging the gap between physical mechanics and aesthetic form. Whether at the workbench or behind the screen, I build structural solutions.
          </p>
        </div>

      </div>
    </div>
  );
}