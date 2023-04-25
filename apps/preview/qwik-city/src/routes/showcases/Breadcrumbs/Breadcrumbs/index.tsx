import { component$, useSignal } from '@builder.io/qwik';
import { SfButton, SfDropdown, SfIconMoreHoriz, SfLink } from '@storefront-ui/qwik';

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
    <nav class="inline-flex font-normal font-body typography-text-sm">
      <ol class="flex items-center w-auto leading-none group md:flex-wrap">
        <li class="flex items-center sm:hidden text-neutral-500">
          <SfDropdown
            open={dropdownOpenedSignal.value}
            // TODO check missing prop
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
        {breadcrumbs.map((item) => (
          <li
            class="peer hidden sm:flex peer-[:nth-of-type(even)]:before:content-['/'] peer-[:nth-of-type(even)]:before:px-2 peer-[:nth-of-type(even)]:before:leading-5 last-of-type:flex last-of-type:before:font-normal last-of-type:before:text-neutral-500 text-neutral-500 last-of-type:text-neutral-900 last-of-type:font-medium"
            key={item.name}
          >
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
