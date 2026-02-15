/**
 * effects.js — High-polish motion and interaction system.
 */

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function initScrollProgress() {
  const progress = document.querySelector('.scroll-progress');
  if (!progress) return;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    progress.style.transform = `scaleX(${ratio})`;
  };

  update();
  window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  window.addEventListener('resize', update);
}

function initSmoothAnchorScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  if (!links.length) return;

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href.length < 2) return;

      const target = document.querySelector(href);
      if (!(target instanceof HTMLElement)) return;

      event.preventDefault();
      const navHeight = document.getElementById('nav')?.offsetHeight ?? 0;
      const y = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

      window.scrollTo({
        top: Math.max(y, 0),
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      });

      history.pushState(null, '', href);
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
}

function initHeroParallax() {
  if (prefersReducedMotion()) return;

  const hero = document.querySelector('.hero');
  const layer = document.querySelector('.hero-parallax');
  if (!(hero instanceof HTMLElement) || !(layer instanceof HTMLElement)) return;

  const update = () => {
    const offset = Math.min(window.scrollY, 420);
    layer.style.transform = `translate3d(0, ${offset * 0.16}px, 0)`;
  };

  update();
  window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
}

function initCustomCursor() {
  if (prefersReducedMotion()) return;
  if (window.matchMedia('(hover: none)').matches) return;

  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!(dot instanceof HTMLElement) || !(ring instanceof HTMLElement)) return;

  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let ringX = pointerX;
  let ringY = pointerY;

  const movePointer = (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
  };

  const animateRing = () => {
    ringX += (pointerX - ringX) * 0.17;
    ringY += (pointerY - ringY) * 0.17;
    const scale = ring.classList.contains('is-active') ? 1.28 : 1;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;
    window.requestAnimationFrame(animateRing);
  };

  const activate = () => {
    dot.classList.add('is-visible');
    ring.classList.add('is-visible');
  };

  const deactivate = () => {
    dot.classList.remove('is-visible');
    ring.classList.remove('is-visible');
  };

  document.addEventListener('mousemove', (event) => {
    movePointer(event);
    activate();
  });
  window.addEventListener('mouseout', (event) => {
    if (!event.relatedTarget) deactivate();
  });
  document.querySelectorAll('a, button, .project-card, .cert-card, .specialty-card').forEach((node) => {
    node.addEventListener('mouseenter', () => ring.classList.add('is-active'));
    node.addEventListener('mouseleave', () => ring.classList.remove('is-active'));
  });

  activate();
  animateRing();
}

function initPageTransition() {
  const overlay = document.querySelector('.page-transition');
  if (!(overlay instanceof HTMLElement)) return;
  if (prefersReducedMotion()) {
    overlay.remove();
    return;
  }

  requestAnimationFrame(() => {
    overlay.classList.add('is-ready');
  });
}

export function initUiEffects() {
  initPageTransition();
  initScrollProgress();
  initSmoothAnchorScroll();
  initHeroParallax();
  initCustomCursor();
}
