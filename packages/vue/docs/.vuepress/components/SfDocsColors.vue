<template>
  <div>
    <div class="sf-docs-colors--list" v-if="mapType === 'palette'">
      <div v-for="(value, name) in palettes" :key="name" class="sf-docs-colors--list__item">
        <color-palette :palette="value" :paletteName="name"/>
      </div>
    </div>
    <div class="sf-docs-colors--list" v-else-if="mapType === 'icons'">
      <div v-for="(value, name) in colors" :key="name" class="sf-docs-colors--list__item">
        <div class="sf-docs-colors--list__item--color" :class="value"></div>
        <span class="sf-docs-colors--list__item--label">{{value}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { palettes, colors } from '@storefront-ui/shared/variables/colors';
import SfDocsColorPalette from './SfDocsColorPalette';

export default {
  props: {
    mapType: {
      type: String,
      validator: (prop) => ['palette', 'icons'].includes(prop),
      default: 'palette'
    },
  },
  components: {
    colorPalette: SfDocsColorPalette,
  },
  data() {
    return {
      palettes: palettes,
      colors: colors,
    }
  },
}
</script>
<style scoped>
.sf-docs-colors--list {
  display: flex;
  flex-flow: wrap;
  text-align: center;
}

.sf-docs-colors--list__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.sf-docs-colors--list__item--color {
  width: 80px;
  height: 80px;
  margin: 1rem;
}

.sf-docs-colors--list__item--label {
  font-size: 0.8rem;
}
</style>
<style lang="scss">
@import "~@storefront-ui/shared/styles/variables/_functions.scss";
@import "~@storefront-ui/shared/styles/variables/_colors.scss";

@each $pallete, $color in $icon-colors {
    .#{$pallete} {
        background-color: #{$color};
    }
}

@each $color, $map in $colors-map {
  $bg: map-get($map, "bg");
  $variant: map-get($map, "variant");

  .#{$color}-bg {
    background-color: $bg;
  }

  .#{$color}-variant {
    background-color: $variant;
  }
}
</style>