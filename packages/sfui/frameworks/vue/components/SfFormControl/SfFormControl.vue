<script lang="ts" setup>
import { provide, toRefs } from 'vue';
import { useId } from '@storefront-ui/vue';

const props = defineProps({
  invalid: {
    type: Boolean,
    default: false,
  },
  fieldId: {
    type: String,
    default: useId(),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const { invalid, fieldId, disabled } = toRefs(props);

// Provde all props.
provide('invalid', invalid);
provide('fieldId', fieldId);
provide('disabled', disabled);
</script>

<template>
  <slot />
</template>
