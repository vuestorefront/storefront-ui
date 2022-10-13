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
