import classNames from 'classnames';
import { SfListItemSize, polymorphicForwardRef } from '@storefront-ui/react';
import type { SfListItemProps } from '@storefront-ui/react';

const sizeClasses = {
  [SfListItemSize.sm]: 'text-sm px-4 py-1',
  [SfListItemSize.base]: 'px-4 py-2',
  [SfListItemSize.lg]: 'p-4',
};

const defaultListItemTag = 'li';
const defaultChildrenTag = 'span';

const SfListItem = polymorphicForwardRef<typeof defaultListItemTag, SfListItemProps>((props, ref) => {
  const {
    size = SfListItemSize.base,
    disabled,
    selected,
    className,
    slotPrefix,
    slotSuffix,
    as,
    childrenTag,
    children,
    ...attributes
  } = props;

  const Tag = as || defaultListItemTag;
  const ChildrenTag = childrenTag || defaultChildrenTag;

  return (
    <Tag
      ref={ref}
      className={classNames(
        'inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10',
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
      {slotPrefix && (
        <ChildrenTag className={disabled ? 'text-disabled-500' : 'text-neutral-500'}>{slotPrefix}</ChildrenTag>
      )}
      <ChildrenTag className="flex flex-col w-full min-w-0">{children}</ChildrenTag>
      {slotSuffix && (
        <ChildrenTag className={disabled ? 'text-disabled-500' : 'text-neutral-500'}>{slotSuffix}</ChildrenTag>
      )}
    </Tag>
  );
});

export default SfListItem;
