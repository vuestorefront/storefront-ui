<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="twitter"
    ><path
      d="M19.944 8.048c.013.178.013.356.013.533 0 5.419-4.124 11.663-11.663 11.663-2.322 0-4.48-.673-6.294-1.84.33.038.647.05.99.05 1.916 0 3.68-.647 5.089-1.75a4.11 4.11 0 0 1-3.833-2.844c.254.039.508.064.774.064.368 0 .736-.05 1.079-.14a4.1 4.1 0 0 1-3.287-4.023v-.05c.546.304 1.18.495 1.853.52a4.1 4.1 0 0 1-1.827-3.414c0-.761.203-1.46.558-2.068a11.65 11.65 0 0 0 8.452 4.29 4.6 4.6 0 0 1-.102-.94A4.097 4.097 0 0 1 15.846 4a4.1 4.1 0 0 1 2.994 1.294 8.1 8.1 0 0 0 2.602-.99 4.1 4.1 0 0 1-1.802 2.26A8.2 8.2 0 0 0 22 5.928a8.8 8.8 0 0 1-2.056 2.12"
  /></SfIconBase>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue';
import { SfIconBase, SfIconSize } from '@storefront-ui/vue';

defineProps({
  size: {
    type: String as PropType<`${SfIconSize}`>,
    default: SfIconSize.base,
  },
});
</script>
