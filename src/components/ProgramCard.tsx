import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

interface ProgramProps {
  program: {
    id: string;
    title: string;
    category: string;
    duration: string;
    fee: string;
    mode: string;
    objectives: string;
    image?: string;
  };
  onClick: () => void;
}

export default function ProgramCard({ program, onClick }: ProgramProps) {
  return (
    <Card className="group flex flex-col h-full border-0 academic-card rounded-none overflow-hidden relative">
      {/* Program Image */}
      <div className="h-56 bg-slate-100 overflow-hidden relative">
        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors z-10" />
        <div className="absolute top-4 left-4 z-20">
          <Badge className="bg-primary text-white hover:bg-primary rounded-none font-bold uppercase text-[10px] tracking-widest px-3 py-1 border-0">
            {program.category}
          </Badge>
        </div>
        
        {program.image ? (
          <img 
            src={program.image} 
            alt={program.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : null}

        {/* Placeholder Pattern (Shown if no image or image fails) */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-black text-6xl select-none uppercase tracking-tighter opacity-10 -rotate-12 z-0">
          {program.category.split(' ')[0]}
        </div>
      </div>

      <CardHeader className="p-8 pb-0">
        <h3 className="text-2xl font-extrabold text-slate-900 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
          {program.title}
        </h3>
      </CardHeader>
      
      <CardContent className="p-8 pt-6 flex-grow">
        <div className="flex items-center gap-6 mb-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
           <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              {program.duration}
           </div>
           <div className="flex items-center gap-2 text-primary">
              <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
              {program.fee}
           </div>
        </div>
        
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
          {program.objectives}
        </p>
      </CardContent>
      
      <CardFooter className="p-8 pt-0 mt-auto">
        <button 
          onClick={onClick}
          className="flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.2em] text-slate-950 hover:text-primary transition-all group/btn"
        >
          View Curriculum 
          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </CardFooter>
      
      {/* Decorative Brand Accent */}
      <div className="absolute bottom-0 left-0 w-12 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
    </Card>
  );
}
