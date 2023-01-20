import { MouseEvent as ReactMouseEvent, useRef, useState } from 'react';
import { useClickAway, useWindowSize } from 'react-use';
import { VsfIconHome, VsfIconMoreHorizontal } from '../VsfIcons';
import { VsfLink, VsfLinkVariant } from '../VsfLink';
import { VsfDropdownInternal } from '../VsfDropdownInternal';

import type { VsfBreadcrumbsProps, VsfBreadcrumbType } from './types';
import { VsfIconSize } from '../VsfIconBase/types';

function VsfBreadcrumbs({
  slotIcon,
  breadcrumbs = [],
  withIcon = false,
  homeIconAriaLabel,
  homeIconLink,
  moreButtonAriaLabel,
}: VsfBreadcrumbsProps): JSX.Element {
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const { width } = useWindowSize();
  const isWidthMobile: boolean = width < 640;

  const visibleBreadcrumbs: VsfBreadcrumbType[] = isWidthMobile
    ? breadcrumbs.slice(breadcrumbs.length - 1)
    : breadcrumbs;
  const dropdownBreadcrumbs: VsfBreadcrumbType[] = isWidthMobile
    ? breadcrumbs.slice(0, breadcrumbs.length - visibleBreadcrumbs.length)
    : [];

  const handleButtonClick = (e: ReactMouseEvent): void => {
    e.stopPropagation();
    setDropdownOpened((dropdownOpen) => !dropdownOpen);
  };

  useClickAway(dropdownRef, () => {
    setDropdownOpened(false);
  });

  return (
    <nav className="vsf-breadcrumbs" ref={navRef}>
      <ol className="vsf-breadcrumbs__ol">
        <li className="vsf-breadcrumbs__item" ref={dropdownRef}>
          <VsfDropdownInternal
            open={dropdownOpened}
            slotTrigger={
              isWidthMobile ? (
                <button
                  className="vsf-breadcrumbs__dropdown-button peer"
                  aria-label={moreButtonAriaLabel}
                  onClick={handleButtonClick}
                  type="button"
                >
                  <VsfIconMoreHorizontal size={VsfIconSize.sm} className="vsf-breadcrumbs__item-button-icon" />
                </button>
              ) : null
            }
          >
            <ul className="vsf-breadcrumbs__dropdown-list">
              {dropdownBreadcrumbs.map(({ name, link }) => (
                <li className="vsf-breadcrumbs__dropdown-list-item" aria-label={name} key={name}>
                  <VsfLink link={link} variant={VsfLinkVariant.none}>
                    <a className="vsf-breadcrumbs__dropdown-list-button">{name}</a>
                  </VsfLink>
                </li>
              ))}
            </ul>
          </VsfDropdownInternal>
        </li>
        {withIcon ? (
          <li className="vsf-breadcrumbs__item">
            <VsfLink
              link={homeIconLink}
              variant={VsfLinkVariant.none}
              aria-label={homeIconAriaLabel}
              className="vsf-breadcrumbs__item-button--home"
            >
              <span className="vsf-breadcrumbs__item-button-icon--home">
                {slotIcon || <VsfIconHome size={VsfIconSize.sm} />}
              </span>
            </VsfLink>
          </li>
        ) : null}
        {visibleBreadcrumbs.map(({ name, link }) => (
          <li className="vsf-breadcrumbs__item" aria-label={name} key={name}>
            <VsfLink link={link} variant={VsfLinkVariant.none} className="vsf-breadcrumbs__item-button">
              {name}
            </VsfLink>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default VsfBreadcrumbs;
