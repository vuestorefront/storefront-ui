<template>
  <div class="flex border-b-[1px] border-neutral-200 hover:shadow-lg min-w-[320px] max-w-[640px] p-4">
    <div class="relative overflow-hidden rounded-md w-[100px] sm:w-[176px]">
      <SfLink href="#">
        <img
          class="w-full h-auto border rounded-md border-neutral-200"
          src="/smartwatch.png"
          alt="Smartwatch Fitness Tracker"
          :width="176"
          :height="176"
        />
      </SfLink>
      <div class="absolute top-0 left-0 text-white bg-secondary-600 py-1 pl-1.5 pr-2 typography-text-xs font-medium">
        <SfIconSell size="xs" class="mr-1" />
        Sale
      </div>
    </div>
    <div class="flex flex-col pl-4 min-w-[180px] flex-1">
      <SfLink href="#" variant="secondary" class="no-underline typography-text-sm sm:typography-text-lg">
        Smartwatch Fitness Tracker
      </SfLink>
      <div class="my-2 sm:mb-0">
        <ul class="font-normal leading-5 typography-text-xs sm:typography-text-sm text-neutral-700">
          <li>
            <span class="mr-1">Size:</span>
            <span class="font-medium">6.5</span>
          </li>
          <li>
            <span class="mr-1">Color:</span>
            <span class="font-medium">Red</span>
          </li>
        </ul>
      </div>
      <div class="items-center sm:mt-auto sm:flex">
        <span class="font-bold sm:ml-auto sm:order-1 typography-text-sm sm:typography-text-lg">$2,345.99 </span>
        <div class="flex items-center justify-between mt-4 sm:mt-0">
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
          <button
            aria-label="Remove"
            type="button"
            class="text-neutral-500 typography-text-xs font-light ml-auto flex items-center px-3 py-1.5"
          >
            <SfIconDelete />
            <span class="hidden ml-1.5 sm:block"> Remove </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfLink, SfButton, SfIconSell, SfIconAdd, SfIconRemove, SfIconDelete, useId } from '@storefront-ui/vue';
import { clamp } from '@storefront-ui/shared';
import { useCounter } from '@vueuse/core';

const min = ref(1);
const max = ref(10);
const inputId = useId();
const { count, inc, dec, set } = useCounter(1, { min: min.value, max: max.value });
function handleOnChange(event: Event) {
  const currentValue = (event.target as HTMLInputElement)?.value;
  const nextValue = parseFloat(currentValue);
  set(clamp(nextValue, min.value, max.value));
}
</script>
