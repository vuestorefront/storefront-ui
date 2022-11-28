import { RefObject, useEffect } from 'react';

export default function useClickOutside(
  ref: RefObject<HTMLElement>,
  callback: (param?: MouseEvent) => void,
  condition: boolean = true,
): void {
  useEffect(() => {
    if (!condition) return;
    const onClickHandler = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };
    document.addEventListener('click', onClickHandler, true);
    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('click', onClickHandler, true);
    };
  }, [ref, callback]);
}
