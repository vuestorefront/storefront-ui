import type { PropsWithStyle } from '@storefront-ui/react';

export interface VsfRadioProps extends React.InputHTMLAttributes<HTMLInputElement>, PropsWithStyle {
  invalid?: boolean;
}
