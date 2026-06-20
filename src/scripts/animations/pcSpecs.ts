import { gsap, ScrollTrigger } from '../core/gsap-setup';
import { prefersReducedMotion } from '../utils/breakpoints';

function init360Counter(): void {
  if (prefersReducedMotion()) return;

  const counterEl = document.querySelector<HTMLElement>('[data-spec-value="360"]');
  if (!counterEl) return;

  const obj = { val: 0 };

  ScrollTrigger.create({
    trigger: counterEl,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to(obj, {
        val: 360,
        duration: 2,
        ease: 'power2.out',
        onUpdate() {
          counterEl.textContent = String(Math.round(obj.val));
        },
      });
    },
  });
}

document.addEventListener('loaderComplete', () => {
  init360Counter();
});
