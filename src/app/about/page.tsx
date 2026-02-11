import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  GraduationCap, Target, Eye, Shield, Users, Award, 
  BookOpen, Briefcase, Globe, Scale, Users2, ScrollText, 
  CheckCircle2, Clock, MapPin, Search, Presentation, 
  Lightbulb, HeartHandshake, Zap, Brain,
  Facebook, Twitter, Linkedin, Instagram
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Hero - High Prestige */}
      <section className="relative pt-48 pb-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-1 bg-primary" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">NBU Business School</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter">
              A LEGACY OF <br />
              <span className="text-primary italic font-serif">EXCELLENCE.</span>
            </h1>
            <p className="text-2xl text-slate-300 leading-relaxed font-light max-w-2xl border-l border-white/10 pl-8">
              World-class academic excellence distinguished by a robust interface between research and industry.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Core Values - Modern Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-20">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-primary mb-6">Our Foundation</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-950 mb-8 uppercase leading-[1.1]">The Philosophy of <br />Nigerian British University</h3>
            <p className="text-lg text-slate-800 leading-relaxed font-medium">
              Based on its core values, our philosophy aims to inspire self-motivation and excellence as a prerequisite for building an enviable professional career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1">
            {[
              { icon: ScrollText, label: "Mentorship", desc: "Inspiring self-motivation through guidance." },
              { icon: Zap, label: "Dynamism", desc: "Constant academic and professional evolution." },
              { icon: Shield, label: "Integrity", desc: "Upholding professional and ethical standards." },
              { icon: Scale, label: "Equity", desc: "Constructed on fairness and equal access." },
              { icon: HeartHandshake, label: "Diversity", desc: "Celebrating multi-faceted perspectives." },
            ].map((val, i) => (
              <div key={i} className="bg-slate-50 p-10 hover:bg-slate-900 hover:text-white transition-all duration-500 group">
                <val.icon className="w-10 h-10 text-primary mb-6 transition-transform group-hover:scale-110" />
                <h4 className="font-extrabold uppercase text-xs tracking-widest mb-4">{val.label}</h4>
                <p className="text-sm opacity-60 font-medium leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - University vs School High Fidelity */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/50 skew-x-12 translate-x-32" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {/* University Level */}
            <div>
              <div className="inline-block px-4 py-1 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest mb-8">University Level</div>
              <h3 className="text-3xl font-black mb-16 uppercase tracking-tight leading-none">The Institutional <br />North Star</h3>
              
              <div className="space-y-16">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <Eye className="w-5 h-5 text-primary" />
                    <h5 className="font-black uppercase text-xs tracking-widest">Vision Statement</h5>
                  </div>
                  <p className="text-slate-200 text-lg leading-relaxed font-medium pl-9 border-l border-white/5">
                    To be a world-class British University in Nigeria, anchored on academic excellence and distinguished by a robust interface between research and industry.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <Target className="w-5 h-5 text-primary" />
                    <h5 className="font-black uppercase text-xs tracking-widest">Mission Statement</h5>
                  </div>
                  <p className="text-slate-200 text-lg leading-relaxed font-medium pl-9 border-l border-white/5">
                    To develop globally competitive graduates by offering proactive and distinctive research opportunities, a learning and professional mentoring environment with adequate international collaborations.
                  </p>
                </div>
              </div>
            </div>

            {/* School Level */}
            <div>
              <div className="inline-block px-4 py-1 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest mb-8">Business School</div>
              <h3 className="text-3xl font-black mb-16 uppercase tracking-tight leading-none">Empowering <br />Global Leaders</h3>
              
              <div className="space-y-16">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <Brain className="w-5 h-5 text-primary" />
                    <h5 className="font-black uppercase text-xs tracking-widest">School Vision</h5>
                  </div>
                  <p className="text-slate-200 text-lg leading-relaxed font-medium pl-9 border-l border-white/5">
                    To be a globally recognized business school, fostering innovative leaders who transform businesses and ethical practices for the betterment of the society.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <Users2 className="w-5 h-5 text-primary" />
                    <h5 className="font-black uppercase text-xs tracking-widest">School Mission</h5>
                  </div>
                  <p className="text-slate-200 text-lg leading-relaxed font-medium pl-9 border-l border-white/5">
                    Our mission is to provide world-class business education and research that empowers students, supports economic development, and engages with communities to promote responsible and inclusive leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives - Modern Horizontal Scroll or List */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase leading-none shrink-0">
               Core <span className="text-primary italic font-serif">Objectives.</span>
            </h2>
            <p className="text-slate-700 max-w-lg font-medium">To continuously update the technical skills and competences of students through quality teaching, research and practical learning in order to enhance productivity, wealth maximization and social responsiveness.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
               "Update technical skills through research and quality teaching.",
               "Enhance productivity and wealth maximization.",
               "Improve social responsiveness through practical learning.",
               "Foster interdisciplinary approaches for global success.",
               "Empower students with ethical decision-making skills.",
               "Promote responsible and inclusive leadership."
            ].map((obj, i) => (
              <div key={i} className="group p-8 border-2 border-slate-50 hover:border-primary/20 transition-all duration-300 flex items-start gap-6">
                <span className="text-2xl font-black text-slate-400 group-hover:text-primary transition-colors uppercase italic font-serif leading-none mt-1">{(i+1).toString().padStart(2, '0')}</span>
                <p className="text-slate-700 font-bold leading-relaxed">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro & Methodology - Premium Layout */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <div className="w-12 h-1 bg-primary mb-10" />
              <h3 className="text-4xl font-black text-slate-950 mb-10 uppercase tracking-tight">Academic <br />Methodology</h3>
              <div className="space-y-6 text-slate-800 text-lg leading-relaxed font-medium">
                <p>
                  NBU Business School is a university-based Business School that offers a wide range of professional and academic programs.
                  The academics are characterized by a combination of rigorous coursework, practical teaching and research, experiential learning 
                  opportunities, and collaboration with faculty and industry professionals.
                </p>
                <p>
                  We prioritize an interdisciplinary and global approach, preparing students for the rapidly evolving global business environment.
                  Our school coordinates courses across Faculties, relevant for the award of postgraduate degrees, Diplomas, and Certificates.
                </p>
              </div>
              
              <div className="mt-16 bg-white p-12 border-l-4 border-primary shadow-xl">
                 <h5 className="font-black text-slate-950 text-sm tracking-widest uppercase mb-4">Strategic Mandate</h5>
                 <p className="text-slate-700 font-medium italic">
                   "Responsible for the coordination of NBU's Strategic Foreign Collaboration, Partnerships and Affiliations."
                 </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-slate-950 p-10 text-white flex flex-col justify-between group">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                    <Presentation className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-xs tracking-widest mb-4">Onsite-Full Time</h4>
                    <p className="text-xs text-slate-300 uppercase tracking-widest font-bold">Mode [01]</p>
                  </div>
               </div>
               <div className="bg-white p-10 border border-slate-100 flex flex-col justify-between group">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-xs tracking-widest mb-4">Online-Full Time</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Mode [03]</p>
                  </div>
               </div>
               <div className="bg-white p-10 border border-slate-100 flex flex-col justify-between group">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-xs tracking-widest mb-4">Blended Learning</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Mode [05]</p>
                  </div>
               </div>
               <div className="bg-slate-900 p-10 text-white flex flex-col justify-between group">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-xs tracking-widest mb-4">Certificates & Diplomas</h4>
                    <p className="text-xs text-slate-300 uppercase tracking-widest font-bold">Nature of Awards</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Boards - Tabbed or Columnar */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase mb-8">Governance <span className="text-primary">&</span> Leadership</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-10" />
            <p className="text-slate-700 font-medium">The Business School is governed by the NBU Business School Board, ensuring rigorous academic standards and strategic industry alignment.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             {/* Board Powers */}
             <div className="bg-slate-50 p-12 border border-slate-100">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-10 flex items-center gap-3">
                   <Shield className="w-4 h-4" /> Board Mandate
                </h4>
                <div className="space-y-6">
                   {[
                     "Regulate teaching, study and conduct of examinations.",
                     "Advise Senate on matters relating to research organization.",
                     "Recommend persons for appointment as examiners.",
                     "Coordinate Foreign Collaborations, Partnerships and Affiliations.",
                     "Ensure courses are appropriate for University objectives."
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 items-start pb-6 border-b border-slate-200 last:border-0 group">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                        <p className="text-slate-800 font-bold text-sm leading-relaxed">{item}</p>
                     </div>
                   ))}
                </div>
             </div>

             {/* Membership */}
             <div className="space-y-12">
                <div>
                   <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-8 border-b border-gray-100 pb-4">Principal Board Membership</h4>
                   <ul className="space-y-4">
                      <li className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-gray-50 pb-3"><span>Dean of Business School</span> <span className="text-primary">Chairman</span></li>
                      <li className="flex justify-between items-center text-sm font-bold text-slate-600 border-b border-gray-50 pb-3"><span>Heads of Departments</span> <span className="text-[10px] uppercase tracking-widest">Member</span></li>
                      <li className="flex justify-between items-center text-sm font-bold text-slate-600 border-b border-gray-50 pb-3"><span>Faculty Representatives</span> <span className="text-[10px] uppercase tracking-widest">Member</span></li>
                      <li className="flex justify-between items-center text-sm font-bold text-slate-600 border-b border-gray-50 pb-3"><span>University Librarian</span> <span className="text-[10px] uppercase tracking-widest">Member</span></li>
                   </ul>
                </div>
                <div className="bg-slate-950 p-10 text-white relative">
                   <div className="flex items-center gap-4 mb-6">
                      <Award className="w-10 h-10 text-primary" />
                      <h4 className="font-black text-xl uppercase tracking-tight">Board of Studies</h4>
                   </div>
                   <p className="text-slate-200 text-sm leading-relaxed mb-6 font-medium">Serves as the Clearing House for matters relating to academic programmes and examinations.</p>
                   <div className="text-[10px] font-black uppercase tracking-widest text-primary">Quorum: 40% of membership</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Strategy & Philosophy - Footer Teaser */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8">Marketing & Advertising Strategy</h4>
                <p className="text-slate-800 text-lg leading-relaxed font-medium mb-10">
                   Our strategies maximally leverage platforms such as Facebook, LinkedIn, Instagram, and YouTube.
                   We target associations and industry hubs using personal contacts and clear, consistent messaging.
                </p>
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-400"><Facebook className="w-4 h-4" /></div>
                   <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-400"><Linkedin className="w-4 h-4" /></div>
                   <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-400"><Instagram className="w-4 h-4" /></div>
                   <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-400"><Twitter className="w-4 h-4" /></div>
                </div>
             </div>
             <div className="bg-[#E62627] p-12 text-white shadow-2xl skew-y-1">
                <div className="-skew-y-1">
                   <h3 className="text-3xl font-black mb-8 leading-tight">FILLING THE <br />SKILL-GAP.</h3>
                   <p className="text-white/80 font-bold mb-10 leading-relaxed">
                     Our short courses are precisely designed to reflect and fill the skills-gaps and practical knowledge 
                     needs of the contemporary industry landscape.
                   </p>
                   <a href="/programs" className="px-8 py-4 bg-white text-primary font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all">Explore Directory</a>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
