/**
 * skills.js — Skills section component.
 */

/**
 * @param {Object} skills - { "Category Name": ["Skill", ...], ... }
 * @returns {string} HTML
 */
export function renderSkills(skills) {
  const groups = Object.entries(skills).map(([category, items]) => {
    const pills = items.map(s => `<li class="pill">${s}</li>`).join('\n              ');

    return `
        <div class="skills-group">
          <h3 class="skills-category">${category}</h3>
          <ul class="pill-list">
              ${pills}
          </ul>
        </div>`;
  }).join('');

  return `
    <section class="section" id="skills">
      <div class="container">
        <h2 class="section-title">Skills</h2>
        ${groups}
      </div>
    </section>`;
}
