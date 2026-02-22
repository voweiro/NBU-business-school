import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Column 1: Branding */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
                <Image 
                  src="/logo.png" 
                  alt="NBU Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl leading-none tracking-tighter text-white uppercase">
                  NBU <span className="text-primary italic">Business</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 mt-1 uppercase">
                  School of Excellence
                </span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs font-medium">
              A university-based institution dedicated to academic excellence, 
              offering professional diploma programmes anchored on research and industry needs.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8">Quick Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Programmes', 'About', 'Contact', 'Admission'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : item === 'Programmes' ? '/programs' : `/${item.toLowerCase()}`} 
                    className="text-slate-300 hover:text-white transition-colors text-sm font-bold flex items-center group uppercase tracking-widest"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8">Resources</h4>
            <ul className="space-y-4">
              {['News & Events', 'Research Portal', 'Alumni Association', 'Career Services', 'Staff Email'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-slate-300 hover:text-white transition-colors text-sm font-bold flex items-center group uppercase tracking-widest"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8">Get In Touch</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  Kilometre 10, Port Harcourt-Aba Express way,<br />
                  Asa, Ukwa West LGA, Abia State, Nigeria.
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <p className="text-slate-300 text-sm font-medium">info@nbu.edu.ng</p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <p className="text-slate-300 text-sm font-medium">08033382537</p>
                  <p className="text-slate-300 text-sm font-medium">07036838661</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2025 Nigerian British University Business School. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
              <Twitter className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
              <Instagram className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
