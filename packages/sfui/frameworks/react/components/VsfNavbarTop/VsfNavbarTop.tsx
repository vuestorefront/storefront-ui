import classNames from 'classnames';
import type { VsfNavbarTopProps } from './types';

export default function VsfNavbarTop({ className, filled, children }: VsfNavbarTopProps) {
  return (
    <header className={classNames(className, 'vsf-navbar-top', { 'vsf-navbar-top--branded': filled })}>
      {children}
    </header>
  );
}
