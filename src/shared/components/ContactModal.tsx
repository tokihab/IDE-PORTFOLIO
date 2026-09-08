"use client";
import BaseModal from "./BaseModal";

export default function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <BaseModal onClose={onClose} className="w-[700px] min-h-[450px] flex flex-col">
      <div className="p-12 flex flex-col items-center justify-center h-full text-center overflow-y-auto">
        <h2 className="font-display text-4xl text-[#536387] mb-2 uppercase">Comm.Link // Establish</h2>
        <p className="font-mono text-[#536387]/70 text-sm mb-8">[ OPEN_FOR_DESIGN_CONVERSATIONS ]</p>
        
        <div className="w-full max-w-md space-y-4">
          <a href="mailto:hello@mariamkaldas.com" className="w-full border-2 border-dashed border-[#536387] p-4 bg-[#E1CFAB] hover:bg-[#536387] hover:text-[#F2E9CD] transition-colors font-mono flex justify-between gap-4 text-left">
            <span>EMAIL:</span>
            <span>[ hello@mariamkaldas.com ]</span>
          </a>
          <a href="https://www.linkedin.com/in/mariam-kaldas-0bb173326/" target="_blank" rel="noopener noreferrer" className="w-full border-2 border-dashed border-[#536387] p-4 bg-[#E1CFAB] hover:bg-[#536387] hover:text-[#F2E9CD] transition-colors font-mono flex justify-between gap-4 text-left">
            <span>LINKEDIN:</span>
            <span>[ MARIAM_KALDAS ]</span>
          </a>
          <div className="w-full border-2 border-dashed border-[#536387] p-4 bg-[#E1CFAB] font-mono flex justify-between gap-4 text-left">
            <span>PHONE:</span>
            <span>[ REQUEST_ACCESS ]</span>
          </div>
        </div>
        <p className="font-sans text-[#111111] text-sm leading-relaxed max-w-md mt-8">For collaboration, internships, design research, or technical project conversations, email is the fastest route. LinkedIn is the best place to follow current work and professional updates.</p>
      </div>
    </BaseModal>
  );
}