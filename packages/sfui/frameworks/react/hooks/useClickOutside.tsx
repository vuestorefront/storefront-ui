import { RefObject, useEffect } from 'react';

export default function useClickOutside(ref: RefObject<HTMLElement>, callback: (param?: MouseEvent) => void): void {
  useEffect(() => {
    const onClickHandler = (event: MouseEvent) => {
      if (!ref?.current?.contains(event.target as Node)) {
        callback(event);
      }
    };
    document.addEventListener('click', onClickHandler, true);
    return () => {
      document.removeEventListener('click', onClickHandler, true);
    };
  }, [ref, callback]);
}
