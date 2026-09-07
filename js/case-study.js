/* ═══════════════════════════════════════════════════════════════
   js/case-study.js
   Case study pages: scroll progress bar + section parallax.
   ═══════════════════════════════════════════════════════════════ */

'use strict';

(function () {

  const { qs } = window.Utils;

  /* ─── SCROLL PROGRESS BAR ─── */
  const progressBar = qs('.cs-progress-bar');

  function updateProgress() {
    if (!progressBar) return;
    const scrollY   = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress  = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ─── DARK CURSOR ─── */
  window.Cursor.setDark(true);

})();
