import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';
import { SfThumbnailSize } from '@storefront-ui/shared';

export { SfThumbnailSize };
export interface SfThumbnailProps extends PropsWithChildren, PropsWithStyle {
  size?: `${SfThumbnailSize}`;
}
