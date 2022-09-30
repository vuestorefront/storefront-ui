export enum VsfButtonSizes {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}
export enum VsfButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export type VsfButtonSizesKeys = keyof typeof VsfButtonSizes;
export type VsfButtonVariantsKeys = keyof typeof VsfButtonVariants;
