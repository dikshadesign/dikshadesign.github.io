/* ═══════════════════════════════════════════════════════════════
   js/home.js — Bento Grid Theme interactions & Animations
   ═══════════════════════════════════════════════════════════════ */

'use strict';

(function () {

  /* ── CUSTOM CURSOR & MAGNETIC EFFECTS ── */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  
  if (cursor && follower && matchMedia('(pointer:fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    // Smooth follower animation loop
    function render() {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    // Hover states for links/buttons
    const hoverElements = document.querySelectorAll('a, button, .bento-card');
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

    // Magnetic Elements
    const magneticElements = document.querySelectorAll('.header__link, .btn--outline, .header__icon-link');
    magneticElements.forEach(el => {
      el.classList.add('magnetic');
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = `translate3d(0px, 0px, 0px)`;
      });
    });
  }

  /* ── SCROLL PARALLAX (Subtle Zoom) ── */
  const parallaxImages = document.querySelectorAll('.project-card__image-wrapper');
  
  if (parallaxImages.length) {
    function updateParallax() {
      const windowHeight = window.innerHeight;
      
      parallaxImages.forEach(img => {
        const rect = img.getBoundingClientRect();
        // Calculate how far the center of the image is from the center of the screen
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;
        const distanceFromCenter = elementCenter - screenCenter;
        
        // Normalize the distance (roughly -1 to 1 based on screen height)
        const normalized = distanceFromCenter / windowHeight;
        
        // Scale maps from 1.05 (bottom) to 0.95 (top) - very subtle
        // When scrolling down, element moves up (normalized goes from positive to negative)
        // We want it to zoom out as you scroll down, so scale decreases.
        let scale = 1 + (normalized * 0.05);
        
        // Clamp the scale to prevent extreme zooming
        scale = Math.max(0.95, Math.min(scale, 1.05));
        
        // We need to preserve the hover scale if the user is hovering.
        // We can use CSS variables to combine them, or just apply it directly.
        // The cleanest way in JS is applying the scale directly to an inner element, 
        // but since we only have the wrapper, we'll apply it directly and let CSS handle hover via specificity or child elements.
        // Let's set a CSS variable that CSS can use.
        img.style.setProperty('--scroll-scale', scale);
      });
      requestAnimationFrame(updateParallax);
    }
    requestAnimationFrame(updateParallax);
  }

  /* ── INITIAL LOAD CHOREOGRAPHY & TEXT REVEAL ── */
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle) {
    const text = heroTitle.innerText;
    heroTitle.innerHTML = ''; // clear original text
    
    // Split into characters
    const chars = text.split('');
    chars.forEach((char, index) => {
      const span = document.createElement('span');
      // preserve spaces
      if (char === ' ') {
        span.innerHTML = '&nbsp;';
      } else {
        span.innerText = char;
      }
      span.className = 'char';
      // Stagger each letter by 30ms
      span.style.animationDelay = `${index * 0.03}s`;
      heroTitle.appendChild(span);
    });

    // Calculate total duration of the title animation (last delay + animation duration)
    // Delay: chars.length * 0.03. Duration: 0.6s.
    const totalDuration = (chars.length * 30) + 600;
    
    // Wait for the title to mostly finish, then reveal the rest of the page
    setTimeout(() => {
      document.body.classList.add('is-loaded');
    }, totalDuration - 200); // Trigger slightly before the last letter completely stops
  } else {
    // Fallback if no title
    document.body.classList.add('is-loaded');
  }

  /* ── DARK / LIGHT THEME TOGGLE ── */
  const themeBtn = document.getElementById('themeToggle');
  const html = document.documentElement;
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
