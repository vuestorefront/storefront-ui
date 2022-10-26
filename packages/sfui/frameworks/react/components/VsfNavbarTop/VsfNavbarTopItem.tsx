import classNames from 'classnames';
import type { VsfNavbarTopItemProps } from './types';

export default function VsfNavbarTopItem({
  className,
  filled,
  children,
  onClick,
  ...attributes
}: VsfNavbarTopItemProps) {
  const classes = classNames(
    {
      'vsf-navbar-top__item--branded vsf-navbar-top__item': filled,
      'vsf-navbar-top__item': !filled,
    },
    className,
  );
  return (
    <div className={classes} {...attributes}>
      {children}
    </div>
  );
}
