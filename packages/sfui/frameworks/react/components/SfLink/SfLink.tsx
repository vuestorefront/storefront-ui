import { SfLinkVariant, polymorphicForwardRef, twMerge } from '@storefront-ui/react';
import type { SfLinkProps } from '@storefront-ui/react';

const defaultLinkTag = 'a';

const SfLink = polymorphicForwardRef<typeof defaultLinkTag, SfLinkProps>((props, ref) => {
  const variantClasses = {
    [SfLinkVariant.primary]: 'text-secondary-700 hover:text-secondary-800 active:text-secondary-700',
    [SfLinkVariant.secondary]: 'text-neutral-700 hover:text-neutral-800 active:text-neutral-700',
  };

  const { as, className, children, variant = SfLinkVariant.primary, ...attributes } = props;
  const Tag = as || defaultLinkTag;

  return (
    <Tag
      ref={ref}
      className={twMerge(
        'focus-visible:outline focus-visible:outline-offset focus-visible:rounded-xs underline hover:no-underline',
        variantClasses[variant],
        className,
      )}
      data-testid="link"
      {...attributes}
    >
      {children}
    </Tag>
  );
});

export default SfLink;
