import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function GlideCaseStudy() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const line1Width = useTransform(smoothProgress, [0, 0.33], ["0%", "100%"]);
  const line2Width = useTransform(smoothProgress, [0.33, 0.66], ["0%", "100%"]);
  const line3Width = useTransform(smoothProgress, [0.66, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="min-h-screen text-[var(--fg)] selection:bg-[var(--accent)] selection:text-white pb-32">
      <section id="cs-header" className="relative overflow-hidden bg-[var(--bg-card)] px-8 pt-24 pb-16 lg:h-80 lg:pb-8 border-b border-[var(--line)]">
        <div className="relative z-10 flex flex-col gap-8 lg:h-full lg:justify-between lg:gap-0 max-w-6xl mx-auto">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              <span className="text-[var(--accent)]">GLIDE</span><span> — Mobile Commerce</span>
            </h1>
            <p className="max-w-2xl text-xl font-normal italic leading-relaxed text-[var(--muted)]">
              A mobile pop-up retail and delivery vehicle designed for dense urban environments.
            </p>
          </div>
          
          <dl className="grid w-full grid-cols-1 divide-y divide-[var(--line)] overflow-hidden border border-[var(--line)] bg-[var(--bg)] sm:grid-cols-3 sm:divide-x sm:divide-y-0 mt-8 rounded-[var(--radius-lg)] shadow-sm transition-all duration-400 hover:-translate-y-1 hover:shadow-md">
            <div className="flex flex-col justify-start gap-1.5 px-6 py-4">
              <dt className="bento-card__label self-start mb-0 border-none px-0">Team</dt>
              <dd>
                <span className="flex flex-col gap-1 text-sm text-[var(--muted)]">
                  <span>1 Lead Designer</span>
                  <span>Collaboration with Engineering</span>
                </span>
              </dd>
            </div>
            <div className="flex flex-col justify-start gap-1.5 px-6 py-4">
              <dt className="bento-card__label self-start mb-0 border-none px-0">Role</dt>
              <dd>
                <span className="flex flex-col gap-1 text-sm font-medium">
                  <span>Product / Industrial Designer</span>
                </span>
              </dd>
            </div>
            <div className="flex flex-col justify-start gap-1.5 px-6 py-4">
              <dt className="bento-card__label self-start mb-0 border-none px-0">Timeline</dt>
              <dd>
                <span className="text-sm font-medium">Nov '22 – Jan '23</span>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* STICKY NAV WITH GOOEY LINES */}
      <div className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur-md">
        <div className="flex items-center gap-6 px-8 py-3 max-w-6xl mx-auto">
          <div className="flex flex-none items-center">
            <a aria-label="Back to work" className="flex h-10 w-10 flex-none items-center justify-center border border-[var(--line)] bg-[var(--bg-card)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] rounded-full" href="#">
              <ArrowLeft size={18} />
            </a>
          </div>
          <div className="hidden min-w-0 flex-1 md:block overflow-x-auto">
            <nav aria-label="Sections" className="flex w-full items-center">
              <a href="#sec-background" className="group flex flex-none items-center gap-2">
                <span className="bento-card__label border-none px-0 mb-0 transition-colors duration-200 group-hover:text-[var(--fg)]">Background</span>
              </a>
              
              {/* Gooey Line 1 */}
              <span aria-hidden="true" className="relative mx-4 h-px min-w-[3rem] flex-1 rounded-full bg-[var(--line)] overflow-hidden">
                <motion.span 
                  className="absolute inset-y-0 left-0 rounded-full bg-[var(--accent)] shadow-[0_0_6px_var(--accent)]" 
                  style={{ width: line1Width }} 
                />
              </span>

              <a href="#sec-research" className="group flex flex-none items-center gap-2">
                <span className="bento-card__label border-none px-0 mb-0 transition-colors duration-200 group-hover:text-[var(--fg)]">Research</span>
              </a>
              
              {/* Gooey Line 2 */}
              <span aria-hidden="true" className="relative mx-4 h-px min-w-[3rem] flex-1 rounded-full bg-[var(--line)] overflow-hidden">
                <motion.span 
                  className="absolute inset-y-0 left-0 rounded-full bg-[var(--accent)] shadow-[0_0_6px_var(--accent)]" 
                  style={{ width: line2Width }} 
                />
              </span>

              <a href="#sec-designs" className="group flex flex-none items-center gap-2">
                <span className="bento-card__label border-none px-0 mb-0 transition-colors duration-200 group-hover:text-[var(--fg)]">Designs</span>
              </a>

              {/* Gooey Line 3 */}
              <span aria-hidden="true" className="relative mx-4 h-px min-w-[3rem] flex-1 rounded-full bg-[var(--line)] overflow-hidden">
                <motion.span 
                  className="absolute inset-y-0 left-0 rounded-full bg-[var(--accent)] shadow-[0_0_6px_var(--accent)]" 
                  style={{ width: line3Width }} 
                />
              </span>

              <a href="#sec-impact" className="group flex flex-none items-center gap-2">
                <span className="bento-card__label border-none px-0 mb-0 transition-colors duration-200 group-hover:text-[var(--fg)]">Impact</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-8 max-w-6xl mx-auto">
        {/* BACKGROUND */}
        <div id="sec-background" className="pt-24 scroll-mt-24">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="bento-card__label self-start">Background / Gaps</span>
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              How are small businesses coping with logistics in congested cities like Pune? I discovered delivery wasn’t just about transport; it was deeply linked to how businesses scale, sustain, and reach customers efficiently.
            </p>
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              The storyboard follows Ram, a local apparel store owner in Pune, as he looks for ways to take his business beyond his storefront. Delivering orders across the city is challenging, with heavy traffic, delays, and narrow lanes affecting his time and productivity.
            </p>
          </div>
          
          <div className="mt-16 bg-[var(--bg-card)] border border-[var(--line)] p-10 rounded-[var(--radius-lg)] max-w-4xl shadow-sm transition-transform duration-400 hover:-translate-y-1 hover:bg-[var(--bg-card-light)]">
            <h3 className="bento-card__label self-start mb-2 border-[var(--accent)] text-[var(--accent)] inline-block">Problem</h3>
            <p className="text-2xl mb-10 font-medium">How can local businesses reach customers beyond their storefront?</p>
            
            <h3 className="bento-card__label self-start mb-2 border-[var(--accent)] text-[var(--accent)] inline-block">Insight</h3>
            <p className="text-2xl mb-10 font-medium">The challenge isn't simply moving products—it is moving the business closer to customers.</p>
            
            <h3 className="bento-card__label self-start mb-2 inline-block">Solution</h3>
            <p className="text-3xl font-bold">GLIDE — A Mobile Commerce Solution</p>
          </div>
        </div>

        {/* RESEARCH (WITH SLIDESHOW) */}
        <div id="sec-research" className="pt-32 scroll-mt-24 border-t border-[var(--line)] mt-24">
          <div className="max-w-3xl flex flex-col gap-6 mb-12">
            <span className="bento-card__label self-start">Research / Context</span>
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              To truly understand the problem, we looked at the existing landscape: the crowded urban environment, the surge in e-commerce, and the struggles of local vendors.
            </p>
          </div>

          <div className="w-full border border-[var(--line)] bg-[var(--bg-card)] px-8 py-6 rounded-[var(--radius-lg)] shadow-sm transition-transform duration-400 hover:-translate-y-1 hover:bg-[var(--bg-card-light)]">
            <div className="mb-4 flex min-h-8 items-center gap-4">
              <p className="min-w-0 flex-1 text-left text-sm text-[var(--muted)]">
                <span className="bento-card__label border-none px-0 mb-0">01 / 04</span>
                <span className="opacity-50 mx-2">·</span>
                <span className="font-medium text-[var(--fg)]">Market Context</span>
                <span className="opacity-50 mx-2">—</span>
                <span>Visual exploration of the local delivery landscape in congested urban areas. Scroll horizontally to view the gallery.</span>
              </p>
            </div>
            <div className="relative">
              {/* Horizontal Snap Slideshow */}
              <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-6 pb-4">
                <div className="w-[80%] flex-none snap-center md:w-[60%]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--bg)]">
                    <img src="../assets/images/glide/market-context.png" alt="Market Context Collage" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                </div>
                <div className="w-[80%] flex-none snap-center md:w-[60%]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--bg)]">
                    <img src="../assets/images/glide/vendor-night.jpg" alt="Vendor at night" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                </div>
                <div className="w-[80%] flex-none snap-center md:w-[60%]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--bg)]">
                    <img src="../assets/images/glide/truck-side.jpg" alt="Delivery truck" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                </div>
                <div className="w-[80%] flex-none snap-center md:w-[60%]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--bg)]">
                    <img src="../assets/images/glide/traffic-1.jpg" alt="Traffic" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESIGNS (WITH SLIDESHOW) */}
        <div id="sec-designs" className="pt-32 scroll-mt-24 border-t border-[var(--line)] mt-24">
          <div className="max-w-3xl flex flex-col gap-6 mb-12">
            <span className="bento-card__label self-start">Designs / Final Hardware</span>
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              GLIDE was designed to be modular, adaptable, and highly visible. It transforms from a compact delivery vehicle into a fully functional retail pop-up in minutes.
            </p>
          </div>

          <div className="w-full border border-[var(--line)] bg-[var(--bg-card)] px-8 py-6 rounded-[var(--radius-lg)] shadow-sm transition-transform duration-400 hover:-translate-y-1 hover:bg-[var(--bg-card-light)]">
            <div className="mb-4 flex min-h-8 items-center gap-4">
              <p className="min-w-0 flex-1 text-left text-sm text-[var(--muted)]">
                <span className="bento-card__label border-none px-0 mb-0">01 / 04</span>
                <span className="opacity-50 mx-2">·</span>
                <span className="font-medium text-[var(--fg)]">Hardware Explorations</span>
                <span className="opacity-50 mx-2">—</span>
                <span>Iterative physical models of the delivery pop-up transformation.</span>
              </p>
            </div>
            <div className="relative">
              {/* Horizontal Snap Slideshow */}
              <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-6 pb-4">
                <div className="w-[80%] flex-none snap-center md:w-[60%]">
                  <div className="w-full aspect-[4/3] rounded-[var(--radius-md)] border border-[var(--line)] bg-[#f0f0f0] flex items-center justify-center relative overflow-hidden shadow-inner group">
                    <div className="absolute left-[60%] top-[25%] w-12 h-32 rounded-full bg-black/5 blur-sm mix-blend-overlay"></div>
                    <div className="absolute w-3/4 h-1/2 bg-white rounded-[var(--radius-lg)] shadow-xl border border-[var(--line)] transform -rotate-6 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"></div>
                  </div>
                </div>
                <div className="w-[80%] flex-none snap-center md:w-[60%]">
                  <div className="w-full aspect-[4/3] rounded-[var(--radius-md)] border border-[var(--line)] bg-[#f0f0f0] flex items-center justify-center relative overflow-hidden shadow-inner group">
                    <div className="absolute w-1/2 h-3/4 bg-[var(--accent)] rounded-[var(--radius-lg)] shadow-xl transform rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"></div>
                  </div>
                </div>
                <div className="w-[80%] flex-none snap-center md:w-[60%]">
                  <div className="w-full aspect-[4/3] rounded-[var(--radius-md)] border border-[var(--line)] bg-[#f0f0f0] flex items-center justify-center relative overflow-hidden shadow-inner group">
                    <div className="absolute w-2/3 h-2/3 bg-gray-800 rounded-[var(--radius-lg)] shadow-xl border border-black/5 transition-transform duration-500 group-hover:scale-105"></div>
                  </div>
                </div>
                <div className="w-[80%] flex-none snap-center md:w-[60%]">
                  <div className="w-full aspect-[4/3] rounded-[var(--radius-md)] border border-[var(--line)] bg-[#f0f0f0] flex items-center justify-center relative overflow-hidden shadow-inner group">
                    <div className="absolute w-1/3 h-2/3 bg-gray-300 rounded-full shadow-xl transform -rotate-12 border border-gray-400 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IMPACT */}
        <div id="sec-impact" className="pt-32 scroll-mt-24 border-t border-[var(--line)] mt-24">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="bento-card__label self-start">Impact / Results</span>
            <div className="p-8 border border-[var(--accent)] bg-[var(--accent)]/5 rounded-[var(--radius-lg)] shadow-sm transition-transform duration-400 hover:-translate-y-1 hover:bg-[var(--accent)]/10">
              <p className="text-2xl text-[var(--fg)] leading-relaxed font-medium">
                "The GLIDE prototype demonstrated a 40% increase in setup efficiency and a significant boost in customer engagement metrics during initial pilot tests."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
