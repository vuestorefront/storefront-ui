import classNames from 'classnames';
import { VsfNavbarTopDefaultProps } from './types';

export default function VsfNavbarTopLogo({ children, className }: VsfNavbarTopDefaultProps) {
  return <div className={classNames('vsf-navbar-top__logo', className)}>{children}</div>;
}
