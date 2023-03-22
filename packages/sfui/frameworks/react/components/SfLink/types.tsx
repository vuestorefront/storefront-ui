import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';
import { SfLinkVariant } from '@storefront-ui/shared';

export { SfLinkVariant };
export interface SfLinkProps extends PropsWithChildren, PropsWithStyle {
  variant?: `${SfLinkVariant}`;
}
