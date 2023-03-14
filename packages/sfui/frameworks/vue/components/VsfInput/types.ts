export enum VsfInputSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfInputProps {
  size?: VsfInputSize;
  invalid?: boolean;
}
