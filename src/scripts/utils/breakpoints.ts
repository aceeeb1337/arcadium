export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isTouchDevice(): boolean {
  return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
}

export function isMouseDevice(): boolean {
  return window.matchMedia('(pointer: fine)').matches;
}

export function minWidth(px: number): boolean {
  return window.matchMedia(`(min-width: ${px}px)`).matches;
}
