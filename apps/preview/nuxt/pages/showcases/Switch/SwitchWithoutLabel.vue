<template>
  <SfSwitch value="value" v-model="modelCheck" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfSwitch } from '@storefront-ui/vue';

const modelCheck = ref(false);
</script>
