"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Programmes", href: "/programs" },
    { name: "About", href: "/about" },
    { name: "Admission", href: "/admission" },

  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">


      {/* Main Navbar */}
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 shrink-0">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden">
            <Image 
              src="/logo.png" 
              alt="NBU Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg md:text-xl leading-none tracking-tighter text-slate-900 uppercase">
              NBU <span className="text-[#e62627]">Business</span>
            </span>
            <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-slate-500 mt-1 uppercase">
              School of Excellence
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10 text-[13px] font-bold uppercase tracking-widest text-slate-700">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2">
            <Link href="/contact">
              <Button variant="outline" className="border-2 font-bold uppercase text-xs tracking-widest h-11 px-6">
                Contact
              </Button>
            </Link>
            <Link href="/admission">
              <Button className="nbu-gradient text-white border-0 font-bold uppercase text-xs tracking-widest h-11 px-8 shadow-lg hover:shadow-primary/20 transition-all">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-900 border border-slate-100 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div 
          className={`absolute right-0 top-0 h-full w-[85%] max-w-[400px] bg-white shadow-2xl transition-transform duration-300 ease-out p-8 flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-12">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Navigation</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-500 hover:text-primary transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="group flex items-center justify-between text-2xl font-black text-slate-900 hover:text-primary transition-colors tracking-tight"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                <ChevronRight className="w-6 h-6 text-slate-200 group-hover:text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-10 border-t border-slate-100">
             <div className="flex flex-col gap-4">
               <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                 <Button variant="outline" className="w-full border-2 font-bold uppercase text-xs tracking-widest h-14">
                   Contact Us
                 </Button>
               </Link>
               <Button className="w-full nbu-gradient text-white border-0 font-bold uppercase text-xs tracking-widest h-14 shadow-xl">
                 Apply Now
               </Button>
             </div>
             
             <div className="mt-10 flex flex-col gap-2">
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Student Resources</span>
               <div className="flex flex-wrap gap-4 text-[11px] font-bold text-slate-600">
                 <Link href="#" className="hover:text-primary transition-colors">Portal</Link>
                 <Link href="#" className="hover:text-primary transition-colors">LMS</Link>
                 <Link href="#" className="hover:text-primary transition-colors">Email</Link>
               </div>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
