import { component$ } from '@builder.io/qwik';
import { SfCounter, SfIconChevronRight, SfIconTune, SfListItem } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <SfListItem class="max-w-sm" showSlotPrefix={true} showSlotSuffix={true}>
      <div q:slot="prefix">
        <SfIconTune />
      </div>
      <div class="break-words">
        Label
        <SfCounter class="ml-2">123</SfCounter>
      </div>
      <span class="text-xs break-words text-neutral-500">Secondary text</span>
      <div q:slot="suffix">
        <SfIconChevronRight />
      </div>
    </SfListItem>
  );
});
