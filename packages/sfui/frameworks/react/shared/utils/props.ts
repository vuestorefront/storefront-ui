import type { HTMLProps } from 'react';

export const composeHandlers =
  (...callbacks: (Function | null | undefined)[]) =>
  (...args: unknown[]) => {
    callbacks.forEach((cb) => cb?.(...args));
  };

export const createPropsGetter =
  <TProps>(resolver: (userProps: HTMLProps<HTMLElement>) => TProps) =>
  (userProps?: HTMLProps<HTMLElement>): TProps & typeof userProps => ({
    ...userProps,
    ...resolver(userProps || {}),
  });
