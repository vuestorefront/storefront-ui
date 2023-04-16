import { component$ } from '@builder.io/qwik';
import { SfButton, SfIconHome, SfIconStar, SfIconShoppingCart } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <div class="flex flex-col items-center space-y-4 xs:flex-row xs:space-y-0 xs:space-x-4">
      <SfButton>
        <div q:slot="prefix">
          <SfIconHome />
        </div>
        Home
      </SfButton>

      <SfButton>
        <div q:slot="suffix">
          <SfIconStar />
        </div>
        Hello
      </SfButton>

      <SfButton type="button" square aria-label="Add to cart">
        <SfIconShoppingCart />
      </SfButton>
    </div>
  );
});
