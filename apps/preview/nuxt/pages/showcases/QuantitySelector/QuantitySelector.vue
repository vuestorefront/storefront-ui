<template>
  <div class="inline-flex flex-col items-center">
    <div class="flex">
      <SfButton
        type="button"
        variant="tertiary"
        :disabled="count <= min"
        square
        class="border-l border-y border-neutral-300 rounded-r-none"
        :aria-controls="inputId"
        aria-label="Decrease value"
        @click="dec()"
      >
        <SfIconRemove />
      </SfButton>
      <input
        :id="inputId"
        v-model="count"
        type="number"
        role="spinbutton"
        class="appearance-none px-2 border-y border-neutral-300 rounded-none text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        :min="min"
        :max="max"
        @input="handleOnChange"
      />
      <SfButton
        type="button"
        variant="tertiary"
        :disabled="count >= max"
        square
        class="border-r border-y border-neutral-300 rounded-l-none"
        :aria-controls="inputId"
        aria-label="Increase value"
        @click="inc()"
      >
        <SfIconAdd />
      </SfButton>
    </div>
    <p class="text-xs mt-2 text-neutral-500">
      <strong class="text-neutral-900">{{ max }}</strong> in stock
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { clamp } from '@storefront-ui/shared';
import { useCounter } from '@vueuse/core';
import { SfButton, SfIconAdd, SfIconRemove, useId } from '@storefront-ui/vue';

const min = ref(1);
const max = ref(10);
const inputId = useId;
const { count, inc, dec, set } = useCounter(1, { min: min.value, max: max.value });

function handleOnChange(event: Event) {
  const currentValue = (event.target as HTMLInputElement)?.value;
  const nextValue = parseFloat(currentValue);
  set(clamp(nextValue, min.value, max.value));
}
</script>
