import { forwardRef } from 'react';
import classNames from 'classnames';
import type { VsfNavbarTopItemProps } from './types';

const VsfNavbarTopItem = forwardRef<unknown, VsfNavbarTopItemProps>(
  ({ className, filled, children, onClick, ...attributes }) => {
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
  },
);

export default VsfNavbarTopItem;
