import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconCheckCircle({
  size = SfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: SfIconProps) {
  return (
    <SfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="check-circle">
      <path d="m10.6 13.8-2.175-2.175a.918.918 0 0 0-.675-.275c-.267 0-.5.1-.7.3a.948.948 0 0 0-.275.7.95.95 0 0 0 .275.7L9.9 15.9a.948.948 0 0 0 .7.275.948.948 0 0 0 .7-.275l5.675-5.675a.918.918 0 0 0 .275-.675c0-.267-.1-.5-.3-.7a.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275L10.6 13.8ZM12 22a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 0 1 2 12a9.74 9.74 0 0 1 .788-3.9 10.092 10.092 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 12 2a9.74 9.74 0 0 1 3.9.787 10.105 10.105 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0 1 12 22Z" />
    </SfIconBase>
  );
}
