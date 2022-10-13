import classNames from 'classnames';
import { VsfFooterLabelType } from '@sfui/types/_components';
import { VsfFooterLabelProps } from './types';

export default function VsfFooterLabel({
  type = VsfFooterLabelType.subcategory,
  children,
  className,
}: VsfFooterLabelProps) {
  return <span className={classNames(`vsf-footer__label--${type}`, className)}>{children}</span>;
}
