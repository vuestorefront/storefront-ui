import classNames from 'classnames';
import { SfThumbnailProps, SfThumbnailSize } from '@storefront-ui/react';

const sizeClasses = {
  [SfThumbnailSize.sm]: 'w-5 h-5',
  [SfThumbnailSize.base]: 'w-6 h-6',
  [SfThumbnailSize.lg]: 'w-10 h-10',
  [SfThumbnailSize.xl]: 'w-14 h-14',
};

export default function SfThumbnail({
  size = SfThumbnailSize.base,
  children,
  className,
  ...attributes
}: SfThumbnailProps): JSX.Element {
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
