import { component$ } from '@builder.io/qwik';
import { SfButton, SfIconFavorite, SfIconMenu, SfIconPerson, SfIconShoppingCart } from '@storefront-ui/qwik';

export default component$(() => {
  const actionItems = [
    {
      icon: <SfIconShoppingCart />,
      label: '',
      ariaLabel: 'Cart',
      role: 'button',
    },
    {
      icon: <SfIconFavorite />,
      label: '',
      ariaLabel: 'Wishlist',
      role: 'button',
    },
    {
      label: 'Log in',
      icon: <SfIconPerson />,
      ariaLabel: 'Log in',
      role: 'login',
    },
  ];

  return (
    <div class="w-full h-full bg-neutral-50">
      <header class="flex justify-center w-full bg-white border-b h-14 md:h-20 border-neutral-200">
        <div class="flex items-center flex-row flex-nowrap justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
          <a href="/" aria-label="SF Homepage" class="inline-block text-primary-700">
            <picture>
              <source srcSet={'/images/vsf_logo.svg'} media="(min-width: 767px)" />
              <img src={'/images/vsf_logo_sign.svg'} alt="Sf Logo" class="w-8 h-8 mr-4 md:w-[12.5rem] md:h-[1.75rem]" />
            </picture>
          </a>
          <SfButton class="block !px-2 mr-auto" type="button" variant="tertiary">
            <div q:slot="prefix">
              <SfIconMenu />
            </div>
            <span class="hidden md:inline-flex">Categories</span>
          </SfButton>
          <nav class="flex flex-row flex-nowrap">
            {actionItems.map((actionItem) => (
              <SfButton
                class="mr-2 -ml-0.5 text-primary-700 hover:bg-primary-100 active:bg-primary-200 hover:text-primary-600 active:text-primary-700"
                key={actionItem.ariaLabel}
                aria-label={actionItem.ariaLabel}
                variant="tertiary"
                square
              >
                <div q:slot="prefix">{actionItem.icon}</div>
                {actionItem.role === 'login' && <p class="hidden md:inline-flex">{actionItem.label}</p>}
              </SfButton>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
});
