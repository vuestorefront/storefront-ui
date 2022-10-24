import classNames from 'classnames';
import { VsfNavbarTopDefaultProps } from './types';

export default function VsfNavbarTopSearch({ children, className }: VsfNavbarTopDefaultProps) {
  return <div className={classNames('vsf-navbar-top__search', className)}>{children}</div>;
}
