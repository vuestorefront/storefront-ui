import type { TextareaHTMLAttributes } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';
import { SfTextareaSize } from '@storefront-ui/shared';

export { SfTextareaSize };
export interface SfTextareaProps extends PropsWithStyle, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?: `${SfTextareaSize}`;
  invalid?: boolean;
}
