import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeartHandshake, Globe, Building2, BookOpen, ChevronRight, ArrowRight, CheckCircle2, Shield } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donors & Partners | NBU Business School",
  description:
    "Partner with Nigerian British University Business School to shape the future of business leadership. Discover ways to give and our impact.",
};

const IMPACT_AREAS = [
  {
    icon: BookOpen,
    title: "Scholarships & Financial Aid",
    description: "Ensure that the brightest minds have access to world-class business education regardless of their financial background. Your support creates leaders.",
  },
  {
    icon: Globe,
    title: "Global Research Initiatives",
    description: "Fund groundbreaking research that addresses complex business challenges in emerging markets and contributes to sustainable global economic development.",
  },
  {
    icon: Building2,
    title: "Campus Infrastructure",
    description: "Help us build state-of-the-art learning environments, digital innovation labs, and modern facilities that enhance the educational experience.",
  },
  {
    icon: HeartHandshake,
    title: "Endowed Chairs",
    description: "Attract and retain world-renowned faculty by supporting endowed professorships, ensuring top-tier academic mentorship for our students.",
  },
];

export default function DonorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-1 bg-primary" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">
                Make An Impact
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter">
              INVEST IN <br />
              <span className="text-primary italic font-serif">THE FUTURE</span>
            </h1>
            <p className="text-2xl text-slate-300 leading-relaxed font-light max-w-2xl border-l border-white/10 pl-8 mb-12">
              Your philanthropic partnership drives innovation, empowers exceptional students, and elevates our standard of academic excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-slate-950 transition-colors shadow-xl">
                Make a Gift Today
              </button>
              <button className="border-2 border-white/20 text-white px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-colors">
                Explore Ways to Give
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Why Give */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase leading-[1.1] mb-8">
                Transforming Potential Into <span className="text-primary italic font-serif">Leadership</span>
              </h2>
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-medium mb-10">
                <p>
                  At Nigerian British University Business School, we believe that education is the most powerful catalyst for economic and social transformation. By choosing to invest in our institution, you are directly shaping the future of business leadership in Africa and beyond.
                </p>
                <p>
                  Our donors and partners form the bedrock of our strategic growth. Through your generous support, we can expand our reach, enhance our technological infrastructure, and ensure that financial constraints never deter brilliance.
                </p>
              </div>
              
              <div className="bg-slate-50 border-l-4 border-primary p-8">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-2">Our Commitment</h4>
                <p className="text-sm text-slate-600 font-medium">
                  We maintain the highest standards of financial stewardship, ensuring that every contribution is maximized to achieve its intended impact.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4" />
              <div className="relative h-[600px] w-full bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084"
                  alt="Students collaborating"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Impact */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-primary mb-6">
              Strategic Priorities
            </h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 uppercase leading-[1.1]">
              Areas of Impact
            </h3>
            <p className="text-lg text-slate-300">
              Direct your philanthropy toward the initiatives that align closest with your personal or corporate values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {IMPACT_AREAS.map((area, i) => (
              <div key={i} className="group p-10 border border-white/10 hover:border-primary/50 bg-white/5 hover:bg-white/10 transition-all duration-300">
                <area.icon className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-black uppercase tracking-tight mb-4">
                  {area.title}
                </h4>
                <p className="text-slate-300 font-medium leading-relaxed mb-8">
                  {area.description}
                </p>
                <Link href="#" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-primary hover:text-white transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partnerships & CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white border border-slate-100 shadow-2xl p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase mb-6">
              Corporate Partnerships
            </h2>
            <p className="text-lg text-slate-700 mb-12 font-medium max-w-2xl mx-auto">
              We welcome strategic alliances with industry leaders. Partnering with NBU Business School provides organizations with access to cutting-edge research, custom executive education, and a pipeline of exceptional talent.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-12">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="font-bold text-slate-800">Custom Executive Programmes</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="font-bold text-slate-800">Joint Research Initiatives</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="font-bold text-slate-800">Recruitment Partnerships</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="font-bold text-slate-800">Brand Sponsorships</span>
              </div>
            </div>
            <button className="bg-slate-950 text-white px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-red-400 transition-colors">
              Contact Advancement Office
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
