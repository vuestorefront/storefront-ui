import type { PropsWithChildren, SVGProps } from 'react';
import { VsfIconSize } from '@storefront-ui/shared';
import type { PropsWithStyle } from '@storefront-ui/react';

export interface VsfIconBaseProps extends SVGProps<SVGSVGElement>, PropsWithStyle, PropsWithChildren {
  size?: `${VsfIconSize}`;
}

export { VsfIconSize };
