"use client";
import { useState } from "react";
import BaseModal from "@/shared/components/BaseModal";

// 1. Define strict TypeScript types
type MediaItem = { type: 'image' | 'video' | 'embed'; src: string; title?: string };
type ProjectDocument = { label: string; src: string };
type ProjectAnalysis = {
  brief: string;
  challenge: string;
  approach: string;
  outcome: string;
};

type StandardProject = {
  title: string;
  category: string;
  description: string;
  media: MediaItem[];
  documents?: ProjectDocument[];
  skills?: string[];
  analysis?: ProjectAnalysis;
};

type TabbedProject = {
  isTabbed: true;
  tabs: (StandardProject & { id: string })[];
};

type ProjectEntry = StandardProject | TabbedProject;

// 2. Database mapped to ProjectEntry types
const PROJECT_DATABASE: Record<string, ProjectEntry> = {
  'proactiv-redesign': {
    title: "The Sterol Sustainable Packaging Redesign",
    category: "Behavioral Design / Packaging Engineering",
    documents: [
      { label: "[ DIARY_WASTE_ANALYSIS ]", src: "/proactivAss1.pdf" },
      { label: "[ USER_TESTING_EVALUATION ]", src: "/proactivAss2.pdf" },
      { label: "[ COM_B_PACKAGING_ANALYSIS ]", src: "/proactiv-redesign-report.pdf" }
    ],
    skills: ["COM-B Analysis", "Sustainable Packaging", "User Testing", "Behavioral Design"],
    analysis: {
      brief: "A packaging redesign for Becel ProActiv that makes responsible disposal and daily dosage understandable at the point of use.",
      challenge: "The original tub communicated sustainability through color and material claims, but did not make separation, residue removal, or dosage behavior clear. The project therefore had to improve both the physical system and the motivation to use it correctly.",
      approach: "The design used COM-B to connect capability, opportunity, and motivation to concrete packaging decisions. A structural dosage indicator, visible sterol chemistry, clearer layer separation, and a lottery plus QR mechanic turn abstract sustainability claims into observable actions.",
      outcome: "Testing with 12 participants produced strong visual appeal and disposal motivation scores. The main unresolved issue was instruction transparency: disposal icons scored poorly and should be replaced with familiar PMD-style symbols in the next iteration."
    },
    description: "This redesign challenges the low-perceived sustainability of the original multi-material Becel ProActiv tub. By applying a COM-B analysis, the project identified a lack of motivation for proper disposal and unclear dosage instructions as core problems. The redesign eliminated greenwashing elements in favor of a structural daily dosage indicator and a sterol chemical structure to increase transparency, while leveraging a 'lottery and QR code' mechanic to incentivize consumers to scrape out residues and separate layers. User testing across 12 participants validated the approach, scoring 4.7/5 for visual appeal and 4.6/5 for disposal motivation. However, it revealed critical areas for improvement: the disposal icons were too obscure, resulting in a failing 3.3/5 for instruction transparency, necessitating universally recognized icons like PMD.",
        media: [{ type: 'image', src: '/proactiv (1).png' },
          { type: 'image', src: '/proactiv (2).png' },
    ]
  },
  'sportlife-remint': {
    title: "Sportlife ReMint: PPWR-Compliant Mono-Material System",
    category: "Sustainable Packaging Design / Lifecycle Engineering",
    documents: [{ label: "[ PRODUCTION_LINE_PET_SYSTEM ]", src: "/sportlife-remint-report.pdf" }],
    skills: ["Mono-Material Design", "PPWR Compliance", "Lifecycle Engineering", "Packaging Systems"],
    analysis: {
      brief: "A recyclable refill and return system for Sportlife gum, designed around a mono-material PET package and repeated use.",
      challenge: "The original blister was effectively landfill-bound and combined materials that were difficult to recover. The redesign had to reduce weight, retain freshness, survive repeated handling, and respond to the 2025/40 EU Packaging and Packaging Waste Regulation.",
      approach: "The proposal combines an ultrasonically welded PET film blister with an injection-molded PET sleeve and living hinge. A sequential Return on the Go system with Albert Heijn gives the package a practical reuse path instead of treating recycling as the only intervention.",
      outcome: "The system reduces the package from 17.5g to 13.99g, or 8.34g with cardboard, and models a 50% recycling rate. The design maintains individual gum wrapping while connecting the packaging format to a credible collection and reuse behavior."
    },
    description: "Targeting the 100% landfill fate of the original blister pack, BLNC engineered a fully recyclable, mono-material PET system for Sportlife gum. The redesign comprises an ultrasonically welded PET film blister and an injection-molded PET sleeve with a living hinge closure, slashing total packaging weight from 17.5g to 13.99g (or 8.34g when paired with cardboard). The project navigates the stringent 2025/40 EU Packaging and Packaging Waste Regulation by utilizing a smart 'Return on the Go' sequential reuse system in collaboration with Albert Heijn, achieving a 50% recycling rate and reducing environmental impact to 2.25 Person Equivalents, while preserving sensory freshness through individual wrapping.",
    media: [{ type: 'embed', src: 'https://www.youtube.com/embed/y3_btxc5b4E', title: 'Sportlife ReMint presentation' }]
  },
  'sitsense-chair': {
    title: "SitSense: The Smart Ergonomic Nudge System",
    category: "Interactive Product Design / Behavioral Health",
    documents: [{ label: "[ BEHAVIOUR_CHANGE_USER_STUDY ]", src: "/sitsense-chair-report.pdf" }],
    skills: ["Ergonomic Design", "Behavior Change", "Pressure Sensing", "Interaction Design"],
    analysis: {
      brief: "A smart cushion and desktop companion that interrupts prolonged sitting with quiet, physical feedback.",
      challenge: "Long periods of sedentary work create physical and cognitive costs, but many reminder systems are easy to dismiss or socially disruptive. The system needed to intervene without demanding attention during meetings or focused work.",
      approach: "Pressure sensing tracks sitting duration and vibration motors provide a gentle nudge after 45 minutes. Fogg Behavior Model and Self-Determination Theory informed the intervention, while calendar awareness prevents prompts during meetings.",
      outcome: "Technology Acceptance Model testing indicated 82% intention to use, with positive perceived ease of use and attitude scores. The next technical step is a mobile interface and MOSFET-driven LRA motors for a more robust product platform."
    },
    description: "Addressing the physical and cognitive decline associated with prolonged sedentary behavior, SitSense integrates a smart ergonomic cushion with a pressure sensor, vibration motors, and a desktop application. Rooted in the Fogg Behavior Model and Self-Determination Theory, the system silently monitors sitting duration and provides a gentle, physical vibration prompt after 45 minutes, intelligently skipping nudges when the user's digital calendar indicates a meeting. User testing via the Technology Acceptance Model confirmed high adoption potential (82% intention to use) and positive attitudes (PEOU 3.93/5, ATU 3.87/5), highlighting the system's ability to use local, transparent feedback over persuasive tactics. Future iterations focus on migrating to a mobile interface for convenience and implementing MOSFETs to safely drive more powerful LRA vibration motors.",
    media: [
      { type: 'image', src: '/sitsense (1).png' },
      { type: 'image', src: '/sitsense (2).png' },
      { type: 'image', src: '/sitsense-chair-research-board.jpeg' },
    ]

  },
  'the-twang': {
    title: "The Twang: Multi-Spring Mechanical Launcher",
    category: "Mechanical Tooling / Engineering Prototype",
    documents: [
      { label: "[ CONCEPTUALISATION ]", src: "/crossbowAss1.pdf" },
      { label: "[ DESIGN_DEVELOPMENT ]", src: "/crossbowAss2.pdf" },
      { label: "[ DART_SHOOTER_TECHNICAL_REPORT ]", src: "/the-twang-report.pdf" }
    ],
    skills: ["Mechanical Prototyping", "FMEA", "Spring Mechanisms", "Engineering Testing"],
    analysis: {
      brief: "An 18-spring mechanical dart launcher developed through rapid prototyping at the UT Hangar.",
      challenge: "The launcher generated enough structural load to bend baseplates and fracture joints. The design challenge was not only to create stored energy, but to control that energy through a repeatable and serviceable mechanism.",
      approach: "A MoSCoW evaluation narrowed three concepts into the final architecture. Iterative FMEA exposed failure points, leading to friction-reducing sliding planes, reinforced joints, and a winch-and-ratchet tensioning system.",
      outcome: "The final concept demonstrates how testing changed the mechanism rather than merely validating an early idea. The project shows a complete chain from concept selection through failure analysis, structural refinement, and working prototype."
    },
    description: "Engineered during a 4-week prototyping sprint at the UT Hangar, The Twang evolved from a MoSCoW evaluation of three concepts into an 18-spring mechanical dart launcher. Faced with extreme structural loads that bent baseplates and fractured joints, the architecture was refined via iterative FMEA analysis to include friction-reducing sliding planes and a winch-and-ratchet tensioning system.",
    media: [
      { type: 'video', src: '/the-twang-action-shot.mp4' },
      { type: 'image', src: '/the-twang-hero.png' }
    ]
  },
  'sc-04-car': {
    title: "SC-04 SpeedMass Multi-Material Toy Car",
    category: "Mass Production / Manufacturing Optimization",
    documents: [
      { label: "[ PARTS_COST_BREAKDOWN ]", src: "/moldsAss1.pdf" },
      { label: "[ COST_PRODUCTION_REPORT ]", src: "/moldsAss4.pdf" }
    ],
    skills: ["FlexSim", "Line Balancing", "Manufacturing", "Cost Analysis"],
    analysis: {
      brief: "A manufacturing optimization study for the SC-04 SpeedMass multi-material toy car at an annual demand of 200,000 units.",
      challenge: "The line had to meet a 32.97-second takt time while coordinating vacuum forming, assembly, and downstream operations. Simulation exposed a 60-second vacuum-forming bottleneck that made the original line incapable of meeting demand.",
      approach: "FlexSim was used to test workstation balance and identify where capacity was lost. Adding a second vacuum former and redistributing tasks aligned the line more closely with demand and provided a stronger basis for costing and break-even analysis.",
      outcome: "The optimized plan establishes a manufacturing cost of EUR 6.04 per unit and a break-even point of 233,720 units. The project demonstrates the relationship between process design, capacity planning, and commercial viability."
    },
    description: "Optimized for an annual demand of 200,000 units with a calculated takt time of 32.97 seconds. Real-life FlexSim line balancing exposed a vacuum-forming bottleneck of 60 seconds, resolved by integrating a second vacuum former and balancing workstation tasks. Total manufacturing cost is established at €6.04 per unit with a break-even point at 233,720 units.",
    media: [
      { type: 'video', src: '/sc-04-car-production.mp4' },
      { type: 'image', src: '/sc-04-car-prototypes.jpeg' },
      { type: 'image', src: '/moldsAss2.png' },
      { type: 'image', src: '/moldsAss3.png' },
      { type: 'image', src: '/moldsAss5.png' }
    ]
  },
  'backpack-grill': {
    title: "Rapid-Deploy Backpack Grill",
    category: "Outdoor Consumer Ergonomics / Sheet Metal Fabrication",
    skills: ["Sheet Metal Fabrication", "Ergonomics", "Rapid Prototyping", "Outdoor Products"],
    analysis: {
      brief: "A foldable barbecue that shifts between a backpack-sized carry mode and a stable cooking configuration.",
      challenge: "The product had to carry safely, deploy quickly, tolerate heat, and remain stable without becoming bulky. The design also needed to make the transition between transport and cooking modes intuitive.",
      approach: "Precision-bent aluminum sheet metal forms the main body, while detachable beech legs and a wooden handle improve touchpoints and portability. A quick-release locking bolt makes the transformation legible and repeatable.",
      outcome: "The result is a compact outdoor cooking system with a clear two-mode use case. The prototype balances fabrication realism with a distinctive interaction, giving the product a strong physical story as well as a practical function."
    },
    description: "A foldable barbecue constructed from precision-bent aluminum sheet metal with detachable beech wood legs and a wooden carry handle. Features a quick-release locking bolt system that allows seamless transition between a tactical backpack carrying mode and a stable picnic-table cooking platform.",
    media: [
      { type: 'image', src: '/backpack-grill-instructions.jpeg' },
      { type: 'image', src: '/backpack-grill-hero.jpeg' },
      { type: 'image', src: '/backpack-grill-process.jpg' },
      { type: 'image', src: '/backpack-grill-detail-02.jpeg' },
      { type: 'image', src: '/backpack-grill-storyboard.jpg' },
      { type: 'image', src: '/backpack-grill-detail-01.jpeg' },
    ]
  },
  'cat-stamp': {
    title: "Spring-Loaded Cat Stamp Mechanism",
    category: "Mechanical Toy / Tactile Ergonomics",
    skills: ["Mechanism Design", "Tactile Interaction", "ABS Prototyping", "Product Detailing"],
    analysis: {
      brief: "A desktop cat-shaped stamp mechanism designed around a satisfying, visible mechanical action.",
      challenge: "The interaction needed to feel immediate and tactile while keeping the spring, pin, and split-base relationship understandable. The product also had to combine playful character with a credible mechanical construction.",
      approach: "A hand-finished cat head acts as the vertical actuator. The exposed stainless-steel spring-and-pin linkage translates that motion into a controlled snap, while the red ABS split-base provides structure and visual energy.",
      outcome: "The mechanism makes its behavior part of the product identity: the user can see why the stamp moves and feel the return force. It is a small study in how material contrast and exposed mechanics can make an everyday interaction memorable."
    },
    description: "A desktop mechanism featuring a hand-finished black cat head actuator mounted on a vibrant red ABS plastic split-base. Utilizes an exposed stainless steel spring-and-pin linkage system to translate vertical actuation into a smooth, satisfying mechanical snap.",
    media: [
      { type: 'image', src: '/cat-stamp-mechanism.jpeg' },
      { type: 'image', src: '/cat-stamp-hero.jpeg' },
    ]
  },
  'teaching-experience': {
    title: "Academic Instruction & Mentorship",
    category: "Academic Support / Engineering Education",
    skills: ["Mechanics of Materials", "Physics Tutoring", "Technical Communication", "Mentorship"],
    analysis: {
      brief: "Teaching and mentorship work that connects mechanics theory with the decisions designers make in physical products.",
      challenge: "Students often encounter mechanics as abstract equations detached from physical intuition. The teaching challenge is to make structural behavior legible without reducing the rigor of the underlying theory.",
      approach: "The work combines International Baccalaureate tutoring with teaching assistance in Mechanics of Materials. Explanations move between diagrams, equations, physical examples, and design consequences so learners can transfer concepts into projects.",
      outcome: "This experience strengthens the ability to communicate technical ideas clearly, diagnose where understanding breaks down, and support learners through a demanding curriculum. Those same skills carry into design reviews, research presentations, and collaborative engineering work."
    },
    description: "Serving as both an International Baccalaureate (IB) Tutor and a Teaching Assistant for Mechanics of Materials. This dual role involves bridging the gap between theoretical physics and applied industrial design, breaking down complex structural engineering concepts, and guiding students through rigorous academic curriculums.",
    media: []
  },
  'blueprints-canvases': {
    isTabbed: true,
    tabs: [
      {
        id: 'blueprints',
        title: "Product Design (Blueprints)",
        category: "Technical Schematics & CAD Layouts",
        skills: ["CAD Documentation", "Technical Drawing", "Design for Manufacturing", "Material Systems"],
        description: "Technical schematics, CAD layouts, and structural blueprints detailing exact mechanical tolerances, material assemblies, and functional engineering specifications for mass manufacturing and prototyping.",
        media: [
          { type: 'image', src: '/blueprints-packaging-presentation.jpeg' },
        ]
      },
      {
        id: 'canvases',
        title: "Drawings & Paintings (Hobby)",
        category: "Traditional & Digital Illustration",
        skills: ["Composition", "Color Theory", "Visual Storytelling", "Creative Practice"],
        description: "Personal explorations in traditional and digital illustration, focusing on composition, color theory, and visual storytelling. An outlet for creative expression outside of rigid engineering constraints.",
        media: [
          { type: 'image', src: '/canvases-sketch-01.jpeg' },
          { type: 'image', src: '/canvases-sketch-02.jpeg' },
          { type: 'image', src: '/canvases-sketch-03.jpeg' },
          { type: 'image', src: '/canvases-sketch-04.jpeg' },
          { type: 'image', src: '/canvases-sketch-05.jpeg' },
          { type: 'image', src: '/canvases-sketch-06.jpeg' },
          { type: 'image', src: '/canvases-sketch-07.jpeg' },
          { type: 'image', src: '/canvases-sketch-08.jpeg' },
          { type: 'image', src: '/canvases-sketch-09.jpeg' },
          { type: 'image', src: '/canvases-sketch-10.jpeg' },
          { type: 'image', src: '/canvases-sketch-11.jpeg' },
          { type: 'image', src: '/canvases-sketch-12.jpeg' },
          { type: 'image', src: '/canvases-sketch-13.jpeg' },
          { type: 'image', src: '/canvases-sketch-14.jpeg' },
          { type: 'image', src: '/canvases-sketch-15.jpeg' },
          { type: 'image', src: '/canvases-sketch-16.jpeg' },
          { type: 'image', src: '/canvases-sketch-17.jpeg' },
          { type: 'image', src: '/canvases-sketch-18.jpeg' },
          { type: 'image', src: '/canvases-sketch-19.jpeg' },
          { type: 'image', src: '/canvases-sketch-20.jpeg' },
          { type: 'image', src: '/canvases-sketch-21.jpeg' },
          { type: 'image', src: '/canvases-sketch-22.jpeg' }
        ]
      }
    ]
  }
};

const ANALYSIS_SOURCES: Record<string, Partial<Record<keyof ProjectAnalysis, ProjectDocument>>> = {
  'proactiv-redesign': {
    brief: { label: "[ COM_B_REPORT ]", src: "/proactiv-redesign-report.pdf" },
    challenge: { label: "[ DIARY_ANALYSIS ]", src: "/proactivAss1.pdf" },
    approach: { label: "[ COM_B_REPORT ]", src: "/proactiv-redesign-report.pdf" },
    outcome: { label: "[ USER_TESTING ]", src: "/proactivAss2.pdf" }
  },
  'sportlife-remint': {
    brief: { label: "[ PET_SYSTEM_REPORT ]", src: "/sportlife-remint-report.pdf" },
    challenge: { label: "[ PET_SYSTEM_REPORT ]", src: "/sportlife-remint-report.pdf" },
    approach: { label: "[ PET_SYSTEM_REPORT ]", src: "/sportlife-remint-report.pdf" },
    outcome: { label: "[ PET_SYSTEM_REPORT ]", src: "/sportlife-remint-report.pdf" }
  },
  'sitsense-chair': {
    brief: { label: "[ USER_STUDY ]", src: "/sitsense-chair-report.pdf" },
    challenge: { label: "[ USER_STUDY ]", src: "/sitsense-chair-report.pdf" },
    approach: { label: "[ BEHAVIOUR_CHANGE ]", src: "/sitsense-chair-report.pdf" },
    outcome: { label: "[ EVALUATION ]", src: "/sitsense-chair-report.pdf" }
  },
  'the-twang': {
    brief: { label: "[ TECHNICAL_REPORT ]", src: "/the-twang-report.pdf" },
    challenge: { label: "[ TECHNICAL_REPORT ]", src: "/the-twang-report.pdf" },
    approach: { label: "[ DESIGN_DEVELOPMENT ]", src: "/crossbowAss2.pdf" },
    outcome: { label: "[ TECHNICAL_REPORT ]", src: "/the-twang-report.pdf" }
  },
  'sc-04-car': {
    brief: { label: "[ COST_PRODUCTION_REPORT ]", src: "/moldsAss4.pdf" },
    challenge: { label: "[ COST_PRODUCTION_REPORT ]", src: "/moldsAss4.pdf" },
    approach: { label: "[ PARTS_COST_BREAKDOWN ]", src: "/moldsAss1.pdf" },
    outcome: { label: "[ COST_PRODUCTION_REPORT ]", src: "/moldsAss4.pdf" }
  }
};

function AnalysisSection({ label, text, source }: { label: string; text: string; source?: ProjectDocument }) {
  return (
    <section>
      <h2 className="font-display text-xl text-[#536387] uppercase tracking-wide mb-1">[ {label} ]</h2>
      <p className="font-sans text-[#111111] leading-relaxed">{text}</p>
      {source && (
        <a href={source.src} target="_blank" rel="noopener noreferrer" className="document-citation">
          SOURCE: {source.label}
        </a>
      )}
    </section>
  );
}

export type ProjectId = keyof typeof PROJECT_DATABASE;

interface ProjectModalProps {
  projectId: ProjectId;
  onClose: () => void;
  uiScale?: number;
}

export default function ProjectModal({ projectId, onClose, uiScale = 1 }: ProjectModalProps) {
  const projectData = PROJECT_DATABASE[projectId];
  const [activeTab, setActiveTab] = useState(0);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  // 3. Explicit Type Casting fixes the ts(2339) error
  const isTabbed = 'isTabbed' in projectData;
  const project = (isTabbed ? (projectData as TabbedProject).tabs[activeTab] : projectData) as StandardProject;
  const analysisSources = ANALYSIS_SOURCES[projectId];

  return (
    <BaseModal onClose={onClose} uiScale={uiScale} className="w-[1100px] h-[700px] flex flex-col p-10 overflow-hidden">
      
      {/* Optional Tab Switcher */}
      {isTabbed && (
        <div className="flex gap-4 mb-4 border-b-2 border-[#536387] pb-2">
          {(projectData as TabbedProject).tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`font-display text-xl tracking-widest px-4 py-2 transition-colors ${activeTab === index ? 'bg-[#536387] text-[#F2E9CD]' : 'text-[#536387] hover:bg-[#536387]/10'}`}
            >
              [ {tab.id.toUpperCase()} ]
            </button>
          ))}
        </div>
      )}

      {/* Header Section */}
      <div className="shrink-0 mb-6 border-b-2 border-dashed border-[#536387] pb-4">
        <div className="flex justify-between items-start">
          <div>
            <span className="font-mono text-[#536387] text-xs mb-2 block">[ {project.category} ]</span>
            <h1 className="font-display text-4xl md:text-5xl text-[#536387] uppercase">
              {project.title}
            </h1>
            {project.skills && (
              <div className="flex flex-wrap gap-2 mt-3 max-w-[680px]">
                {project.skills.map((skill) => (
                  <span key={skill} className="skill-chip border px-2 py-1 font-mono text-[10px] tracking-wide">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
          {project.documents && project.documents.length > 0 && (
            <div className="flex flex-wrap justify-end gap-2 ml-4 shrink-0 max-w-[360px]">
              {project.documents.map((document) => (
                <a
                  key={document.src}
                  href={document.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="document-button"
                >
                  {document.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Content Section: Side-by-Side Layout */}
      <div className="flex flex-col md:flex-row gap-8 flex-1 min-h-0">
        
        {/* Left Side: Single fitted media view with explicit controls */}
        <div className="w-full md:w-3/5 h-full min-h-0 flex flex-col gap-2">
          <div className="flex-1 min-h-0 bg-[#111111] border-2 border-[#536387] p-2 flex items-center justify-center relative overflow-hidden">
            {project.media.length > 0 && project.media[activeMediaIndex] && (
              project.media[activeMediaIndex].type === 'video' ? (
                <video src={project.media[activeMediaIndex].src} controls autoPlay muted loop className="h-full w-full object-cover" />
              ) : project.media[activeMediaIndex].type === 'embed' ? (
                <iframe
                  src={project.media[activeMediaIndex].src}
                  title={project.media[activeMediaIndex].title ?? project.title}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <img src={project.media[activeMediaIndex].src} alt={`${project.title} showcase ${activeMediaIndex + 1}`} className="max-h-full max-w-full object-contain" />
              )
            )}
            {project.media.length === 0 && <span className="font-mono text-[#F2E9CD] text-sm">[ NO_MEDIA_AVAILABLE ]</span>}
            {project.media.length > 1 && (
              <span className="absolute bottom-2 right-2 bg-[#F2E9CD]/90 text-[#111111] px-2 py-1 font-mono text-[10px]">
                [ {activeMediaIndex + 1} / {project.media.length} ]
              </span>
            )}
          </div>
          {project.media.length > 1 && (
            <div className="flex items-center justify-between gap-2">
              <button type="button" onClick={() => setActiveMediaIndex((activeMediaIndex - 1 + project.media.length) % project.media.length)} className="border-2 border-[#536387] px-3 py-1 font-mono text-xs text-[#536387] hover:bg-[#536387] hover:text-[#F2E9CD]">[ PREV ]</button>
              <div className="flex gap-1 overflow-hidden">
                {project.media.map((item, index) => (
                  <button type="button" key={item.src} aria-label={`Show media ${index + 1}`} onClick={() => setActiveMediaIndex(index)} className={`h-2 w-6 border border-[#536387] ${index === activeMediaIndex ? 'bg-[#536387]' : 'bg-[#E1CFAB]'}`} />
                ))}
              </div>
              <button type="button" onClick={() => setActiveMediaIndex((activeMediaIndex + 1) % project.media.length)} className="border-2 border-[#536387] px-3 py-1 font-mono text-xs text-[#536387] hover:bg-[#536387] hover:text-[#F2E9CD]">[ NEXT ]</button>
            </div>
          )}
        </div>
        
        {/* Right Side: Structured project analysis */}
        <div className="w-full md:w-2/5 h-full overflow-y-auto pr-4 custom-scrollbar space-y-5">
          {project.analysis ? (
            <>
              <AnalysisSection label="PROJECT_BRIEF" text={project.analysis.brief} source={analysisSources?.brief} />
              <AnalysisSection label="DESIGN_CHALLENGE" text={project.analysis.challenge} source={analysisSources?.challenge} />
              <AnalysisSection label="APPROACH" text={project.analysis.approach} source={analysisSources?.approach} />
              <AnalysisSection label="OUTCOME" text={project.analysis.outcome} source={analysisSources?.outcome} />
            </>
          ) : (
            <p className="font-sans text-[#111111] leading-relaxed">{project.description}</p>
          )}
        </div>

      </div>
    </BaseModal>
  );
}