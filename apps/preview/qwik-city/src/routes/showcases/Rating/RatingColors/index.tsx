import { component$ } from "@builder.io/qwik";
import { SfRating } from "@storefront-ui/qwik";

export default component$(() => {
  return (
    <div class="flex flex-col">
      <SfRating class="!text-red-600" value={4} />
      <SfRating class="!text-purple-500" value={4} />
      <SfRating class="!text-cyan-700" value={4} />
    </div>
  );
});
