import type { VsfRadioProps } from '../VsfRadio';
import type { VsfListItemMenuProps } from '../VsfListItemMenu';
import { VsfListItemMenuSizes } from '../VsfListItemMenu';

export enum VsfListItemFilterRadioVariant {
  left = 'left',
  right = 'right',
}

export { VsfListItemMenuSizes as VsfListItemFilterRadioSize };

type PickFromListItemMenu = 'label' | 'counter' | 'size' | 'secondaryText' | 'disabled' | 'className' | 'truncate';

export interface VsfListItemFilterRadioProps
  extends Pick<VsfListItemMenuProps, PickFromListItemMenu>,
    Partial<Pick<VsfRadioProps, 'value' | 'name'>> {
  variant?: VsfListItemFilterRadioVariant;
  selected?: string;
  onChange?: (selected: string) => void;
}
