import classNames from 'classnames';
import { VsfNavbarTopDefaultProps } from './types';

export default function VsfNavbarTopActions({ children, className }: VsfNavbarTopDefaultProps) {
  return <ul className={classNames('vsf-navbar-top__actions', className)}>{children}</ul>;
}
