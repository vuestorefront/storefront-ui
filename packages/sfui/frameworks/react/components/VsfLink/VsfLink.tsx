import classNames from 'classnames';
import { VsfLinkVariant, polymorphicForwardRef } from '@storefront-ui/react';
import type { VsfLinkProps } from '@storefront-ui/react';

const defaultLinkTag = 'a';

const getVariantClasses = (variant: Required<VsfLinkProps>['variant']) => {
  switch (variant) {
    case VsfLinkVariant.secondary:
      return 'initial:text-neutral-900 underline hover:text-primary-700 active:text-primary-800 visited:text-primary-800';
    case VsfLinkVariant.primary:
    default:
      return 'text-primary-700 hover:underline active:text-primary-800 active:underline visited:text-primary-800 visited:underline';
  }
};

const VsfLink = polymorphicForwardRef<typeof defaultLinkTag, VsfLinkProps>((props, ref) => {
  const { as, className, children, variant = VsfLinkVariant.primary, ...attributes } = props;
  const Tag = as || defaultLinkTag;

  return (
    <Tag ref={ref} className={classNames(getVariantClasses(variant), className)} data-testid="link" {...attributes}>
      {children}
    </Tag>
  );
});

export default VsfLink;
