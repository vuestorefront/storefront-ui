<template>
  <SfRatingButton v-model="modelValue" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfRatingButton } from '@storefront-ui/vue';
const modelValue = ref();
</script>
