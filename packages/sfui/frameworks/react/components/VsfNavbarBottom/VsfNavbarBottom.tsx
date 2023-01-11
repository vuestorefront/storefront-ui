import classNames from 'classnames';
import type { VsfNavbarBottomProps } from './types';

export default function VsfNavbarBottom({
  children,
  absolute,
  className,
  filled,
  hideLabels,
  ...attributes
}: VsfNavbarBottomProps) {
  return (
    <nav
      className={classNames(
        'vsf-navbar-bottom',
        {
          'vsf-navbar-bottom--absolute': absolute,
          'vsf-navbar-bottom--no-labels': hideLabels,
          'vsf-navbar-bottom--filled': filled,
        },
        className,
      )}
      {...attributes}
    >
      {children}
    </nav>
  );
}
