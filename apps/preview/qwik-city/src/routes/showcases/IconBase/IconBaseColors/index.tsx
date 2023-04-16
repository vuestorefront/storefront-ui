import { component$ } from '@builder.io/qwik';
import { SfIconThumbUp } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <>
      <SfIconThumbUp class="text-red-600" />
      <SfIconThumbUp class="text-purple-500" />
      <SfIconThumbUp class="text-cyan-700" />
      <span class="text-gray-500">
        <SfIconThumbUp />
      </span>
    </>
  );
});
