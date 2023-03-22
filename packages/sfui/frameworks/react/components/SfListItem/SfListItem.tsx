import classNames from 'classnames';
import { SfListItemSize, polymorphicForwardRef } from '@storefront-ui/react';
import type { SfListItemProps } from '@storefront-ui/react';

const sizeClasses = {
  [SfListItemSize.sm]: 'text-sm px-4 py-1',
  [SfListItemSize.base]: 'px-4 py-2',
  [SfListItemSize.lg]: 'p-4',
};

const defaultListItemTag = 'li';

const SfListItem = polymorphicForwardRef<typeof defaultListItemTag, SfListItemProps>((props, ref) => {
  const {
    size = SfListItemSize.base,
    disabled,
    selected,
    className,
    slotPrefix,
    slotSuffix,
    as,
    children,
    ...attributes
  } = props;

  const Tag = as || defaultListItemTag;

  return (
    <Tag
      ref={ref}
      className={classNames(
        'inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer',
        {
          'cursor-not-allowed pointer-events-none text-disabled-900': disabled,
          'font-medium': selected,
        },
        sizeClasses[size],
        className,
      )}
      disabled={disabled}
      data-testid="list-item"
      {...attributes}
    >
      {slotPrefix && <span className={disabled ? 'text-disabled-500' : 'text-neutral-500'}>{slotPrefix}</span>}
      <span className="flex flex-col w-full min-w-0">{children}</span>
      {slotSuffix && <span className={disabled ? 'text-disabled-500' : 'text-neutral-500'}>{slotSuffix}</span>}
    </Tag>
  );
});

export default SfListItem;
