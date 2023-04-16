import { component$ } from '@builder.io/qwik';
import { SfButton } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <div class="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
      <SfButton type="button" variant="primary">
        Hello
      </SfButton>

      <SfButton type="button" variant="secondary">
        Hello
      </SfButton>

      <SfButton type="button" variant="tertiary">
        Hello
      </SfButton>
    </div>
  );
});
