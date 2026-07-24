/* ============================================================
   CCCC — Shared Navigation Logic
   ============================================================ */

(function () {
  // Dropdown toggle
  const btn = document.getElementById('nav-more-btn');
  const dd  = document.getElementById('nav-dropdown');

  if (btn && dd) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = dd.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
    });

    document.addEventListener('click', function () {
      dd.classList.remove('open');
      btn.classList.remove('open');
    });

    dd.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  // Mark current dropdown link as active
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('#nav-dropdown a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href && (href === currentPath || (currentPath === '' && href === '/'))) {
      a.classList.add('current');
    }
  });

  // Scroll-spy for in-page nav links (index page only)
  const secs = document.querySelectorAll('section[id]');
  if (secs.length) {
    window.addEventListener('scroll', function () {
      let cur = '';
      secs.forEach(function (s) {
        if (s.getBoundingClientRect().top <= 80) cur = s.id;
      });
      document.querySelectorAll('.nav-links a').forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
      });
    }, { passive: true });
  }

  // Reveal animation
  const ro = new IntersectionObserver(function (entries) {
    entries.forEach(function (x) {
      if (x.isIntersecting) x.target.classList.add('in');
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    ro.observe(el);
  });
})();
