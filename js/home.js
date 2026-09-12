/* ═══════════════════════════════════════════════════════════════
   js/home.js — Framer Motion Physics Integration
   ═══════════════════════════════════════════════════════════════ */

import { animate, stagger, spring, inView } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

(function () {
  
  /* ── 1. CUSTOM CURSOR & MAGNETIC PHYSICS ── */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  
  if (cursor && follower && matchMedia('(pointer:fine)').matches) {
    let mouseX = 0, mouseY = 0;
    
    // Instead of linear interpolation, we use spring for the follower
    // But for mousemove, requestAnimationFrame is smoother.
    // Motion handles animations, but for constant tracking, a simple lerp is actually better for performance than continuous spring recalculations,
    // however, the user wants exact Framer feel. In Framer, cursor followers use a high-damping spring.
    let followerX = 0, followerY = 0;
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    function renderCursor() {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Hover states for links/buttons
    const hoverElements = document.querySelectorAll('a, button, .bento-card, .project-card');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor--hover');
        follower.classList.add('cursor-follower--hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor--hover');
        follower.classList.remove('cursor-follower--hover');
      });
    });

    // Magnetic Elements with Spring Physics
    const magneticElements = document.querySelectorAll('.header__link, .btn--outline, .header__icon-link');
    magneticElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        animate(el, { x: x * 0.4, y: y * 0.4 }, { type: spring, stiffness: 300, damping: 20 });
      });
      el.addEventListener('mouseleave', () => {
        animate(el, { x: 0, y: 0 }, { type: spring, stiffness: 300, damping: 15 });
      });
    });
  }

  /* ── 2. SCROLL PARALLAX (Subtle Zoom) ── */
  const parallaxImages = document.querySelectorAll('.project-card__image-inner');
  if (parallaxImages.length) {
    function updateParallax() {
      const windowHeight = window.innerHeight;
      document.querySelectorAll('.project-card__image-wrapper').forEach((wrapper, i) => {
        const rect = wrapper.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;
        const distanceFromCenter = elementCenter - screenCenter;
        const normalized = distanceFromCenter / windowHeight;
        let scale = 1 + (normalized * 0.05);
        scale = Math.max(0.95, Math.min(scale, 1.05));
        
        // We set the CSS variable, CSS hover state multiplies it
        parallaxImages[i].style.setProperty('--scroll-scale', scale);
      });
      requestAnimationFrame(updateParallax);
    }
    requestAnimationFrame(updateParallax);
  }

  /* ── 3. CHOREOGRAPHED PAGE LOAD (Framer Physics) ── */
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle) {
    const text = heroTitle.innerText;
    heroTitle.innerHTML = ''; 
    
    const chars = text.split('');
    chars.forEach((char) => {
      const span = document.createElement('span');
      span.innerHTML = char === ' ' ? '&nbsp;' : char;
      span.className = 'char';
      heroTitle.appendChild(span);
    });

    // 1. Pure opacity stagger — letters fade in from nothing, no movement
    animate('.char', 
      { opacity: [0, 1] },
      { 
        duration: 1.6,
        easing: [0.25, 0.1, 0.25, 1],
        delay: stagger(0.05),
      }
    );

    // Calculate when the last letter finishes: (charCount × staggerDelay + duration) × 1000ms
    const totalRevealMs = (chars.length * 0.05 + 1.6) * 1000;

    // 2. After title finishes, reveal the rest of the page
    setTimeout(() => {
      animate(
        ['.header', '.hero__bottom', '.projects', '.bento', '.cta', '.footer'],
        { opacity: [0, 1], y: [15, 0] },
        { 
          duration: 0.9,
          easing: [0.22, 1, 0.36, 1],
          delay: stagger(0.1)
        }
      );
    }, totalRevealMs - 300); // trigger slightly before last letter fully fades in
  }

  /* ── 4. SCROLL REVEAL (inView) ── */
  // Use Motion's inView for items that appear as you scroll down
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    inView(el, (info) => {
      animate(el, 
        { opacity: [0, 1], y: [30, 0] }, 
        { type: spring, stiffness: 100, damping: 20 }
      );
    }, { margin: "0px 0px -50px 0px" });
  });

  /* ── DARK / LIGHT THEME TOGGLE ── */
  const themeBtn = document.getElementById('themeToggle');
  const html = document.documentElement;
  html.dataset.theme = localStorage.getItem('theme') || 'dark';

  themeBtn && themeBtn.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = next;
    localStorage.setItem('theme', next);
  });

})();
