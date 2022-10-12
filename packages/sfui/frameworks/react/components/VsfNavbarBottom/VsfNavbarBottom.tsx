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
  const classes = classNames(
    'vsf-navbar-bottom',
    {
      'vsf-navbar-bottom--absolute': absolute,
      'vsf-navbar-bottom--no-labels': hideLabels,
      'vsf-navbar-bottom--filled': filled,
    },
    className,
  );
  return (
    <nav className={classes} {...attributes}>
      <div className="vsf-navbar-bottom__root">{children}</div>
    </nav>
  );
}
