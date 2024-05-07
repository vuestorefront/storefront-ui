import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconThumbUp({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="thumb-up" {...attributes}>
      <path d="M7 22V9l6-5.95q.375-.375.887-.438.513-.061.988.188.475.25.7.7t.1.925L14.55 9H21q.8 0 1.4.6T23 11v2q0 .176-.05.375-.05.2-.1.375l-3 7.05q-.225.5-.75.85T18 22zM9 9.85V20h9l3-7v-2h-9l1.35-5.5zM4 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 20v-9q0-.824.588-1.413A1.93 1.93 0 0 1 4 9h3v2H4v9h3v2z" />
    </SfIconBase>
  );
}
