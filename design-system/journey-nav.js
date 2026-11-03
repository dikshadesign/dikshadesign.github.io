/**
 * ==============================================================================
 * DESIGN SYSTEM — PROJECT JOURNEY NAVIGATOR (SCRIPT)
 * Smooth Chapter Skipping · Real-Time Scroll Spy · Reading Progress
 * ==============================================================================
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initJourneyNav);

  function initJourneyNav() {
    const journeyNav = document.querySelector('.journey-top-bar, .journey-nav');
    const progressBar = document.querySelector('.journey-progress-bar');
    const pills = document.querySelectorAll('.journey-pill');
    const sideDockItems = document.querySelectorAll('.side-dock-item');
    const track = document.querySelector('.journey-track');

    if (!journeyNav && !progressBar && pills.length === 0) return;

    // 1. Reading Progress Bar & Sticky Header Shadow
    window.addEventListener('scroll', onScrollThrottled, { passive: true });
    
    let ticking = false;
    function onScrollThrottled() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    }

    function updateScrollProgress() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (progressBar && scrollHeight > 0) {
        const percent = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        progressBar.style.width = percent + '%';
      }

      if (journeyNav) {
        if (scrollTop > 40) {
          journeyNav.classList.add('is-stuck');
        } else {
          journeyNav.classList.remove('is-stuck');
        }
      }
    }

    // 2. Smooth Scroll on Click with Header Offset
    const navLinks = document.querySelectorAll('.journey-pill, .side-dock-link, .journey-skip-btn');
    navLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          const navOffset = journeyNav ? journeyNav.offsetHeight + 18 : 70;
          const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;

          window.scrollTo({
            top: Math.max(0, targetY),
            behavior: 'smooth'
          });

          // Optimistically update active state
          setActiveChapter(href.substring(1));

          // Push hash to history without jarring jump
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });

    // 3. Scroll Spy via IntersectionObserver or Fallback
    const sectionIds = Array.from(pills)
      .map((p) => p.getAttribute('href'))
      .filter((h) => h && h.startsWith('#'))
      .map((h) => h.substring(1));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if ('IntersectionObserver' in window && sections.length > 0) {
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Active when section enters upper-middle viewport
        threshold: [0, 0.2]
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveChapter(entry.target.id);
          }
        });
      }, observerOptions);

      sections.forEach((sec) => observer.observe(sec));
    }

    function setActiveChapter(targetId) {
      if (!targetId) return;

      // Update pills
      pills.forEach((pill) => {
        const href = pill.getAttribute('href');
        if (href === '#' + targetId) {
          pill.classList.add('active');
          // Center active pill in horizontal scroll track
          if (track) {
            const trackRect = track.getBoundingClientRect();
            const pillRect = pill.getBoundingClientRect();
            const offsetLeft = pillRect.left - trackRect.left - (trackRect.width / 2) + (pillRect.width / 2);
            track.scrollBy({ left: offsetLeft, behavior: 'smooth' });
          }
        } else {
          pill.classList.remove('active');
        }
      });

      // Update side dock items
      sideDockItems.forEach((item) => {
        const link = item.querySelector('.side-dock-link');
        if (link && link.getAttribute('href') === '#' + targetId) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }

    // Initialize progress on page load
    updateScrollProgress();
  }
})();
