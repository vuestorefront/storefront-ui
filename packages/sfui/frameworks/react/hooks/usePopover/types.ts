import type { UseFloatingProps } from '@floating-ui/react-dom';

export enum VsfPopoverPlacement {
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

export type VsfPopoverBasePlacement<TPlacement> = TPlacement extends `${infer TBase}-start`
  ? TBase
  : TPlacement extends `${infer TBase}-end`
  ? TBase
  : TPlacement;

export interface UsePopoverOptions {
  isOpen: boolean;
  placement?: `${VsfPopoverPlacement}`;
  middleware?: UseFloatingProps['middleware'];
}
