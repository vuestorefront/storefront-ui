import { CSSProperties } from 'react';

export type PropsWithStyle<P = unknown> = P & {
  className?: string;
  style?: CSSProperties;
};
