/* ═══════════════════════════════════════════════════════════════
   js/home.js
   Page-specific logic for index.html.
   ═══════════════════════════════════════════════════════════════ */

'use strict';

(function () {

  const headline = document.getElementById('frameHeadline');
  const play = document.getElementById('framePlay');

  /* ─── ENTRANCE ANIMATION ─── */
  window.addEventListener('load', () => {
    // Reveal hero section
    const title = document.querySelector('.huge-title');
    const bottom = document.querySelector('.hero-info__bottom');
    if (title) {
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }
    if (bottom) {
      setTimeout(() => {
        bottom.style.opacity = '1';
        bottom.style.transform = 'translateY(0)';
      }, 200);
    }

    // Staggered reveal for bento grid items
    const bentoItems = document.querySelectorAll('.bento-item');
    bentoItems.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('is-visible');
      }, 400 + (index * 100));
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
