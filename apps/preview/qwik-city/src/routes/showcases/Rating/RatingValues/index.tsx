import { component$ } from "@builder.io/qwik";
import { SfRating } from "@storefront-ui/qwik";

export default component$(() => {
  return (
    <div class="flex flex-col">
      <SfRating value={0} />
      <SfRating value={3.5} />
      <SfRating value={3.5} half-increment />
      <SfRating value={6} max={8} />
    </div>
  );
});
