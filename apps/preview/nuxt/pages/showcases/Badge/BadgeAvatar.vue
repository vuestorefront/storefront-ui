<template>
  <div class="flex gap-3">
    <div class="relative">
      <img src="http://localhost:3100/@assets/woman_avatar.png" alt="Avatar of a woman" width="36" height="36" />
      <SfBadge variant="dot" placement="bottom-left" class="outline outline-white" />
    </div>
    <div class="relative">
      <img src="http://localhost:3100/@assets/woman_avatar.png" alt="Avatar of a woman" width="36" height="36" />
      <SfBadge variant="dot" placement="bottom-left" class="!bg-secondary-700 outline outline-white" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfBadge } from '@storefront-ui/vue';
</script>
