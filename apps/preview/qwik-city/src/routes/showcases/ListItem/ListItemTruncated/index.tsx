import { component$ } from '@builder.io/qwik';
import { SfListItem } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <SfListItem class="max-w-sm">
      <div class="break-words">Label</div>
      <span class="text-xs text-neutral-500 break-words truncate">
        This text is definitely too long to be displayed in one line in this component
      </span>
    </SfListItem>
  );
});
