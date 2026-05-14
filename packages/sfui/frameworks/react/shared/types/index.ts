import type { CSSProperties, JSX } from 'react';

export type PropsWithStyle = {
  className?: string;
  style?: CSSProperties;
};

export type PropsWithTag = {
  tag?: keyof JSX.IntrinsicElements;
};
