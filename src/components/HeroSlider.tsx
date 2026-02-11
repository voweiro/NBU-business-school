"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    type: "video",
    src: "/hero-section/drone view cr send.mp4",
    title: "A New Era of Excellence",
    subtitle: "NBU Business School",
    description: "Join Africa's premier institution for executive education, where innovation meets tradition in a world-class academic environment.",
    cta: "Start Application",
    link: "#"
  },
  {
    type: "image",
    src: "/hero-section/KC2A7298.jpg",
    title: "World-Class Faculty",
    subtitle: "Global Standards",
    description: "Learn from industry giants and academic leaders committed to shaping the next generation of global business titans.",
    cta: "Meet Our Faculty",
    link: "/about"
  },
  {
    type: "image",
    src: "/hero-section/KC2A7302.jpg",
    title: "Strategic Industry Interface",
    subtitle: "Practical Impact",
    description: "Our programmes are anchored on rigorous research and direct industrial engagement to ensure immediate career impact.",
    cta: "Explore Programmes",
    link: "/programs"
  },
  {
    type: "image",
    src: "/hero-section/KC2A7306.jpg",
    title: "Elite Executive Education",
    subtitle: "Leadership Reimagined",
    description: "Equipping you with the strategic insights needed to navigate complexity and drive transformation in the modern world.",
    cta: "View Executive Courses",
    link: "/programs"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[85vh] md:h-screen min-h-[600px] overflow-hidden bg-slate-950">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Asset */}
            <div className="absolute inset-0 w-full h-full">
              {slide.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              )}
              {/* Overlays */}
              <div className="absolute inset-0 bg-slate-950/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center">
              <div className={`max-w-4xl transition-all duration-1000 transform ${
                index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.4em] text-white uppercase border-l-4 border-primary bg-primary/20 backdrop-blur-md">
                  {slide.subtitle}
                </div>
                
                <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9] text-white uppercase italic font-serif">
                   {slide.title.split(' ').map((word, i) => (
                     <span key={i} className={i % 2 !== 0 ? "text-primary not-italic font-sans" : ""}>
                       {word}{' '}
                     </span>
                   ))}
                </h1>
                
                <p className="max-w-2xl text-lg md:text-xl text-slate-200 mb-12 leading-relaxed font-medium">
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Button size="lg" className="nbu-gradient text-white px-10 h-16 text-sm font-bold uppercase tracking-widest rounded-none group w-full sm:w-auto">
                    {slide.cta}
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  {slide.type === "video" && (
                    <button className="flex items-center gap-4 group">
                      <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all backdrop-blur-sm">
                        <Play className="w-5 h-5 ml-1 text-white fill-current" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest text-white">Full Experience</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-12">
        <div className="flex items-center gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1 transition-all duration-300 ${
                  i === currentSlide ? "w-12 bg-primary" : "w-4 bg-white/30"
                }`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Side Counter */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-4">
        <span className="text-white font-black text-4xl opacity-20">0{currentSlide + 1}</span>
        <div className="w-[2px] h-20 bg-white/10 relative">
          <div 
            className="absolute top-0 left-0 w-full bg-primary transition-all duration-1000"
            style={{ height: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
        <span className="text-white font-black text-xs opacity-40 uppercase tracking-widest">Slide</span>
      </div>
    </section>
  );
}
