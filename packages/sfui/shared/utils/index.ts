export const noop = () => {};

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function roundToNearest(value: number, step: number) {
  return Math.round(value / step) * step;
}

// TODO: use lodash?
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function equal(v1: any, v2: any): boolean {
  // TODO: proper typings - DO NOT USE any
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
