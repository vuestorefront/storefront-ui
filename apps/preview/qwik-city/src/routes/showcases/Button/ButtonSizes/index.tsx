import { component$ } from '@builder.io/qwik';
import { SfButton } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <div class="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
      <SfButton type="button" size="sm">
        Hello
      </SfButton>

      <SfButton type="button" size="base">
        Hello
      </SfButton>

      <SfButton type="button" size="lg">
        Hello
      </SfButton>
    </div>
  );
});
