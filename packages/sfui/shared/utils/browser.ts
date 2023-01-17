export const isBrowser = typeof window !== 'undefined';
export const isReduceMotionEnabled = isBrowser && window?.matchMedia('(prefers-reduced-motion: reduce)').matches;
