/**
 * experience.js — Experience timeline + Education component.
 */

/**
 * @param {Array} experience - [{ role, company, date }]
 * @param {Array} education  - [{ school, degree, date }]
 * @returns {string} HTML
 */
export function renderExperience(experience, education) {
  const timelineItems = experience.map(e => `
          <div class="timeline-item">
            <div class="timeline-dot" aria-hidden="true"></div>
            <div class="timeline-content">
              <h3 class="timeline-role">${e.role}</h3>
              <p class="timeline-company">${e.company}</p>
              <time class="timeline-date">${e.date}</time>
            </div>
          </div>`
  ).join('');

  const eduCards = education.map(e => `
        <div class="education-card">
          <h4 class="education-school">${e.school}</h4>
          <p class="education-degree">${e.degree}</p>
          <time class="education-date">${e.date}</time>
        </div>`
  ).join('');

  return `
    <section class="section section-alt" id="experience">
      <div class="container">
        <h2 class="section-title">Experience</h2>

        <div class="timeline">
          ${timelineItems}
        </div>

        <h3 class="subsection-title" style="margin-top:3rem;">Education</h3>
        ${eduCards}
      </div>
    </section>`;
}
