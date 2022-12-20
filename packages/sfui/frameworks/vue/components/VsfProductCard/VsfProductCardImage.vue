<script lang="ts" setup>
import { PropType, toRefs, computed } from 'vue';
import { VsfProductCardSizes, VsfProductCardProps } from './types';
const props = defineProps({
  imageSrc: {
    type: String,
    default: '',
  },
  imageAttr: {
    type: Object as PropType<VsfProductCardProps>,
    default: () => ({}),
  },
  size: {
    type: String as PropType<VsfProductCardSizes>,
    default: VsfProductCardSizes.responsive,
  },
  vertical: {
    type: Boolean,
    default: true,
  },
});
const { size } = toRefs(props);

const imageDimensionsVertical = computed(() => {
  switch (size.value) {
    case VsfProductCardSizes.sm:
      return 192;

    default:
      return 320;
  }
});

const imageDimensionsHorizontal = computed(() => {
  switch (size.value) {
    case VsfProductCardSizes.sm:
      return 128;

    default:
      return 192;
  }
});
</script>
<template>
  <!-- eslint-disable-next-line jsx-a11y/alt-text -->
  <img
    :src="imageSrc"
    :width="vertical ? imageDimensionsVertical : imageDimensionsHorizontal"
    :height="vertical ? imageDimensionsVertical : imageDimensionsHorizontal"
    v-bind="imageAttr"
  />
</template>
