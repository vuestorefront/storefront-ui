import type { CSSProperties } from 'react';

export type PropsWithStyle = {
  className?: string;
  style?: CSSProperties;
};

export type PropsWithTag = {
  tag?: keyof JSX.IntrinsicElements;
};

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
