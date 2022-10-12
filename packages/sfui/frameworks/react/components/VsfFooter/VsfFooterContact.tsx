import classNames from 'classnames';
import { VsfFooterDefaultProps } from './types';

export default function VsfFooterContact({ children, className }: VsfFooterDefaultProps) {
  return <div className={classNames('vsf-footer__contact', className)}>{children}</div>;
}
