import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconVuestorefront({
  size = SfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="vuestorefront" {...attributes}>
      <path d="m9.747 2.824.839-.838a2 2 0 0 1 2.828 0l.838.838a2 2 0 0 1 0 2.828l-.838.839a2 2 0 0 1-2.828 0l-.839-.839a2 2 0 0 1 0-2.828m3.69 10.978 4.482-4.483a2 2 0 0 1 2.829 0L23 11.571l-11 11-11-11 2.276-2.276a2 2 0 0 1 2.827 0l4.506 4.507a2 2 0 0 0 2.828 0" />
    </SfIconBase>
  );
}
