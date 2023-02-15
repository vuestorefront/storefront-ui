import { useState } from 'react';
import { VsfIconHome, VsfIconMoreHoriz } from '../VsfIcons';
import { VsfLink, VsfLinkVariant } from '../VsfLink';
import { VsfDropdownInternal, VsfDropdownInternalPlacement } from '../VsfDropdownInternal';

import type { VsfBreadcrumbsProps } from './types';
import { VsfIconSize } from '../VsfIconBase/types';

function VsfBreadcrumbs({
  slotIcon,
  breadcrumbs = [],
  withIcon = false,
  ariaLabelHomeIcon,
  ariaLabelHomeButton,
}: VsfBreadcrumbsProps): JSX.Element {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  return (
    <nav className="vsf-breadcrumbs">
      <ol className="vsf-breadcrumbs__ol">
        <li className="vsf-breadcrumbs__item">
          <VsfDropdownInternal
            open={dropdownOpened}
            onOpenUpdate={setDropdownOpened}
            placement={VsfDropdownInternalPlacement['bottom-start']}
            slotTrigger={
              <button className="vsf-breadcrumbs__dropdown-button" aria-label={ariaLabelHomeButton} type="button">
                <VsfIconMoreHoriz size={VsfIconSize.sm} className="vsf-breadcrumbs__item-link-icon" />
              </button>
            }
          >
            <ul className="vsf-breadcrumbs__dropdown-list">
              {breadcrumbs.map(({ name, link }) => (
                <li className="vsf-breadcrumbs__dropdown-list-item" aria-label={name} key={name}>
                  <VsfLink link={link} variant={VsfLinkVariant.none}>
                    <a className="vsf-breadcrumbs__dropdown-list-button">{name}</a>
                  </VsfLink>
                </li>
              ))}
            </ul>
          </VsfDropdownInternal>
        </li>
        {breadcrumbs.map((item) => (
          <li className="vsf-breadcrumbs__item" key={item.name}>
            {withIcon && breadcrumbs.indexOf(item) === 0 ? (
              <VsfLink
                link={item.link}
                variant={VsfLinkVariant.none}
                aria-label={ariaLabelHomeIcon}
                className="vsf-breadcrumbs__item-link--home"
              >
                <span className="vsf-breadcrumbs__item-link-icon--home">
                  {slotIcon || <VsfIconHome size={VsfIconSize.sm} />}
                </span>
              </VsfLink>
            ) : (
              <VsfLink link={item.link} variant={VsfLinkVariant.none} className="vsf-breadcrumbs__item-link">
                {item.name}
              </VsfLink>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default VsfBreadcrumbs;
