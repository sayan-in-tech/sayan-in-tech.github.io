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
  <nav class="nav" id="nav" aria-label="Primary">
    <div class="nav-inner container">
      <a href="#hero" class="nav-brand">${site.name}</a>

      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="nav-links">
        <span class="hamburger"></span>
      </button>

      <ul class="nav-links" id="nav-links">
            ${items}
      </ul>
    </div>
  </nav>`;
}

/** Attach toggle, close-on-click, scroll-spy, and sticky shadow. */
export function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  const nav = document.getElementById('nav');
  const navLinkItems = document.querySelectorAll('.nav-link');

  /* ---- Mobile hamburger toggle ---- */
  if (toggle && links) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      links.classList.remove('open');
    };

    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      links.classList.toggle('open');
    });

    links.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', (event) => {
      if (!links.classList.contains('open')) return;
      if (event.target instanceof Element && !event.target.closest('.nav-inner')) {
        closeMenu();
      }
    });
  }

  /* ---- Scroll spy ---- */
  const sections = document.querySelectorAll('.section[id]');
  const allLinks = navLinkItems;

  if (sections.length && allLinks.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          allLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-25% 0px -58% 0px', threshold: 0.1 });

    sections.forEach(s => observer.observe(s));
  }

  /* ---- Sticky nav shadow ---- */
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
