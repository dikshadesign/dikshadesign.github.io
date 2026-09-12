/* ═══════════════════════════════════════════════════════════════
   js/home.js — Bento Grid Theme interactions
   ═══════════════════════════════════════════════════════════════ */

'use strict';

(function () {

  /* ── CUSTOM CURSOR (Optional) ── */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');

  if (cursor && follower && matchMedia('(pointer:fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      // Add slight delay for follower
      setTimeout(() => {
        follower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }, 50);
    });
  }

  /* ── DARK / LIGHT THEME TOGGLE ── */
  const themeBtn = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Enforce dark theme as default for this design, but allow toggle if requested
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.dataset.theme = savedTheme;

  themeBtn && themeBtn.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = next;
    localStorage.setItem('theme', next);
  });

  /* ── SCROLL REVEAL (IntersectionObserver) ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
  }

})();
