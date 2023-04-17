import { component$ } from '@builder.io/qwik';
import { SfChip, SfThumbnail } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <>
      <SfChip size="sm" class="mr-2" square>
        <SfThumbnail class="bg-red-500" size="sm" aria-label="Red thumbnail chip" />
      </SfChip>
      <SfChip square>
        <SfThumbnail class="bg-blue-500" size="base" aria-label="Blue thumbnail chip" />
      </SfChip>
    </>
  );
});
