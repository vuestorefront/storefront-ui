import classNames from 'classnames';
import { VsfNavbarTopListItemProps } from './types';

export default function VsfNavbarTopListItem({ children, className }: VsfNavbarTopListItemProps) {
  return <li className={classNames('vsf-navbar-top__list-item', className)}>{children}</li>;
}
