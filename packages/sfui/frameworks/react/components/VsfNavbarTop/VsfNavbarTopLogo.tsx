import classNames from 'classnames';
import { VsfNavbarTopLogoProps } from './types';

export default function VsfNavbarTopLogo({ children, className }: VsfNavbarTopLogoProps) {
  return <div className={classNames('vsf-navbar-top__logo', className)}>{children}</div>;
}
