import { forwardRef } from 'react';
import classNames from 'classnames';
import type { VsfNavbarBottomItemProps } from './types';

// TODO extract unstyled Base-Button Component

const VsfNavbarBottomItem = forwardRef<unknown, VsfNavbarBottomItemProps>(
  (
    {
      className, //
      icon: Icon,
      tag: Tag = 'button',
      active,
      badge,
      dotBadge,
      label,
      link,
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
    const badgeClass = classNames('vsf-navbar-bottom-item-badge', {
      'vsf-navbar-bottom-item-badge--dot': dotBadge,
    });
    return (
      <TagInternal onClick={onClick} ref={ref} className={classes} {...(link ? { href: link } : {})} {...attributes}>
        <span className="vsf-navbar-bottom-item__content">
          <div className={badgeClass}>
            <Icon className="vsf-navbar-bottom-item__icon" />
            {badge && (
              <div className="vsf-navbar-bottom-item-badge__wrapper">
                <div className="vsf-navbar-bottom-item-badge__badge">
                  <span>{badge}</span>
                </div>
              </div>
            )}
          </div>
          <span className="vsf-navbar-bottom-item__label">{label}</span>
        </span>
      </TagInternal>
    );
  },
);

export default VsfNavbarBottomItem;
