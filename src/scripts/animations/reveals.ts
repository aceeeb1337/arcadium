import { gsap, ScrollTrigger } from '../core/gsap-setup';
import { prefersReducedMotion } from '../utils/breakpoints';

function initReveal(el: HTMLElement): void {
  if (prefersReducedMotion()) return;

  gsap.from(el, {
    y: 50,
    opacity: 0,
    duration: 0.9,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 88%',
      toggleActions: 'play none none reverse',
    },
  });
}

function initRevealGroup(container: HTMLElement): void {
  if (prefersReducedMotion()) return;

  const children = container.querySelectorAll<HTMLElement>(
    '.platform-card, .spec-mobile-item, .gallery-item, .stat-item'
  );

  if (children.length === 0) {
    initReveal(container);
    return;
  }

  gsap.from(Array.from(children), {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: container,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  });
}

function initAllReveal(): void {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    if (el.classList.contains('platforms-grid') || el.classList.contains('specs-mobile')) {
      initRevealGroup(el);
    } else {
      initReveal(el);
    }
  });
}

document.addEventListener('loaderComplete', () => {
  initAllReveal();
  ScrollTrigger.refresh();
});
