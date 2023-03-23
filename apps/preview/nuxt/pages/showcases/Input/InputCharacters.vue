<template>
  <label>
    <span :class="['text-sm font-medium', { 'cursor-not-allowed text-disabled-500': disabled }]">
      {{ label }}
    </span>
    <SfInput
      v-model="inputValue"
      :wrapper-class="{
        'peer !bg-disabled-100 !ring-disabled-300 !ring-1 !text-disabled-500': disabled || readonly,
      }"
    />
  </label>
  <div class="flex justify-between">
    <div>
      <p v-if="invalid && !disabled" class="text-sm text-negative-700 font-medium mt-0.5">{{ errorText }}</p>
      <p v-if="helpText" :class="['text-xs mt-0.5', disabled ? 'text-disabled-500' : 'text-neutral-500']">
        {{ helpText }}
      </p>
      <p v-if="requiredText && required" class="mt-1 text-sm font-normal text-neutral-500 before:content-['*']">
        {{ requiredText }}
      </p>
    </div>
    <p
      v-if="characterLimit && !readonly"
      :class="[
        'text-xs mt-0.5',
        disabled ? 'text-disabled-500' : isAboveLimit ? 'text-negative-700 font-medium' : 'text-neutral-500',
      ]"
    >
      {{ charsCount }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import { SfInput } from '@storefront-ui/vue';

const characterLimit = ref(25);
const inputValue = ref('');
const readonly = ref(false);
const invalid = ref(false);
const disabled = ref(false);
const required = ref(false);
const requiredText = ref('');
const helpText = ref('Help text');
const label = ref('Label');
const errorText = ref('Error');

const isAboveLimit = computed(() => inputValue.value.length > characterLimit.value);
const charsCount = computed(() => characterLimit.value - inputValue.value.length);
</script>
