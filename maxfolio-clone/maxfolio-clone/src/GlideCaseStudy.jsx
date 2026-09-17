import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Twitter, Dribbble, Instagram } from 'lucide-react';

export default function GlideCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--accent)] selection:text-white font-sans">
      
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-8">
        {/* TOP NAV */}
        <div className="flex justify-between items-start mb-32">
          <a href="#" className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
            <ArrowLeft size={16} /> Back to homepage
          </a>
          <div className="flex flex-col gap-4 text-[var(--muted)]">
            <a href="#" className="hover:text-[var(--fg)] transition-colors"><Twitter size={18} /></a>
            <a href="#" className="hover:text-[var(--fg)] transition-colors"><Dribbble size={18} /></a>
            <a href="#" className="hover:text-[var(--fg)] transition-colors"><Instagram size={18} /></a>
          </div>
        </div>

        {/* HEADER */}
        <div className="flex flex-col mb-24">
          <h1 className="text-[80px] md:text-[140px] leading-none font-medium mb-8 tracking-tight">
            GLIDE
          </h1>
          <p className="text-xl md:text-2xl max-w-lg text-[var(--fg)] leading-relaxed">
            A mobile pop-up retail and delivery vehicle designed for dense urban environments.
          </p>
        </div>

        {/* METADATA */}
        <div className="flex flex-wrap justify-end items-center text-[11px] md:text-xs text-[var(--muted)] mb-6 gap-3 md:gap-4 font-mono uppercase tracking-wider">
          <span>Team: <strong className="text-[var(--fg)] font-medium">1 Lead Designer</strong></span>
          <span className="text-[#ccc]">✦</span>
          <span>Role: <strong className="text-[var(--fg)] font-medium">Product / Industrial Designer</strong></span>
          <span className="text-[#ccc]">✦</span>
          <span>Timeline: <strong className="text-[var(--fg)] font-medium">Nov '22 – Jan '23</strong></span>
        </div>

        {/* HERO IMAGE */}
        <div className="w-full aspect-video md:aspect-[21/9] bg-[var(--bg-card)] rounded-[24px] md:rounded-[32px] overflow-hidden mb-32">
          <img src="../assets/images/glide/market-context.png" alt="Glide Hero" className="w-full h-full object-cover" />
        </div>

        {/* CONTENT */}
        <div className="max-w-4xl mx-auto flex flex-col gap-32 pb-32">
          
          {/* SECTION: BACKGROUND */}
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl font-medium tracking-tight">Background / Gaps in Process</h2>
            <div className="flex flex-col gap-6 text-lg text-[var(--muted)] leading-relaxed">
              <p>
                How are small businesses coping with logistics in congested cities like Pune? I discovered delivery wasn’t just about transport; it was deeply linked to how businesses scale, sustain, and reach customers efficiently.
              </p>
              <p>
                The storyboard follows Ram, a local apparel store owner in Pune, as he looks for ways to take his business beyond his storefront. Delivering orders across the city is challenging, with heavy traffic, delays, and narrow lanes affecting his time and productivity.
              </p>
            </div>
            
            <div className="mt-8 bg-[var(--bg-card)] p-10 md:p-12 rounded-[24px] shadow-sm flex flex-col gap-8">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--muted)] mb-3">Problem</h3>
                <p className="text-2xl font-medium">How can local businesses reach customers beyond their storefront?</p>
              </div>
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--muted)] mb-3">Insight</h3>
                <p className="text-2xl font-medium">The challenge isn't simply moving products—it is moving the business closer to customers.</p>
              </div>
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--accent)] mb-3">Solution</h3>
                <p className="text-3xl font-bold text-[var(--accent)]">GLIDE — A Mobile Commerce Solution</p>
              </div>
            </div>
          </section>

          {/* SECTION: RESEARCH */}
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl font-medium tracking-tight">Research / Context</h2>
            <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl">
              To truly understand the problem, we looked at the existing landscape: the crowded urban environment, the surge in e-commerce, and the struggles of local vendors.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="aspect-[4/3] rounded-[24px] overflow-hidden bg-[var(--bg-card)]">
                <img src="../assets/images/glide/vendor-night.jpg" alt="Vendor" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-[4/3] rounded-[24px] overflow-hidden bg-[var(--bg-card)]">
                <img src="../assets/images/glide/truck-side.jpg" alt="Truck" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-[4/3] rounded-[24px] overflow-hidden bg-[var(--bg-card)]">
                <img src="../assets/images/glide/traffic-1.jpg" alt="Traffic" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-[4/3] rounded-[24px] overflow-hidden bg-[var(--bg-card)]">
                <img src="../assets/images/glide/traffic-2.jpg" alt="Traffic" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </section>

          {/* SECTION: DESIGNS */}
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl font-medium tracking-tight">Designs / Final Hardware</h2>
            <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl">
              GLIDE was designed to be modular, adaptable, and highly visible. It transforms from a compact delivery vehicle into a fully functional retail pop-up in minutes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="w-full aspect-[4/3] rounded-[24px] bg-[#f0f0f0] flex items-center justify-center relative overflow-hidden shadow-inner group">
                <div className="absolute left-[60%] top-[25%] w-12 h-32 rounded-full bg-black/5 blur-sm mix-blend-overlay"></div>
                <div className="absolute w-3/4 h-1/2 bg-white rounded-[24px] shadow-xl border border-[var(--line)] transform -rotate-6 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"></div>
              </div>
              <div className="w-full aspect-[4/3] rounded-[24px] bg-[#f0f0f0] flex items-center justify-center relative overflow-hidden shadow-inner group">
                <div className="absolute w-1/2 h-3/4 bg-[var(--accent)] rounded-[24px] shadow-xl transform rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"></div>
              </div>
              <div className="w-full aspect-[4/3] rounded-[24px] bg-[#f0f0f0] flex items-center justify-center relative overflow-hidden shadow-inner group">
                <div className="absolute w-2/3 h-2/3 bg-gray-800 rounded-[24px] shadow-xl border border-black/5 transition-transform duration-500 group-hover:scale-105"></div>
              </div>
              <div className="w-full aspect-[4/3] rounded-[24px] bg-[#f0f0f0] flex items-center justify-center relative overflow-hidden shadow-inner group">
                <div className="absolute w-1/3 h-2/3 bg-gray-300 rounded-full shadow-xl transform -rotate-12 border border-gray-400 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"></div>
              </div>
            </div>
          </section>

          {/* SECTION: IMPACT */}
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl font-medium tracking-tight">Impact / Results</h2>
            <div className="p-10 md:p-12 border border-[var(--accent)] bg-[var(--accent)]/5 rounded-[24px]">
              <p className="text-2xl text-[var(--fg)] leading-relaxed font-medium">
                "The GLIDE prototype demonstrated a 40% increase in setup efficiency and a significant boost in customer engagement metrics during initial pilot tests."
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
