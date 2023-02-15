import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconPackage({
  className = '',
  size = VsfIconSize.base,
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
      data-testid="package"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <path d="m10 9.75 1.325-.65a1.593 1.593 0 0 1 1.35 0L14 9.75V5h-4v4.75ZM8 17a.968.968 0 0 1-.713-.288A.967.967 0 0 1 7 16a.97.97 0 0 1 .287-.713A.97.97 0 0 1 8 15h3a.97.97 0 0 1 .713.287A.97.97 0 0 1 12 16a.97.97 0 0 1-.287.712A.968.968 0 0 1 11 17H8Zm-3 4a1.93 1.93 0 0 1-1.413-.587A1.928 1.928 0 0 1 3 19V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 0 1 5 3h14c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v14a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 19 21H5Zm0-2h14V5h-3v6.375c0 .383-.158.67-.475.862a.951.951 0 0 1-.975.038L12 11l-2.55 1.275a.951.951 0 0 1-.975-.038c-.317-.191-.475-.479-.475-.862V5H5v14Z" />
    </VsfIconBase>
  );
}
