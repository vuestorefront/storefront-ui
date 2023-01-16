import { forwardRef } from 'react';
import classNames from 'classnames';
import type { VsfNavbarBottomItemProps } from './types';
import { VsfLink, VsfLinkVariant } from '../VsfLink';
// TODO extract unstyled Base-Button Component

const VsfNavbarBottomItem = forwardRef<HTMLAnchorElement & HTMLButtonElement, VsfNavbarBottomItemProps>(
  (
    { className, slotIcon, active, label, link, tag = 'button', ariaLabel, onClick, ...attributes },
    ref,
  ): JSX.Element => {
    const TagInternal = link && tag === 'button' ? VsfLink : 'button';
    return (
      <TagInternal
        variant={VsfLinkVariant.none}
        onClick={onClick}
        ref={ref}
        className={classNames(
          'vsf-navbar-bottom-item',
          {
            'vsf-navbar-bottom-item--active': active,
          },
          className,
        )}
        {...(link ? { link } : {})}
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
