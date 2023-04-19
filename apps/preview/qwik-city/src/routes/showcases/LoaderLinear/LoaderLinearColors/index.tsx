import { component$ } from "@builder.io/qwik";
import { SfLoaderLinear } from "@storefront-ui/qwik";

export default component$(() => {
  return (
    <div class="flex gap-4 flex-wrap">
      <SfLoaderLinear class="w-12 !text-cyan-700" size="lg" />
      <SfLoaderLinear class="w-12" size="lg" />
      <SfLoaderLinear class="w-12 !bg-yellow-200" size="lg" />
    </div>
  );
});
