import classNames from 'classnames';
import { VsfFooterLabelType } from '@storefront-ui/shared/types/index';
import type { VsfFooterLabelProps } from './types';

export default function VsfFooterLabel({
  type = VsfFooterLabelType.subcategory,
  children,
  className,
}: VsfFooterLabelProps) {
  return <p className={classNames(`vsf-footer__label--${type}`, className)}>{children}</p>;
}
