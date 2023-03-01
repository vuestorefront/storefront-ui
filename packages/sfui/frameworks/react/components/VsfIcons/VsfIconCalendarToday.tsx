import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconCalendarToday({
  size = VsfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: VsfIconProps) {
  return (
    <VsfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="calendar-today">
      <path d="M5 22a1.93 1.93 0 0 1-1.413-.587A1.928 1.928 0 0 1 3 20V6c0-.55.196-1.02.587-1.412A1.927 1.927 0 0 1 5 4h1V2.975c0-.283.096-.517.287-.7A.993.993 0 0 1 7 2a.97.97 0 0 1 .713.287A.97.97 0 0 1 8 3v1h8V2.975c0-.283.096-.517.288-.7A.99.99 0 0 1 17 2a.97.97 0 0 1 .712.287c.192.192.288.43.288.713v1h1c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v14a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 19 22H5Zm0-2h14V10H5v10Z" />
    </VsfIconBase>
  );
}
