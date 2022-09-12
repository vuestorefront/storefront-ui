function classStringFromArray(classes) {
  return classes.filter(Boolean).join(" ");
}
function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}
function clamp(x, min, max) {
  return Math.min(Math.max(x, min), max);
}
export {
  clamp,
  classStringFromArray,
  lerp
};
