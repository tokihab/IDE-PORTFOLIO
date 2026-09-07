"use client";
import BaseModal from "./BaseModal";

export default function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <BaseModal onClose={onClose} className="w-[700px] h-[450px] flex flex-col">
      <div className="p-12 flex flex-col items-center justify-center h-full text-center overflow-y-auto">
        <h2 className="font-display text-4xl text-[#536387] mb-2 uppercase">Comm.Link // Establish</h2>
        <p className="font-mono text-[#536387]/70 text-sm mb-10">[ AWAITING_CONNECTION ]</p>
        
        <div className="w-full max-w-md space-y-4">
          <div className="w-full border-2 border-dashed border-[#536387] p-4 bg-[#E1CFAB] hover:bg-[#536387] hover:text-[#F2E9CD] transition-colors cursor-pointer font-mono flex justify-between">
            <span>EMAIL:</span>
            <span>[ hello@mariamkaldas.com ]</span>
          </div>
          <div className="w-full border-2 border-dashed border-[#536387] p-4 bg-[#E1CFAB] hover:bg-[#536387] hover:text-[#F2E9CD] transition-colors cursor-pointer font-mono flex justify-between">
            <span>LINKEDIN:</span>
            <span>[ /in/mariamkaldas ]</span>
          </div>
          <div className="w-full border-2 border-dashed border-[#536387] p-4 bg-[#E1CFAB] hover:bg-[#536387] hover:text-[#F2E9CD] transition-colors cursor-pointer font-mono flex justify-between">
            <span>PHONE:</span>
            <span>[ REQUEST_ACCESS ]</span>
          </div>
        </div>
      </div>
    </BaseModal>
  );
}