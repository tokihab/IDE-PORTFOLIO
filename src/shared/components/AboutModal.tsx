"use client";
import BaseModal from "./BaseModal";

export default function AboutModal({ onClose }: { onClose: () => void }) {
  return (
    <BaseModal onClose={onClose} className="w-[900px] h-[500px] flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 border-b-4 md:border-b-0 md:border-r-4 border-[#536387] bg-[#E1CFAB] flex items-center justify-center shrink-0">
        <span className="font-mono text-[#536387] text-sm">[ HEADSHOT_RENDER.JPG ]</span>
      </div>

      <div className="w-full md:w-3/5 p-12 flex flex-col justify-center overflow-y-auto">
        <h2 className="font-display text-4xl text-[#536387] mb-6 uppercase">Mariam Kaldas</h2>
        <p className="text-lg text-[#111111] leading-relaxed font-sans mb-4">
          I am a designer bridging the gap between physical mechanics and aesthetic form. Whether at the workbench or behind the screen, I build structural solutions.
        </p>
        <p className="text-lg text-[#111111] leading-relaxed font-sans">
          [ ADD_MORE_BIO_HERE ]
        </p>
      </div>
    </BaseModal>
  );
}