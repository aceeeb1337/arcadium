import { gsap, ScrollTrigger } from '../core/gsap-setup';
import { prefersReducedMotion } from '../utils/breakpoints';

function initProgress(): void {
  const bar = document.getElementById('progress-bar');
  if (!bar || prefersReducedMotion()) return;

  gsap.to(bar, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
    },
  });
}

document.addEventListener('loaderComplete', () => {
  initProgress();
});
