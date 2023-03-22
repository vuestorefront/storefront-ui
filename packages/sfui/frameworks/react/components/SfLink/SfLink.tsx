import classNames from 'classnames';
import { SfLinkVariant, polymorphicForwardRef } from '@storefront-ui/react';
import type { SfLinkProps } from '@storefront-ui/react';

const defaultLinkTag = 'a';

const SfLink = polymorphicForwardRef<typeof defaultLinkTag, SfLinkProps>((props, ref) => {
  const variantClasses = {
    [SfLinkVariant.primary]:
      'text-primary-700 underline hover:text-primary-800 active:text-primary-900 visited:text-primary-900',
    [SfLinkVariant.secondary]: 'underline hover:text-primary-800 active:text-primary-900 visited:text-primary-900',
  };

  const { as, className, children, variant = SfLinkVariant.primary, ...attributes } = props;
  const Tag = as || defaultLinkTag;

  return (
    <Tag ref={ref} className={classNames(variantClasses[variant], className)} data-testid="link" {...attributes}>
      {children}
    </Tag>
  );
});

export default SfLink;
