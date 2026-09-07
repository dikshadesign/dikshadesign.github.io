/* ═══════════════════════════════════════════════════════════════
   js/work.js
   Work page: filter tabs + hover magnetic on thumbnails.
   ═══════════════════════════════════════════════════════════════ */

'use strict';

(function () {

  const { qsa, qs } = window.Utils;

  /* ─── FILTER TABS ─── */
  const filterBtns = qsa('.filter-btn');
  const gridItems  = qsa('.work-grid__item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Active state
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.dataset.filter;

      gridItems.forEach(item => {
        const category = item.dataset.category;
        const show = filter === 'all' || category === filter;

        if (show) {
          item.removeAttribute('data-hidden');
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          });
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(10px)';
          setTimeout(() => item.setAttribute('data-hidden', ''), 300);
        }
      });
    });
  });

  /* ─── MAGNETIC HOVER on thumbnails ─── */
  const thumbs = qsa('.work-grid__img');

  thumbs.forEach(thumb => {
    thumb.addEventListener('mousemove', (e) => {
      const rect = thumb.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 12;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 12;
      thumb.style.transform = `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.02)`;
    });

    thumb.addEventListener('mouseleave', () => {
      thumb.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
      thumb.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
      setTimeout(() => { thumb.style.transition = ''; }, 500);
    });
  });

  /* ─── SET DARK CURSOR ─── */
  window.Cursor.setDark(true);

})();
