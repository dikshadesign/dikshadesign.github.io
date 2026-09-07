/* ─────────────────────────────────────────────
   PORTFOLIO 2026 — script.js
   Scroll-driven expansion of black frame
   + Custom cursor + Intersection Observer
   ───────────────────────────────────────────── */

(function () {
  'use strict';

  // ─── DOM REFS ───
  const blackFrame     = document.getElementById('blackFrame');
  const framePlay      = document.getElementById('framePlay');
  const frameHeadline  = document.getElementById('frameHeadline');
  const heroTopText    = document.getElementById('heroTopText');
  const cursor         = document.getElementById('cursor');
  const cursorFollower = document.getElementById('cursorFollower');
  const projectBlocks  = document.querySelectorAll('.project-block');

  // ─── STATE ───
  let scrollProgress = 0;   // 0 → 1 during hero expansion phase
  let isExpanded     = false;
  let followerX = 0, followerY = 0;
  let targetX  = 0, targetY  = 0;
  let rafId;

  // ─────────────────────────────────────────
  // SCROLL → BLACK FRAME EXPANSION
  // ─────────────────────────────────────────
  const EXPANSION_START = 0;          // px from top to start expanding
  const EXPANSION_END   = window.innerHeight * 0.85; // px to reach full screen

  function onScroll() {
    const scrollY = window.scrollY;

    // ── Phase 1: Expand the black frame ──
    if (scrollY <= EXPANSION_END) {
      const t = Math.max(0, Math.min(1, scrollY / EXPANSION_END));
      scrollProgress = t;
      applyFrameScale(t);
      isExpanded = false;
      blackFrame.classList.remove('expanded');
    } else {
      // Fully expanded
      if (!isExpanded) {
        isExpanded = true;
        blackFrame.classList.add('expanded');
      }
    }

    // ── Fade hero eyebrow ──
    heroTopText.style.opacity = Math.max(0, 1 - scrollProgress * 3);

    // ── Reveal headline inside frame ──
    if (scrollProgress > 0.6) {
      framePlay.classList.add('hidden');
      frameHeadline.classList.add('visible');
    } else {
      framePlay.classList.remove('hidden');
      frameHeadline.classList.remove('visible');
    }

    // ── Navbar cursor dark ──
    if (scrollY > EXPANSION_END * 0.5) {
      document.body.classList.add('on-dark');
    } else {
      document.body.classList.remove('on-dark');
    }
  }

  function applyFrameScale(t) {
    // Interpolate from initial compact size → full viewport
    const ease = easeInOutQuart(t);

    // Initial: 56vw × 58vh → 100vw × 100vh
    const initW  = window.innerWidth  * 0.56;
    const initH  = window.innerHeight * 0.58;
    const finalW = window.innerWidth;
    const finalH = window.innerHeight;

    const w = lerp(initW, finalW, ease);
    const h = lerp(initH, finalH, ease);
    const r = lerp(12, 0, ease);   // border-radius

    blackFrame.style.width        = w + 'px';
    blackFrame.style.height       = h + 'px';
    blackFrame.style.borderRadius = r + 'px';

    // Keep centered during expansion
    blackFrame.style.top    = '50%';
    blackFrame.style.left   = '50%';
    blackFrame.style.transform = 'translate(-50%, -50%)';
  }

  // ─────────────────────────────────────────
  // INTERSECTION OBSERVER — Project blocks
  // ─────────────────────────────────────────
  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        projectObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  projectBlocks.forEach((block) => projectObserver.observe(block));

  // ─────────────────────────────────────────
  // CUSTOM CURSOR
  // ─────────────────────────────────────────
  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    cursor.style.left = targetX + 'px';
    cursor.style.top  = targetY + 'px';
  });

  function animateCursor() {
    followerX += (targetX - followerX) * 0.1;
    followerY += (targetY - followerY) * 0.1;
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top  = followerY + 'px';
    rafId = requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover states
  const hoverEls = document.querySelectorAll('a, span.nav-link, .view-btn, .frame-play, .play-circle');
  hoverEls.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      cursorFollower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursorFollower.classList.remove('hover');
    });
  });

  // ─────────────────────────────────────────
  // SCROLL LISTENER
  // ─────────────────────────────────────────
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    // Recalculate on resize
    onScroll();
  });

  // ─────────────────────────────────────────
  // INITIAL PAINT
  // ─────────────────────────────────────────
  onScroll(); // Run once on load to set initial state

  // ─────────────────────────────────────────
  // INTRO ANIMATION on page load
  // ─────────────────────────────────────────
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);

    // Subtle entrance: scale up the frame from slightly smaller
    blackFrame.style.transition = 'width 0.9s cubic-bezier(0.16,1,0.3,1), height 0.9s cubic-bezier(0.16,1,0.3,1), border-radius 0.9s ease';
    blackFrame.style.opacity = '0';
    blackFrame.style.transform = 'translate(-50%, -50%) scale(0.92)';

    requestAnimationFrame(() => {
      setTimeout(() => {
        blackFrame.style.opacity = '1';
        blackFrame.style.transform = 'translate(-50%, -50%) scale(1)';
        blackFrame.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)';

        setTimeout(() => {
          // Restore scroll-driven transition
          blackFrame.style.transition = '';
        }, 900);
      }, 200);
    });
  });

  // ─────────────────────────────────────────
  // HELPER FUNCTIONS
  // ─────────────────────────────────────────
  function lerp(a, b, t) { return a + (b - a) * t; }

  function easeInOutQuart(t) {
    return t < 0.5
      ? 8 * t * t * t * t
      : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  // ─────────────────────────────────────────
  // SCROLL LOCK PREVENTION (optional debug)
  // ─────────────────────────────────────────
  // Page starts at top on load
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

})();
