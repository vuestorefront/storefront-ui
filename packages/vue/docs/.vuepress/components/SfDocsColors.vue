<template>
  <div>
    <div v-if="mapType === 'palette'" class="sf-docs-colors--list">
      <div
        v-for="(value, name) in colors"
        :key="name"
        class="sf-docs-colors--list__item"
      >
        <color-palette :palette="value" :palette-name="name" />
      </div>
    </div>
    <div v-else-if="mapType === 'icons'" class="sf-docs-colors--list">
      <div
        v-for="(value, name) in iconColors"
        :key="name"
        class="sf-docs-colors--list__item"
      >
        <div :class="value" class="sf-docs-colors--list__item--color"></div>
        <span class="sf-docs-colors--list__item--label">{{ value }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { colors, iconColors } from "@storefront-ui/shared/variables/colors";
import SfDocsColorPalette from "./SfDocsColorPalette";

export default {
  components: {
    colorPalette: SfDocsColorPalette
  },
  props: {
    mapType: {
      type: String,
      validator: prop => ["palette", "icons"].includes(prop),
      default: "palette"
    }
  },
  data() {
    return {
      colors: colors,
      iconColors: iconColors
    };
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/global";
@import "~@storefront-ui/shared/styles/variables";
@import "~@storefront-ui/shared/styles/helpers";
.sf-docs-colors--list {
  display: flex;
  flex-flow: wrap;
  text-align: center;
  &__item{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }
  &__item--color{
    width: 80px;
    height: 80px;
    margin: 1rem;
  }
  &__item--label{
    font-size: 0.8rem;
  }
}
@each $pallete, $color in $icon-colors {
  .#{$pallete} {
    background: #{$color};
  }
}
</style>
