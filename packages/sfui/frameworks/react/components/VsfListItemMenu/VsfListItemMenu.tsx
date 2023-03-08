import classNames from 'classnames';
import { VsfListItemMenuProps, VsfListItemMenuSize } from './types';
import { polymorphicForwardRef } from '../../shared/utils';

const defaultListItemMenuTag = 'li';

const sizeClasses = (size: VsfListItemMenuProps['size']) => {
  switch (size) {
    case VsfListItemMenuSize.sm:
      return 'text-sm px-4 py-1';
    case VsfListItemMenuSize.lg:
      return 'px-4 py-4';
    default:
      return 'px-4 py-2';
  }
};
const VsfListItemMenu = polymorphicForwardRef<typeof defaultListItemMenuTag, VsfListItemMenuProps>((props, ref) => {
  const {
    size = VsfListItemMenuSize.base,
    disabled,
    active,
    className,
    slotPrefix,
    slotSuffix,
    as,
    children,
    ...attributes
  } = props;

  const Tag = as || defaultListItemMenuTag;

  return (
    <Tag
      ref={ref}
      className={classNames(
        'relative inline-flex items-center w-full hover:bg-neutral-100 cursor-pointer',
        {
          'opacity-40 bg-white cursor-not-allowed pointer-events-none': disabled,
          'bg-neutral-200': active && !disabled,
        },
        sizeClasses(size),
        className,
      )}
      disabled={disabled}
      data-testid="list-item-menu"
      {...attributes}
    >
      {slotPrefix && <span className="flex-grow-0 text-neutral-500 mr-2.5">{slotPrefix}</span>}
      <span className="flex flex-col w-full min-w-0">{children}</span>
      {slotSuffix && <span className="flex-grow-0 text-neutral-500">{slotSuffix}</span>}
    </Tag>
  );
});

export default VsfListItemMenu;
