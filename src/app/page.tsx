"use client"; 
import { useEffect, useState } from "react";
import NavBar from "@/shared/components/NavBar";
import Hotspot from "@/features/canvas/Hotspot";
import ProjectModal, { ProjectId } from "@/features/projects/ProjectsModal";
import AboutModal from "@/shared/components/AboutModal";
import ContactModal from "@/shared/components/ContactModal";

export default function Home() {
  const [activeProject, setActiveProject] = useState<ProjectId | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [uiScale, setUiScale] = useState(1);
  const [browserZoomCompensation, setBrowserZoomCompensation] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateBrowserZoom = () => {
      const mobileViewport = window.matchMedia("(max-width: 767px)").matches
        || (navigator.maxTouchPoints > 0 && window.innerWidth < 1024);
      const browserZoom = window.outerWidth / window.innerWidth;
      const compensation = mobileViewport ? 1 : Math.min(3, Math.max(1, 1 / browserZoom));
      setIsMobile(mobileViewport);
      setBrowserZoomCompensation(compensation);
    };

    updateBrowserZoom();
    window.addEventListener("resize", updateBrowserZoom);
    window.visualViewport?.addEventListener("resize", updateBrowserZoom);
    return () => {
      window.removeEventListener("resize", updateBrowserZoom);
      window.visualViewport?.removeEventListener("resize", updateBrowserZoom);
    };
  }, []);

  const changeUiScale = (delta: number) => {
    setUiScale((current) => Math.min(1.4, Math.max(0.8, Number((current + delta).toFixed(1)))));
  };

  const effectiveUiScale = uiScale * browserZoomCompensation;
  const canvasWidth = isMobile ? "calc(100vw - 2rem)" : "1400px";

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-8 pt-32 overflow-auto max-md:p-4 max-md:pt-28" style={{ alignItems: "safe center", justifyContent: "safe center" }}>
      <NavBar 
        onOpenAbout={() => setIsAboutOpen(true)} 
        onOpenContact={() => setIsContactOpen(true)} 
        uiScale={effectiveUiScale}
      />
      
      {/* Professional Instruction Tooltip */}
      <div className="canvas-aligned flex justify-between items-end mb-2 px-1 max-md:flex-col max-md:items-start max-md:gap-2" style={{ width: canvasWidth, zoom: browserZoomCompensation }}>
        <span className="font-mono text-[#536387] text-sm md:text-base">
          STATUS: <span className="text-green-600 font-bold">ONLINE</span> // AWAITING USER INPUT
        </span>
        <span className="font-display text-[#F2E9CD] text-sm tracking-widest bg-[#536387] border-2 border-[#536387] px-3 py-1 font-bold shadow-md">
          INTERACTIVE WORKSHOP: SELECT ELEMENTS TO EXPLORE PROJECTS
        </span>
      </div>

      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 border-2 border-[#536387] bg-[#F2E9CD] px-2 py-1 text-[#536387] shadow-md" style={{ transform: `scale(${effectiveUiScale})`, transformOrigin: "bottom right" }}>
        <span className="font-mono text-xs">UI {Math.round(uiScale * 100)}%</span>
        <button type="button" onClick={() => changeUiScale(-0.1)} aria-label="Decrease interface scale" className="border border-[#536387] px-2 font-mono hover:bg-[#536387] hover:text-[#F2E9CD]">-</button>
        <button type="button" onClick={() => setUiScale(1)} aria-label="Reset interface scale" className="border border-[#536387] px-2 font-mono hover:bg-[#536387] hover:text-[#F2E9CD]">100</button>
        <button type="button" onClick={() => changeUiScale(0.1)} aria-label="Increase interface scale" className="border border-[#536387] px-2 font-mono hover:bg-[#536387] hover:text-[#F2E9CD]">+</button>
      </div>

      {/* Responsive Canvas Workshop Floor */}
      <div 
        className="canvas-aligned relative aspect-video border-4 border-[#536387] shadow-2xl bg-[#E1CFAB] max-md:min-w-0"
        style={{
          width: canvasWidth,
          zoom: browserZoomCompensation,
          backgroundImage: "url('/workshop-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* 1. Blueprints & Canvases (Floor, Bottom Left) */}
        <Hotspot 
          top="69.4%" left="0%" width="16.6%" height="30.6%" 
          title="[ CREATIVE_PORTFOLIO ]" 
          uiScale={uiScale}
          onClick={() => setActiveProject('blueprints-canvases')} 
        />

        {/* 2. Car Molding (3D Printer on Left Desk) -> SC-04 Toy Car */}
        <Hotspot 
          top="53.8%" left="15.2%" width="11.3%" height="20%" 
          title="[ SC-04_TOY_CAR ]" 
          uiScale={uiScale}
          onClick={() => setActiveProject('sc-04-car')} 
        />

        {/* 3. Backpack Grill (On the Girl's Back) */}
        <Hotspot 
          top="52.8%" left="29.7%" width="12.1%" height="16.7%" 
          title="[ BACKPACK_GRILL ]" 
          uiScale={uiScale}
          onClick={() => setActiveProject('backpack-grill')} 
        />

        {/* 4. ProActiv Boxes (Center Back Table) */}
        <Hotspot 
          top="29%" left="49%" width="9%" height="17%" 
          title="[ PROACTIV_REDESIGN ]" 
          uiScale={uiScale}
          onClick={() => setActiveProject('proactiv-redesign')} 
        />

        {/* 5. Sportlife Gum (Center Front Table) */}
        <Hotspot 
          top="60.8%" left="49.6%" width="12.8%" height="17.5%" 
          title="[ SPORTLIFE_REMINT ]" 
          uiScale={uiScale}
          onClick={() => setActiveProject('sportlife-remint')} 
        />

        {/* 6. The Crossbow (Shelf on Center-Right) -> The Twang */}
        <Hotspot 
          top="19.6%" left="57.8%" width="12.5%" height="12.6%" 
          title="[ THE_TWANG_LAUNCHER ]" 
          uiScale={uiScale}
          onClick={() => setActiveProject('the-twang')} 
        />

        {/* 7. SitSense Chair (Office Chair, Right Side) */}
        <Hotspot 
          top="58.3%" left="65.5%" width="12.5%" height="15.5%" 
          title="[ SITSENSE_NUDGE_SYSTEM ]" 
          uiScale={uiScale}
          onClick={() => setActiveProject('sitsense-chair')} 
        />

        {/* 8. Red Cat Stamp (Desk on Far Right) */}
        <Hotspot 
          top="45.7%" left="75.2%" width="10%" height="15.2%" 
          title="[ CAT_STAMP_MECH ]" 
          uiScale={uiScale}
          onClick={() => setActiveProject('cat-stamp')} 
        />

        {/* 9. Chalkboard (Wall on Top Right) -> Teaching Experience */}
        <Hotspot 
          top="10%" left="78.4%" width="20.8%" height="30%" 
          title="[ ACADEMIC_INSTRUCTION ]" 
          uiScale={uiScale}
          onClick={() => setActiveProject('teaching-experience')} 
        />
        
      </div>

      {/* Modals */}
      {activeProject && (
        <ProjectModal projectId={activeProject} onClose={() => setActiveProject(null)} uiScale={effectiveUiScale} />
      )}
      {isAboutOpen && <AboutModal onClose={() => setIsAboutOpen(false)} />}
      {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
    </main>
  );
}