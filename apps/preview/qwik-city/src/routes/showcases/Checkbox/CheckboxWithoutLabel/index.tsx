import { component$ } from '@builder.io/qwik';
import { SfCheckbox } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <div class="space-x-4">
      <SfCheckbox value="value" />
    </div>
  );
});
