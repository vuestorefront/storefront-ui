import { component$ } from '@builder.io/qwik';
import { SfButton } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <SfButton type="button" class="w-full">
      Hello
    </SfButton>
  );
});
