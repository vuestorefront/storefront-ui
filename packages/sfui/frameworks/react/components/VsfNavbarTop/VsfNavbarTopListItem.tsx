import classNames from 'classnames';
import { VsfNavbarTopDefaultProps } from './types';

export default function VsfNavbarTopListItem({ children, className }: VsfNavbarTopDefaultProps) {
  return <li className={classNames('vsf-navbar-top__list-item', className)}>{children}</li>;
}
