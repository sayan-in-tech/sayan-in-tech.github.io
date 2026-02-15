/**
 * scrollReveal.js — Fade-in-on-scroll animation.
 *
 * Watches elements with `.reveal` class. When they enter the viewport,
 * adds `.is-visible` which triggers CSS transitions defined in utilities.css.
 *
 * Also supports stagger: child elements with `.stagger` and `--i` custom
 * property animate in sequence when the parent `.reveal` becomes visible.
 */

/** Call after DOM is populated. */
export function initScrollReveal() {
  /* Signal to CSS that JS is active (enables reveal styles) */
  document.documentElement.classList.add('has-js');

  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);   /* animate once */
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => observer.observe(el));
}
