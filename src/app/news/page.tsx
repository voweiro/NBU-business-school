import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Newspaper,
  Rss,
  ArrowUpRight,
  Megaphone,
  Clock,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News & Events | NBU Business School",
  description:
    "Stay updated with the latest news, events, and announcements from Nigerian British University Business School.",
};

const NEWS_ARTICLES: Array<{
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}> = [];

const UPCOMING_EVENTS: Array<{
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
}> = [];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2070')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-1 bg-primary" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">
                Insights & Updates
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-10 leading-[0.9] tracking-tighter">
              NEWS <span className="text-primary">&</span> <br />
              <span className="italic font-serif">EVENTS</span>
            </h1>
            <p className="text-2xl text-slate-300 leading-relaxed font-light max-w-2xl border-l border-white/10 pl-8">
              Stay informed about our latest academic breakthroughs,
              institutional achievements, and community highlights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News & Events Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Latest News Articles */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-3xl font-black uppercase tracking-tight text-slate-950 flex items-center gap-4">
                  <Newspaper className="text-primary w-8 h-8" />
                  Latest Headlines
                </h3>
                <Link
                  href="#"
                  className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest text-primary hover:text-slate-900 transition-colors"
                >
                  View All News <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {NEWS_ARTICLES.length > 0 ? (
                  NEWS_ARTICLES.map((article, i) => (
                    <div
                      key={i}
                      className="bg-white border border-slate-100 group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden flex flex-col"
                    >
                      <div className="relative h-60 w-full overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1">
                          {article.category}
                        </div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <span className="text-xs font-bold text-slate-400 mb-4">
                          {article.date}
                        </span>
                        <h4 className="text-xl font-black text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                          {article.excerpt}
                        </p>
                        <Link
                          href="#"
                          className="flex items-center text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-primary transition-colors mt-auto"
                        >
                          Read Full Story{" "}
                          <ArrowUpRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-200 bg-white flex flex-col items-center justify-center">
                    <Newspaper className="w-12 h-12 text-slate-300 mb-4" />
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      No News Available
                    </h4>
                    <p className="text-slate-500 font-medium">
                      Check back later for the latest updates and announcements.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Events Sidebar */}
            <div>
              <div className="mb-12">
                <h3 className="text-3xl font-black uppercase tracking-tight text-slate-950 flex items-center gap-4">
                  <Calendar className="text-primary w-8 h-8" />
                  Upcoming Events
                </h3>
              </div>

              <div className="bg-slate-950 text-white p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />

                <div className="space-y-8 relative z-10">
                  {UPCOMING_EVENTS.length > 0 ? (
                    UPCOMING_EVENTS.map((event, i) => (
                      <div
                        key={i}
                        className="flex gap-6 group cursor-pointer border-b border-white/10 pb-8 last:border-0 last:pb-0"
                      >
                        <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 min-w-[70px] h-[70px] group-hover:bg-primary group-hover:border-primary transition-colors">
                          <span className="text-2xl font-black leading-none">
                            {event.day}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                            {event.month}
                          </span>
                        </div>
                        <div>
                          <h5 className="font-bold text-lg mb-2 leading-tight group-hover:text-primary transition-colors">
                            {event.title}
                          </h5>
                          <div className="flex items-center text-xs text-slate-400 mb-1">
                            <Clock className="w-3 h-3 mr-2" /> {event.time}
                          </div>
                          <div className="text-xs text-slate-400">
                            {event.location}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="py-8 text-center border border-white/10 bg-white/5">
                      <Calendar className="w-8 h-8 text-slate-500 mx-auto mb-3" />
                      <p className="text-slate-400 text-sm font-medium">
                        No upcoming events scheduled.
                      </p>
                    </div>
                  )}
                </div>

                {UPCOMING_EVENTS.length > 0 && (
                  <button className="w-full mt-10 py-4 border border-white/20 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-colors">
                    View Full Calendar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Megaphone className="w-16 h-16 mx-auto mb-8 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
              Never Miss An Update
            </h2>
            <p className="text-xl font-medium text-white/90 mb-12">
              Subscribe to the NBU Business School newsletter to receive the
              latest news, event invitations, and research insights directly in
              your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white focus:bg-white/20 transition-all font-medium"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-slate-950 text-white font-black uppercase text-xs tracking-widest hover:bg-white hover:text-slate-950 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
