"use client";
import BaseModal from "@/shared/components/BaseModal";

// Local database updated with arrays of specific media files and the new teaching experience
const PROJECT_DATABASE = {
  'the-twang': {
    title: "The Twang: Multi-Spring Mechanical Launcher",
    category: "Mechanical Tooling / Engineering Prototype",
    description: "Engineered during a 4-week prototyping sprint at the UT Hangar, The Twang evolved from a MoSCoW evaluation of three concepts into an 18-spring mechanical dart launcher. Faced with extreme structural loads that bent baseplates and fractured joints, the architecture was refined via iterative FMEA analysis to include friction-reducing sliding planes and a winch-and-ratchet tensioning system.",
    media: [
      { type: 'video', src: '/crossbow.mp4' },
      { type: 'image', src: '/crossbow.png' }
    ]
  },
  'sc-04-car': {
    title: "SC-04 SpeedMass Multi-Material Toy Car",
    category: "Mass Production / Manufacturing Optimization",
    description: "Optimized for an annual demand of 200,000 units with a calculated takt time of 32.97 seconds. Real-life FlexSim line balancing exposed a vacuum-forming bottleneck of 60 seconds, resolved by integrating a second vacuum former and balancing workstation tasks. Total manufacturing cost is established at €6.04 per unit with a break-even point at 233,720 units.",
    media: [
      { type: 'video', src: '/molds.mp4' },
      { type: 'image', src: '/molds.jpeg' }
    ]
  },
  'backpack-grill': {
    title: "Rapid-Deploy Backpack Grill",
    category: "Outdoor Consumer Ergonomics / Sheet Metal Fabrication",
    description: "A foldable barbecue constructed from precision-bent aluminum sheet metal with detachable beech wood legs and a wooden carry handle. Features a quick-release locking bolt system that allows seamless transition between a tactical backpack carrying mode and a stable picnic-table cooking platform.",
    media: [
      { type: 'image', src: '/backpack-grill.jpeg' },
      { type: 'image', src: '/backpack-grill-2.jpeg' },
      { type: 'image', src: '/backpack-grill-3.jpeg' },
      { type: 'image', src: '/backpack-grill-4.jpeg' }
    ]
  },
  'cat-stamp': {
    title: "Spring-Loaded Cat Stamp Mechanism",
    category: "Mechanical Toy / Tactile Ergonomics",
    description: "A desktop mechanism featuring a hand-finished black cat head actuator mounted on a vibrant red ABS plastic split-base. Utilizes an exposed stainless steel spring-and-pin linkage system to translate vertical actuation into a smooth, satisfying mechanical snap.",
    media: [
      { type: 'image', src: '/cat.jpeg' },
      { type: 'image', src: '/cat-2.jpeg' }
    ]
  },
  'teaching-experience': {
    title: "Academic Instruction & Mentorship",
    category: "Academic Support / Engineering Education",
    description: "Serving as both an International Baccalaureate (IB) Tutor and a Teaching Assistant for Mechanics of Materials. This dual role involves bridging the gap between theoretical physics and applied industrial design, breaking down complex structural engineering concepts, and guiding students through rigorous academic curriculums.",
    media: [
      { type: 'image', src: '/teaching.jpeg' }
    ]
  }
};

export type ProjectId = keyof typeof PROJECT_DATABASE;

interface ProjectModalProps {
  projectId: ProjectId;
  onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const project = PROJECT_DATABASE[projectId];

  return (
    <BaseModal onClose={onClose} className="w-[1000px] h-[650px] flex flex-col p-10 overflow-hidden">
      
      {/* Header Section */}
      <div className="shrink-0 mb-6 border-b-2 border-dashed border-[#536387] pb-4">
        <span className="font-mono text-[#536387] text-xs mb-2 block">[ {project.category} ]</span>
        <h1 className="font-display text-4xl md:text-5xl text-[#536387] uppercase">
          {project.title}
        </h1>
      </div>
      
      {/* Content Section: Side-by-Side Layout */}
      <div className="flex flex-col md:flex-row gap-8 flex-1 min-h-0">
        
        {/* Left Side: Scrollable Media Gallery (Takes up 60% of width) */}
        <div className="w-full md:w-3/5 h-full bg-[#E1CFAB] border-2 border-dashed border-[#536387] p-2 flex gap-4 overflow-x-auto snap-x items-center">
          {project.media.map((item, index) => (
            <div 
              key={index} 
              className="min-w-full h-full shrink-0 snap-center flex items-center justify-center bg-[#111111] border-2 border-[#536387] relative"
            >
              {item.type === 'video' ? (
                <video 
                  src={item.src} 
                  controls 
                  autoPlay 
                  muted 
                  loop 
                  className="h-full w-full object-contain"
                />
              ) : (
                <img 
                  src={item.src} 
                  alt={`${project.title} showcase ${index + 1}`} 
                  className="h-full w-full object-contain"
                />
              )}
              
              {/* Gallery indicator if there are multiple items */}
              {project.media.length > 1 && (
                <span className="absolute bottom-2 right-2 bg-[#F2E9CD]/80 text-[#111111] px-2 py-1 font-mono text-[10px]">
                  [ {index + 1} / {project.media.length} ]
                </span>
              )}
            </div>
          ))}
        </div>
        
        {/* Right Side: Scrollable Text Description (Takes up 40% of width) */}
        <div className="w-full md:w-2/5 h-full overflow-y-auto pr-4 custom-scrollbar">
          <p className="font-sans text-[#111111] leading-relaxed text-lg">
            {project.description}
          </p>
        </div>

      </div>
    </BaseModal>
  );
}