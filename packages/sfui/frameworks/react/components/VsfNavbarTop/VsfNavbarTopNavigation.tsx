import classNames from 'classnames';
import { VsfNavbarTopNavigationProps } from './types';

export default function VsfNavbarTopNavigation({ children, className }: VsfNavbarTopNavigationProps) {
  return <div className={classNames('vsf-navbar-top__menu-wrapper', className)}>{children}</div>;
}
