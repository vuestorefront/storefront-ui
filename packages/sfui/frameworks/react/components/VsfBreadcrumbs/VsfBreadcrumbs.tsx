import { MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useClickAway } from 'react-use';
import { VsfIconHome, VsfIconMoreHorizontal } from '../VsfIcons';

import type { VsfBreadcrumbsProps } from './types';
import { VsfIconSize } from '../VsfIconBase/types';

function VsfBreadcrumbs({ slotIcon, breadcrumbs = [], withIcon = false }: VsfBreadcrumbsProps): JSX.Element {
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [newWindowWidth, setNewWindowWidth] = useState(0);
  const [dropdownLength, setDropdownLength] = useState(0);
  /* TODO: use css-variable when tokens migrated */
  const padding = 40;

  const handleButtonClick = (e: ReactMouseEvent): void => {
    e.stopPropagation();
    setDropdownOpened((dropdownOpen) => !dropdownOpen);
  };
  const onWindowResize = (): void => {
    setNewWindowWidth(window.innerWidth);
  };
  const visibleBreadcrumbs = () => breadcrumbs.slice(0, breadcrumbs.length - dropdownLength);
  const dropdownBreadcrumbs = () => breadcrumbs.slice(breadcrumbs.length - dropdownLength, breadcrumbs.length);

  useClickAway(dropdownRef, () => {
    setDropdownOpened(false);
  });

  useEffect(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);
  useEffect(() => {
    const breadcrumbsWidthVal = navRef.current?.offsetWidth || 0;
    const firstElementWidth = navRef.current?.children[0]?.children[1]?.clientWidth || 0;
    const offsetLeftVal = navRef.current?.offsetLeft || 0;
    if (newWindowWidth <= breadcrumbsWidthVal + padding + offsetLeftVal) {
      setDropdownLength((length) => length + 1);
    }
    if (newWindowWidth - padding > breadcrumbsWidthVal + firstElementWidth + padding + offsetLeftVal) {
      setDropdownLength((length) => (length <= 0 ? 0 : length - 1));
    }
  }, [newWindowWidth, breadcrumbs]);

  return (
    <nav className="vsf-breadcrumbs" ref={navRef}>
      <ol className="vsf-breadcrumbs__ol">
        <li className="vsf-breadcrumbs__item" ref={dropdownRef}>
          {dropdownLength ? (
            <>
              <button
                className="vsf-breadcrumbs__dropdown-button peer"
                aria-label="Show previous categories"
                onClick={handleButtonClick}
                type="button"
              >
                <VsfIconMoreHorizontal size={VsfIconSize.sm} className="vsf-breadcrumbs__item-button-icon" />
              </button>
              {dropdownOpened ? (
                <ul className="vsf-breadcrumbs__dropdown-list">
                  {dropdownBreadcrumbs().map(({ name, link }) => (
                    <li className="vsf-breadcrumbs__dropdown-list-item" aria-label={name} key={name}>
                      {/* TODO: remove this link and make it possible to adjust from outside */}
                      <Link href={link}>
                        <a className="vsf-breadcrumbs__dropdown-list-button">{name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </>
          ) : null}
        </li>
        {!dropdownLength && withIcon ? (
          <li aria-label="Home" className="vsf-breadcrumbs__item">
            <Link href="/apps/web/pages">
              <a className="vsf-breadcrumbs__item-button--home">
                <span className="vsf-breadcrumbs__item-button-icon--home">
                  {slotIcon || <VsfIconHome size={VsfIconSize.sm} />}
                </span>
              </a>
            </Link>
          </li>
        ) : null}
        {visibleBreadcrumbs().map(({ name, link }) => (
          <li className="vsf-breadcrumbs__item" aria-label={name} key={name}>
            <Link href={link}>
              <a className="vsf-breadcrumbs__item-button">{name}</a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default VsfBreadcrumbs;
