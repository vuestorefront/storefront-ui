import { component$ } from "@builder.io/qwik";
import { SfProgressLinear } from "@storefront-ui/qwik";

export default component$(() => {
  const value = 70;

  return (
    <div class="flex flex-col gap-4">
      <SfProgressLinear size="lg" value={value} class="w-12" aria-label={`${value}%`} />
      <label class="inline-flex items-center gap-2">
        <SfProgressLinear class="w-12" size="lg" value={value} />
        <span class="font-medium text-lg">{value}%</span>
      </label>
    </div>
  );
});
