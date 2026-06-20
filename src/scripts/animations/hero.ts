import { gsap, ScrollTrigger } from '../core/gsap-setup';
import { initSplits } from '../utils/splitText';
import { prefersReducedMotion } from '../utils/breakpoints';

async function initHero(): Promise<void> {
  if (prefersReducedMotion()) return;

  await initSplits();

  const tl = gsap.timeline({
    defaults: { ease: 'expo.out', duration: 1 },
    delay: 0.1,
  });

  const eyebrowChars = document.querySelectorAll('.hero-eyebrow .char');
  if (eyebrowChars.length) {
    gsap.set(eyebrowChars, { y: 20, opacity: 0 });
    tl.to(eyebrowChars, { y: 0, opacity: 1, stagger: 0.025, duration: 0.7 });
  }

  const headlineEls = document.querySelectorAll('.hero-headline .char, .hero-hz');
  if (headlineEls.length) {
    gsap.set(headlineEls, { y: 80, opacity: 0, rotateX: -40 });
    tl.to(
      headlineEls,
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.02,
        duration: 1.1,
        transformPerspective: 800,
      },
      '-=0.5'
    );
  }

  const subWords = document.querySelectorAll('.hero-sub .word');
  if (subWords.length) {
    gsap.set(subWords, { y: 20, opacity: 0 });
    tl.to(subWords, { y: 0, opacity: 1, stagger: 0.04, duration: 0.8 }, '-=0.6');
  }

  const ctas = document.querySelector('.hero-ctas');
  if (ctas) {
    gsap.set(ctas, { y: 24, opacity: 0 });
    tl.to(ctas, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5');
  }

  ScrollTrigger.create({
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1.5,
    onUpdate: (self) => {
      gsap.set('#hero-bg', { yPercent: self.progress * 35 });
    },
  });
}

document.addEventListener('loaderComplete', () => {
  void initHero();
});
