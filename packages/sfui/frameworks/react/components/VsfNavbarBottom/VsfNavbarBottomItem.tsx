import { forwardRef } from 'react';
import classNames from 'classnames';
import type { VsfNavbarBottomItemProps } from './types';

// TODO extract unstyled Base-Button Component

const VsfNavbarBottomItem = forwardRef<unknown, VsfNavbarBottomItemProps>(
  (
    {
      className, //
      slotIcon,
      tag: Tag = 'button',
      active,
      label,
      link,
      ariaLabel,
      onClick,
      ...attributes
    },
    ref,
  ) => {
    let TagInternal = Tag;
    if (link && Tag === 'button') {
      TagInternal = 'a';
    }

    const classes = classNames(
      'vsf-navbar-bottom-item',
      {
        'vsf-navbar-bottom-item--active': active,
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
        <span className="vsf-navbar-bottom-item__content">
          <span className="vsf-navbar-bottom-item__icon">{slotIcon}</span>
          <span className="vsf-navbar-bottom-item__label">{label}</span>
        </span>
      </TagInternal>
    );
  },
);

export default VsfNavbarBottomItem;
