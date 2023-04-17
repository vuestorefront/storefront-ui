import { component$ } from '@builder.io/qwik';
import { SfCounter } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <SfCounter size="lg" pill class="text-white bg-secondary-700 ring-white">
      123
    </SfCounter>
  );
});
