import type { PropsWithStyle } from '@storefront-ui/react';

export interface SfRadioProps extends React.InputHTMLAttributes<HTMLInputElement>, PropsWithStyle {
  invalid?: boolean;
}
