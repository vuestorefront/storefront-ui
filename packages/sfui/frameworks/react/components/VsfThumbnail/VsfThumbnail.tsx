import classNames from 'classnames';
import { VsfThumbnailProps, VsfThumbnailSize } from './types';

const sizeClasses = {
  [VsfThumbnailSize.sm]: 'w-4 h-4',
  [VsfThumbnailSize.base]: 'w-5 h-5',
  [VsfThumbnailSize.lg]: 'w-[2.125rem] h-[2.125rem]',
  [VsfThumbnailSize.xl]: 'w-12 h-12',
};

export default function VsfThumbnail({
  size = VsfThumbnailSize.base,
  children,
  className,
  ...attributes
}: VsfThumbnailProps): JSX.Element {
  return (
    <div
      className={classNames('rounded-full overflow-hidden', sizeClasses[size], className)}
      data-testid="thumbnail"
      {...attributes}
    >
      {children}
    </div>
  );
}
