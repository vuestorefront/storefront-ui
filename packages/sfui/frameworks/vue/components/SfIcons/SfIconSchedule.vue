<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="schedule"
    ><path
      d="M14.625 16.025a.92.92 0 0 0 .675.275q.4 0 .7-.3a.95.95 0 0 0 .275-.7.95.95 0 0 0-.275-.7l-3-3V7.975a.93.93 0 0 0-.287-.7A1 1 0 0 0 12 7a.97.97 0 0 0-.712.287A.97.97 0 0 0 11 8v3.975a1.03 1.03 0 0 0 .3.725zM12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.138A9.7 9.7 0 0 1 12 2q2.075 0 3.9.787a10.1 10.1 0 0 1 3.175 2.138q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.325 0 5.663-2.337T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.338 6.337 4 8.675 4 12t2.338 5.663Q8.675 20 12 20"
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
