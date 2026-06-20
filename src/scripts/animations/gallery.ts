import { gsap, ScrollTrigger } from '../core/gsap-setup';
import { prefersReducedMotion } from '../utils/breakpoints';

function initGalleryReveal(): void {
  if (prefersReducedMotion()) return;

  const items = document.querySelectorAll<HTMLElement>('.gallery-item');
  if (!items.length) return;

  gsap.from(Array.from(items), {
    opacity: 0,
    y: 60,
    scale: 0.95,
    duration: 0.85,
    stagger: {
      amount: 1.2,
      from: 'start',
      ease: 'power2.inOut',
    },
    ease: 'expo.out',
    scrollTrigger: {
      trigger: '#gallery',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
}

document.addEventListener('loaderComplete', () => {
  initGalleryReveal();
});
