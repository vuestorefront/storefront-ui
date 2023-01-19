import type { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfDropdownMenuProps extends PropsWithStyle, PropsWithChildren {
  id?: string;
  role?: string;
  loading?: boolean;
  slotLoader?: ReactNode;
}
