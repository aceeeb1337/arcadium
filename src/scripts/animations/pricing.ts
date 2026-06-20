import { gsap } from '../core/gsap-setup';
import { isMouseDevice, prefersReducedMotion } from '../utils/breakpoints';

function initPricingTilt(): void {
  if (!isMouseDevice() || prefersReducedMotion()) return;

  document.querySelectorAll<HTMLElement>('.pricing-card').forEach((card) => {
    const glow = card.querySelector<HTMLElement>('.card-glow');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(card, {
        rotateY: x * 14,
        rotateX: -y * 14,
        transformPerspective: 800,
        ease: 'power2.out',
        duration: 0.4,
      });

      if (glow) {
        gsap.to(glow, {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)',
      });
    });
  });
}

document.addEventListener('loaderComplete', () => {
  initPricingTilt();
});
