import { component$ } from "@builder.io/qwik";
import { SfListItem } from "@storefront-ui/qwik";

export default component$(() => {
  return (
    <div class="flex flex-col max-w-sm gap-4">
      <SfListItem size="sm">
        <span class="break-words">Label</span>
      </SfListItem>
      <SfListItem>
        <span class="break-words">Label</span>
      </SfListItem>
      <SfListItem size="lg">
        <span class="break-words">Label</span>
      </SfListItem>
    </div>
  );
});
