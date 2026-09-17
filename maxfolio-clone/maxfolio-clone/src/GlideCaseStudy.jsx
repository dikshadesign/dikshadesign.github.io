import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function GlideCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-[#d9ff1a] selection:text-black">
      <section id="cs-header" className="relative overflow-hidden bg-[#151515] px-8 pt-24 pb-16 lg:h-80 lg:pb-8 border-b border-white/10">
        <div className="relative z-10 flex flex-col gap-8 lg:h-full lg:justify-between lg:gap-0 max-w-6xl mx-auto">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance text-white">
              <span className="text-[#d9ff1a]">GLIDE</span><span> — Mobile Commerce</span>
            </h1>
            <p className="max-w-2xl text-xl font-normal italic leading-relaxed text-white/60">
              A mobile pop-up retail and delivery vehicle designed for dense urban environments.
            </p>
          </div>
          
          <dl className="grid w-full grid-cols-1 divide-y divide-white/15 overflow-hidden border border-white/20 bg-[#151515] sm:grid-cols-3 sm:divide-x sm:divide-y-0 mt-8 rounded-lg">
            <div className="flex flex-col justify-start gap-1.5 px-6 py-4">
              <dt className="font-mono text-xs font-medium uppercase tracking-widest text-white/40">Team</dt>
              <dd>
                <span className="flex flex-col gap-1 text-sm text-white/70">
                  <span>1 Lead Designer</span>
                  <span>Collaboration with Engineering</span>
                </span>
              </dd>
            </div>
            <div className="flex flex-col justify-start gap-1.5 px-6 py-4">
              <dt className="font-mono text-xs font-medium uppercase tracking-widest text-white/40">Role</dt>
              <dd>
                <span className="flex flex-col gap-1 text-sm font-medium text-white/80">
                  <span>Product / Industrial Designer</span>
                </span>
              </dd>
            </div>
            <div className="flex flex-col justify-start gap-1.5 px-6 py-4">
              <dt className="font-mono text-xs font-medium uppercase tracking-widest text-white/40">Timeline</dt>
              <dd>
                <span className="text-sm font-medium text-white/80">Nov '22 – Jan '23</span>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* STICKY NAV */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="flex items-center gap-6 px-8 py-3 max-w-6xl mx-auto">
          <div className="flex flex-none items-center">
            <a aria-label="Back to work" className="flex h-10 w-10 flex-none items-center justify-center border border-white/20 bg-[#151515] text-white/55 transition-colors hover:border-[#d9ff1a]/60 hover:text-[#d9ff1a] rounded-full" href="#">
              <ArrowLeft size={18} />
            </a>
          </div>
          <div className="hidden min-w-0 flex-1 md:block overflow-x-auto">
            <nav aria-label="Sections" className="flex w-full items-center gap-8">
              <a href="#sec-background" className="group flex flex-none items-center gap-2">
                <span className="font-mono text-xs font-medium uppercase tracking-widest whitespace-nowrap transition-colors duration-200 text-white/40 group-hover:text-white/75">Background</span>
              </a>
              <a href="#sec-research" className="group flex flex-none items-center gap-2">
                <span className="font-mono text-xs font-medium uppercase tracking-widest whitespace-nowrap transition-colors duration-200 text-white/40 group-hover:text-white/75">Research</span>
              </a>
              <a href="#sec-designs" className="group flex flex-none items-center gap-2">
                <span className="font-mono text-xs font-medium uppercase tracking-widest whitespace-nowrap transition-colors duration-200 text-white/40 group-hover:text-white/75">Designs</span>
              </a>
              <a href="#sec-impact" className="group flex flex-none items-center gap-2">
                <span className="font-mono text-xs font-medium uppercase tracking-widest whitespace-nowrap transition-colors duration-200 text-white/40 group-hover:text-white/75">Impact</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-[#0a0a0a] px-8 max-w-6xl mx-auto pb-32">
        {/* BACKGROUND */}
        <div id="sec-background" className="pt-24 scroll-mt-24">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-white/40">Background<span className="text-white/25"> / </span><span className="text-white">Gaps in Process</span></span>
            <p className="text-lg text-white/70 leading-relaxed">
              How are small businesses coping with logistics in congested cities like Pune? I discovered delivery wasn’t just about transport; it was deeply linked to how businesses scale, sustain, and reach customers efficiently.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              The storyboard follows Ram, a local apparel store owner in Pune, as he looks for ways to take his business beyond his storefront. Delivering orders across the city is challenging, with heavy traffic, delays, and narrow lanes affecting his time and productivity.
            </p>
          </div>
          
          <div className="mt-16 bg-[#151515] border border-white/10 p-10 rounded-xl max-w-4xl">
            <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-red-400 mb-2">Problem</h3>
            <p className="text-2xl text-white mb-10 font-medium">How can local businesses reach customers beyond their storefront?</p>
            
            <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-[#d9ff1a] mb-2">Insight</h3>
            <p className="text-2xl text-white mb-10 font-medium">The challenge isn't simply moving products—it is moving the business closer to customers.</p>
            
            <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-white/40 mb-2">Solution</h3>
            <p className="text-3xl font-bold text-white">GLIDE — A Mobile Commerce Solution</p>
          </div>
        </div>

        {/* RESEARCH */}
        <div id="sec-research" className="pt-32 scroll-mt-24 border-t border-white/10 mt-24">
          <div className="max-w-3xl flex flex-col gap-6 mb-12">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-white/40">Research<span className="text-white/25"> / </span><span className="text-white">Context</span></span>
            <p className="text-lg text-white/70 leading-relaxed">
              To truly understand the problem, we looked at the existing landscape: the crowded urban environment, the surge in e-commerce, and the struggles of local vendors.
            </p>
          </div>

          <div className="w-full mb-8">
            <img src="../assets/images/glide/market-context.png" alt="Market Context Collage" className="w-full h-auto rounded-xl border border-white/10 object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="../assets/images/glide/vendor-night.jpg" alt="Vendor at night" className="w-full aspect-[4/3] rounded-xl border border-white/10 object-cover" />
            <img src="../assets/images/glide/truck-side.jpg" alt="Delivery truck side profile" className="w-full aspect-[4/3] rounded-xl border border-white/10 object-cover" />
            <img src="../assets/images/glide/traffic-1.jpg" alt="Traffic in city" className="w-full aspect-[4/3] rounded-xl border border-white/10 object-cover" />
            <img src="../assets/images/glide/traffic-2.jpg" alt="Vehicle moving through traffic" className="w-full aspect-[4/3] rounded-xl border border-white/10 object-cover" />
          </div>
        </div>

        {/* DESIGNS */}
        <div id="sec-designs" className="pt-32 scroll-mt-24 border-t border-white/10 mt-24">
          <div className="max-w-3xl flex flex-col gap-6 mb-12">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-white/40">Designs<span className="text-white/25"> / </span><span className="text-white">Final Hardware</span></span>
            <p className="text-lg text-white/70 leading-relaxed">
              GLIDE was designed to be modular, adaptable, and highly visible. It transforms from a compact delivery vehicle into a fully functional retail pop-up in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-[#2a2a2a] to-[#111] flex items-center justify-center relative overflow-hidden">
               <div className="absolute left-[60%] top-[25%] w-12 h-32 rounded-full bg-white/10 blur-sm mix-blend-overlay"></div>
               <div className="absolute w-3/4 h-1/2 bg-gradient-to-b from-[#444] to-[#111] rounded-2xl shadow-2xl transform -rotate-6"></div>
            </div>
            <div className="w-full aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-[#2a2a2a] to-[#111] flex items-center justify-center relative overflow-hidden">
               <div className="absolute w-1/2 h-3/4 bg-gradient-to-b from-red-600 to-red-900 rounded-3xl shadow-2xl transform rotate-3"></div>
            </div>
            <div className="w-full aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-[#2a2a2a] to-[#111] flex items-center justify-center relative overflow-hidden">
               <div className="absolute w-2/3 h-2/3 bg-[#222] rounded-xl shadow-2xl border border-white/5"></div>
            </div>
            <div className="w-full aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-[#2a2a2a] to-[#111] flex items-center justify-center relative overflow-hidden">
               <div className="absolute w-1/3 h-2/3 bg-gradient-to-b from-[#333] to-[#000] rounded-full shadow-2xl transform -rotate-12"></div>
            </div>
          </div>
        </div>

        {/* IMPACT */}
        <div id="sec-impact" className="pt-32 scroll-mt-24 border-t border-white/10 mt-24">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-white/40">Impact<span className="text-white/25"> / </span><span className="text-white">Results</span></span>
            <div className="p-8 border border-[#d9ff1a]/20 bg-[#d9ff1a]/5 rounded-xl">
              <p className="text-2xl text-white/90 leading-relaxed font-medium">
                "The GLIDE prototype demonstrated a 40% increase in setup efficiency and a significant boost in customer engagement metrics during initial pilot tests."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
