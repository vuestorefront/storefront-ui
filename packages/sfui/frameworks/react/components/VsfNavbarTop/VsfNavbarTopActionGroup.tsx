import classNames from 'classnames';
import { VsfNavbarTopDefaultProps } from './types';

export default function VsfNavbarTopActions({ children, className }: VsfNavbarTopDefaultProps) {
  return (
    <div className={classNames('vsf-navbar-top__action-group', className)}>
      <div className="vsf-navbar-top__action-group__wrapper">{children}</div>
    </div>
  );
}
