import type { PropsWithChildren, ReactElement } from 'react';
import type { UseScrollableOptions, PropsWithStyle } from '@storefront-ui/react';
import { SfScrollableButtonsPlacement } from '@storefront-ui/react';

export interface SfScrollableProps extends UseScrollableOptions, PropsWithChildren, PropsWithStyle {
  wrapperClassNames?: string;
  slotPreviousButton?: ReactElement;
  slotNextButton?: ReactElement;
  previousDisabled?: boolean;
  nextDisabled?: boolean;
  buttonsPlacement?: `${SfScrollableButtonsPlacement}`;
}
