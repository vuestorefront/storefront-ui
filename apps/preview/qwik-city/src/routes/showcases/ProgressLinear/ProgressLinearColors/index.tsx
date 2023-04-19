import { component$ } from "@builder.io/qwik";
import { SfProgressLinear } from "@storefront-ui/qwik";

export default component$(() => {
  return (
    <div class="flex gap-4 flex-wrap">
      <SfProgressLinear class="w-12 !text-cyan-700" value={60} size="lg" />
      <SfProgressLinear class="w-12" size="lg" value={60} />
      <SfProgressLinear class="w-12 !bg-yellow-200" value={60} size="lg" />
    </div>
  );
}
)