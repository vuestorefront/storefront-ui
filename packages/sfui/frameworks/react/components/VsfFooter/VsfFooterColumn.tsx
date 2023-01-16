import classNames from 'classnames';
import { VsfFooterColumnType } from '@storefront-ui/shared';
import type { VsfFooterColumnProps } from './types';

export default function VsfFooterColumn({ type = VsfFooterColumnType.top, children, className }: VsfFooterColumnProps) {
  return <div className={classNames(`vsf-footer__column--${type}`, className)}>{children}</div>;
}
