import type { PropsWithStyle } from '@storefront-ui/react';

export interface VsfSwitchProps extends PropsWithStyle, React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}
