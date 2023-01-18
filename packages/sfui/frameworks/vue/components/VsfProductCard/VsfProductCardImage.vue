<script lang="ts" setup>
import type { PropType } from 'vue';
import { toRefs, computed } from 'vue';
import type { VsfProductCardProps } from './types';
import { VsfProductCardSize } from './types';

const props = defineProps({
  imageSrc: {
    type: String,
    default: '',
  },
  imageAttr: {
    type: Object as PropType<VsfProductCardProps['imageAttr']>,
    default: () => ({}),
  },
  size: {
    type: String as PropType<`${VsfProductCardSize}`>,
    default: VsfProductCardSize.responsive,
  },
  vertical: {
    type: Boolean,
    default: true,
  },
});
const { size } = toRefs(props);

const imageDimensionsVertical = computed(() => {
  switch (size.value) {
    case VsfProductCardSize.sm:
      return 192;

    default:
      return 320;
  }
});

const imageDimensionsHorizontal = computed(() => {
  switch (size.value) {
    case VsfProductCardSize.sm:
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
