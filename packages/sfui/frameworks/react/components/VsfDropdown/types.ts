import type { PropsWithChildren, ReactNode } from 'react';
import type { UseDropdownOptions, PropsWithStyle } from '@storefront-ui/react';

export interface VsfDropdownProps extends UseDropdownOptions, PropsWithStyle, PropsWithChildren {
  trigger: ReactNode;
}
