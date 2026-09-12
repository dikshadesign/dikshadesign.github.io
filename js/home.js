/* ═══════════════════════════════════════════════════════════════
   js/home.js — Maxfolio-inspired portfolio
   Scroll progress, dark/light toggle, mobile menu, scroll reveal
   ═══════════════════════════════════════════════════════════════ */

'use strict';

(function () {

  /* ── SCROLL PROGRESS BAR ── */
  const progressBar = document.getElementById('progressBar');
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });

  /* ── DARK / LIGHT THEME TOGGLE ── */
  const themeBtn = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Persist preference
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.dataset.theme = savedTheme;

  themeBtn && themeBtn.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = next;
    localStorage.setItem('theme', next);
  });

  /* ── MOBILE MENU ── */
  const menuBtn = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const iconMenu  = menuBtn && menuBtn.querySelector('.icon-menu');
  const iconClose = menuBtn && menuBtn.querySelector('.icon-close');
  let menuOpen = false;

  window.closeMenu = function () {
    menuOpen = false;
    if (navLinks) navLinks.classList.remove('open');
    if (iconMenu)  iconMenu.style.display  = '';
    if (iconClose) iconClose.style.display = 'none';
  };

  menuBtn && menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (navLinks) navLinks.classList.toggle('open', menuOpen);
    if (iconMenu)  iconMenu.style.display  = menuOpen ? 'none' : '';
    if (iconClose) iconClose.style.display = menuOpen ? '' : 'none';
  });

  /* ── SCROLL REVEAL (IntersectionObserver) ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings that appear together
          const siblings = entry.target.parentElement.querySelectorAll('.reveal');
          let delay = 0;
          siblings.forEach((sib, idx) => {
            if (sib === entry.target) delay = idx * 0.04;
          });
          entry.target.style.transitionDelay = delay + 's';
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    reveals.forEach(el => observer.observe(el));
  }

})();
