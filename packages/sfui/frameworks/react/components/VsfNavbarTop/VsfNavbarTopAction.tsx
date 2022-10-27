import { forwardRef } from 'react';
import classNames from 'classnames';
import type { VsfNavbarTopActionProps } from './types';

const VsfNavbarBottomItem = forwardRef<unknown, VsfNavbarTopActionProps>(
  (
    {
      className, //
      slotIcon,
      tag: Tag = 'button',
      link,
      ariaLabel,
      onClick,
      children,
      icon,
      ...attributes
    },
    ref,
  ) => {
    let TagInternal = Tag;
    if (link && Tag === 'button') {
      TagInternal = 'a';
    }

    const classes = classNames('vsf-navbar-top-action', { 'vsf-navbar-top-action--icon': icon }, className);
    return (
      <TagInternal
        className={classes}
        onClick={onClick}
        ref={ref}
        role={Tag === 'a' ? 'button' : undefined}
        tabIndex={Tag === 'a' ? 0 : undefined}
        {...(link ? { href: link } : {})}
        aria-label={ariaLabel}
        {...attributes}
      >
        {slotIcon && <span className="vsf-navbar-top-action__icon">{slotIcon}</span>}
        {children}
      </TagInternal>
    );
  },
);

export default VsfNavbarBottomItem;
