<script setup lang="ts">
defineProps({
  id: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: '',
  },
  invalid: {
    type: Boolean,
    default: false,
  },
  helpText: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <div class="flex rounded">
    <div class="flex">
      <input
        :id="id"
        name="helper-radio"
        type="radio"
        value=""
        class="w-5 h-5 border-2 border-gray-500 rounded-full appearance-none cursor-pointer peer hover:border-primary-500 checked:bg-primary-500 checked:border-primary-500 checked:shadow-inset disabled:cursor-not-allowed outline-violet"
      />
    </div>
    <div class="ml-2 text-sm">
      <label
        :for="id"
        class="text-gray-900 cursor-pointer text-base peer-required:after:content-['*'] peer-disabled:text-gray-900/40 peer-disabled:cursor-not-allowed font-body"
      >
        <div>{{ label }}</div>
        <span v-if="helpText" :id="id" class="text-xs font-normal text-gray-500 dark:text-gray-300">
          {{ helpText }}
        </span>
      </label>
    </div>
  </div>
</template>
