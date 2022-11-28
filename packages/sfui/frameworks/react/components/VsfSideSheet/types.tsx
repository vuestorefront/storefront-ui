import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfSideSheetProps extends PropsWithStyle, PropsWithChildren {
  permanent?: boolean;
  withButton?: boolean;
  leftSide?: boolean;
  overlayVisible?: boolean;
  isOpen: boolean;
  onClick: () => void;
}
