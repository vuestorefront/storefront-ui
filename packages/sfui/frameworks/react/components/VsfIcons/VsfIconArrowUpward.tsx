import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconArrowUpward({
  size = VsfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: VsfIconProps) {
  return (
    <VsfIconBase {...attributes} size={size} viewBox={viewBox} data-testid="arrow-upward">
      <path d="M12 20a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 19V7.825L6.125 12.7c-.2.2-.438.3-.713.3a.973.973 0 0 1-.712-.3.96.96 0 0 1-.3-.7c0-.267.1-.5.3-.7l6.6-6.6a.88.88 0 0 1 .325-.213 1.212 1.212 0 0 1 .763 0 .681.681 0 0 1 .312.213l6.6 6.6c.2.2.3.433.3.7 0 .267-.1.5-.3.7-.2.2-.438.3-.713.3a.973.973 0 0 1-.712-.3L13 7.825V19a.97.97 0 0 1-.287.712A.968.968 0 0 1 12 20Z" />
    </VsfIconBase>
  );
}
