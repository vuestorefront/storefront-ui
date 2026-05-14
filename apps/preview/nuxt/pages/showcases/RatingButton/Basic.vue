<template>
  <div>
    <p :id="labelId">Select rating</p>
    <SfRatingButton :aria-labelledby="labelId" v-model="modelValue" />
  </div>
</template>

<script lang="ts" setup>
import { ref, useId } from 'vue';
import { SfRatingButton } from '@storefront-ui/vue';
const labelId = useId();
const modelValue = ref();
</script>
