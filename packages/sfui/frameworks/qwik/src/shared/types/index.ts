import type { CSSProperties } from 'react';

export type PropsWithStyle = {
  className?: string;
};

export type PropsWithTag = {
  tag?: keyof JSX.IntrinsicElements;
};
