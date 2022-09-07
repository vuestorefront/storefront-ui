export function classStringFromArray(classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
