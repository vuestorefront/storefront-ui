import type { PropsWithChildren } from 'react';
import type { VsfSwitchProps } from '../VsfSwitch';
import type { VsfListItemMenuProps } from '../VsfListItemMenu';
import { VsfListItemMenuSize } from '../VsfListItemMenu';

export enum VsfListItemFilterSwitchVariant {
  left = 'left',
  right = 'right',
}

export { VsfListItemMenuSize as VsfListItemFilterSwitchSize };

type PickFromListItemMenu = 'label' | 'counter' | 'size' | 'secondaryText' | 'disabled' | 'className' | 'truncate';

export interface VsfListItemFilterSwitchProps
  extends PropsWithChildren,
    Pick<VsfListItemMenuProps, PickFromListItemMenu>,
    Partial<Pick<VsfSwitchProps, 'value' | 'name' | 'onChange'>> {
  variant?: `${VsfListItemFilterSwitchVariant}`;
  defaultValue?: boolean;
}

export interface ItemSwitchProps extends VsfSwitchProps {}
