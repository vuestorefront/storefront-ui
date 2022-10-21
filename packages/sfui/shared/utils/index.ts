/* eslint-disable no-plusplus */
/**
 * Clamp value between an upper and lower bound.
 * @param {number} value input value
 * @param {number} min minimum value
 * @param {number} max maximum allowed value
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Round value to the closest step value
 * @param {number} value input value
 * @param {number} step step value
 */
export function roundToNearest(value: number, step: number) {
  return Math.round(value / step) * step;
}

/**
 * Deep comparison of two elements
 * @param {any} v1
 * @param {any} v1
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function equal(v1: any, v2: any): boolean {
  if (v1 === v2) return true;
  const t1 = typeof v1;
  const t2 = typeof v2;
  if (t1 !== t2) return false;
  if (t1 === 'object' && v1 !== null && v2 !== null) {
    if (v1.length !== v2.length || Object.getOwnPropertyNames(v1).length !== Object.getOwnPropertyNames(v2).length)
      return false;
    // eslint-disable-next-line no-restricted-syntax
    for (const prop in v1) {
      if (!equal(v1[prop], v2[prop])) return false;
    }
  } else if (t1 === 'function') {
    return v1.toString() === v2.toString();
  } else {
    return false;
  }
  return true;
}
