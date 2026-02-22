import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  CreditCard, 
  ClipboardCheck, 
  GraduationCap, 
  Phone, 
  Mail, 
  ArrowRight,
  BookOpen,
  Users
} from "lucide-react";

export default function AdmissionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-950 overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050853063-8931a677353f?q=80&w=2072')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.4em] text-white uppercase border-l-4 border-primary bg-primary/20 backdrop-blur-md">
              Admissions 2026
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9] uppercase italic font-serif">
              Step Into Your <br />
              <span className="text-primary not-italic font-sans">Future.</span>
            </h1>
            
            <p className="max-w-medium text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-medium">
              Join a community of forward-thinkers. Our inclusive admission policy ensures that 
              ambition and the drive to succeed are the only prerequisites for excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Entry Requirements & Vision */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[2px] bg-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Inclusivity Policy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-10 leading-[1.1] uppercase">
                Business Education <br /><span className="text-primary italic font-serif">Without</span> Barriers.
              </h2>
              <p className="text-lg text-slate-800 leading-relaxed font-medium mb-12">
                Designed for entrepreneurs, professionals, and ambitious individuals ready to upgrade 
                their skills, grow their businesses, or advance their careers.
              </p>
              
              <div className="bg-slate-50 p-8 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-black text-slate-950 uppercase text-sm tracking-widest mb-2">No Prior Degree Required</h4>
                    <p className="text-slate-600 font-medium">
                      All courses will be delivered both online and onsite, ensuring accessibility 
                      for students from anywhere in the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  icon: BookOpen, 
                  title: "PG & UG Diplomas", 
                  desc: "Comprehensive curriculum designed for diverse academic backgrounds." 
                },
                { 
                  icon: Users, 
                  title: "Professional Focus", 
                  desc: "Practical knowledge applied immediately to your industry path." 
                },
                { 
                  icon: GraduationCap, 
                  title: "Globally Recognized", 
                  desc: "Certificates anchored on international university standards." 
                },
                { 
                  icon: CheckCircle2, 
                  title: "Drive to Succeed", 
                  desc: "The only real requirement is your ambition to grow." 
                }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-slate-100 hover:border-primary/40 transition-all hover:bg-primary/[0.02] hover:shadow-xl hover:shadow-slate-200/50 group">
                  <item.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black uppercase text-xs tracking-widest text-slate-950 mb-4">{item.title}</h4>
                  <p className="text-xs text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">How to Apply</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-950 uppercase leading-tight">
              A Simplified <span className="text-primary italic font-serif">Journey.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Timeline Line (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-slate-200 -z-0" />
            
            {[
              { 
                step: "01", 
                icon: BookOpen, 
                title: "Select Course", 
                desc: "Explore our 34 short courses and select the one that aligns with your goals." 
              },
              { 
                step: "02", 
                icon: CreditCard, 
                title: "Payment", 
                desc: "Pay the required enrollment fee to the designated NBU Business School account." 
              },
              { 
                step: "03", 
                icon: ClipboardCheck, 
                title: "Register", 
                desc: "Complete the online application form and upload your proof of payment." 
              },
              { 
                step: "04", 
                icon: GraduationCap, 
                title: "Commence", 
                desc: "Receive your admission letter and begin your transformation journey." 
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white border-2 border-slate-100 shadow-xl flex items-center justify-center mb-8 group-hover:border-primary transition-all">
                  <item.icon className="w-10 h-10 text-primary" />
                  <span className="absolute -top-4 -right-4 bg-primary text-white text-[10px] font-black w-8 h-8 flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h4 className="font-black uppercase text-xs tracking-widest text-slate-950 mb-4">{item.title}</h4>
                <p className="text-[13px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">Investment</h2>
                <h3 className="text-4xl font-black text-slate-950 uppercase leading-tight mb-8">
                  Payment <span className="text-primary italic font-serif">Details.</span>
                </h3>
                <p className="text-slate-700 font-medium mb-12 leading-relaxed">
                  Enrollment in any of our professional diploma programs requires a standard fee of <span className="text-primary font-black">N 500,000</span>. 
                  Fees allow for full access to curriculum materials, both online and onsite sessions.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-6 p-8 bg-slate-950 text-white group hover:bg-blue-600 transition-colors">
                    <Phone className="w-8 h-8 text-primary group-hover:text-white" />
                    <div>
                      <h4 className="font-black uppercase text-[10px] tracking-widest mb-2 opacity-60">Admission Enquiries</h4>
                      <p className="text-xl font-bold">08033382537</p>
                      <p className="text-xl font-bold">07036838661</p>
                    </div>
                  </div>
                  <div className="flex gap-6 p-8 bg-slate-50 border border-slate-100 group">
                    <Mail className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-black uppercase text-[10px] tracking-widest mb-2 text-slate-500">Official Email</h4>
                      <p className="text-xl font-bold text-slate-950">info@nbu.edu.ng</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-8 border-2 border-slate-100 relative overflow-hidden group hover:border-primary transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 -z-10 translate-x-16 -translate-y-16 rotate-45 group-hover:bg-primary/5" />
                  <h4 className="text-2xl font-black text-slate-950 mb-8 uppercase italic font-serif">Zenith Bank</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Account Name</span>
                      <span className="text-xs font-black text-slate-950">NBU BUSINESS SCHOOL ACCOUNT</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Account Number</span>
                      <span className="text-xl font-black text-primary">1310201608</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 border-2 border-slate-100 relative overflow-hidden group hover:border-primary transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 -z-10 translate-x-16 -translate-y-16 rotate-45 group-hover:bg-primary/5" />
                  <h4 className="text-2xl font-black text-slate-950 mb-8 uppercase italic font-serif">Fidelity Bank</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Account Name</span>
                      <span className="text-xs font-black text-slate-950">NBU BUSINESS SCHOOL ACCOUNT</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Account Number</span>
                      <span className="text-xl font-black text-primary">1310201608</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Branch</span>
                      <span className="text-xs font-black text-slate-950 uppercase">Federal Secretariate, Rivers State</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center mt-8">
                  Kindly present your payment teller or electronic evidence at the registry for verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-[0.9] uppercase tracking-tighter">
            READY TO <span className="text-primary italic font-serif">TRANSFORM?</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto">
            Take the first step towards a globally recognized professional qualification today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="nbu-gradient text-white px-10 h-16 text-sm font-bold uppercase tracking-widest rounded-none group">
              Apply Now
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-primary hover:border-primary hover:text-white px-10 h-16 text-sm font-bold uppercase tracking-widest rounded-none">
              Download Handbook
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
