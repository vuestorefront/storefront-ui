<template>
  <VsfIconBase :size="size" viewBox="0 0 24 24" data-testid="safety-check"
    ><path
      d="M12 16.5c1.383 0 2.563-.488 3.538-1.463C16.513 14.062 17 12.883 17 11.5s-.487-2.563-1.462-3.538C14.563 6.987 13.383 6.5 12 6.5s-2.562.487-3.537 1.462C7.488 8.937 7 10.117 7 11.5s.488 2.562 1.463 3.537c.975.975 2.154 1.463 3.537 1.463Zm1.65-2.65L11.5 11.7V8.5h1v2.8l1.85 1.85-.7.7ZM12 21.5c-2.317-.583-4.229-1.913-5.737-3.988C4.754 15.437 4 13.133 4 10.6V4.5l8-3 8 3v6.1c0 2.533-.754 4.837-2.262 6.912-1.509 2.075-3.421 3.405-5.738 3.988Zm0-2.1c1.733-.55 3.167-1.65 4.3-3.3s1.7-3.483 1.7-5.5V5.875l-6-2.25-6 2.25V10.6c0 2.017.567 3.85 1.7 5.5s2.567 2.75 4.3 3.3Z"
  /></VsfIconBase>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

defineProps({
  size: {
    type: String as PropType<`${VsfIconSize}`>,
    default: VsfIconSize.base,
  },
});
</script>
