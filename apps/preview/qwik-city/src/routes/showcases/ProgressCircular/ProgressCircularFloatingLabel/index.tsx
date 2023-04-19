import { component$ } from "@builder.io/qwik";
import { SfProgressCircular } from "@storefront-ui/qwik";

export default component$(() => {
  const value = 70;

  return (
    <div class="flex gap-4 flex-wrap">
      <SfProgressCircular size="2xl" value={value}>
        <text class="font-medium" textAnchor="middle" alignmentBaseline="central" x="100%" y="100%">
          {value}%
        </text>
      </SfProgressCircular>
      <SfProgressCircular size="3xl" value={value}>
        <text
          class="font-medium fill-neutral-400"
          textAnchor="middle"
          alignmentBaseline="central"
          x="100%"
          y="100%"
        >
          {value}%
        </text>
      </SfProgressCircular>
      <SfProgressCircular size="3xl" value={value}>
        <text class="font-medium text-2xs" textAnchor="middle" alignmentBaseline="central" x="100%" y="100%">
          {value}%
        </text>
      </SfProgressCircular>
    </div>
  );
});
