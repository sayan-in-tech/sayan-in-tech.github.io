/**
 * footer.js — Footer component.
 */

/**
 * @param {Object} site   - { email, emailHref, year, name }
 * @param {Array}  social - [{ label, href }]
 * @returns {string} HTML
 */
export function renderFooter(site, social) {
  const links = social.map(s =>
    `<li><a href="${s.href}" target="_blank" rel="noopener noreferrer">${s.label}</a></li>`
  ).join('\n        ');

  return `
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-contact">
        <p>Get in touch &mdash; <a href="${site.emailHref}" target="_blank" rel="noopener noreferrer">${site.email}</a></p>
      </div>
      <ul class="footer-links">
        ${links}
      </ul>
      <p class="footer-copy">&copy; ${site.year} ${site.name}</p>
    </div>
  </footer>`;
}
