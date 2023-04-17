import classNames from 'classnames';
import { Slot, component$ } from '@builder.io/qwik';
import { SfThumbnailProps, SfThumbnailSize } from './types';

const sizeClasses = {
  [SfThumbnailSize.sm]: 'w-5 h-5',
  [SfThumbnailSize.base]: 'w-6 h-6',
  [SfThumbnailSize.lg]: 'w-10 h-10',
  [SfThumbnailSize.xl]: 'w-14 h-14',
};
export const SfThumbnail = component$<SfThumbnailProps>(
  ({ size = SfThumbnailSize.base, class: _class, ...attributes }) => {
    return (
      <div
        class={['rounded-full overflow-hidden bg-clip-content p-0.5', sizeClasses[size], _class]}
        data-testid="thumbnail"
        {...attributes}
      >
        <Slot />
      </div>
    );
  },
);
