import classNames from 'classnames';
import { VsfNavbarTopDefaultProps } from './types';

export default function VsfNavbarTopNavigation({ children, className }: VsfNavbarTopDefaultProps) {
  return <div className={classNames('vsf-navbar-top__menu-wrapper', className)}>{children}</div>;
}
