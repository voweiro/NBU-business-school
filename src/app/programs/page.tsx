import Navbar from "@/components/Navbar";
import ProgramsGrid from "@/components/ProgramsGrid";
import Footer from "@/components/Footer";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-primary" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Academic Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            OUR <span className="text-primary italic font-serif">PROGRAMMES.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
            Explore our comprehensive directory of Senate-approved professional diploma 
            programmes designed for the next generation of global leaders.
          </p>
        </div>
      </div>

      <ProgramsGrid isPaginated={true} itemsPerPage={6} />
      
      <Footer />
    </main>
  );
}
