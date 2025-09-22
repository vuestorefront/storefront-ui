import { twMerge as twMergeTailwind } from 'tailwind-merge';
import { computed, useAttrs } from 'vue';

export const useTwMergeRoot = () => {
  const $attrs = useAttrs();

  return {
    attrsWithoutClass: computed(() => {
      const { class: _, ...attrs } = $attrs;

      return attrs;
    }),
  };
};

// twMerge accept only strings, this util imitates vue interal :class binding and merges classes
// from objects and strings.
export const twMerge = (...args: any) => {
  return twMergeTailwind(
    args.filter(Boolean).reduce((acc: string, prev: any) => {
      let objectClasses = '';
      if (typeof prev === 'boolean') return acc;
      if (typeof prev === 'object') {
        for (const [key, value] of Object.entries(prev)) {
          if (value) objectClasses += `${key} `;
        }
        return (acc += `${objectClasses}`);
      }
      return (acc += `${prev} `);
    }, ''),
  );
};
