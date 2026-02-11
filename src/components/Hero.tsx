import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-56 md:pb-40 bg-[#fcfcfc] overflow-hidden">
      {/* Structural Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-10 skew-x-12 translate-x-1/4" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[11px] font-bold tracking-[0.2em] text-primary uppercase border-l-4 border-primary bg-primary/5">
            Academic Year 2025/2026
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9] text-slate-950">
            TRANSFORMING <br />
            <span className="text-primary italic font-serif">LEADERS</span> FOR THE <br />
            MODERN WORLD.
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-slate-600 mb-12 leading-relaxed font-medium">
            Join Africa's premier institution for executive education. Our programmes are designed 
            to equip you with the strategic insights needed to navigate complexity and drive impact.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button size="lg" className="nbu-gradient text-white px-10 h-16 text-sm font-bold uppercase tracking-widest rounded-none group">
              Start Application
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <button className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                <Play className="w-5 h-5 ml-1 text-primary group-hover:text-white fill-current" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-slate-700">Watch Discovery Video</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Stat Grid */}
      <div className="absolute bottom-0 right-0 hidden lg:grid grid-cols-2 w-[400px] h-40">
        <div className="bg-primary p-8 flex flex-col justify-center text-white">
          <span className="text-3xl font-black">33+</span>
          <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Programmes</span>
        </div>
        <div className="bg-slate-900 p-8 flex flex-col justify-center text-white">
          <span className="text-3xl font-black">98%</span>
          <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Career Success</span>
        </div>
      </div>
    </section>
  );
}
