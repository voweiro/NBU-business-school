"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  GraduationCap, 
  Banknote, 
  CheckCircle2, 
  X, 
  ArrowRight, 
  Users, 
  Target,
  Globe,
  MessageSquare
} from "lucide-react";

interface Module {
  name: string;
  description: string;
}

interface ProgramDetailsProps {
  program: {
    title: string;
    category: string;
    duration: string;
    fee: string;
    schedule: string;
    hours: string;
    mode: string;
    objectives: string;
    outcomes: string[];
    modules: Module[];
    target: string;
    image?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function ProgramDetailsModal({ program, isOpen, onClose }: ProgramDetailsProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-[95vw] lg:max-w-7xl h-[95vh] md:h-[90vh] overflow-hidden flex flex-col p-0 border-0 rounded-none shadow-2xl">
        <div className="flex flex-col md:flex-row h-full min-h-0 bg-white">
          
          {/* Left Panel: Immersive Summary */}
          <div className="w-full md:w-[400px] lg:w-[450px] max-h-[40vh] md:max-h-none bg-slate-950 p-6 md:p-8 lg:p-12 text-white flex flex-col shrink-0 overflow-y-auto relative">
            {program.image && (
              <div className="absolute inset-0 z-0 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
                <img 
                  src={program.image} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
              </div>
            )}
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 md:mb-12 flex items-center gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 nbu-gradient rounded-none flex items-center justify-center font-black text-lg md:text-xl shadow-lg shadow-primary/20">N</div>
                <div className="flex flex-col">
                  <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase opacity-80 leading-none">NBU Business School</span>
                  <span className="text-[7px] md:text-[8px] font-bold tracking-[0.2em] uppercase text-primary mt-1">Executive Education</span>
                </div>
              </div>
              
              <Badge className="w-fit bg-primary/20 text-primary border border-primary/30 mb-4 md:mb-8 rounded-none font-black uppercase text-[9px] md:text-[10px] tracking-[0.2em] px-3 py-1.5 md:px-4 md:py-2 backdrop-blur-md">
                {program.category}
              </Badge>
              
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-6 md:mb-12 uppercase italic font-serif tracking-tight">
                {program.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 md:gap-8 mb-8 md:mb-12">
                 <div className="flex items-start gap-4 md:gap-5 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[10px] uppercase font-black opacity-40 tracking-widest mb-1">Duration</p>
                      <p className="text-base md:text-lg font-bold text-white tracking-tight">{program.duration}</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 md:gap-5 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                      <Banknote className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[10px] uppercase font-black opacity-40 tracking-widest mb-1">Investment</p>
                      <p className="text-base md:text-lg font-bold text-white tracking-tight">{program.fee}</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 md:gap-5 group hidden md:flex">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black opacity-40 tracking-widest mb-1">Architecture</p>
                      <p className="text-lg font-bold text-white tracking-tight">{program.mode}</p>
                    </div>
                 </div>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10 hidden md:block">
                 <div className="flex items-center gap-4 text-white/60">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <div className="text-[10px] lg:text-xs font-bold leading-relaxed italic">
                      "Excellence as a Prerequisite."<br />
                      <span className="opacity-50">— The NBU Philosophy</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Comprehensive Content Area */}
          <div className="flex-grow flex flex-col bg-white min-h-0 relative">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-2 md:p-3 bg-white/80 backdrop-blur-md md:bg-white hover:bg-primary transition-all rounded-full border border-slate-200 md:border-slate-100 group shadow-lg"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-slate-400 group-hover:text-white group-hover:rotate-90 transition-all" />
            </button>

            <ScrollArea className="flex-1 min-h-0">
              <div className="p-6 md:p-12 lg:p-20 max-w-5xl">
                <div className="space-y-16 md:space-y-24">
                  
                  {/* Executive Overview */}
                  <section>
                    <div className="flex items-center gap-4 mb-8 md:mb-10">
                       <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-primary">Executive Summary</span>
                       <div className="h-px flex-1 bg-slate-100" />
                    </div>
                    <div className="relative">
                      <div className="absolute -left-6 md:-left-8 top-0 bottom-0 w-0.5 md:w-1 bg-primary/20" />
                      <p className="text-slate-800 leading-relaxed text-lg md:text-xl font-medium italic font-serif lg:pr-12">
                        {program.objectives}
                      </p>
                    </div>
                  </section>

                  {/* Strategic Outcomes */}
                  <section>
                    <div className="flex items-center gap-4 mb-8 md:mb-12">
                       <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-primary">Professional Outcomes</span>
                       <div className="h-px flex-1 bg-slate-100" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {program.outcomes.map((outcome, i) => (
                        <div key={i} className="flex gap-3 md:gap-4 p-4 md:p-6 bg-slate-50 border border-slate-100 group hover:bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="text-xs md:text-sm font-extrabold text-slate-800 leading-tight">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Target Audience */}
                  <section>
                    <div className="flex items-center gap-4 mb-8 md:mb-10">
                       <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-primary">Candidate Profile</span>
                       <div className="h-px flex-1 bg-slate-100" />
                    </div>
                    <div className="flex items-start gap-4 md:gap-6 p-6 md:p-10 bg-slate-900 text-white relative overflow-hidden">
                       <Target className="w-10 h-10 md:w-12 md:h-12 text-primary opacity-20 absolute -right-2 -bottom-2 md:-right-4 md:-bottom-4 scale-150 rotate-12" />
                       <Users className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" />
                       <div>
                          <h5 className="font-black uppercase text-[10px] tracking-widest mb-3 md:mb-4 opacity-60">Ideal For:</h5>
                          <p className="text-base md:text-lg font-bold leading-relaxed md:pr-12">{program.target}</p>
                       </div>
                    </div>
                  </section>

                  {/* Curriculum Architecture */}
                  <section className="pb-12 md:pb-24">
                    <div className="flex items-center gap-4 mb-8 md:mb-12">
                       <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-primary">Curriculum Architecture</span>
                       <div className="h-px flex-1 bg-slate-100" />
                    </div>
                    <div className="space-y-8 md:space-y-10">
                      {program.modules.map((module, i) => (
                        <div key={i} className="group flex gap-4 md:gap-8">
                           <div className="flex flex-col items-center">
                              <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-slate-100 rounded-none flex items-center justify-center font-black text-[10px] text-slate-300 group-hover:border-primary group-hover:text-primary transition-all">
                                 {String(i + 1).padStart(2, '0')}
                              </div>
                              <div className="w-[2px] flex-1 bg-slate-50 mt-4 group-last:hidden" />
                           </div>
                           <div className="pt-1 md:pt-2">
                             <h5 className="font-black uppercase text-xs md:text-sm tracking-wider text-slate-950 mb-2 md:mb-3 group-hover:text-primary transition-colors">
                               {module.name}
                             </h5>
                             <p className="text-slate-600 text-sm md:text-[15px] font-medium leading-relaxed max-w-2xl">
                               {module.description}
                             </p>
                           </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </ScrollArea>
            
            {/* Sticky Action Bar */}
            <div className="p-6 md:p-8 lg:p-10 bg-white border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
                <div className="hidden sm:block">
                   <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Next Commencement</p>
                   <p className="text-xs md:text-sm font-bold text-slate-900">{program.schedule}</p>
                </div>
                <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
                   <Button variant="outline" className="flex-1 md:flex-none h-12 md:h-14 px-6 md:px-8 border-2 border-slate-950 font-black uppercase text-[10px] md:text-xs tracking-[0.2em] rounded-none hover:bg-blue-600 hover:border-blue-600 hover:text-red-600 transition-all">
                      Enquire
                   </Button>
                   <Button className="flex-[2] md:flex-none nbu-gradient text-white h-12 md:h-14 px-8 md:px-12 font-black uppercase text-[10px] md:text-xs tracking-[0.2em] rounded-none shadow-xl shadow-primary/20 group">
                      Apply Online
                      <ArrowRight className="ml-2 md:ml-3 w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-all" />
                   </Button>
                </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
