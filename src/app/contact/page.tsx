import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send, Globe, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              CONTACT <br />
              <span className="text-primary italic font-serif">US.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Our team is here to support your professional journey. Reach out for admissions, collaborations, or general inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info Cards */}
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-slate-950 mb-10 uppercase tracking-tight">Reach <span className="text-primary">Out</span> To Us</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-slate-50 border border-gray-100 academic-card">
                  <Mail className="w-8 h-8 text-primary mb-6" />
                  <h4 className="font-extrabold text-slate-900 mb-2 uppercase text-xs tracking-widest">Email Support</h4>
                  <p className="text-slate-600 text-sm font-bold">info@nbu.edu.ng</p>
                  <p className="text-slate-400 text-xs mt-1">admissions@nbu.edu.ng</p>
                </div>
                
                <div className="p-8 bg-slate-50 border border-gray-100 academic-card">
                  <Phone className="w-8 h-8 text-primary mb-6" />
                  <h4 className="font-extrabold text-slate-900 mb-2 uppercase text-xs tracking-widest">Phone Line</h4>
                  <p className="text-slate-600 text-sm font-bold">+234 703 256 5918</p>
                  <p className="text-slate-400 text-xs mt-1">+234 915 386 3605</p>
                </div>
                
                <div className="p-8 bg-slate-50 border border-gray-100 academic-card md:col-span-2">
                  <MapPin className="w-8 h-8 text-primary mb-6" />
                  <h4 className="font-extrabold text-slate-900 mb-2 uppercase text-xs tracking-widest">Our Campus</h4>
                  <p className="text-slate-600 text-sm font-bold leading-relaxed">
                    Kilometre 10 Port Harcourt/Aba Expressway,<br />
                    Asa, Abia State, Nigeria.
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-10 border-t border-gray-100">
                <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Follow Our Updates</h5>
                <div className="flex gap-4">
                  {['Facebook', 'LinkedIn', 'Instagram', 'Twitter'].map((social) => (
                    <a key={social} href="#" className="px-5 py-2 border border-gray-200 text-[10px] font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 lg:p-16 bg-slate-900 text-white shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-10 blur-3xl" />
              <h3 className="text-3xl font-black mb-8">SEND A MESSAGE</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                    <Input className="bg-white/5 border-white/10 rounded-none h-14 text-white focus-visible:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                    <Input className="bg-white/5 border-white/10 rounded-none h-14 text-white focus-visible:border-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Subject</label>
                  <Input className="bg-white/5 border-white/10 rounded-none h-14 text-white focus-visible:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Message</label>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-none h-40 p-4 text-white focus-visible:border-primary outline-none transition-all" />
                </div>
                <Button className="w-full nbu-gradient h-16 text-white font-black uppercase tracking-[0.3em] text-xs shadow-xl">
                  Send Inquiry <Send className="w-4 h-4 ml-3" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-slate-100 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-10 bg-white shadow-2xl border-t-4 border-primary text-center max-w-sm">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-black text-slate-900 mb-2">CAMPUS LOCATION</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                    Kilometre 10 PH/Aba Expressway. Visually mapping our world-class facilities in Abia State.
                </p>
            </div>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524666041070-9d87656c25bb?q=80&w=2070')] bg-cover bg-center pointer-events-none opacity-20" />
      </section>

      <Footer />
    </main>
  );
}
