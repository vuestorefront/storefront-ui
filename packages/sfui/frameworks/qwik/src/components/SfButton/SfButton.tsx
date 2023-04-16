import { Slot, component$ } from '@builder.io/qwik';
import { SfButtonSize, SfButtonVariant } from '@storefront-ui/shared';
import { SfButtonProps } from './types';

export const defaultButtonTag = 'button';

export const variantClasses = {
  [SfButtonVariant.primary]:
    'text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300',
  [SfButtonVariant.secondary]:
    'text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50',
  [SfButtonVariant.tertiary]:
    'text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent',
};

export const getSizeClasses = (size: SfButtonProps['size'], square: SfButtonProps['square']) => {
  switch (size) {
    case SfButtonSize.sm:
      return [square ? 'p-1.5' : 'leading-5 text-sm py-1.5 px-3', 'gap-1.5'];
    case SfButtonSize.lg:
      return [square ? 'p-4' : 'py-3 leading-6 px-6', 'gap-3'];
    default:
      return [square ? 'p-2' : 'py-2 leading-6 px-4', 'gap-2'];
  }
};

export const SfButton = component$<SfButtonProps>(
  ({
    as,
    ref,
    class: className,
    size = SfButtonSize.base,
    variant = SfButtonVariant.primary,
    square,
    children,
    slotPrefix,
    slotSuffix,
    disabled,
    ...attributes
  }) => {
    const Tag = as || defaultButtonTag;

    return (
      <Tag
        {...(ref ? { ref } : {})}
        type={typeof Tag === 'string' && Tag.toLowerCase() === 'button' ? 'button' : undefined}
        class={[
          'inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed',
          getSizeClasses(size, square),
          variantClasses[variant],
          className,
        ]}
        data-testid="button"
        disabled={disabled}
        {...attributes}
      >
        <Slot name="prefix" />
        <Slot />
        <Slot name="suffix" />
      </Tag>
    );
  },
);
