/* ═══════════════════════════════════════════════════════════════
   js/home.js
   Page-specific logic for index.html.
   ═══════════════════════════════════════════════════════════════ */

'use strict';

(function () {

  const headline = document.getElementById('frameHeadline');
  const play = document.getElementById('framePlay');

  /* ─── FRAME ENTRY ANIMATION ─── */
  window.addEventListener('load', () => {
    if (headline) headline.classList.add('is-visible');
    
    // Add subtle entry animation for hero elements
    const elements = document.querySelectorAll('.hero-ui-element');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 500 + (index * 150));
    });
  });

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

  /* ─── CURSOR UPDATE ─── */
  window.addEventListener('scroll', () => {
    const heroHeight = window.innerHeight;
    // Set dark cursor when scrolled past the black hero section
    window.Cursor.setDark(window.scrollY > heroHeight - 100);
  }, { passive: true });

})();
