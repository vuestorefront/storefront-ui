import { component$ } from '@builder.io/qwik';
import { SfCheckbox } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <>
      <div class="flex items-center">
        <SfCheckbox value="value" class="peer" id="checkbox" />
        <label
          class="ml-3 text-base text-gray-900 cursor-pointer font-body peer-disabled:text-disabled-900"
          for="checkbox"
        >
          Label
        </label>
      </div>
      <div class="flex justify-between ml-8">
        <p class="text-xs mt-0.5 text-neutral-500">Help text</p>
      </div>
    </>
  );
});
