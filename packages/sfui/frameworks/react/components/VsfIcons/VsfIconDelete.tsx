import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconDelete({
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
      data-testid="delete"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <path d="M7 20c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 5 18V5a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 4a.97.97 0 0 1 .287-.713A.97.97 0 0 1 5 3h4c0-.283.096-.521.288-.713A.967.967 0 0 1 10 2h4a.97.97 0 0 1 .713.287A.97.97 0 0 1 15 3h4a.97.97 0 0 1 .712.287c.192.192.288.43.288.713a.968.968 0 0 1-.288.713A.967.967 0 0 1 19 5v13a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 17 20H7ZM7 5v13h10V5H7Zm2 10c0 .283.096.52.288.712A.965.965 0 0 0 10 16a.968.968 0 0 0 .713-.288A.967.967 0 0 0 11 15V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 7a.967.967 0 0 0-.712.287A.968.968 0 0 0 9 8v7Zm4 0c0 .283.096.52.288.712A.965.965 0 0 0 14 16a.968.968 0 0 0 .713-.288A.967.967 0 0 0 15 15V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 7a.967.967 0 0 0-.712.287A.968.968 0 0 0 13 8v7Z" />
    </VsfIconBase>
  );
}
