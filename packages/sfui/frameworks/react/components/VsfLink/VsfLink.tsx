import classNames from 'classnames';
import { VsfLinkVariant, polymorphicForwardRef } from '@storefront-ui/react';
import type { VsfLinkProps } from '@storefront-ui/react';

const defaultLinkTag = 'a';

const VsfLink = polymorphicForwardRef<typeof defaultLinkTag, VsfLinkProps>((props, ref) => {
  const variantClasses = {
    [VsfLinkVariant.primary]:
      'text-primary-700 underline hover:text-primary-800 active:text-primary-900 visited:text-primary-900',
    [VsfLinkVariant.secondary]: 'underline hover:text-primary-800 active:text-primary-900 visited:text-primary-900',
  };

  const { as, className, children, variant = VsfLinkVariant.primary, ...attributes } = props;
  const Tag = as || defaultLinkTag;

  return (
    <Tag ref={ref} className={classNames(variantClasses[variant], className)} data-testid="link" {...attributes}>
      {children}
    </Tag>
  );
});

export default VsfLink;
