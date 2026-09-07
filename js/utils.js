/* ═══════════════════════════════════════════════════════════════
   js/utils.js
   Shared math helpers, easing functions, RAF loop manager.
   Import before all other scripts.
   ═══════════════════════════════════════════════════════════════ */

'use strict';

window.Utils = (function () {

  /* ─── MATH ─── */
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function mapRange(value, inMin, inMax, outMin, outMax) {
    return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin);
  }

  function norm(value, min, max) {
    return (value - min) / (max - min);
  }

  /* ─── EASING ─── */
  function easeInOutQuart(t) {
    return t < 0.5
      ? 8 * t * t * t * t
      : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function easeInOutCirc(t) {
    return t < 0.5
      ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2
      : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;
  }

  /* ─── DOM HELPERS ─── */
  function qs(selector, parent = document) {
    return parent.querySelector(selector);
  }

  function qsa(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
  }

  /* ─── RAF LOOP MANAGER ─── */
  const _loops = new Map();
  let _rafId = null;
  let _isRunning = false;

  function _tick() {
    _loops.forEach((fn) => fn());
    _rafId = requestAnimationFrame(_tick);
  }

  function addLoop(key, fn) {
    _loops.set(key, fn);
    if (!_isRunning) {
      _isRunning = true;
      _rafId = requestAnimationFrame(_tick);
    }
  }

  function removeLoop(key) {
    _loops.delete(key);
    if (_loops.size === 0 && _rafId) {
      cancelAnimationFrame(_rafId);
      _isRunning = false;
    }
  }

  /* ─── SCROLL HELPERS ─── */
  function getScrollProgress(start, end) {
    const scrollY = window.scrollY;
    return clamp(norm(scrollY, start, end), 0, 1);
  }

  /* ─── EVENT DEBOUNCE ─── */
  function debounce(fn, delay = 150) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  /* ─── DETECT TOUCH ─── */
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  return {
    lerp,
    clamp,
    mapRange,
    norm,
    easeInOutQuart,
    easeOutExpo,
    easeOutQuart,
    easeInOutCirc,
    qs,
    qsa,
    addLoop,
    removeLoop,
    getScrollProgress,
    debounce,
    isTouchDevice,
  };

})();
