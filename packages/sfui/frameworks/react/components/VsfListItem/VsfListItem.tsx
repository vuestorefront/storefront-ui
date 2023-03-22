import classNames from 'classnames';
import { VsfListItemSize, polymorphicForwardRef } from '@storefront-ui/react';
import type { VsfListItemProps } from '@storefront-ui/react';

const sizeClasses = {
  [VsfListItemSize.sm]: 'text-sm px-4 py-1',
  [VsfListItemSize.base]: 'px-4 py-2',
  [VsfListItemSize.lg]: 'p-4',
};

const defaultListItemTag = 'li';

const VsfListItem = polymorphicForwardRef<typeof defaultListItemTag, VsfListItemProps>((props, ref) => {
  const {
    size = VsfListItemSize.base,
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

export default VsfListItem;
