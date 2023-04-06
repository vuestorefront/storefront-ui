import type { PropsWithChildren, ReactNode } from 'react';
import type { UseScrollableOptions, PropsWithStyle } from '@storefront-ui/react';
import { SfScrollableButtonsPlacement } from '@storefront-ui/react';

export interface SfScrollableProps extends UseScrollableOptions, PropsWithChildren, PropsWithStyle {
  wrapperClassNames?: string;
  slotPreviousButton?: ReactNode;
  slotNextButton?: ReactNode;
  buttonsPlacement?: `${SfScrollableButtonsPlacement}`;
}
