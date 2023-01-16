import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfSideSheetProps extends PropsWithStyle, PropsWithChildren {
  permanent?: boolean;
  leftSide?: boolean;
  overlayVisible?: boolean;
  open: boolean;
  onOpenChange?: (value: boolean) => void;
}
