import type { VsfIconProps } from './types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconLogIn({
  className = '',
  size = VsfIconSizeEnum.base,
  ariaLabel = 'log-in',
}: VsfIconProps) {
  return (
    <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24">
      <>
        <path d="M11 2a1 1 0 1 0 0 2h8a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-8a1 1 0 1 0 0 2h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3h-8Z" />
        <path d="M10.25 7.293a1 1 0 0 1 1.414 0l3.913 3.913a1 1 0 0 1 .292.75V12a1 1 0 0 1-.58.908l-3.625 3.625a1 1 0 0 1-1.415-1.414L12.37 13H3a1 1 0 1 1 0-2h9.542L10.25 8.707a1 1 0 0 1 0-1.414Z" />
      </>
    </VsfIconBase>
  );
}
