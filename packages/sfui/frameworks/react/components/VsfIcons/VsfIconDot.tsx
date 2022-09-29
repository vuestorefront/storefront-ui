import type { VsfIconProps } from './types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconDot({ className = '', size = VsfIconSizeEnum.base, ariaLabel = 'dot' }: VsfIconProps) {
  return (
    <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24">
      <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" />
    </VsfIconBase>
  );
}
