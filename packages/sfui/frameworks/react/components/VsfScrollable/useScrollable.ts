import { useCallback, useRef, useEffect } from 'react';
import type { MutableRefObject } from 'react';
import { equal, VsfScrollableOptions, VSFScrollable } from '@storefront-ui/shared';

export function useScrollable<T extends HTMLElement>(
  options?: Partial<VsfScrollableOptions>,
): [(node: T | null) => void, MutableRefObject<VSFScrollable | null>] {
  const scrollableRef = useRef<VSFScrollable | null>(null);
  const currentOptions = useRef(options);

  const onRefChange = useCallback(
    (node: T | null) => {
      if (node) {
        currentOptions.current = options;
        scrollableRef.current = new VSFScrollable(node, options);
      } else {
        scrollableRef.current?.destroy?.();
        scrollableRef.current = null;
      }
    },
    [options],
  );

  useEffect(() => {
    if (!equal(currentOptions.current, options)) {
      currentOptions.current = options;

      if (scrollableRef.current) {
        scrollableRef.current.update(currentOptions.current);
      }
    }
  }, [options]);

  return [onRefChange, scrollableRef];
}
