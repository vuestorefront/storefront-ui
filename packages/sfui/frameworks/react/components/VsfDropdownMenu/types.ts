import type { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfDropdownMenuProps extends PropsWithStyle, PropsWithChildren {
  loading?: boolean;
  slotLoader?: ReactNode;
}
