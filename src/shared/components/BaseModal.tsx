"use client";

import { ReactNode } from "react";

interface BaseModalProps {
  onClose: () => void;
  children: ReactNode;
  className?: string; // Allows injecting specific sizes (e.g., w-[900px])
}

export default function BaseModal({ onClose, children, className = "" }: BaseModalProps) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center modal-overlay p-4"
      onClick={onClose}
    >
      {/* 
        This wrapper holds the close button outside the overflow-hidden box 
        and stops background clicks from triggering when clicking inside the modal 
      */}
      <div 
        className="relative max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute -top-4 -right-4 bg-[#536387] text-[#F2E9CD] px-3 py-1 font-mono text-sm cursor-pointer hover:bg-[#111111] transition-colors z-10" 
          onClick={onClose}
        >
          [X] CLOSE
        </button>

        {/* The core structural box. The `className` prop injects the custom sizes. */}
        <div className={`bg-[#F2E9CD] border-4 border-[#536387] shadow-2xl overflow-hidden ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
}