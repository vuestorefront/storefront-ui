import { SfChip } from '@storefront-ui/qwik';
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div>
      <SfChip size="sm" class="mr-2">
        Small
      </SfChip>
      <SfChip size="base" class="mr-2">
        Base
      </SfChip>
      <SfChip>Default</SfChip>
    </div>
  );
});
