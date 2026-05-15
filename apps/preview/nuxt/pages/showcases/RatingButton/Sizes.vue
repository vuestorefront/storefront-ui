<template>
  <div>
    <SfRatingButton size="sm" v-model="modelValue1" />
    <SfRatingButton size="base" v-model="modelValue2" />
    <SfRatingButton size="lg" v-model="modelValue3" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfRatingButton } from '@storefront-ui/vue';
const modelValue1 = ref();
const modelValue2 = ref();
const modelValue3 = ref();
</script>
