import {
  type SfButtonProps,
  SfButtonSize,
  SfButtonVariant,
  polymorphicForwardRef,
  twMerge,
} from '@storefront-ui/react';

const defaultButtonTag = 'button';

export const variantClasses = {
  [SfButtonVariant.primary]: 'shadow-sm hover:shadow-md active:shadow-sm disabled:bg-disabled-300',
  [SfButtonVariant.secondary]:
    'ring-1 ring-inset shadow-sm hover:shadow-md active:shadow-sm disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50',
  [SfButtonVariant.tertiary]: 'disabled:bg-transparent',
};
export const variantColorClasses = {
  [SfButtonVariant.primary]: 'text-white bg-primary-700 hover:bg-primary-800 active:bg-primary-900',
  [SfButtonVariant.secondary]:
    'text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-primary-700 hover:ring-primary-800 active:ring-primary-900',
  [SfButtonVariant.tertiary]:
    'text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900',
};

const getSizeClasses = (size: SfButtonProps['size'], square: SfButtonProps['square']) => {
  switch (size) {
    case SfButtonSize.sm:
      return [square ? 'p-1.5' : 'leading-5 text-sm py-1.5 px-3', 'gap-1.5'];
    case SfButtonSize.lg:
      return [square ? 'p-3' : 'py-3 leading-6 px-6', 'gap-3'];
    default:
      return [square ? 'p-2' : 'py-2 leading-6 px-4', 'gap-2'];
  }
};

const SfButton = polymorphicForwardRef<typeof defaultButtonTag, SfButtonProps>((props, ref) => {
  const {
    as,
    className,
    size = SfButtonSize.base,
    variant = SfButtonVariant.primary,
    blank,
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
      type={typeof Tag === 'string' && Tag.toLowerCase() === 'button' ? 'button' : undefined}
      className={twMerge(
        'inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-full disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed',
        ...getSizeClasses(size, square),
        variantClasses[variant],
        { [variantColorClasses[variant]]: !blank },
        className,
      )}
      data-testid="button"
      {...attributes}
    >
      {slotPrefix}
      {children}
      {slotSuffix}
    </Tag>
  );
});

export default SfButton;
