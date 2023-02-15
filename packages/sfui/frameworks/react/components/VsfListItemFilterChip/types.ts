import type { PropsWithChildren, ChangeEvent } from 'react';
import type { VsfChipProps } from '../VsfChip';
import type { VsfChipThumbnailProps } from '../VsfChipThumbnail';
import type { VsfListItemMenuProps } from '../VsfListItemMenu';
import { VsfListItemMenuSize } from '../VsfListItemMenu';

export enum VsfListItemFilterChipVariant {
  left = 'left',
  right = 'right',
}

export { VsfListItemMenuSize as VsfListItemFilterChipSize };

type PickFromListItemMenu = 'label' | 'counter' | 'size' | 'secondaryText' | 'disabled' | 'className' | 'truncate';

export interface VsfListItemFilterChipProps
  extends PropsWithChildren,
    Pick<VsfListItemMenuProps, PickFromListItemMenu>,
    Partial<Pick<VsfChipThumbnailProps, 'color'>>,
    Partial<Pick<VsfChipProps, 'value' | 'onSelected'>> {
  variant?: `${VsfListItemFilterChipVariant}`;
  defaultValue?: boolean;
  onChange?: any;
}

export interface ItemChipProps extends VsfChipProps, VsfChipThumbnailProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
