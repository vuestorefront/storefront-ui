<template>
  <div class="custom-block">
    <div v-for="color in Object.keys(colors)" :key="color" class="grid grid-cols-10 gap-4">
      <h4 class="w-full capitalize col-span-10 mt-8 text-xl">{{ color }}</h4>
      <ColorPaletteBlock
        v-for="shade in Object.keys(colors[color])"
        :key="shade"
        class="col-span-5 md:col-span-3 xl:col-span-2"
        :rgb-color="colors[color][shade]"
        :name="`${color}-${shade}`"
      />
    </div>
  </div>
</template>

<script>
import { tailwindConfig } from '@storefront-ui/tailwind-config';
import ColorPaletteBlock from './ColorPaletteBlock.vue';
const colors = tailwindConfig.theme.variables.DEFAULT.colors;
export default {
  components: {
    ColorPaletteBlock,
  },
  data() {
    return {
      colors,
    };
  },
};
</script>
