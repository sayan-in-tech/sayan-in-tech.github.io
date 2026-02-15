/**
 * skills.js — Skills section component.
 */

/**
 * @param {Object} skills - { "Category Name": ["Skill", ...], ... }
 * @returns {string} HTML
 */
export function renderSkills(skills) {
  let pillIndex = 0;

  const groups = Object.entries(skills).map(([category, items]) => {
    const pills = items.map(s => {
      const html = `<li class="pill stagger" style="--i:${pillIndex}">${s}</li>`;
      pillIndex++;
      return html;
    }).join('\n              ');

    return `
        <div class="skills-group">
          <h3 class="skills-category">${category}</h3>
          <ul class="pill-list">
              ${pills}
          </ul>
        </div>`;
  }).join('');

  return `
    <section class="section reveal" id="skills">
      <div class="container">
        <h2 class="section-title">Skills</h2>
        ${groups}
      </div>
    </section>`;
}
