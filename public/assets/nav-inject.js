/* ============================================================
   CCCC — Nav Injection
   Each page calls: injectNav({ page: 'updates' })
   page values: 'home' | 'updates' | 'equipping' | 'resources' | 'support'
   ============================================================ */

function injectNav(opts) {
  const page = (opts && opts.page) || 'home';

  // In-page section links — only shown on home
  const homeLinks = page === 'home' ? `
    <ul class="nav-links" id="navlinks">
      <li><a href="#executive">Summary</a></li>
      <li><a href="#foundations">Foundations</a></li>
      <li><a href="#theological">Convictions</a></li>
      <li><a href="#discipleship">Discipleship</a></li>
      <li><a href="#livelihood">Livelihood</a></li>
      <li><a href="#school">School</a></li>
      <li><a href="#structure">Structure</a></li>
      <li><a href="#milestones">Milestones</a></li>
      <li><a href="#sending">Sending</a></li>
      <li><a href="#scripture-index">Index</a></li>
    </ul>` : `<ul class="nav-links"></ul>`;

  const ddItems = [
    { href: '/updates',   icon: '✦', label: 'Updates',   sub: 'Messages, reports & testimonies' },
    { href: '/equipping', icon: '✦', label: 'Equipping', sub: 'Witnesses course' },
    { href: '/resources', icon: '✦', label: 'Resources', sub: 'Downloads & links' },
    { href: '/support',   icon: '✦', label: 'Support',   sub: 'Contact & give' },
  ];

  const ddHtml = ddItems.map(function (item) {
    const cur = ('/' + page === item.href) ? ' class="current"' : '';
    return `<a href="${item.href}"${cur}>
      <span class="dd-icon">${item.icon}</span>
      <span class="dd-label">
        ${item.label}
        <span class="dd-sub">${item.sub}</span>
      </span>
    </a>`;
  }).join('');

  const navHTML = `
<nav id="nav" aria-label="Main navigation">
  <a href="/" class="nav-home" aria-label="CCCC Home">
    <img src="/assets/cccc-logo.png" alt="Christ-Centered Community Church logo">
  </a>
  <div class="nav-scroll">
    ${homeLinks}
  </div>
  <div class="nav-more">
    <button class="nav-more-btn" id="nav-more-btn" aria-haspopup="true" aria-expanded="false">
      Updates &amp; More
      <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    <div class="nav-dropdown" id="nav-dropdown" role="menu">
      ${ddHtml}
    </div>
  </div>
</nav>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
}
