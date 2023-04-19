import { component$ } from "@builder.io/qwik";
import { SfProgressCircular } from "@storefront-ui/qwik";

export default component$(() => {
  return (
    <div class="flex gap-4 flex-wrap">
      <SfProgressCircular class="!text-cyan-700" value={70} size="3xl" />
      <SfProgressCircular size="3xl" value={70} />
      <SfProgressCircular class="!ring-yellow-200" value={70} size="3xl" />
    </div>
  );
});
