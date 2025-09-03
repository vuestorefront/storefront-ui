<template>
  <SfScrollable
    class="items-center w-full snap-x snap-mandatory"
    :active-index="activeIndex"
    wrapper-class="min-w-0"
    :prev-disabled="activeIndex === 0"
    :next-disabled="activeIndex === itemsLength - 1"
    is-active-index-centered
    @on-prev="
      ({ preventDefault }) => {
        preventDefault();
        activeIndex -= 1;
      }
    "
    @on-next="
      ({ preventDefault }) => {
        preventDefault();
        activeIndex += 1;
      }
    "
  >
    <div
      v-for="(_, index) in Array.from({ length: 20 })"
      :key="index"
      :class="[
        'flex items-center justify-center text-gray-500 border w-36 h-36 shrink-0 border-negative-300 snap-start snap-always',
        index === activeIndex ? 'border-solid bg-neutral-200' : 'border-dashed bg-neutral-100',
      ]"
    >
      {{ index + 1 }}
    </div>
  </SfScrollable>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfScrollable } from '@storefront-ui/vue';

const itemsLength = 20;
const activeIndex = ref(0);
</script>
