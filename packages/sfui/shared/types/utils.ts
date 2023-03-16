export type CSSLength =
  // font-related
  | `${number}em`
  | `${number}rem`
  | `${number}ch`
  | `${number}ex`
  | `${number}ic`
  | `${number}lh`
  | `${number}rlh`
  // viewport size-related
  | `${number}vw`
  | `${number}vh`
  | `${number}vmin`
  | `${number}vmax`
  | `${number}vb`
  | `${number}vi`
  | `${number}svw`
  | `${number}svh`
  | `${number}lvw`
  | `${number}lvh`
  | `${number}dvw`
  | `${number}dvh`
  // container size-related
  | `${number}cqw`
  | `${number}cqh`
  | `${number}cqi`
  | `${number}cqb`
  | `${number}cqmin`
  | `${number}cqmax`
  // other relative units
  | `${number}%`
  // absolute units (omitting metric and imperial system units)
  | `${number}px`;

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
