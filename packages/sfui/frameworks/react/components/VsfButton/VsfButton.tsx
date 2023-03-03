import classNames from 'classnames';
import { VsfButtonSize, VsfButtonVariant } from './types';
import type { VsfButtonProps } from './types';
import { polymorphicForwardRef } from '../../shared/utils';

const defaultButtonTag = 'button';

const getSizeClasses = (
  size: VsfButtonProps['size'],
  square: VsfButtonProps['square'],
  slotPrefix: VsfButtonProps['slotPrefix'],
  slotSuffix: VsfButtonProps['slotSuffix'],
) => {
  switch (size) {
    case VsfButtonSize.sm:
      return [square ? 'p-1.5' : 'leading-5 text-sm py-0.75 px-3', slotPrefix || slotSuffix ? 'gap-1.5' : null].join(
        ' ',
      );
    case VsfButtonSize.lg:
      return [square ? 'p-4' : 'py-3 leading-6 px-6', slotPrefix || slotSuffix ? 'gap-3' : null].join(' ');
    default:
      return [square ? 'p-2' : 'py-2 leading-6 px-4', slotPrefix || slotSuffix ? 'gap-2' : null].join(' ');
  }
};

const getVariantClasses = (variant: VsfButtonProps['variant']) => {
  switch (variant) {
    case VsfButtonVariant.secondary:
      return 'text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-primary-700 hover:shadow-medium active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50';
    case VsfButtonVariant.tertiary:
      return 'text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent';
    default:
      return 'text-white hover:shadow-medium shadow-base bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300';
  }
};

const VsfButton = polymorphicForwardRef<typeof defaultButtonTag, VsfButtonProps>((props, ref) => {
  const {
    as,
    className,
    size = VsfButtonSize.base,
    variant = VsfButtonVariant.primary,
    square,
    children,
    slotPrefix,
    slotSuffix,
    ...attributes
  } = props;
  const Tag = as || defaultButtonTag;

  return (
    <Tag
      ref={ref}
      className={classNames(
        'inline-flex items-center justify-center font-medium text-base focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600 rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed',
        getSizeClasses(size, square, slotPrefix, slotSuffix),
        getVariantClasses(variant),
        className,
      )}
      data-testid="button"
      disabled={props.disabled}
      {...attributes}
    >
      {slotPrefix}
      {children}
      {slotSuffix}
    </Tag>
  );
});

export default VsfButton;
