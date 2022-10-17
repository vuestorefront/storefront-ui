import { forwardRef } from 'react';
import classNames from 'classnames';
import type { VsfNavbarTopItemProps } from './types';

const VsfNavbarTopItem = forwardRef<unknown, VsfNavbarTopItemProps>(
  ({ className, slotIcon, variant, type, label, link, ariaLabel, onClick, ...attributes }, ref) => {
    let TagInternal;
    if (link) {
      TagInternal = 'a';
    } else {
      TagInternal = 'button';
    }

    const classes = classNames(
      {
        'vsf-navbar-top__action-item--branded vsf-navbar-top__action-item': type === 'action' && variant === 'branded',
        'vsf-navbar-top__action-item': type === 'action' && variant !== 'branded',
        'vsf-navbar-top__menu-item--branded vsf-navbar-top__menu-item': type === 'menu' && variant === 'branded',
        'vsf-navbar-top__menu-item': type === 'menu' && variant !== 'branded',
      },
      className,
    );
    return (
      <li>
        <TagInternal
          onClick={onClick}
          ref={ref}
          className={classes}
          {...(link ? { href: link } : {})}
          aria-label={ariaLabel}
          {...attributes}
        >
          <span className="vsf-navbar-top__item__icon">{slotIcon}</span>
          <span className="vsf-navbar-top__item__label">{label}</span>
        </TagInternal>
      </li>
    );
  },
);

export default VsfNavbarTopItem;
