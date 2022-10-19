import { forwardRef } from 'react';
import classNames from 'classnames';
import type { VsfNavbarTopItemProps } from './types';
import { VsfNavbarTopTypes } from './types';

const VsfNavbarTopItem = forwardRef<unknown, VsfNavbarTopItemProps>(
  ({ className, filled, children, type, link, ariaLabel, onClick, ...attributes }, ref) => {
    let TagInternal;
    if (link) {
      TagInternal = 'a';
    } else {
      TagInternal = 'button';
    }

    const classes = classNames(
      {
        'vsf-navbar-top__action-item--branded vsf-navbar-top__action-item': type === VsfNavbarTopTypes.action && filled,
        'vsf-navbar-top__action-item': type === VsfNavbarTopTypes.action && !filled,
        'vsf-navbar-top__menu-item--branded vsf-navbar-top__menu-item': type === VsfNavbarTopTypes.menu && filled,
        'vsf-navbar-top__menu-item': type === VsfNavbarTopTypes.menu && !filled,
      },
      className,
    );
    return (
      <TagInternal
        onClick={onClick}
        ref={ref}
        className={classes}
        {...(link ? { href: link } : {})}
        aria-label={ariaLabel}
        {...attributes}
      >
        {children}
      </TagInternal>
    );
  },
);

export default VsfNavbarTopItem;
