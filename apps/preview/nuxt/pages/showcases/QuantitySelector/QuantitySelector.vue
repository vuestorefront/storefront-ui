<template>
  <div class="inline-flex flex-col items-center">
    <div class="flex border border-neutral-300 rounded-md">
      <SfButton
        type="button"
        variant="tertiary"
        :disabled="count <= min"
        square
        class="rounded-r-none"
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
        class="appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
        :min="min"
        :max="max"
        @input="handleOnChange"
      />
      <SfButton
        type="button"
        variant="tertiary"
        :disabled="count >= max"
        square
        class="rounded-l-none"
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
const max = ref(999);
const inputId = useId();
const { count, inc, dec, set } = useCounter(1, { min: min.value, max: max.value });

function handleOnChange(event: Event) {
  const currentValue = (event.target as HTMLInputElement)?.value;
  const nextValue = parseFloat(currentValue);
  set(clamp(nextValue, min.value, max.value));
}
</script>
