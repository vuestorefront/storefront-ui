<template>
  <label>
    Placement
    <select class="border border-2 border-primary-700 mx-2 p-2 rounded" @change="chagePlacement">
      <option value="top">top</option>
      <option value="right">right</option>
      <option value="bottom">bottom</option>
      <option value="left" selected>left</option>
    </select>
  </label>
  <VsfButton type="button" @click="open = $event"> Open Drawer </VsfButton>

  <VsfDrawer
    v-model="open"
    :placement="placement"
    :class="[
      'bg-neutral-50',
      'p-3',
      'border',
      'border-gray-300',
      { 'max-w-[370px]': placement === VsfDrawerPlacement.left || placement === VsfDrawerPlacement.right },
    ]"
  >
    <div>
      <p className="mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur repellat, odit voluptatibus
        deserunt eligendi nemo perspiciatis tenetur vero repellendus facere? Dolores sit maiores ut labore facilis
        minima debitis dolore.
      </p>
      <strong>You can close Drawer by clicking outside or focus and use ESC button</strong>
    </div>
  </VsfDrawer>
</template>

<script lang="ts" setup>
import { VsfDrawer, VsfDrawerPlacement, VsfButton } from '@storefront-ui/vue';
import { ref } from 'vue';

const placement = ref<`${VsfDrawerPlacement}`>('left');
const open = ref(false);
const chagePlacement = (event: Event) =>
  (placement.value = (event.target as HTMLSelectElement)?.value as VsfDrawerPlacement);
</script>
