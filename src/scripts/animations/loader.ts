import { gsap } from '../core/gsap-setup';
import { prefersReducedMotion } from '../utils/breakpoints';

function runLoader(): void {
  const loader = document.getElementById('loader');
  const logo = document.getElementById('loader-logo');
  const counter = document.getElementById('loader-counter');
  const numberEl = document.getElementById('loader-number');
  const bar = document.getElementById('loader-bar');
  const barFill = document.getElementById('loader-bar-fill');
  const curtainL = document.getElementById('loader-curtain-left');
  const curtainR = document.getElementById('loader-curtain-right');

  if (!loader) {
    finishLoader();
    return;
  }

  if (prefersReducedMotion()) {
    finishLoader();
    return;
  }

  const tl = gsap.timeline({ onComplete: finishLoader });

  tl.to(logo, { opacity: 1, duration: 0.5, ease: 'power2.out' })
    .to([counter, bar], { opacity: 1, duration: 0.4 }, '-=0.2')
    .to(
      { val: 0 },
      {
        val: 100,
        duration: 1.6,
        ease: 'power1.inOut',
        onUpdate() {
          const v = Math.round((this as gsap.core.Tween).targets()[0].val as number);
          if (numberEl) numberEl.textContent = String(v);
          if (barFill) barFill.style.width = `${v}%`;
        },
      },
      '-=0.1'
    )
    .to({}, { duration: 0.2 })
    .to(
      curtainL,
      { xPercent: -100, duration: 0.8, ease: 'expo.inOut' },
      '+=0.1'
    )
    .to(curtainR, { xPercent: 100, duration: 0.8, ease: 'expo.inOut' }, '<')
    .to(loader, { opacity: 0, duration: 0.3 }, '-=0.2');
}

function finishLoader(): void {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';

  document.body.classList.remove('is-loading');

  document.dispatchEvent(new CustomEvent('loaderComplete'));
}

runLoader();
