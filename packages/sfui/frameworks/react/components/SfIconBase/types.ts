import type { PropsWithChildren, SVGProps } from 'react';
import { SfIconSize } from '@storefront-ui/shared';
import type { PropsWithStyle } from '@storefront-ui/react';

export interface SfIconBaseProps extends SVGProps<SVGSVGElement>, PropsWithStyle, PropsWithChildren {
  size?: `${SfIconSize}`;
}

export { SfIconSize };
