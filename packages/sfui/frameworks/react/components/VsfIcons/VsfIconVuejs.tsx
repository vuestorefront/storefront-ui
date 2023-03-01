import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconVuejs({ size = VsfIconSize.base, viewBox = '0 0 24 24', ...attributes }: VsfIconProps) {
  return (
    <VsfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="vuejs">
      <path d="M18.526 2.3H14.75L12 6.65 9.643 2.3H1l11 18.843L23 2.3h-4.474ZM3.736 3.871h2.641L12 13.604l5.618-9.733h2.642L12 18.024 3.735 3.871Z" />
    </VsfIconBase>
  );
}
