import Lenis from 'lenis';
import { gsap } from './gsap-setup';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion, isTouchDevice } from '../utils/breakpoints';

let lenis: Lenis | null = null;

export function initLenis(): void {
  if (prefersReducedMotion() || isTouchDevice()) return;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.refresh();
}

export function destroyLenis(): void {
  lenis?.destroy();
  lenis = null;
}

document.addEventListener('loaderComplete', () => {
  initLenis();
});
