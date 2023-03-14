import type { PropsWithChildren } from 'react';
import { VsfThumbnailSize } from '@storefront-ui/shared';
import type { PropsWithStyle } from '@storefront-ui/react';

export { VsfThumbnailSize };

export interface VsfThumbnailProps extends PropsWithChildren, PropsWithStyle {
  size?: `${VsfThumbnailSize}`;
}
