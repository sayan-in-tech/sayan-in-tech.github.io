/**
 * projects.js — Projects grid component.
 */

import { icon } from '../icons.js';

/**
 * @param {Array} projects - [{ name, href, initial, hue }]
 * @returns {string} HTML
 */
export function renderProjects(projects) {
  const cards = projects.map(p => `
          <a href="${p.href}" target="_blank" rel="noopener noreferrer" class="project-card">
            <div class="project-thumb" data-initial="${p.initial}" style="--card-hue:${p.hue}"></div>
            <div class="project-info">
              <h3 class="project-name">${p.name}</h3>
              <span class="project-link-hint">View on GitHub
                ${icon('externalLink')}
              </span>
            </div>
          </a>`
  ).join('');

  return `
    <section class="section section-alt" id="projects">
      <div class="container">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
          ${cards}
        </div>
      </div>
    </section>`;
}
