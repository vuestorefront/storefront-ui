import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';
import { VsfThumbnailSize } from '@storefront-ui/shared';

export { VsfThumbnailSize };
export interface VsfThumbnailProps extends PropsWithChildren, PropsWithStyle {
  size?: `${VsfThumbnailSize}`;
}
