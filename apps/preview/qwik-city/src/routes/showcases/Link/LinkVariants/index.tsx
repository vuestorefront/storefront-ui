import { component$ } from '@builder.io/qwik';
import { SfLink } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <div class="space-x-4">
      <SfLink variant="primary" href="#">
        Primary
      </SfLink>
      <SfLink variant="secondary" href="#">
        Secondary
      </SfLink>
    </div>
  );
});
