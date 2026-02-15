/**
 * main.js — Application entry point.
 *
 * Imports all data and components, renders the page,
 * then initialises interactive behaviour.
 *
 * This is the ONLY script loaded by index.html (as type="module").
 */

import {
  site, social, navLinks as navData,
  about as aboutData, specialties, experience, education,
  skills, projects, certifications,
} from './data.js';

import { renderNav,            initNav }            from './components/nav.js';
import { renderHero }                               from './components/hero.js';
import { renderAbout }                              from './components/about.js';
import { renderExperience }                         from './components/experience.js';
import { renderSkills }                             from './components/skills.js';
import { renderProjects }                           from './components/projects.js';
import { renderCertifications }                     from './components/certifications.js';
import { renderFooter }                             from './components/footer.js';

/* ---- 1. Render ---- */

document.getElementById('app-nav').innerHTML    = renderNav(site, navData);
document.getElementById('app-hero').innerHTML   = renderHero(site, social);

const main = document.getElementById('main');
main.innerHTML = [
  renderAbout(aboutData, specialties),
  renderExperience(experience, education),
  renderSkills(skills),
  renderProjects(projects),
  renderCertifications(certifications),
].join('');

document.getElementById('app-footer').innerHTML = renderFooter(site, social);

/* ---- 2. Initialise behaviour ---- */

initNav();
