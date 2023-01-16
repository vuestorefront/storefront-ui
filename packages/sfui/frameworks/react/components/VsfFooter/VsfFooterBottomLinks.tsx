import classNames from 'classnames';
import type { VsfFooterDefaultProps } from './types';

export default function VsfFooterBottomLinks({ children, className }: VsfFooterDefaultProps) {
  return <div className={classNames('vsf-footer__bottom-links', className)}>{children}</div>;
}
