import { twMerge as twMergeTailwind } from 'tailwind-merge';

// twMerge accept only strings, this util imitates vue interal :class binding and merges classes
// from objects and strings.
export const twMerge = (...args: unknown[]) => {
  return twMergeTailwind(
    args.filter(Boolean).reduce((acc: string, prev: unknown) => {
      let objectClasses = '';
      if (typeof prev === 'boolean') return acc;
      if (typeof prev === 'object') {
        for (const [key, value] of Object.entries(prev as Record<string, unknown>)) {
          if (value) objectClasses += `${key} `;
        }
        return (acc += `${objectClasses}`);
      }
      return (acc += `${prev} `);
    }, ''),
  );
};
