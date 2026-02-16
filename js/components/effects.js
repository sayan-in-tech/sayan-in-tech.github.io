/**
 * effects.js — High-polish motion and interaction system.
 */

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const HELLO_LOADER_SESSION_KEY = 'hello-loader-shown';
const HELLO_GREETINGS = [
  'Hello',
  'Hey',
  'Hola',
  'Bonjour',
  'Hallo',
  'Ciao',
  'Namaste',
  'নমস্কার',
  'नमस्ते',
  'こんにちは',
  '안녕하세요',
  '你好',
  'مرحبًا',
  'வணக்கம்',
  'నమస్కారం',
];
const HELLO_STEP_MS = 210;
const HELLO_FINAL_HOLD_MS = 680;
const HELLO_SAFETY_MS = 9000;

function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function readSessionFlag(key) {
  try {
    return window.sessionStorage.getItem(key) === 'true';
  } catch {
    return false;
  }
}

function writeSessionFlag(key, value) {
  try {
    window.sessionStorage.setItem(key, value ? 'true' : 'false');
  } catch {
    // Ignore storage errors in restricted browsing modes.
  }
}

async function initHelloLoader() {
  const loader = document.querySelector('.hello-loader');
  const text = loader?.querySelector('.hello-loader__text');
  if (!(loader instanceof HTMLElement) || !(text instanceof HTMLElement)) return;

  if (readSessionFlag(HELLO_LOADER_SESSION_KEY)) {
    loader.remove();
    return;
  }

  document.body.classList.add('is-loader-active');

  const finish = () => {
    loader.classList.add('is-leaving');
    writeSessionFlag(HELLO_LOADER_SESSION_KEY, true);
    window.setTimeout(() => {
      document.body.classList.remove('is-loader-active');
      loader.remove();
    }, 420);
  };

  if (prefersReducedMotion()) {
    text.textContent = 'Hello';
    text.classList.add('is-visible');
    window.setTimeout(finish, 240);
    return;
  }

  window.setTimeout(finish, HELLO_SAFETY_MS);

  for (const greeting of HELLO_GREETINGS) {
    text.classList.remove('is-visible');
    await wait(40);
    text.textContent = greeting;
    requestAnimationFrame(() => text.classList.add('is-visible'));
    await wait(HELLO_STEP_MS);
  }

  text.classList.remove('is-visible');
  await wait(85);
  text.textContent = "I'm Sayan";
  loader.classList.add('is-final');
  requestAnimationFrame(() => text.classList.add('is-visible'));
  await wait(HELLO_FINAL_HOLD_MS);

  finish();
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
  initHelloLoader();
  initPageTransition();
  initScrollProgress();
  initSmoothAnchorScroll();
  initHeroParallax();
  initCustomCursor();
}
