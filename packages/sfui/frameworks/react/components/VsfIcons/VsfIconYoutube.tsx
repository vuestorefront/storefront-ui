import type { VsfIconProps } from './types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconYoutube({
  className = '',
  size = VsfIconSizeEnum.base,
  ariaLabel,
  viewBox,
  ...attributes
}: VsfIconProps) {
  return (
    <VsfIconBase
      {...attributes}
      className={className}
      size={size}
      ariaLabel={ariaLabel}
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <path d="M22.54 6.42a2.764 2.764 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.764 2.764 0 0 0 1.46 6.42C1 8.147 1 11.75 1 11.75s0 3.603.46 5.33a2.723 2.723 0 0 0 1.945 1.926c1.715.463 8.595.463 8.595.463s6.88 0 8.595-.463a2.723 2.723 0 0 0 1.945-1.926c.46-1.727.46-5.33.46-5.33s0-3.603-.46-5.33ZM9.75 15.021V8.48l5.75 3.271-5.75 3.271Z" />
    </VsfIconBase>
  );
}
