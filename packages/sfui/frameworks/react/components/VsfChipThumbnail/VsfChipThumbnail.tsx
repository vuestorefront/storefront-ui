import classNames from 'classnames';
import type { VsfChipThumbnailProps } from './types';
import { VsfChipThumbnailSize } from './types';

export default function VsfChipThumbnail({
  size = VsfChipThumbnailSize.base,
  color,
  children,
  className,
  ...attributes
}: VsfChipThumbnailProps): JSX.Element {
  return (
    <div
      className={classNames('vsf-chip-thumbnail', `vsf-chip-thumbnail--${size}`, className)}
      style={{ '--vsf-chip-thumbnail': color } as React.CSSProperties}
      data-testid="chip-thumbnail"
      {...attributes}
    >
      {children}
    </div>
  );
}
