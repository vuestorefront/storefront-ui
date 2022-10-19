import classNames from 'classnames';
import { VsfNavbarTopActionsProps } from './types';

export default function VsfNavbarTopActions({ children, className }: VsfNavbarTopActionsProps) {
  return <ul className={classNames('vsf-navbar-top__actions', className)}>{children}</ul>;
}
