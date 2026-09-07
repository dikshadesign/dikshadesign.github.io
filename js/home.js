/* ═══════════════════════════════════════════════════════════════
   js/home.js
   Scroll-driven black frame expansion logic.
   Depends on: utils.js, core.js
   ═══════════════════════════════════════════════════════════════ */

'use strict';

(function () {

  const { clamp, easeInOutQuart, addLoop, getScrollProgress } = window.Utils;

  const frame     = document.getElementById('blackFrame');
  const play      = document.getElementById('framePlay');
  const headline  = document.getElementById('frameHeadline');
  const eyebrow   = document.getElementById('heroEyebrow');

  if (!frame) return;

  /* ─── CONFIG ─── */
  const EXPAND_END = window.innerHeight * 0.85;  // px from top to reach full screen

  /* ─── STATE ─── */
  let prevScrollY = -1;
  let isFullscreen = false;

  /* ─── FRAME ENTRY ANIMATION ─── */
  window.addEventListener('load', () => {
    frame.style.transition = 'opacity 0.8s ease, transform 0.9s cubic-bezier(0.16,1,0.3,1)';
    frame.style.opacity = '0';
    frame.style.transform = 'translate(-50%, -50%) scale(0.9)';

    requestAnimationFrame(() => {
      setTimeout(() => {
        frame.style.opacity = '1';
        frame.style.transform = 'translate(-50%, -50%) scale(1)';

        // Release transition control to scroll
        setTimeout(() => {
          frame.style.transition = '';
          frame.style.willChange = 'width, height, border-radius, opacity, transform';
        }, 950);
      }, 220);
    });
  });

  /* ─── MAIN UPDATE FUNCTION ─── */
  function updateFrame() {
    const scrollY = window.scrollY;
    if (scrollY === prevScrollY) return;
    prevScrollY = scrollY;

    const t = clamp(scrollY / EXPAND_END, 0, 1);
    const ease = easeInOutQuart(t);

    /* ── Phase A: expand (t = 0→1) ── */
    if (t < 1) {
      if (isFullscreen) {
        isFullscreen = false;
        frame.classList.remove('is-expanded');
        frame.style.top       = '50%';
        frame.style.left      = '50%';
        frame.style.transform = 'translate(-50%, -50%)';
      }

      const initW  = window.innerWidth  * 0.56;
      const initH  = window.innerHeight * 0.58;
      const finalW = window.innerWidth;
      const finalH = window.innerHeight;

      const w = initW  + (finalW - initW)  * ease;
      const h = initH  + (finalH - initH)  * ease;
      const r = 20     * (1 - ease);         // border-radius px

      frame.style.width        = w + 'px';
      frame.style.height       = h + 'px';
      frame.style.borderRadius = r + 'px';

    } else {
      /* ── Phase B: fully expanded ── */
      if (!isFullscreen) {
        isFullscreen = true;
        frame.classList.add('is-expanded');
        frame.style.width = frame.style.height = '';
        frame.style.borderRadius = '';
        frame.style.transform = '';
      }
    }

    /* ── Eyebrow fade ── */
    if (eyebrow) {
      eyebrow.style.opacity = Math.max(0, 1 - t * 4).toString();
    }

    /* ── Play → Headline swap ── */
    if (t > 0.55) {
      play && play.classList.add('is-hidden');
      headline && headline.classList.add('is-visible');
    } else {
      play && play.classList.remove('is-hidden');
      headline && headline.classList.remove('is-visible');
    }

    /* ── Dark cursor once bg turns black ── */
    window.Cursor.setDark(t > 0.4);
  }

  /* ─── PROJECT ROW REVEAL ─── */
  const projectRows = document.querySelectorAll('.project-row');
  const rowObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        rowObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  projectRows.forEach(row => rowObserver.observe(row));

  /* ─── SCROLL LISTENER ─── */
  window.addEventListener('scroll', updateFrame, { passive: true });

  /* ─── RESIZE ─── */
  window.addEventListener('resize', () => {
    updateFrame();
  });

  /* ─── INITIAL CALL ─── */
  updateFrame();

  // Reset scroll position on page load
  if (history.scrollRestoration) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

})();
