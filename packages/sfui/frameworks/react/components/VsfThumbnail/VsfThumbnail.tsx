import classNames from 'classnames';
import { VsfThumbnailProps, VsfThumbnailSize } from '@storefront-ui/react';

const sizeClasses = {
  [VsfThumbnailSize.sm]: 'w-5 h-5',
  [VsfThumbnailSize.base]: 'w-6 h-6',
  [VsfThumbnailSize.lg]: 'w-10 h-10',
  [VsfThumbnailSize.xl]: 'w-14 h-14',
};

export default function VsfThumbnail({
  size = VsfThumbnailSize.base,
  children,
  className,
  ...attributes
}: VsfThumbnailProps): JSX.Element {
  return (
    <div
      className={classNames('rounded-full overflow-hidden bg-clip-content p-0.5', sizeClasses[size], className)}
      data-testid="thumbnail"
      {...attributes}
    >
      {children}
    </div>
  );
}
