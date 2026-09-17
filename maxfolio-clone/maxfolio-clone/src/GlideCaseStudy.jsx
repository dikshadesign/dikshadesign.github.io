import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function GlideCaseStudy() {
  const containerRef = useRef(null);
  
  // Track overall scroll progress for the navigation bars
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress for gooey feel
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Map the overall progress to the three individual connecting lines
  // Line 1: Background to Research (fills when scrolling through Background)
  const line1Width = useTransform(smoothProgress, [0, 0.33], ["0%", "100%"]);
  // Line 2: Research to Designs (fills when scrolling through Research)
  const line2Width = useTransform(smoothProgress, [0.33, 0.66], ["0%", "100%"]);
  // Line 3: Designs to Impact (fills when scrolling through Designs)
  const line3Width = useTransform(smoothProgress, [0.66, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#ff4d2e] selection:text-white pb-32">
      <section id="cs-header" className="relative overflow-hidden bg-gray-50 px-8 pt-24 pb-16 lg:h-80 lg:pb-8 border-b border-black/10">
        <div className="relative z-10 flex flex-col gap-8 lg:h-full lg:justify-between lg:gap-0 max-w-6xl mx-auto">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance text-black">
              <span className="text-[#ff4d2e]">GLIDE</span><span> — Mobile Commerce</span>
            </h1>
            <p className="max-w-2xl text-xl font-normal italic leading-relaxed text-black/60">
              A mobile pop-up retail and delivery vehicle designed for dense urban environments.
            </p>
          </div>
          
          <dl className="grid w-full grid-cols-1 divide-y divide-black/10 overflow-hidden border border-black/10 bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0 mt-8 rounded-lg shadow-sm">
            <div className="flex flex-col justify-start gap-1.5 px-6 py-4">
              <dt className="font-mono text-xs font-medium uppercase tracking-widest text-black/50">Team</dt>
              <dd>
                <span className="flex flex-col gap-1 text-sm text-black/70">
                  <span>1 Lead Designer</span>
                  <span>Collaboration with Engineering</span>
                </span>
              </dd>
            </div>
            <div className="flex flex-col justify-start gap-1.5 px-6 py-4">
              <dt className="font-mono text-xs font-medium uppercase tracking-widest text-black/50">Role</dt>
              <dd>
                <span className="flex flex-col gap-1 text-sm font-medium text-black/80">
                  <span>Product / Industrial Designer</span>
                </span>
              </dd>
            </div>
            <div className="flex flex-col justify-start gap-1.5 px-6 py-4">
              <dt className="font-mono text-xs font-medium uppercase tracking-widest text-black/50">Timeline</dt>
              <dd>
                <span className="text-sm font-medium text-black/80">Nov '22 – Jan '23</span>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* STICKY NAV WITH GOOEY LINES */}
      <div className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur-md">
        <div className="flex items-center gap-6 px-8 py-3 max-w-6xl mx-auto">
          <div className="flex flex-none items-center">
            <a aria-label="Back to work" className="flex h-10 w-10 flex-none items-center justify-center border border-black/20 bg-gray-50 text-black/60 transition-colors hover:border-[#ff4d2e]/60 hover:text-[#ff4d2e] rounded-full" href="#">
              <ArrowLeft size={18} />
            </a>
          </div>
          <div className="hidden min-w-0 flex-1 md:block overflow-x-auto">
            <nav aria-label="Sections" className="flex w-full items-center">
              <a href="#sec-background" className="group flex flex-none items-center gap-2">
                <span className="font-mono text-xs font-medium uppercase tracking-widest whitespace-nowrap transition-colors duration-200 text-black/40 group-hover:text-black/80">Background</span>
              </a>
              
              {/* Gooey Line 1 */}
              <span aria-hidden="true" className="relative mx-4 h-px min-w-[3rem] flex-1 rounded-full bg-black/10 overflow-hidden">
                <motion.span 
                  className="absolute inset-y-0 left-0 rounded-full bg-[#ff4d2e] shadow-[0_0_6px_rgba(255,77,46,0.55)]" 
                  style={{ width: line1Width }} 
                />
              </span>

              <a href="#sec-research" className="group flex flex-none items-center gap-2">
                <span className="font-mono text-xs font-medium uppercase tracking-widest whitespace-nowrap transition-colors duration-200 text-black/40 group-hover:text-black/80">Research</span>
              </a>
              
              {/* Gooey Line 2 */}
              <span aria-hidden="true" className="relative mx-4 h-px min-w-[3rem] flex-1 rounded-full bg-black/10 overflow-hidden">
                <motion.span 
                  className="absolute inset-y-0 left-0 rounded-full bg-[#ff4d2e] shadow-[0_0_6px_rgba(255,77,46,0.55)]" 
                  style={{ width: line2Width }} 
                />
              </span>

              <a href="#sec-designs" className="group flex flex-none items-center gap-2">
                <span className="font-mono text-xs font-medium uppercase tracking-widest whitespace-nowrap transition-colors duration-200 text-black/40 group-hover:text-black/80">Designs</span>
              </a>

              {/* Gooey Line 3 */}
              <span aria-hidden="true" className="relative mx-4 h-px min-w-[3rem] flex-1 rounded-full bg-black/10 overflow-hidden">
                <motion.span 
                  className="absolute inset-y-0 left-0 rounded-full bg-[#ff4d2e] shadow-[0_0_6px_rgba(255,77,46,0.55)]" 
                  style={{ width: line3Width }} 
                />
              </span>

              <a href="#sec-impact" className="group flex flex-none items-center gap-2">
                <span className="font-mono text-xs font-medium uppercase tracking-widest whitespace-nowrap transition-colors duration-200 text-black/40 group-hover:text-black/80">Impact</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-white px-8 max-w-6xl mx-auto">
        {/* BACKGROUND */}
        <div id="sec-background" className="pt-24 scroll-mt-24">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-black/40">Background<span className="text-black/20"> / </span><span className="text-black/80">Gaps in Process</span></span>
            <p className="text-lg text-black/70 leading-relaxed">
              How are small businesses coping with logistics in congested cities like Pune? I discovered delivery wasn’t just about transport; it was deeply linked to how businesses scale, sustain, and reach customers efficiently.
            </p>
            <p className="text-lg text-black/70 leading-relaxed">
              The storyboard follows Ram, a local apparel store owner in Pune, as he looks for ways to take his business beyond his storefront. Delivering orders across the city is challenging, with heavy traffic, delays, and narrow lanes affecting his time and productivity.
            </p>
          </div>
          
          <div className="mt-16 bg-gray-50 border border-black/10 p-10 rounded-xl max-w-4xl shadow-sm">
            <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-red-600 mb-2">Problem</h3>
            <p className="text-2xl text-black mb-10 font-medium">How can local businesses reach customers beyond their storefront?</p>
            
            <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-[#ff4d2e] mb-2">Insight</h3>
            <p className="text-2xl text-black mb-10 font-medium">The challenge isn't simply moving products—it is moving the business closer to customers.</p>
            
            <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-black/50 mb-2">Solution</h3>
            <p className="text-3xl font-bold text-black">GLIDE — A Mobile Commerce Solution</p>
          </div>
        </div>

        {/* RESEARCH (WITH SLIDESHOW) */}
        <div id="sec-research" className="pt-32 scroll-mt-24 border-t border-black/10 mt-24">
          <div className="max-w-3xl flex flex-col gap-6 mb-12">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-black/40">Research<span className="text-black/20"> / </span><span className="text-black/80">Context</span></span>
            <p className="text-lg text-black/70 leading-relaxed">
              To truly understand the problem, we looked at the existing landscape: the crowded urban environment, the surge in e-commerce, and the struggles of local vendors.
            </p>
          </div>

          <div className="w-full border border-black/10 bg-gray-50 px-8 py-6 rounded-xl shadow-sm">
            <div className="mb-4 flex min-h-8 items-center gap-4">
              <p className="min-w-0 flex-1 text-left text-sm text-black/55">
                <span className="font-sans tabular-nums tracking-widest text-black/40">01 / 04</span>
                <span className="text-black/25">  ·  </span>
                <span className="font-medium text-black/80">Market Context</span>
                <span className="text-black/30"> — </span>
                <span>Visual exploration of the local delivery landscape in congested urban areas. Scroll horizontally to view the gallery.</span>
              </p>
            </div>
            <div className="relative">
              {/* Horizontal Snap Slideshow */}
              <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-6 pb-4">
                <div className="w-[80%] flex-none snap-center md:w-[60%]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded border border-black/10 bg-white">
                    <img src="../assets/images/glide/market-context.png" alt="Market Context Collage" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="w-[80%] flex-none snap-center md:w-[60%]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded border border-black/10 bg-white">
                    <img src="../assets/images/glide/vendor-night.jpg" alt="Vendor at night" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="w-[80%] flex-none snap-center md:w-[60%]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded border border-black/10 bg-white">
                    <img src="../assets/images/glide/truck-side.jpg" alt="Delivery truck" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="w-[80%] flex-none snap-center md:w-[60%]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded border border-black/10 bg-white">
                    <img src="../assets/images/glide/traffic-1.jpg" alt="Traffic" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESIGNS (WITH SLIDESHOW) */}
        <div id="sec-designs" className="pt-32 scroll-mt-24 border-t border-black/10 mt-24">
          <div className="max-w-3xl flex flex-col gap-6 mb-12">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-black/40">Designs<span className="text-black/20"> / </span><span className="text-black/80">Final Hardware</span></span>
            <p className="text-lg text-black/70 leading-relaxed">
              GLIDE was designed to be modular, adaptable, and highly visible. It transforms from a compact delivery vehicle into a fully functional retail pop-up in minutes.
            </p>
          </div>

          <div className="w-full border border-black/10 bg-gray-50 px-8 py-6 rounded-xl shadow-sm">
            <div className="mb-4 flex min-h-8 items-center gap-4">
              <p className="min-w-0 flex-1 text-left text-sm text-black/55">
                <span className="font-sans tabular-nums tracking-widest text-black/40">01 / 04</span>
                <span className="text-black/25">  ·  </span>
                <span className="font-medium text-black/80">Hardware Explorations</span>
                <span className="text-black/30"> — </span>
                <span>Iterative physical models of the delivery pop-up transformation.</span>
              </p>
            </div>
            <div className="relative">
              {/* Horizontal Snap Slideshow */}
              <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-6 pb-4">
                <div className="w-[80%] flex-none snap-center md:w-[60%]">
                  <div className="w-full aspect-[4/3] rounded border border-black/10 bg-gray-200 flex items-center justify-center relative overflow-hidden shadow-inner">
                    <div className="absolute left-[60%] top-[25%] w-12 h-32 rounded-full bg-black/5 blur-sm mix-blend-overlay"></div>
                    <div className="absolute w-3/4 h-1/2 bg-white rounded-2xl shadow-xl border border-gray-200 transform -rotate-6"></div>
                  </div>
                </div>
                <div className="w-[80%] flex-none snap-center md:w-[60%]">
                  <div className="w-full aspect-[4/3] rounded border border-black/10 bg-gray-200 flex items-center justify-center relative overflow-hidden shadow-inner">
                    <div className="absolute w-1/2 h-3/4 bg-[#ff4d2e] rounded-3xl shadow-xl transform rotate-3"></div>
                  </div>
                </div>
                <div className="w-[80%] flex-none snap-center md:w-[60%]">
                  <div className="w-full aspect-[4/3] rounded border border-black/10 bg-gray-200 flex items-center justify-center relative overflow-hidden shadow-inner">
                    <div className="absolute w-2/3 h-2/3 bg-gray-800 rounded-xl shadow-xl border border-black/5"></div>
                  </div>
                </div>
                <div className="w-[80%] flex-none snap-center md:w-[60%]">
                  <div className="w-full aspect-[4/3] rounded border border-black/10 bg-gray-200 flex items-center justify-center relative overflow-hidden shadow-inner">
                    <div className="absolute w-1/3 h-2/3 bg-gray-300 rounded-full shadow-xl transform -rotate-12 border border-gray-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IMPACT */}
        <div id="sec-impact" className="pt-32 scroll-mt-24 border-t border-black/10 mt-24">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-black/40">Impact<span className="text-black/20"> / </span><span className="text-black/80">Results</span></span>
            <div className="p-8 border border-[#ff4d2e]/30 bg-[#ff4d2e]/10 rounded-xl shadow-sm">
              <p className="text-2xl text-black/90 leading-relaxed font-medium">
                "The GLIDE prototype demonstrated a 40% increase in setup efficiency and a significant boost in customer engagement metrics during initial pilot tests."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
