/* ═══════════════════════════════════════════════════════════════
   js/case-study.js — Maxfolio-style case study interactions
   ═══════════════════════════════════════════════════════════════ */

'use strict';

(function () {

  /* ── SCROLL PROGRESS ── */
  const bar = document.getElementById('csProgress');
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (docH > 0 ? (scrollTop / docH) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });

  /* ── THEME TOGGLE ── */
  const themeBtn = document.getElementById('themeToggle');
  const html = document.documentElement;
  const saved = localStorage.getItem('theme') || 'light';
  html.dataset.theme = saved;

  themeBtn && themeBtn.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = next;
    localStorage.setItem('theme', next);
  });

  /* ── SCROLL REVEAL ── */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));
  }

  /* ── NEXT PROJECT HOVER PARALLAX ── */
  const nextEl = document.querySelector('.cs-next');
  nextEl && nextEl.addEventListener('mousemove', (e) => {
    const rect = nextEl.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    const title = nextEl.querySelector('.cs-next-title');
    if (title) title.style.transform = `translate(${x * 12}px, ${y * 8}px)`;
  });
  nextEl && nextEl.addEventListener('mouseleave', () => {
    const title = nextEl.querySelector('.cs-next-title');
    if (title) title.style.transform = '';
  });

})();
