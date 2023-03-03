import type { PropsWithChildren, ReactNode } from 'react';

import type { UseDropdownOptions } from '../../hooks/useDropdown';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfDropdownProps extends UseDropdownOptions, PropsWithStyle, PropsWithChildren {
  trigger: ReactNode;
}
