(function () {
  'use strict';
  var PASS = '8962';
  var KEY = 'site_pwd';

  function isAuthed() {
    try {
      return sessionStorage.getItem(KEY) === PASS || localStorage.getItem(KEY) === PASS;
    } catch (e) {
      return false;
    }
  }

  if (isAuthed()) {
    document.documentElement.classList.remove('site-locked');
    return;
  }

  document.documentElement.classList.add('site-locked');

  function initGate() {
    if (document.getElementById('site-gate-overlay')) return;

    var overlay = document.createElement('div');
    overlay.id = 'site-gate-overlay';
    overlay.innerHTML =
      '<div class="site-gate-box">' +
        '<div style="font-size: 26px; margin-bottom: 12px;">🔒</div>' +
        '<h2 class="site-gate-title">Portfolio Protected</h2>' +
        '<p class="site-gate-sub">Enter password to view</p>' +
        '<form id="site-gate-form" class="site-gate-form" autocomplete="off">' +
          '<input type="password" id="site-gate-input" class="site-gate-input" placeholder="Password" autofocus autocomplete="off" />' +
          '<button type="submit" id="site-gate-btn" class="site-gate-btn">Enter →</button>' +
          '<div id="site-gate-error" class="site-gate-error" style="display:none;">Incorrect password</div>' +
        '</form>' +
      '</div>';

    document.body.appendChild(overlay);

    var form = document.getElementById('site-gate-form');
    var input = document.getElementById('site-gate-input');
    var error = document.getElementById('site-gate-error');

    setTimeout(function () {
      if (input) input.focus();
    }, 50);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var entered = (input.value || '').trim();
      if (entered === PASS) {
        try {
          sessionStorage.setItem(KEY, PASS);
          localStorage.setItem(KEY, PASS);
        } catch (err) {}
        document.documentElement.classList.remove('site-locked');
        overlay.remove();
      } else {
        error.style.display = 'block';
        input.value = '';
        input.classList.add('gate-shake');
        setTimeout(function () {
          input.classList.remove('gate-shake');
          input.focus();
        }, 400);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGate);
  } else {
    initGate();
  }
})();
