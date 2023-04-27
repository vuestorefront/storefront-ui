import type { PropsWithChildren, ReactNode } from 'react';
import { SfSelectSize } from '@storefront-ui/shared';

export { SfSelectSize };
export interface SfSelectProps extends PropsWithChildren, Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: `${SfSelectSize}`;
  invalid?: boolean;
  wrapperClassName?: string;
  slotChevron?: ReactNode;
}
