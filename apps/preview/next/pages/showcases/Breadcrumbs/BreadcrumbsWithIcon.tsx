import { useState } from 'react';
import { VsfDropdown, VsfButton, VsfLink, VsfIconMoreHoriz, VsfIconHome } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

const breadcrumbs = [
  {
    name: 'Home',
    link: '/page',
  },
  { name: 'Page 2', link: '/page' },
  { name: 'Page 3', link: '/page' },
  { name: 'Page 4', link: '/page' },
  { name: 'Page 5', link: '/page' },
];

export function Showcase() {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const close = () => {
    setDropdownOpened(false);
  };

  return (
    <nav className="inline-flex text-sm font-normal font-body">
      <ol className="flex items-center w-auto leading-none group md:flex-wrap">
        <li className="flex sm:hidden">
          <VsfDropdown
            trigger={
              <VsfButton
                className="relative w-5 h-5 !p-0 rounded-sm outline-secondary-600 hover:bg-transparent active:bg-transparent"
                aria-label="More breadcrumbs"
                type="button"
                variant="tertiary"
                slotPrefix={
                  <VsfIconMoreHoriz
                    size="sm"
                    className="text-neutral-500 hover:text-primary-700 active:text-primary-800 active:bg-transparent"
                  />
                }
                square
                onClick={() => setDropdownOpened(!dropdownOpened)}
              />
            }
            open={dropdownOpened}
            strategy="fixed"
            placement="bottom-start"
            onClose={close}
          >
            <div className="px-4 py-2 rounded-md shadow-md border-neutral-100">
              {breadcrumbs.map(({ name, link }) => (
                <li className="py-2 last-of-type:hidden" aria-label={name} key={name}>
                  <VsfLink
                    href={link}
                    variant="secondary"
                    className="leading-5 no-underline text-inherit hover:underline active:underline whitespace-nowrap outline-secondary-600"
                  >
                    {name}
                  </VsfLink>
                </li>
              ))}
            </div>
          </VsfDropdown>
        </li>
        {breadcrumbs.map((item) => (
          <li
            className="peer hidden sm:block peer-[:nth-of-type(even)]:before:content-['/'] peer-[:nth-of-type(even)]:before:px-2 last-of-type:flex last-of-type:before:font-normal last-of-type:before:text-neutral-500 last-of-type:text-neutral-900 last-of-type:font-medium"
            key={item.name}
          >
            {breadcrumbs.indexOf(item) === 0 ? (
              <VsfLink
                href={item.link}
                variant="secondary"
                className="inline-flex leading-5 no-underline hover:underline active:underline whitespace-nowrap outline-secondary-600 text-neutral-500"
              >
                <VsfIconHome size="sm" />
              </VsfLink>
            ) : (
              <VsfLink
                href={item.link}
                variant="secondary"
                className="leading-5 no-underline hover:underline active:underline whitespace-nowrap outline-secondary-600"
              >
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
