import type { VsfIconProps } from '@storefront-ui/react';
import { VsfIconBase, VsfIconSize } from '@storefront-ui/react';

export default function VsfIconWarehouse({
  size = VsfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: VsfIconProps) {
  return (
    <VsfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="warehouse">
      <path d="m12 5.15-8 3.2V19h2v-6c0-.55.196-1.02.588-1.413A1.925 1.925 0 0 1 8 11h8c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v6h2V8.35l-8-3.2ZM8 21H4c-.55 0-1.02-.195-1.412-.587A1.927 1.927 0 0 1 2 19V8.35A1.963 1.963 0 0 1 3.25 6.5l8-3.2c.233-.1.483-.15.75-.15s.517.05.75.15l8 3.2c.383.15.688.392.913.725.225.333.337.708.337 1.125V19a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 20 21h-4v-8H8v8Zm1 0v-2h2v2H9Zm2-3v-2h2v2h-2Zm2 3v-2h2v2h-2Z" />
    </VsfIconBase>
  );
}
