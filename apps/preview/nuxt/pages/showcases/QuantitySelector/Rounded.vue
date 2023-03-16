<template>
  <div class="inline-flex flex-col items-center">
    <div class="flex">
      <VsfButton
        type="button"
        square
        class="!rounded-full"
        :disabled="count <= min"
        :aria-controls="inputId"
        aria-label="Decrease value"
        @click="dec()"
      >
        <VsfIconRemove />
      </VsfButton>
      <input
        :id="inputId"
        v-model="count"
        type="number"
        role="spinbutton"
        class="appearance-none mx-2 text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        :min="min"
        :max="max"
        @input="handleOnChange"
      />

      <VsfButton
        type="button"
        square
        class="!rounded-full"
        :disabled="count >= max"
        :aria-controls="inputId"
        aria-label="Increase value"
        @click="inc()"
      >
        <VsfIconAdd />
      </VsfButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useCounter } from '@vueuse/core';
import { VsfButton, VsfIconAdd, VsfIconRemove, useId } from '@storefront-ui/vue';
import { clamp } from '@storefront-ui/shared';

const min = ref(1);
const max = ref(10);
const inputId = useId();
const { count, inc, dec, set } = useCounter(1, { min: min.value, max: max.value });

function handleOnChange(event: Event) {
  const currentValue = (event.target as HTMLInputElement)?.value;
  const nextValue = parseFloat(currentValue);
  set(Number(clamp(nextValue, min.value, max.value)));
}
</script>
