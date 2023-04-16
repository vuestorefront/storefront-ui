import { component$ } from '@builder.io/qwik';
import { SfButton } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <SfButton>
      <span class="truncate max-w-[200px]"> Too long description for button </span>
    </SfButton>
  );
});
