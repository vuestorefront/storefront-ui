export function classStringFromArray(classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}
