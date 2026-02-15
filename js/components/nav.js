/**
 * nav.js — Navigation bar component.
 *
 * Exports:
 *   renderNav()  — returns HTML string for the sticky nav
 *   initNav()    — attaches event listeners (call after DOM insert)
 */

/**
 * @param {Object}   site     - { name }
 * @param {Array}    links    - [{ label, href }]
 * @returns {string} HTML
 */
export function renderNav(site, links) {
  const items = links.map(l =>
    `<li><a href="${l.href}" class="nav-link">${l.label}</a></li>`
  ).join('\n            ');

  return `
  <nav class="nav" id="nav">
    <div class="nav-inner container">
      <a href="#hero" class="nav-brand">${site.name}</a>

      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span class="hamburger"></span>
      </button>

      <ul class="nav-links">
            ${items}
      </ul>
    </div>
  </nav>`;
}

/** Attach toggle, close-on-click, scroll-spy, and sticky shadow. */
export function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');

  /* ---- Mobile hamburger toggle ---- */
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      links.classList.toggle('open');
    });

    links.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        links.classList.remove('open');
      });
    });
  }

  /* ---- Scroll spy ---- */
  const sections = document.querySelectorAll('.section[id]');
  const allLinks = document.querySelectorAll('.nav-link');

  if (sections.length && allLinks.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          allLinks.forEach(l =>
            l.classList.toggle('active', l.getAttribute('href') === '#' + id)
          );
        }
      });
    }, { rootMargin: '-20% 0px -75% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
  }

  /* ---- Sticky nav shadow ---- */
  const nav = document.getElementById('nav');
  if (nav) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          nav.classList.toggle('scrolled', window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
}
