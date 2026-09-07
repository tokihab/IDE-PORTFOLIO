"use client"; 
import { useState } from "react";
import NavBar from "@/shared/components/NavBar";
import Hotspot from "@/features/canvas/Hotspot";
import ProjectModal, { ProjectId } from "@/features/projects/ProjectsModal";
import AboutModal from "@/shared/components/AboutModal";
import ContactModal from "@/shared/components/ContactModal";

export default function Home() {
  const [activeProject, setActiveProject] = useState<ProjectId | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-8 pt-32 overflow-hidden">
      <NavBar 
        onOpenAbout={() => setIsAboutOpen(true)} 
        onOpenContact={() => setIsContactOpen(true)} 
      />
      
      {/* 
        Responsive Canvas Workshop Floor 
        We apply the pixel-art image as a background cover so it perfectly fills the 16:9 ratio.
      */}
      <div 
        className="relative w-full max-w-[1400px] aspect-[16/9] border-4 border-[#536387] shadow-2xl bg-[#E1CFAB]"
        style={{
          backgroundImage: "url('/workshop-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <span className="absolute top-4 left-4 font-mono text-[#111111]/70 bg-[#F2E9CD]/80 px-2 py-1 text-sm md:text-base z-30">
          [ CANVAS_BOUNDS : INTERACTIVE ]
        </span>

        {/* 1. Black-Haired Girl -> Triggers About Modal */}
        <Hotspot 
          top="35%" left="22%" width="10%" height="50%" 
          title="[ ABOUT_MARIAM ]" 
          onClick={() => setIsAboutOpen(true)} 
        />

        {/* 2. Car Molding (3D Printer on Left Desk) -> SC-04 Toy Car */}
        <Hotspot 
          top="45%" left="7%" width="15%" height="30%" 
          title="[ SC-04_TOY_CAR ]" 
          onClick={() => setActiveProject('sc-04-car')} 
        />

        {/* 3. The Crossbow (Shelf on Center-Right) -> The Twang */}
        <Hotspot 
          top="20%" left="60%" width="12%" height="13%" 
          title="[ THE_TWANG_LAUNCHER ]" 
          onClick={() => setActiveProject('the-twang')} 
        />

        {/* 4. Backpack BBQ Grill (Center Foreground) -> Backpack Grill */}
        <Hotspot 
          top="55%" left="42%" width="16%" height="33%" 
          title="[ BACKPACK_GRILL ]" 
          onClick={() => setActiveProject('backpack-grill')} 
        />

        {/* 5. Red Cat Stamp (Desk on Far Right) -> Cat Stamp */}
        <Hotspot 
          top="48%" left="78%" width="6%" height="10%" 
          title="[ CAT_STAMP_MECH ]" 
          onClick={() => setActiveProject('cat-stamp')} 
        />

        {/* 6. Chalkboard (Wall on Top Right) -> Teaching Experience */}
        <Hotspot 
          top="10%" left="76%" width="18%" height="30%" 
          title="[ ACADEMIC_INSTRUCTION ]" 
          onClick={() => setActiveProject('teaching-experience')} 
        />
        
      </div>

      {/* Modals */}
      {activeProject && (
        <ProjectModal projectId={activeProject} onClose={() => setActiveProject(null)} />
      )}
      {isAboutOpen && <AboutModal onClose={() => setIsAboutOpen(false)} />}
      {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
    </main>
  );
}