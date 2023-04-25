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
      <header class="flex justify-center w-full text-white border-0 bg-primary-700 h-14 md:h-20 border-neutral-200">
        <div class="flex items-center flex-row flex-nowrap justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
          <a href="/" aria-label="SF Homepage" class="inline-block text-white">
            <picture>
              <source srcSet={'/images/vsf_logo_white.svg'} media="(min-width: 767px)" />
              <img
                src={'/images/vsf_logo_sign_white.svg'}
                alt="Sf Logo"
                class="w-8 h-8 mr-4 md:w-[12.5rem] md:h-[1.75rem]"
              />
            </picture>
          </a>
          <SfButton
            class="block !px-2 mr-auto text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white font-body"
            type="button"
            variant="tertiary"
          >
            <div q:slot="prefix">
              <SfIconMenu />
            </div>
            <span class="hidden md:inline-flex">Categories</span>
          </SfButton>
          <nav class="flex flex-row flex-nowrap">
            {actionItems.map((actionItem) => (
              <SfButton
                class="mr-2 -ml-0.5 text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
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
