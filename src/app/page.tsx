import NavBar from "@/shared/components/NavBar";
import Hotspot from "@/features/canvas/Hotspot";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <NavBar />
      
      {/* The Scrollable Canvas Container 
        On desktop this is full screen, on mobile users can pan around
      */}
      <div className="absolute inset-0 overflow-auto flex items-center justify-center">
        
        {/* The interactive "Room" bounds (Fixed size for mapping coordinates) */}
        <div className="relative w-[1200px] h-[800px] border-4 border-[#536387]/30 mt-32 shrink-0">
          
          <span className="absolute top-4 left-4 font-mono text-[#536387]/50 text-sm">
            [ CANVAS_BOUNDS : 1200x800 ]
          </span>

          {/* Hotspot 1: 3D Printer */}
          <Hotspot 
            top="30%" 
            left="20%" 
            width="250px" 
            height="200px" 
            title="[ 3D_PRINTING_RIG ]" 
            projectId="3d-printer" 
          />

          {/* Hotspot 2: CAD Workstation */}
          <Hotspot 
            top="50%" 
            left="60%" 
            width="300px" 
            height="150px" 
            title="[ CAD_WORKSTATION ]" 
            projectId="cad-station" 
          />
          
        </div>
      </div>
    </main>
  );
}