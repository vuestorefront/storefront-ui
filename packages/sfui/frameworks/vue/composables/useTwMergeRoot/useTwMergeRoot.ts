import { twMerge as twMergeTailwind } from 'tailwind-merge';
import { computed, useAttrs } from 'vue';

export const useTwMergeRoot = () => {
  const $attrs = useAttrs();

  return {
    attrsWithoutClass: computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { class: _, ...attrs } = $attrs;

      return attrs;
    }),
  };
};

const unwrapClassNameIntoAccumulator = (accumulator: string, className: unknown): string => {
  if (!className || typeof className === 'boolean') return accumulator;
  if (Array.isArray(className)) {
    return className.reduce(unwrapClassNameIntoAccumulator, accumulator);
  }
  if (typeof className === 'object') {
    let objectClasses = '';
    for (const [key, value] of Object.entries(className as Record<string, unknown>)) {
      if (value) objectClasses += ` ${key}`;
    }
    return (accumulator += objectClasses);
  }
  return (accumulator += ` ${className}`);
};

// twMerge accept only strings, this util imitates vue interal :class binding and merges classes
// from objects and strings.
export const twMerge = (...args: unknown[]) => {
  return twMergeTailwind(args.reduce(unwrapClassNameIntoAccumulator, ''));
};
