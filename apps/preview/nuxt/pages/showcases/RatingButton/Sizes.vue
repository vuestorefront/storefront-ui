<template>
  <div>
    <SfRatingButton v-model="modelValue1" size="sm" />
    <SfRatingButton v-model="modelValue2" size="base" />
    <SfRatingButton v-model="modelValue3" size="lg" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfRatingButton } from '@storefront-ui/vue';
const modelValue1 = ref();
const modelValue2 = ref();
const modelValue3 = ref();
</script>
