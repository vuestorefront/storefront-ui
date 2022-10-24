import classNames from 'classnames';
import { VsfNavbarTopDefaultProps } from './types';

export default function VsfNavbarTopListItem({ children, className }: VsfNavbarTopDefaultProps) {
  return <ul className={classNames('vsf-navbar-top__menu', className)}>{children}</ul>;
}
