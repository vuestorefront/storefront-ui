import { component$ } from '@builder.io/qwik';
import { SfLink } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <div class="space-x-4">
      <SfLink href="#" class="text-sm">
        Small
      </SfLink>
      <SfLink href="#" variant="secondary" class="text-negative-700">
        To delete page
      </SfLink>
    </div>
  );
});
