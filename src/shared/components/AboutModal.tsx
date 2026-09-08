"use client";
import BaseModal from "./BaseModal";

export default function AboutModal({ onClose }: { onClose: () => void }) {
  return (
    <BaseModal onClose={onClose} className="w-[900px] h-[500px] flex flex-col md:flex-row">
      <div className="relative w-full md:w-2/5 min-h-[260px] md:min-h-0 border-b-4 md:border-b-0 md:border-r-4 border-[#536387] bg-[#E1CFAB] flex flex-col items-center justify-end shrink-0 p-8 text-center overflow-hidden">
        <a href="/mariam.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open Mariam Kaldas profile image" className="absolute inset-0 block border-2 border-[#536387] hover:border-4 transition-all">
          <img src="/mariam.jpg" alt="Mariam Kaldas" className="h-full w-full object-cover" />
        </a>
        <span className="relative z-10 bg-[#F2E9CD]/90 border-2 border-[#536387] text-[#536387] px-2 py-1 font-mono text-sm">[ INDUSTRIAL_DESIGNER ]</span>
      </div>

      <div className="w-full md:w-3/5 p-10 flex flex-col justify-start overflow-y-auto">
        <span className="font-mono text-xs text-[#536387] mb-2">[ ABOUT_THE_DESIGNER ]</span>
        <h2 className="font-display text-4xl text-[#536387] mb-5 uppercase">Mariam Kaldas</h2>
        <div className="space-y-4 text-base text-[#111111] leading-relaxed font-sans">
          <p>I am an industrial designer interested in the space where mechanical logic, human behavior, and visual form meet. My work moves between research, sketching, CAD, physical prototyping, packaging systems, and manufacturing strategy.</p>
          <p>I enjoy turning complex constraints into objects and systems that feel understandable. That means looking closely at how something is made, how it is used, what behavior it asks for, and where a small structural decision can create a better experience.</p>
          <p>Alongside design projects, I tutor and teach mechanics of materials. Teaching has strengthened the way I communicate technical ideas and helps me bring both analytical rigor and empathy into collaborative work.</p>
        </div>
        <div className="mt-6 border-t-2 border-dashed border-[#536387] pt-4 font-mono text-xs text-[#536387]">
          <p>[ FOCUS ] PRODUCT SYSTEMS / MECHANISMS / PACKAGING / MATERIALS</p>
          <p className="mt-2">[ BASE ] INDUSTRIAL DESIGN + ENGINEERING THINKING</p>
          <a href="#teaching-resources" className="mt-2 block underline underline-offset-2">[ TEACHING_RESOURCES ]</a>
        </div>
      </div>
    </BaseModal>
  );
}