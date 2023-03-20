import { useState } from 'react';
import classNames from 'classnames';
import { ShowcasePageLayout } from '../../showcases';
import { VsfDropdown, VsfLink, VsfIconMoreHoriz, VsfIconHome } from '@storefront-ui/react';

export function Showcase() {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  breadcrumbs: [
    { name: 'Next link', link: '/examples/ListOfIcons' },
    { name: 'Page 2', link: '/page1' },
    { name: 'Page 3', link: '/page1' },
    { name: 'Page 4', link: '/page1' },
    { name: 'Page 5', link: '/page1' },
  ],
    ariaLabelHomeIcon: 'Home icon',
    ariaLabelHomeButton: 'More button',

  return (
    <nav className="vsf-breadcrumbs">
      <li className="vsf-breadcrumbs__ol">
        <li className="vsf-breadcrumbs__item">
          <VsfDropdown
            trigger={<button className="vsf-breadcrumbs__dropdown-button" aria-label={ariaLabelHomeButton} type="button">
              <VsfIconMoreHoriz size="sm" className="vsf-breadcrumbs__item-link-icon" />
            </button>}
            open={open}
            strategy="absolute"
            placement="bottom-start"
            onClose={close}
          >
            {breadcrumbs.map(({name, link}) => (
            <li className="vsf-breadcrumbs__dropdown-list-item" aria-label={name} key={name}>
              <VsfLink link={link} variant={VsfLinkVariant.none}>
                <a className="vsf-breadcrumbs__dropdown-list-button">{name}</a>
              </VsfLink>
            </li>
              ))}
          </VsfDropdown>
        </li>
        <li className="vsf-breadcrumbs__item" key={item.name}>
        {breadcrumbs.indexOf(item) === 0 ? (
          <VsfLink
            href={item.link}
            variant="primary"
            aria-label="Home icon"
            className="vsf-breadcrumbs__item-link--home"
          >
            <span className="vsf-breadcrumbs__item-link-icon--home">
              <VsfIconHome size="sm" />
            </span>
          </VsfLink>
        ) : (
          <VsfLink href={item.link} variant="primary" className="vsf-breadcrumbs__item-link">
            {item.name}
          </VsfLink>
        )}
        </li>
      </ol>
    </nav>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
