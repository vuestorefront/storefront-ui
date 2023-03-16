import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';
import { VsfLinkVariant } from '@storefront-ui/shared';

export { VsfLinkVariant };
export interface VsfLinkProps extends PropsWithChildren, PropsWithStyle {
  variant?: `${VsfLinkVariant}`;
}
