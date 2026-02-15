/**
 * hero.js — Hero / header component.
 */

import { icon } from '../icons.js';

/**
 * @param {Object} site   - { name, initials, role, tagline, resumeHref, credlyHref }
 * @param {Array}  social - [{ label, href, icon }]
 * @returns {string} HTML
 */
export function renderHero(site, social) {
  const socialItems = social.map(s => `
        <li>
          <a href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}">
            ${icon(s.icon)}
          </a>
        </li>`
  ).join('');

  return `
  <header class="hero" id="hero">
    <div class="container hero-inner">
      <div class="hero-avatar" aria-hidden="true">${site.initials}</div>
      <h1 class="hero-name">${site.name}</h1>
      <p class="hero-title">${site.role}</p>
      <p class="hero-subtitle">${site.tagline}</p>

      <div class="hero-actions">
        <a href="${site.resumeHref}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          ${icon('download', 16)}
          Download CV
        </a>
        <a href="${site.credlyHref}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
          Credly Profile
        </a>
      </div>

      <ul class="hero-social">
        ${socialItems}
      </ul>
    </div>
  </header>`;
}
