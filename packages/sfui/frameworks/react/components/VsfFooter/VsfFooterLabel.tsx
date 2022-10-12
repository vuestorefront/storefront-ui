import classNames from 'classnames';
import { VsfFooterLabelProps, VsfFooterLabelType } from './types';

export default function VsfFooterLabel({
  type = VsfFooterLabelType.subcategory,
  children,
  className,
}: VsfFooterLabelProps) {
  return <span className={classNames(`vsf-footer__label--${type}`, className)}>{children}</span>;
}
