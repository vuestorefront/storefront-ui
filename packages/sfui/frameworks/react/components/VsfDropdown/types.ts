import type { PropsWithChildren, ReactNode } from 'react';
import type { UseDropdownOptions, PropsWithStyle } from '@storefront-ui/react';

export interface VsfDropdownProps extends Omit<UseDropdownOptions, 'isOpen'>, PropsWithStyle, PropsWithChildren {
  open?: boolean;
  trigger: ReactNode;
}
