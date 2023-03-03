import type { PropsWithChildren } from 'react';

import type { UseTooltipOptions } from '../../hooks/useTooltip';
import type { PropsWithStyle } from '../../shared/types/index';

export interface VsfTooltipProps extends UseTooltipOptions, PropsWithChildren, PropsWithStyle {
  label: string;
  showArrow?: boolean;
}
