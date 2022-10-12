import classNames from 'classnames';
import { VsfFooterDefaultProps } from './types';

export default function VsfFooterCategoriesColumn({ children, className }: VsfFooterDefaultProps) {
  return <div className={classNames('vsf-footer__categories', className)}>{children}</div>;
}
