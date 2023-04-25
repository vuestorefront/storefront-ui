import { component$, useSignal } from '@builder.io/qwik';
import { SfButton, SfDropdown, SfIconChevronRight, SfIconMoreHoriz, SfLink } from '@storefront-ui/qwik';

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

export default component$(() => {
  const dropdownOpenedSignal = useSignal(false);

  return (
    <nav class="flex items-center text-sm font-normal font-body">
      <ol class="flex w-auto leading-none group md:flex-wrap">
        <li class="flex items-center sm:hidden text-neutral-500">
          <SfDropdown
            open={dropdownOpenedSignal.value}
            // TODO check missing props
            // strategy="absolute"
            // placement="bottom-start"
            onClose$={() => {
              dropdownOpenedSignal.value = false;
            }}
          >
            <div q:slot="trigger">
              <SfButton
                class="relative w-5 h-5 !p-0 rounded-sm outline-secondary-600 hover:bg-transparent active:bg-transparent"
                aria-label="More breadcrumbs"
                type="button"
                variant="tertiary"
                square
                onClick$={() => {
                  dropdownOpenedSignal.value = !dropdownOpenedSignal.value;
                }}
              >
                <div q:slot="prefix">
                  <SfIconMoreHoriz
                    size="sm"
                    class="text-neutral-500 hover:text-primary-700 active:text-primary-800 active:bg-transparent"
                  />
                </div>
              </SfButton>
            </div>
            <div class="px-4 py-2 rounded-md shadow-md border-neutral-100">
              {breadcrumbs.map(({ name, link }) => (
                <li class="py-2 last-of-type:hidden" key={name}>
                  <SfLink
                    href={link}
                    variant="secondary"
                    class="leading-5 no-underline text-inherit hover:underline active:underline whitespace-nowrap outline-secondary-600"
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
            class="hidden peer sm:flex text-neutral-500 last-of-type:flex last-of-type:text-neutral-900 last-of-type:font-medium"
            key={item.name}
          >
            {index !== 0 ? <SfIconChevronRight size="sm" class="mx-0.5 text-disabled-500" /> : null}
            <SfLink
              href={item.link}
              variant="secondary"
              class="leading-5 no-underline hover:underline active:underline whitespace-nowrap outline-secondary-600 text-inherit"
            >
              {item.name}
            </SfLink>
          </li>
        ))}
      </ol>
    </nav>
  );
});
