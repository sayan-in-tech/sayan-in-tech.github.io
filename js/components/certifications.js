/**
 * certifications.js — Certifications grid component.
 */

import { icon } from '../icons.js';

/**
 * @param {Array} certs - [{ name, category, year, href }]
 * @returns {string} HTML
 */
export function renderCertifications(certs) {
  const cards = certs.map((c, i) => `
          <a href="${c.href}" target="_blank" rel="noopener noreferrer" class="cert-card stagger" style="--i:${i}">
            <span class="cert-badge" aria-hidden="true">
              ${icon('badge')}
            </span>
            <div class="cert-info">
              <h3 class="cert-name">${c.name}</h3>
              <p class="cert-meta">${c.category} &middot; ${c.year}</p>
            </div>
          </a>`
  ).join('');

  return `
    <section class="section reveal" id="certifications">
      <div class="container">
        <h2 class="section-title">Certifications</h2>
        <div class="certs-grid">
          ${cards}
        </div>
      </div>
    </section>`;
}
