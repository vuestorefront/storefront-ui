export const objectsDiff = (obj1: Record<string, unknown>, obj2: Record<string, unknown>) =>
  [...Object.entries(obj1), ...Object.entries(obj2)].reduce<Record<string, unknown>>((previous, [key, value]) => {
    if (key in previous) {
      if (previous[key] === value) delete previous[key];
    }
    else previous[key] = value;
    return previous;
  }, {});