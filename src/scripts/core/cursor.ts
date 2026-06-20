import { gsap } from './gsap-setup';
import { isMouseDevice, prefersReducedMotion } from '../utils/breakpoints';

export function initCursor(): void {
  if (!isMouseDevice() || prefersReducedMotion()) return;

  const dot = document.getElementById('cursor-dot');
  const follower = document.getElementById('cursor-follower');
  if (!dot || !follower) return;

  const dotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'none' });
  const dotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'none' });
  const followerX = gsap.quickTo(follower, 'x', { duration: 0.6, ease: 'power3.out' });
  const followerY = gsap.quickTo(follower, 'y', { duration: 0.6, ease: 'power3.out' });

  window.addEventListener('mousemove', (e) => {
    dotX(e.clientX);
    dotY(e.clientY);
    followerX(e.clientX);
    followerY(e.clientY);
  });

  const interactives = document.querySelectorAll('a, button, [data-cursor]');
  interactives.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      document.body.setAttribute('data-cursor-hover', '');
    });
    el.addEventListener('mouseleave', () => {
      document.body.removeAttribute('data-cursor-hover');
    });
  });

  document.addEventListener('mouseleave', () => {
    gsap.to([dot, follower], { opacity: 0, duration: 0.3 });
  });
  document.addEventListener('mouseenter', () => {
    gsap.to([dot, follower], { opacity: 1, duration: 0.3 });
  });
}

initCursor();
