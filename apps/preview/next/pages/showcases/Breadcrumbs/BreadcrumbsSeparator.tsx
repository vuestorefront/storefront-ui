import { useState } from 'react';
import classNames from 'classnames';
import { VsfDropdown, VsfLink, VsfIconMoreHoriz, VsfIconHome } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

const breadcrumbs = [
  { name: 'Next link', link: '/examples/ListOfIcons' },
  { name: 'Page 2', link: '/page1' },
  { name: 'Page 3', link: '/page1' },
  { name: 'Page 4', link: '/page1' },
  { name: 'Page 5', link: '/page1' },
];
export function Showcase() {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const close = () => {
    setDropdownOpened(false);
  };

  return (
    <nav className="vsf-breadcrumbs">
      <ol className="vsf-breadcrumbs__ol">
        <li className="vsf-breadcrumbs__item">
          <VsfDropdown
            trigger={
              <button className="vsf-breadcrumbs__dropdown-button" aria-label="More button" type="button">
                <VsfIconMoreHoriz size="sm" className="vsf-breadcrumbs__item-link-icon" />
              </button>
            }
            open={dropdownOpened}
            strategy="absolute"
            placement="bottom-start"
            onClose={close}
          >
            {breadcrumbs.map(({ name, link }) => (
              <li className="vsf-breadcrumbs__dropdown-list-item" aria-label={name} key={name}>
                <VsfLink href={link} variant="primary">
                  <a className="vsf-breadcrumbs__dropdown-list-button">{name}</a>
                </VsfLink>
              </li>
            ))}
          </VsfDropdown>
        </li>
        {breadcrumbs.map((item) => (
          <li className="vsf-breadcrumbs__item" key={item.name}>
            {withIcon && breadcrumbs.indexOf(item) === 0 ? (
              <VsfLink
                href={item.link}
                variant="primary"
                aria-label="Home icon"
                className="vsf-breadcrumbs__item-link--home"
              >
                <span className="vsf-breadcrumbs__item-link-icon--home">
                  {slotIcon || <VsfIconHome size={VsfIconSize.sm} />}
                </span>
              </VsfLink>
            ) : (
              <VsfLink href={item.link} variant={VsfLinkVariant.none} className="vsf-breadcrumbs__item-link">
                {item.name}
              </VsfLink>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
