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
  const rootClasses = classNames('vsf-navbar-bottom__root');
  return (
    <nav className={classes} {...attributes}>
      <div className={rootClasses}>{children}</div>
    </nav>
  );
}
