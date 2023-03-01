import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconLock({ size = VsfIconSize.base, viewBox = '0 0 24 24', ...attributes }: VsfIconProps) {
  return (
    <VsfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="lock">
      <path d="M6 23c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 4 21V11c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 6 9h1V7c0-1.383.488-2.563 1.463-3.538C9.438 2.487 10.617 2 12 2s2.563.487 3.538 1.462C16.513 4.437 17 5.617 17 7v2h1c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v10a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 18 23H6Zm6-5a1.93 1.93 0 0 0 1.413-.587c.391-.392.587-.863.587-1.413s-.196-1.021-.587-1.413A1.928 1.928 0 0 0 12 14c-.55 0-1.02.196-1.412.587A1.927 1.927 0 0 0 10 16c0 .55.196 1.021.588 1.413.391.391.862.587 1.412.587ZM9 9h6V7c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 12 4c-.833 0-1.542.292-2.125.875A2.893 2.893 0 0 0 9 7v2Z" />
    </VsfIconBase>
  );
}
