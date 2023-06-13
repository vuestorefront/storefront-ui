<template>
  <div>
    <p>Select rating</p>
    <SfRatingButton v-model="modelValue" :max="10" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfRatingButton } from '@storefront-ui/vue';
const modelValue = ref(5);
</script>
