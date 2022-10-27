import classNames from 'classnames';
import type { VsfNavbarTopProps } from './types';

export default function VsfNavbarTop({ className, children, filled, ...attributes }: VsfNavbarTopProps) {
  return (
    <header className={classNames('vsf-navbar-top', { 'vsf-navbar-top--branded': filled }, className)} {...attributes}>
      <div className="vsf-navbar-top__container">{children}</div>
    </header>
  );
}
