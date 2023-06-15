<template>
  <div>
    <p :id="labelId">Select rating</p>
    <SfRatingButton v-model="modelValue" :aria-labelledby="labelId" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfRatingButton, useId } from '@storefront-ui/vue';
const labelId = useId();
const modelValue = ref();
</script>
