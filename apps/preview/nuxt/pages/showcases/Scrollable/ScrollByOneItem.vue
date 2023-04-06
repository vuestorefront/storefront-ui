<template>
  <div class="flex items-center">
    <SfButton
      variant="secondary"
      size="lg"
      square
      :disabled="activeIndex === 0"
      class="!rounded-full bg-white mr-4 !ring-gray-200 !text-gray-500"
      @click="activeIndex -= 1"
    >
      <SfIconChevronLeft />
    </SfButton>
    <SfScrollable
      class="items-center w-full"
      :active-index="activeIndex"
      buttons-placement="none"
      wrapper-class="min-w-0"
    >
      <div
        v-for="(_, index) in Array.from({ length: 20 })"
        :key="index"
        :class="[
          'flex items-center justify-center text-gray-500 border w-36 h-36 shrink-0 border-negative-300',
          index === activeIndex ? 'border-solid bg-neutral-200' : 'border-dashed bg-neutral-100',
        ]"
      >
        {{ index + 1 }}
      </div>
    </SfScrollable>
    <SfButton
      variant="secondary"
      size="lg"
      square
      :disabled="activeIndex === itemsLength - 1"
      class="!rounded-full bg-white ml-4 !ring-gray-200 !text-gray-500"
      @click="activeIndex += 1"
    >
      <SfIconChevronRight />
    </SfButton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfScrollable, SfButton, SfIconChevronLeft, SfIconChevronRight } from '@storefront-ui/vue';

const itemsLength = 20;
const activeIndex = ref(0);
</script>
