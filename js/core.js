/* ═══════════════════════════════════════════════════════════════
   js/core.js
   Shared across ALL pages:
   - Custom cursor (dot + follower ring)
   - Navbar scroll state
   - Scroll-reveal IntersectionObserver ([data-reveal])
   - Page entrance fade-in
   ═══════════════════════════════════════════════════════════════ */

'use strict';

(function () {

  const { qs, qsa, lerp, isTouchDevice, debounce, addLoop } = window.Utils;

  /* ═════════════════════════════════════════
     1. CUSTOM CURSOR
     ═════════════════════════════════════════ */
  if (!isTouchDevice) {
    const cursor   = qs('.cursor');
    const follower = qs('.cursor-follower');

    let targetX = 0, targetY = 0;
    let followerX = 0, followerY = 0;
    let isOnDark = false;

    document.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      cursor.style.left = targetX + 'px';
      cursor.style.top  = targetY + 'px';
    });

    // Smooth follower via RAF
    addLoop('cursor', () => {
      followerX = lerp(followerX, targetX, 0.1);
      followerY = lerp(followerY, targetY, 0.1);
      follower.style.left = followerX + 'px';
      follower.style.top  = followerY + 'px';
    });

    // Hover states — attach to all interactive elements
    function bindCursorHover(el) {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor--hover');
        follower.classList.add('cursor-follower--hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor--hover');
        follower.classList.remove('cursor-follower--hover');
      });
    }

    function initCursorHovers() {
      qsa('a, button, .btn, .nav__link, .filter-btn, .play-circle, .project-row, .work-grid__item, .cs-next').forEach(bindCursorHover);
    }

    // Dark background cursor inversion
    window.Cursor = {
      setDark(on) {
        isOnDark = on;
        cursor.classList.toggle('cursor--dark', on);
        follower.classList.toggle('cursor-follower--dark', on);
      },
      bindHover: bindCursorHover,
      initHovers: initCursorHovers,
    };

    document.addEventListener('DOMContentLoaded', initCursorHovers);
  } else {
    // Touch: hide cursor elements
    document.querySelectorAll('.cursor, .cursor-follower').forEach(el => el.style.display = 'none');
    window.Cursor = { setDark() {}, bindHover() {}, initHovers() {} };
  }

  /* ═════════════════════════════════════════
     2. NAVBAR SCROLL STATE
     ═════════════════════════════════════════ */
  (function initNavbar() {
    const nav = qs('.nav');
    if (!nav) return;

    let lastScroll = 0;

    function updateNav() {
      const scrollY = window.scrollY;
      // On white pages, switch cursor at scroll threshold
      if (scrollY > 50) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
      lastScroll = scrollY;
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  })();

  /* ═════════════════════════════════════════
     3. SCROLL REVEAL (data-reveal)
     ═════════════════════════════════════════ */
  (function initReveal() {
    const revealEls   = qsa('[data-reveal], [data-reveal-stagger]');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px',
    });

    revealEls.forEach(el => observer.observe(el));

    // Expose for dynamically added elements
    window.RevealObserver = observer;
  })();

  /* ═════════════════════════════════════════
     4. PAGE ENTRANCE ANIMATION
     ═════════════════════════════════════════ */
  (function initPageEntrance() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    window.addEventListener('load', () => {
      requestAnimationFrame(() => {
        document.body.style.opacity = '1';
      });
    });

    // Prevent flash on back-forward cache
    window.addEventListener('pageshow', (e) => {
      if (e.persisted) document.body.style.opacity = '1';
    });
  })();

  /* ═════════════════════════════════════════
     5. PAGE TRANSITION LINKS
     ═════════════════════════════════════════ */
  (function initPageTransitions() {
    const overlay = qs('.page-overlay');
    if (!overlay) return;

    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;

      const href = link.getAttribute('href');
      // Only handle same-origin, non-hash, non-external links
      if (!href || href.startsWith('#') || href.startsWith('mailto:') ||
          href.startsWith('http') || link.target === '_blank') return;

      e.preventDefault();
      overlay.classList.add('active');

      setTimeout(() => {
        window.location.href = href;
      }, 380);
    });
  })();

})();
