"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import programsData from "@/data/programs.json";
import ProgramCard from "./ProgramCard";
import ProgramDetailsModal from "./ProgramDetailsModal";
import { Search, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ProgramsGridProps {
  limit?: number;
  showSearchFilter?: boolean;
  isPaginated?: boolean;
  itemsPerPage?: number;
}

export default function ProgramsGrid({ 
  limit, 
  showSearchFilter = true, 
  isPaginated = false,
  itemsPerPage = 6
}: ProgramsGridProps) {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => ["All", ...Array.from(new Set(programsData.map(p => p.category)))], []);

  const filteredPrograms = useMemo(() => {
    return programsData.filter(program => {
      const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           program.objectives.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || program.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const displayedPrograms = useMemo(() => {
    if (limit) {
      return filteredPrograms.slice(0, limit);
    }
    if (isPaginated) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return filteredPrograms.slice(startIndex, startIndex + itemsPerPage);
    }
    return filteredPrograms;
  }, [filteredPrograms, limit, isPaginated, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage);

  return (
    <section id="programs" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10 border-b border-gray-100 pb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">
                {limit ? "Featured Programmes" : "Explore our Directory"}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 leading-none uppercase">
              {limit ? <>SELECTED <br /> <span className="text-primary italic font-serif">PATHWAYS.</span></> : <>FIND YOUR <br /> <span className="text-primary italic font-serif">PATHWAY.</span></>}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our world-class diploma programmes are structured to meet the needs of 
              professionals looking to enhance their skills and drive industry innovation.
            </p>
          </div>
          
          {showSearchFilter && (
            <div className="flex flex-col gap-6 w-full md:w-96">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input 
                  placeholder="Search programmes..." 
                  className="pl-12 h-16 border-2 border-gray-100 rounded-none focus-visible:border-primary transition-colors text-slate-900"
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {showSearchFilter && (
          /* Category Filters - Horizontal Scrollable */
          <div className="flex items-center gap-4 overflow-x-auto pb-12 no-scrollbar mb-10">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1);
                }}
                className={`whitespace-nowrap px-8 py-3 text-[11px] font-bold uppercase tracking-widest border-2 transition-all duration-300 ${
                  activeCategory === category 
                  ? "bg-slate-950 border-slate-950 text-white shadow-xl" 
                  : "bg-white border-gray-100 text-slate-600 hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
          {displayedPrograms.map(program => (
            <ProgramCard 
              key={program.id} 
              program={program} 
              onClick={() => setSelectedProgram(program)}
            />
          ))}
        </div>

        {displayedPrograms.length === 0 && (
          <div className="text-center py-40 border-2 border-dashed border-gray-100 mt-10">
            <p className="text-2xl font-black text-slate-300 uppercase tracking-widest">No matching programmes found</p>
          </div>
        )}

        {/* Home Page Teaser Button */}
        {limit && filteredPrograms.length > limit && (
          <div className="mt-20 flex justify-center">
            <Link href="/programs">
              <Button className="nbu-gradient text-white h-16 px-10 rounded-none font-bold uppercase tracking-widest text-xs flex items-center gap-3 shadow-2xl hover:translate-y-[-4px] transition-all duration-300">
                View All Programmes <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        )}

        {/* Pagination Controls */}
        {isPaginated && totalPages > 1 && (
          <div className="mt-24 flex items-center justify-center gap-4 border-t border-gray-100 pt-12">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="w-14 h-14 rounded-none border-2 border-gray-100 hover:border-primary hover:text-primary transition-all disabled:opacity-30 flex items-center justify-center p-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-14 h-14 font-black text-sm uppercase transition-all duration-300 ${
                    currentPage === i + 1
                    ? "bg-primary text-white scale-110 shadow-lg"
                    : "bg-white text-slate-400 hover:bg-slate-50 border-2 border-transparent"
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p - 1)}
              className="w-14 h-14 rounded-none border-2 border-gray-100 hover:border-primary hover:text-primary transition-all disabled:opacity-30 flex items-center justify-center p-0"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}

        {selectedProgram && (
          <ProgramDetailsModal 
            program={selectedProgram} 
            isOpen={!!selectedProgram} 
            onClose={() => setSelectedProgram(null)} 
          />
        )}
      </div>
    </section>
  );
}
