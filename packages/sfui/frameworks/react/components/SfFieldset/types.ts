import type { FieldsetHTMLAttributes, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export interface SfFieldsetProps
  extends FieldsetHTMLAttributes<HTMLFieldSetElement>,
    PropsWithChildren,
    PropsWithStyle {
  legend?: string;
  invalid?: boolean;
  hintText?: string;
  errorText?: string;
  legendClass?: string;
}
