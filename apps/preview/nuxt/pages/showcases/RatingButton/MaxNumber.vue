<template>
  <SfRatingButton v-model="modelValue" :max="10" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfRatingButton } from '@storefront-ui/vue';
const modelValue = ref(5);
</script>
