import type { PropsWithChildren } from 'react';
import type { VsfCheckboxProps } from '../VsfCheckbox';
import type { VsfListItemMenuProps } from '../VsfListItemMenu';
import { VsfListItemMenuSize } from '../VsfListItemMenu';

export enum VsfListItemFilterCheckboxVariant {
  left = 'left',
  right = 'right',
}

export { VsfListItemMenuSize as VsfListItemFilterCheckboxSize };

type PickFromListItemMenu = 'label' | 'counter' | 'size' | 'secondaryText' | 'disabled' | 'className' | 'truncate';

export interface VsfListItemFilterCheckboxProps
  extends PropsWithChildren,
    Pick<VsfListItemMenuProps, PickFromListItemMenu>,
    Partial<Pick<VsfCheckboxProps, 'value' | 'onChange' | 'checked'>> {
  variant?: `${VsfListItemFilterCheckboxVariant}`;
}
