(function () {
  const root = document.documentElement;
  const toggle = document.querySelector('.site-nav-toggle');
  const panel = document.getElementById('site-nav-panel');

  if (!toggle || !panel) return;

  const closeMenu = function () {
    toggle.setAttribute('aria-expanded', 'false');
    panel.hidden = true;
    root.classList.remove('nav-open');
  };

  const openMenu = function () {
    toggle.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    root.classList.add('nav-open');
  };

  toggle.addEventListener('click', function () {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  panel.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 960px)').matches) {
      closeMenu();
    }
  });
})();
