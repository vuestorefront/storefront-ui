import classNames from 'classnames';
import { VsfNavbarTopSearchProps } from './types';

export default function VsfNavbarTopSearch({ children, className }: VsfNavbarTopSearchProps) {
  return <div className={classNames('vsf-navbar-top__search', className)}>{children}</div>;
}
