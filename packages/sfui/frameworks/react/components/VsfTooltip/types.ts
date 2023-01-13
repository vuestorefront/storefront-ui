import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types/index';
import { VsfDropdownInternalProps } from '../VsfDropdownInternal';

export enum VsfTooltipPlacement {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}

export interface VsfTooltipProps
  extends PropsWithChildren,
    PropsWithStyle,
    Pick<VsfDropdownInternalProps, 'open' | 'onOpenUpdate'> {
  label: string;
  hidePointer?: boolean;
  placement: VsfTooltipPlacement;
}
