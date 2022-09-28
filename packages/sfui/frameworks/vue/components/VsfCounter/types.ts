export enum VsfCounterSizes {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
}
export type VsfCounterSizesKeys = keyof typeof VsfCounterSizes;

export interface VsfCounterProps {
  size?: VsfCounterSizesKeys;
  pill?: boolean;
}
