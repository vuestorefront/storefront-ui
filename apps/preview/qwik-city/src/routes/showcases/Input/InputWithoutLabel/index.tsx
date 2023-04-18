import { component$ } from '@builder.io/qwik';
import { SfInput } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <div class="flex flex-col gap-y-5">
      <SfInput size="sm" aria-label="Label size sm" />
      <SfInput aria-label="Label size base" />
      <SfInput size="lg" aria-label="Label size lg" />
    </div>
  );
});
