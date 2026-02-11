"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Clock, GraduationCap, Banknote, Calendar, CheckCircle2, X } from "lucide-react";

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
      <DialogContent className="w-full max-w-[95vw] lg:max-w-7xl h-[90vh] overflow-hidden flex flex-col p-0 border-0 rounded-none shadow-2xl">
        <div className="flex flex-col md:flex-row h-full min-h-0">
          {/* Left Panel: Summary & Branding */}
          <div className="w-full md:w-96 bg-slate-900 p-10 text-white flex flex-col shrink-0 overflow-y-auto relative">
            {program.image && (
              <div className="absolute inset-0 z-0 opacity-40">
                <img 
                  src={program.image} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/60" />
              </div>
            )}
            
            <div className="relative z-10">
              <div className="mb-10 flex items-center gap-3">
                <div className="w-8 h-8 nbu-gradient rounded-none flex items-center justify-center font-bold text-sm">N</div>
                <span className="text-[10px] font-black tracking-widest uppercase opacity-70">NBU Business School</span>
              </div>
              
              <Badge className="w-fit bg-primary text-white mb-6 rounded-none font-bold uppercase text-[10px] tracking-widest px-4 py-1.5 border-0">
                {program.category}
              </Badge>
              
              <h2 className="text-3xl font-black leading-tight mb-8">
                {program.title}
              </h2>
            </div>
            
            <div className="space-y-6 mt-auto">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/10">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-black opacity-50 tracking-tighter">Duration</p>
                    <p className="text-sm font-bold">{program.duration}</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/10">
                    <Banknote className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-black opacity-50 tracking-tighter">Programme Fee</p>
                    <p className="text-sm font-bold">{program.fee}</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Panel: Content Area */}
          <div className="flex-grow flex flex-col bg-white min-h-0 relative">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-slate-400" />
            </button>

            <ScrollArea className="flex-1 min-h-0 p-10 lg:p-16">
              <div className="max-w-4xl mx-auto lg:mx-0 space-y-16">
                <section>
                  <h4 className="text-[13px] font-black uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-4">
                    <span className="w-8 h-[2px] bg-primary" />
                    Overview
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {program.objectives}
                  </p>
                </section>

                <section>
                  <h4 className="text-[13px] font-black uppercase tracking-[0.3em] text-primary mb-8 flex items-center gap-4">
                    <span className="w-8 h-[2px] bg-primary" />
                    Key Outcomes
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {program.outcomes.map((outcome, i) => (
                      <div key={i} className="flex gap-4 p-4 bg-gray-50 border border-gray-100">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-bold text-slate-800">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="pb-20">
                  <h4 className="text-[13px] font-black uppercase tracking-[0.3em] text-primary mb-8 flex items-center gap-4">
                    <span className="w-8 h-[2px] bg-primary" />
                    Curriculum
                  </h4>
                  <div className="space-y-6">
                    {program.modules.map((module, i) => (
                      <div key={i} className="group cursor-default">
                        <h5 className="font-extrabold text-slate-900 mb-2 group-hover:text-primary transition-colors flex items-center gap-3">
                          <span className="text-xs text-slate-300 font-black tracking-tighter uppercase">Module {i+1}</span>
                          {module.name}
                        </h5>
                        <p className="text-sm text-slate-500 leading-relaxed">{module.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </ScrollArea>
            
            {/* Footer Call to Action */}
            <div className="p-8 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Application Deadline: March 1, 2025
                </div>
                <Button className="nbu-gradient text-white rounded-none h-12 px-8 uppercase font-bold text-xs tracking-widest">
                  Apply Online
                </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
