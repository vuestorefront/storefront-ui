import { component$, useSignal } from '@builder.io/qwik';
import {
  SfButton,
  SfIconFavorite,
  SfIconHome,
  SfIconMenu,
  SfIconSearch,
  SfIconShoppingCart,
} from '@storefront-ui/qwik';

export default component$(() => {
  const selectedItemSignal = useSignal('');
  const items = [
    {
      label: 'Home',
      icon: <SfIconHome />,
    },
    {
      label: 'Products',
      icon: <SfIconMenu />,
    },
    {
      label: 'Search',
      icon: <SfIconSearch />,
    },
    {
      label: 'Cart',
      icon: <SfIconShoppingCart />,
    },
    {
      label: 'Wishlist',
      icon: <SfIconFavorite />,
    },
  ];

  return (
    <nav class="max-w-[500px] bottom-0 w-full left-0 fixed flex flex-row items-stretch bg-white text-primary-700">
      {items.map(({ label, icon }, key) => (
        <SfButton
          key={key}
          variant="tertiary"
          class={`py-1 flex flex-col h-full w-full rounded-none hover:text-primary-800 hover:bg-primary-100 active:text-primary-900 active:bg-primary-200
            ${selectedItemSignal.value === label ? 'text-primary-900 bg-primary-200' : ''}
            `}
          onClick$={() => {
            selectedItemSignal.value = label;
          }}
        >
          <div q:slot="prefix">{icon}</div>
          {label}
        </SfButton>
      ))}
    </nav>
  );
});
