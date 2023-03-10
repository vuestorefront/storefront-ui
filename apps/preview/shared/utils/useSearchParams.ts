import { throttle } from 'lodash';

export type UrlParams = Record<string, string[] | string>

const constructQuery = (params: URLSearchParams) => {
  const stringified = params.toString()
  return `${stringified ? `?${stringified}` : ''}${window.location.hash || ''}`
};

const replaceUrlParams = throttle((searchParams: URLSearchParams) =>
  window.history.replaceState(
    window.history.state,
    window.document.title,
    window.location.pathname + constructQuery(searchParams),
  ), 300);

export function useSearchParams<T extends Record<string, any> = UrlParams>(
  { initialValue, onStateChange }: { initialValue: T; onStateChange?: () => void },
) {
  const state = { ...initialValue } as T & Record<string, unknown>;

  const readSearchParams = () => {
    const readState = {} as typeof state;
    new URLSearchParams(window.location.search || '')
      .forEach((value, key) => {
        let parsedValue = undefined;
        if (value) {
          try {    
            parsedValue = JSON.parse(value);
          } catch {
            console.error(`Cannot parse param ${key}, found value: ${value}`);
          }
        }
        readState[key as keyof typeof state] = parsedValue;
      });

    return readState;
  };

  const writeSearchParams = () => {
    const searchParams = new URLSearchParams('');
    for (const key in state) {
      if (state[key] === undefined || state[key] === initialValue[key]) searchParams.delete(key);
      else searchParams.set(key, JSON.stringify(state[key]));
    }
    replaceUrlParams(searchParams);
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('popstate', () => {
      for (const key in state) {
        delete state[key];
      }
      Object.assign(state, readSearchParams());
      onStateChange?.();
    }, { passive: false });

    Object.assign(state, readSearchParams());
  }

  return new Proxy(state, {
    set(obj, prop, value, receiver) {
      const returnValue = Reflect.set(obj, prop, value, receiver);
      writeSearchParams();
      onStateChange?.();
      return returnValue;
    },
  });
}