import { useState } from 'react';
import { VsfDropdown, VsfButton, VsfLink, VsfIconMoreHoriz, VsfIconChevronRight } from '@storefront-ui/react';
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
    <nav className="inline-flex items-center text-sm font-normal font-body">
      <ol className="flex w-auto leading-none group md:flex-wrap">
        <li className="flex items-center sm:hidden text-neutral-500">
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
            data-icon="url('@assets/chevron_right.svg')"
            className="hidden peer sm:flex text-neutral-500 last-of-type:flex last-of-type:text-neutral-900 last-of-type:font-medium"
            key={item.name}
          >
            {breadcrumbs.indexOf(item) === 0 ? null : (
              <VsfIconChevronRight size="sm" className="mx-0.5 text-disabled-500" />
            )}
            <VsfLink
              href={item.link}
              variant="secondary"
              className="leading-5 no-underline hover:underline active:underline whitespace-nowrap outline-secondary-600 text-inherit"
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
