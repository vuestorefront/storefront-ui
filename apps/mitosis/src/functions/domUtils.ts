export function classStringFromArray(classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}
export function lerp(a: number, b: number, n: number) {
  return (1 - n) * a + n * b;
}

export function clamp(x: number, min: number, max: number) {
  return Math.min(Math.max(x, min), max);
}
