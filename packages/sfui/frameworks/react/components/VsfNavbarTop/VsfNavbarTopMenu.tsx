import classNames from 'classnames';
import { VsfNavbarTopMenuProps } from './types';

export default function VsfNavbarTopListItem({ children, className }: VsfNavbarTopMenuProps) {
  return <ul className={classNames('vsf-navbar-top__menu', className)}>{children}</ul>;
}
