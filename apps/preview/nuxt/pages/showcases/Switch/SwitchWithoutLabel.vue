<template>
  <SfSwitch v-model="modelCheck" value="value" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfSwitch } from '@storefront-ui/vue';

const modelCheck = ref(true);
</script>
