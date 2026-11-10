import { useEffect, useRef } from 'react';

// Draw each decorative line once, without a scroll listener or repeated motion.
export function useDrawOnView() {
  const ref = useRef(null);
  useEffect(() => {
    const target = ref.current;
    if (!target) return undefined;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer;
    const reveal = () => {
      target.classList.add('is-drawn');
      observer?.disconnect();
    };
    const onMotionChange = event => { if (event.matches) reveal(); };
    if (motion.matches || !('IntersectionObserver' in window)) {
      reveal();
    } else {
      observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) reveal();
      }, { threshold: 0.25, rootMargin: '0px 0px -6% 0px' });
      observer.observe(target);
    }
    motion.addEventListener?.('change', onMotionChange);
    return () => {
      observer?.disconnect();
      motion.removeEventListener?.('change', onMotionChange);
    };
  }, []);
  return ref;
}
