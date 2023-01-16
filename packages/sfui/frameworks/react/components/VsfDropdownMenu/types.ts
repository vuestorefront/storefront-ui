import { ReactNode } from 'react';
import { PropsWithStyle } from '../../shared/types';

export interface VsfDropdownMenuProps extends PropsWithStyle {
  loading?: boolean;
  children?: ReactNode;
  slotLoader?: ReactNode;
}
