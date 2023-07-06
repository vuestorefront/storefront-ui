<template>
  <label>
    <span class="typography-text-sm font-medium">Description</span>
    <SfTextarea
      v-model="textareaValue"
      :invalid="invalid"
      :disabled="disabled"
      :readonly="readonly"
      placeholder="Write something about yourself..."
      class="w-full"
    />
  </label>
  <div class="flex justify-between mt-0.5">
    <div>
      <p v-if="invalid && !disabled" class="typography-text-sm text-negative-700 font-medium mt-0.5">{{ errorText }}</p>
      <p :class="'text-xs text-neutral-500'">
        {{ helpText }}
      </p>
    </div>
    <p
      v-if="characterLimit && !readonly"
      :class="[
        'typography-text-xs',
        disabled ? 'text-disabled-500' : isAboveLimit ? 'text-negative-700 font-medium' : 'text-neutral-500',
      ]"
    >
      {{ charsCount }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import { SfTextarea } from '@storefront-ui/vue';

const characterLimit = ref(25);
const textareaValue = ref('');
const disabled = false;
const readonly = false;
const invalid = false;
const helpText = 'Do not include personal or financial information.';
const errorText = 'Error';

const isAboveLimit = computed(() => textareaValue.value.length > characterLimit.value);
const charsCount = computed(() => characterLimit.value - textareaValue.value.length);
</script>
