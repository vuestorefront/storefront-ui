import { component$ } from '@builder.io/qwik';
import { SfInput } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <div class="flex flex-col gap-y-5">
      <label>
        <span class="text-sm font-medium">Label</span>
        <SfInput size="sm" />
      </label>
      <label>
        <span class="text-sm font-medium">Label</span>
        <SfInput />
      </label>
      <label>
        <span class="text-sm font-medium">Label</span>
        <SfInput size="lg" />
      </label>
    </div>
  );
});
