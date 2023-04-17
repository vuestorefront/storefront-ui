import { component$ } from '@builder.io/qwik';
import { SfCounter } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <div class="flex items-center gap-2 md:flex-row">
      <SfCounter size="3xs" pill>
        123
      </SfCounter>
      <SfCounter size="2xs" pill>
        123
      </SfCounter>
      <SfCounter size="xs" pill>
        123
      </SfCounter>
      <SfCounter size="sm" pill>
        123
      </SfCounter>
      <SfCounter pill>123</SfCounter>
      <SfCounter size="lg" pill>
        123
      </SfCounter>
    </div>
  );
});
