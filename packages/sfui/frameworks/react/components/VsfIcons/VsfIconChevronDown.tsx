import type { VsfIconProps } from './types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconChevronDown({
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
      <>
        <path d="M7.82 8.999a.998.998 0 0 0-1.41 1.412l4.588 4.587a1 1 0 0 0 1.414 0L17 10.411a.998.998 0 0 0-1.41-1.412l-3.885 3.876L7.82 9Z" />
        <path d="M7.82 8.999a.998.998 0 0 0-1.41 1.412l4.588 4.587a1 1 0 0 0 1.414 0L17 10.411a.998.998 0 0 0-1.41-1.412l-3.885 3.876L7.82 9Z" />
      </>
    </VsfIconBase>
  );
}
