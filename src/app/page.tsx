import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ProgramsGrid from "@/components/ProgramsGrid";
import Footer from "@/components/Footer";
import { Eye, Target, Sparkles, Shield, Zap, Scale, HeartHandshake, ArrowRight, GraduationCap, Globe, Clock, Laptop } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSlider />

      {/* Introduction Section - Premium Entry */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">Introduction</h2>
                <h3 className="text-4xl md:text-5xl font-black text-slate-950 mb-8 leading-tight tracking-tight uppercase">
                  A New Era of <br />
                  <span className="text-primary italic font-serif">Business</span> Education.
                </h3>
                <p className="text-lg text-slate-800 leading-relaxed font-medium mb-10">
                  NBU Business School is a university-based institution offering a wide range of professional and academic programs. 
                  Our approach is characterized by rigorous coursework, practical teaching, and a robust interface with industry experts.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-black text-slate-950 text-xs uppercase tracking-widest mb-2">Global Approach</h5>
                      <p className="text-xs text-slate-700 font-bold leading-relaxed">Interdisciplinary focus for success in the global business environment.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-black text-slate-950 text-xs uppercase tracking-widest mb-2">Career Growth</h5>
                      <p className="text-xs text-slate-700 font-bold leading-relaxed">Dedicated internships, mentorship, and high-impact networking events.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative group">
              <div className="aspect-[4/5] bg-slate-100 overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-8 border border-white/20">
                  <p className="text-white font-bold text-sm italic leading-relaxed">
                    "Fostering intellectual curiosity, innovation, and ethical decision-making to prepare the next generation of business leaders."
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 nbu-gradient -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Narrative - Vision & Mission Teaser */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-100/50 -skew-x-12 translate-x-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[2px] bg-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Institutional North Star</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-10 leading-[1.1] uppercase">
                Bridging Academic <br />Excellence <span className="text-primary italic font-serif">With</span> Industry.
              </h2>
              <p className="text-lg text-slate-800 leading-relaxed font-medium mb-12 max-w-xl">
                NBU Business School is anchored on the vision to be a world-class British University in Nigeria, 
                distinctly positioned at the intersection of rigorous research and practical industrial engagement.
              </p>
              
              <div className="flex flex-col md:flex-row gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-primary" />
                    <h5 className="font-extrabold uppercase text-xs tracking-widest text-slate-950">Vision</h5>
                  </div>
                  <p className="text-sm text-slate-700 font-bold leading-relaxed border-l-2 border-slate-200 pl-6">
                    Achieving world-class status through academic rigor and industry interface.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-primary" />
                    <h5 className="font-extrabold uppercase text-xs tracking-widest text-slate-950">Mission</h5>
                  </div>
                  <p className="text-sm text-slate-700 font-bold leading-relaxed border-l-2 border-slate-200 pl-6">
                    Developing globally competitive graduates through proactive research and mentorship.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-none blur-3xl group-hover:bg-primary/10 transition-colors" />
              <div className="relative bg-white p-12 shadow-2xl skew-y-1">
                <div className="-skew-y-1">
                  <Sparkles className="w-8 h-8 text-primary mb-8" />
                  <h4 className="text-2xl font-black text-slate-950 mb-6 font-serif italic">"Excellence as a Prerequisite"</h4>
                  <p className="text-slate-800 font-medium leading-relaxed mb-8 italic">
                    Our philosophy aims to inspire self-motivation and excellence, building the foundation for an enviable professional career through mentorship and integrity.
                  </p>
                  <a href="/about" className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2 hover:gap-4 transition-all">
                    The NBU Philosophy <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      {/* Core Values Section - Infinite Carousel */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="w-full">
          <div className="flex w-max animate-marquee-lr pause-on-hover hover:cursor-default">
            {/* Double the items for seamless loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-20 mx-10">
                {[
                  { icon: GraduationCap, label: "Mentorship", color: "bg-slate-950" },
                  { icon: Zap, label: "Dynamism", color: "bg-primary" },
                  { icon: Shield, label: "Integrity", color: "bg-slate-900" },
                  { icon: Scale, label: "Equity", color: "bg-slate-950" },
                  { icon: HeartHandshake, label: "Diversity", color: "bg-slate-900" },
                  { icon: GraduationCap, label: "Mentorship", color: "bg-slate-950" },
                  { icon: Zap, label: "Dynamism", color: "bg-primary" },
                  { icon: Shield, label: "Integrity", color: "bg-slate-900" }
                ].map((value, i) => (
                  <div key={`${setIndex}-${i}`} className="flex flex-col items-center text-center group min-w-[120px]">
                    <div className={`w-20 h-20 ${value.color} flex items-center justify-center mb-6 shadow-xl transition-transform group-hover:-translate-y-2`}>
                       <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-black uppercase text-[10px] tracking-[0.3em] text-slate-950">{value.label}</h4>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" id="programs">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">Elite Education</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-950 uppercase leading-none">
              Flagship <span className="text-primary italic font-serif">Programmes.</span>
            </h3>
          </div>
          <ProgramsGrid limit={6} showSearchFilter={false} />
        </div>
      </section>

      {/* Mode of Study Highlight */}
      <section className="py-24 bg-slate-950 text-white relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-10 leading-[0.9] uppercase tracking-tighter">
                FLEXIBLE <br />
                <span className="text-primary italic font-serif">LEARNING</span> <br />
                ARCHITECTURE.
              </h2>
              <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-md">
                We bridge the gap between busy professionals and world-class education with multiple modes of delivery.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {[
                 { icon: Clock, label: "Weekend Programs" },
                 { icon: Globe, label: "Online Full-Time" },
                 { icon: Laptop, label: "Blended Learning" },
                 { icon: GraduationCap, label: "Onsite Professional" }
               ].map((mode, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-8 backdrop-blur-md group hover:bg-primary transition-all">
                    <mode.icon className="w-8 h-8 text-primary group-hover:text-white mb-6 transition-colors" />
                    <h4 className="font-extrabold uppercase text-[10px] tracking-widest text-slate-200 group-hover:text-white">{mode.label}</h4>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
