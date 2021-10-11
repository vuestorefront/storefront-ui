<template functional>
  <div
    :class="[data.class, data.staticClass, 'sf-chevron']"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <!-- @slot Custom chevron markup -->
    <slot>
      <span class="sf-chevron__bar sf-chevron__bar--left"></span>
      <span class="sf-chevron__bar sf-chevron__bar--right"></span>
    </slot>
  </div>
</template>
<script>
import { focus } from "../../../utilities/directives";
export default {
  name: "SfChevron",
  directives: {
    focus,
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfChevron.scss";
</style>
