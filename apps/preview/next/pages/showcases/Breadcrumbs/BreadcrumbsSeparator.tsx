import { useState } from 'react';
import { SfDropdown, SfButton, SfLink, SfIconMoreHoriz, SfIconChevronRight } from '@storefront-ui/react';
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

  const toggle = () => {
    setDropdownOpened(!dropdownOpened);
  };

  return (
    <nav className="flex items-center text-sm font-normal font-body">
      <ol className="flex w-auto leading-none group md:flex-wrap">
        <li className="flex items-center sm:hidden text-neutral-500">
          <SfDropdown
            trigger={
              <SfButton
                className="relative w-5 h-5 !p-0 rounded-sm outline-secondary-600 hover:bg-transparent active:bg-transparent"
                aria-label="More breadcrumbs"
                type="button"
                variant="tertiary"
                slotPrefix={
                  <SfIconMoreHoriz
                    size="sm"
                    className="text-neutral-500 hover:text-primary-700 active:text-primary-800 active:bg-transparent"
                  />
                }
                square
                onClick={toggle}
              />
            }
            open={dropdownOpened}
            strategy="absolute"
            placement="bottom-start"
            onClose={close}
          >
            <div className="px-4 py-2 rounded-md shadow-md border-neutral-100">
              {breadcrumbs.map(({ name, link }) => (
                <li className="py-2 last-of-type:hidden" key={name}>
                  <SfLink
                    href={link}
                    variant="secondary"
                    className="leading-5 no-underline text-inherit hover:underline active:underline whitespace-nowrap outline-secondary-600"
                  >
                    {name}
                  </SfLink>
                </li>
              ))}
            </div>
          </SfDropdown>
        </li>
        {breadcrumbs.map((item, index) => (
          <li
            data-icon="url('@assets/chevron_right.svg')"
            className="hidden peer sm:flex text-neutral-500 last-of-type:flex last-of-type:text-neutral-900 last-of-type:font-medium"
            key={item.name}
          >
            {index !== 0 ? <SfIconChevronRight size="sm" className="mx-0.5 text-disabled-500" /> : null}
            <SfLink
              href={item.link}
              variant="secondary"
              className="leading-5 no-underline hover:underline active:underline whitespace-nowrap outline-secondary-600 text-inherit"
            >
              {item.name}
            </SfLink>
          </li>
        ))}
      </ol>
    </nav>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
