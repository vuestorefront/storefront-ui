export interface VsfIconBaseProps {
  content: string;
  size?: keyof typeof VsfIconSizeEnum;
}
export enum VsfIconSizeEnum {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
  '3xl' = '3xl',
}
