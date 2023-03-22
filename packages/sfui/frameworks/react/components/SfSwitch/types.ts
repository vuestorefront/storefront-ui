import type { PropsWithStyle } from '@storefront-ui/react';

export interface SfSwitchProps extends PropsWithStyle, React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}
