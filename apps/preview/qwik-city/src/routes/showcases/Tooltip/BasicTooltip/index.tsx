import { component$ } from "@builder.io/qwik";
import { SfTooltip } from "@storefront-ui/qwik";

export default component$(() => {
  return (
    <SfTooltip label="This is a tooltip!">
      <span>Hover me!</span>
    </SfTooltip>
  );
});
