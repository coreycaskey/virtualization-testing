/*
  This logic is an amalgamation of these smooth scrolling samples:
    - Tanstack Virtual: https://tanstack.com/virtual/latest/docs/framework/react/examples/smooth-scroll
    - React Virtualized: https://gist.github.com/clauderic/13cc9207a9e5db63ee67a1588eb11811
    - Easing Functions: https://gist.github.com/gre/1650294
*/

export const easeInOutQuint = (time: number) => {
  return time < 0.5
    ? 16 * time * time * time * time * time
    : 1 - (-2 * time + 2) ** 5 / 2;
};

export const animate = (
  start: number,
  end: number,
  onUpdate: (interpolated: number) => void,
  onComplete: () => void,
  duration = 1000,
) => {
  const startTime = performance.now();

  const tick = () => {
    const elapsed = performance.now() - startTime;
    const progress = easeInOutQuint(Math.min(elapsed / duration, 1));
    const interpolated = start + (end - start) * progress;

    onUpdate(interpolated);

    if (elapsed < duration) {
      requestAnimationFrame(tick);
    } else {
      onComplete();
    }
  };

  tick();
};
