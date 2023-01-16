import type { PropsWithChildren, ReactNode } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfDropdownInternalTriggerEvent {
  click = 'click',
  hover = 'hover',
}

export enum VsfDropdownInternalPlacement {
  'top-start' = 'top-start',
  top = 'top',
  'top-end' = 'top-end',
  'bottom-start' = 'bottom-start',
  bottom = 'bottom',
  'bottom-end' = 'bottom-end',
  'left-start' = 'left-start',
  left = 'left',
  'left-end' = 'left-end',
  'right-start' = 'right-start',
  right = 'right',
  'right-end' = 'right-end',
}

export interface VsfDropdownInternalProps extends PropsWithStyle, PropsWithChildren {
  open?: boolean;
  triggerEvent?: VsfDropdownInternalTriggerEvent;
  placement?: VsfDropdownInternalPlacement;
  disabled?: boolean;
  slotTrigger?: ReactNode;
  dropdownClass?: PropsWithStyle['className'];
  onOpenUpdate?: (open: boolean) => void;
}
