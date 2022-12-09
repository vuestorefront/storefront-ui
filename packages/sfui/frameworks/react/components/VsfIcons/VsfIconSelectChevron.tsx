import type { VsfIconProps } from './types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconSelectChevron({
  className = '',
  size = VsfIconSizeEnum.base,
  ariaLabel = 'select-chevron',
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.41 6.291c.39.39 1.02.39 1.41 0l3.885-3.875L9.59 6.292A.998.998 0 0 0 11 4.88L6.412.293a1 1 0 0 0-1.414 0L.41 4.88a.998.998 0 0 0 0 1.411ZM11 13.71a.998.998 0 0 0-1.41 0l-3.885 3.875-3.884-3.876A.998.998 0 0 0 .41 15.12l4.587 4.587a1 1 0 0 0 1.414 0L11 15.12a.998.998 0 0 0 0-1.411Z"
      />
    </VsfIconBase>
  );
}
