/**
 * about.js — About Me section component.
 */

import { icon } from '../icons.js';

/**
 * @param {string[]} paragraphs  - About text paragraphs
 * @param {Array}    specialties - [{ name, desc, icon }]
 * @returns {string} HTML
 */
export function renderAbout(paragraphs, specialties) {
  const textBlocks = paragraphs
    .map(p => `<p>${p}</p>`)
    .join('\n            ');

  const cards = specialties.map(s => `
          <div class="specialty-card">
            <div class="specialty-icon" aria-hidden="true">
              ${icon(s.icon)}
            </div>
            <h4 class="specialty-name">${s.name}</h4>
            <p class="specialty-desc">${s.desc}</p>
          </div>`
  ).join('');

  return `
    <section class="section" id="about">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="about-text">
            ${textBlocks}
          </div>

          <h3 class="subsection-title">What I Do</h3>
          <div class="specialties-grid">
            ${cards}
          </div>
        </div>
      </div>
    </section>`;
}
