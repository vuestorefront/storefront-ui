import type { PropsWithChildren, ReactNode } from 'react';
import { VsfSelectSize } from '@storefront-ui/shared';

export { VsfSelectSize };
export interface VsfSelectProps extends PropsWithChildren, Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: `${VsfSelectSize}`;
  invalid?: boolean;
  wrapperClassName?: string;
  slotChevron?: ReactNode;
}
