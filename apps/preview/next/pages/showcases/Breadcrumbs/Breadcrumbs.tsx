import { useState } from 'react';
import classNames from 'classnames';
import { VsfDropdown, VsfLink, VsfIconMoreHoriz } from '@storefront-ui/react';
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
    <nav className="inline-flex items-center text-sm font-normal text-gray-500 font-body">
      <ol className="flex w-auto leading-none group md:flex-wrap">
        <li className="hidden sm:block">
          <VsfDropdown
            trigger={
              <button
                className="relative block leading-5 rounded-sm sm:hidden outline-secondary-600"
                aria-label="More button"
                type="button"
              >
                <VsfIconMoreHoriz size="sm" className="text-gray-500 hover:text-primary-700 active:text-primary-800" />
              </button>
            }
            open={dropdownOpened}
            strategy="absolute"
            placement="bottom-start"
            onClose={close}
          >
            {breadcrumbs.map(({ name, link }) => (
              <li className="py-2" aria-label={name} key={name}>
                <VsfLink href={link} variant="primary">
                  <a className="leading-5 align-middle rounded-sm whitespace-nowrap hover:text-primary-700 hover:underline active:underline active:text-primary-800 outline-secondary-600">
                    {name}
                  </a>
                </VsfLink>
              </li>
            ))}
          </VsfDropdown>
        </li>
        {breadcrumbs.map((item) => (
          <li
            className="hidden sm:block group-[:nth-of-type(odd)]:before:content-['/'] group-[:nth-of-type(odd)]:mx-2"
            key={item.name}
          >
            <VsfLink
              href={item.link}
              variant="primary"
              className="leading-5 !text-neutral-900 whitespace-nowrap hover:text-primary-700 hover:underline active:text-primary-800 outline-secondary-600"
            >
              {item.name}
            </VsfLink>
          </li>
        ))}
      </ol>
    </nav>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
