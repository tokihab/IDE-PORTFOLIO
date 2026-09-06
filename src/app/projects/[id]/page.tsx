import Link from "next/link";
import NavBar from "@/shared/components/NavBar";

// 1. Type params as a Promise
export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  // 2. Await the params before destructuring
  const { id } = await params;

  return (
    <main className="relative min-h-screen w-full pt-32 px-8">
      <NavBar />
      
      <div className="max-w-4xl mx-auto bg-[#F2E9CD] border-4 border-[#536387] p-8 mt-12 shadow-xl">
        <Link href="/" className="font-mono text-sm text-[#536387] hover:underline mb-8 inline-block">
          &lt;&lt; RETURN_TO_WORKSHOP
        </Link>
        
        <h1 className="font-display text-5xl text-[#536387] mb-6 uppercase">
          {/* 3. Use the awaited 'id' variable */}
          Project: {id.replace('-', ' ')}
        </h1>
        
        <div className="w-full h-64 bg-[#E1CFAB] border-2 border-dashed border-[#536387] flex items-center justify-center mb-6">
          <span className="font-mono text-[#536387]">[ PROJECT_MEDIA_PLACEHOLDER ]</span>
        </div>
        
        <p className="font-sans text-[#111111] leading-relaxed">
          This is the dynamically generated page for the selected blueprint component. Content, specifications, and CAD renders will be injected here.
        </p>
      </div>
    </main>
  );
}