import { gsap } from '../core/gsap-setup';
import { isMouseDevice, prefersReducedMotion } from '../utils/breakpoints';

export function initMagneticButtons(): void {
  if (!isMouseDevice() || prefersReducedMotion()) return;

  document.querySelectorAll<HTMLElement>('[data-cursor="magnetic"]').forEach((btn) => {
    const strength = 0.35;

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;

      gsap.to(btn, {
        x: dx,
        y: dy,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.4)',
      });
    });
  });
}

document.addEventListener('loaderComplete', () => {
  initMagneticButtons();
});
