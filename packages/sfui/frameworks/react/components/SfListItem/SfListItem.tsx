import { SfListItemSize, polymorphicForwardRef, twMerge } from '@storefront-ui/react';
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
    prefixClassName,
    suffixClassName,
    defaultClass,
    ...attributes
  } = props;

  const Tag = as || defaultListItemTag;
  const ChildrenTag = childrenTag || defaultChildrenTag;

  return (
    <Tag
      ref={ref}
      className={twMerge(
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
        <ChildrenTag className={twMerge(disabled ? 'text-disabled-500' : 'text-neutral-500', prefixClassName)}>
          {slotPrefix}
        </ChildrenTag>
      )}
      <ChildrenTag className={twMerge('flex flex-col w-full min-w-0', defaultClass)}>{children}</ChildrenTag>
      {slotSuffix && (
        <ChildrenTag className={twMerge(disabled ? 'text-disabled-500' : 'text-neutral-500', suffixClassName)}>
          {slotSuffix}
        </ChildrenTag>
      )}
    </Tag>
  );
});

export default SfListItem;
