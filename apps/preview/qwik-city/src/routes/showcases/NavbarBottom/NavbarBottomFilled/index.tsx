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
    <nav class="max-w-[500px] bottom-0 w-full left-0 fixed flex flex-row items-stretch">
      {items.map(({label, icon}, key) => (
        <SfButton
          key={key}
          variant="tertiary"
          class={`py-1 flex flex-col h-full w-full rounded-none bg-primary-700 text-white hover:text-white hover:bg-primary-800 active:text-white active:bg-primary-900
            ${selectedItemSignal.value === label ? 'text-white bg-primary-900' : ''}
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
