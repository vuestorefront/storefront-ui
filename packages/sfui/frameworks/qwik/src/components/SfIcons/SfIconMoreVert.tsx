import { component$ } from '@builder.io/qwik';
import { SfIconBase, SfIconBaseProps, SfIconSize } from '../SfIconBase';
import { SfIconProps } from './types';

export const SfIconMoreVert = component$<SfIconBaseProps>(
  ({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) => {
    return (
      <SfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="more-vert">
        <path d="M14 12a2 2 0 1 1-4.001-.001A2 2 0 0 1 14 12Zm-2-4a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 8Zm0 8a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 16Z" />
      </SfIconBase>
    );
  },
);
