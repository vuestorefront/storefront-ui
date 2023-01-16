import type { PropsWithChildren } from 'react';
import type { VsfCheckboxProps } from '../VsfCheckbox';
import type { VsfListItemMenuProps } from '../VsfListItemMenu';
import { VsfListItemMenuSizes } from '../VsfListItemMenu';

export enum VsfListItemFilterCheckboxVariant {
  left = 'left',
  right = 'right',
}

export { VsfListItemMenuSizes as VsfListItemFilterCheckboxSize };

type PickFromListItemMenu = 'label' | 'counter' | 'size' | 'secondaryText' | 'disabled' | 'className' | 'truncate';

export interface VsfListItemFilterCheckboxProps
  extends PropsWithChildren,
    Pick<VsfListItemMenuProps, PickFromListItemMenu>,
    Partial<Pick<VsfCheckboxProps, 'value' | 'name' | 'onChange' | 'checked'>> {
  variant?: VsfListItemFilterCheckboxVariant;
}
