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
  <SfButton type="button" @click="open = true"> Open Drawer </SfButton>

  <SfDrawer
    v-model="open"
    :placement="placement"
    :class="[
      'bg-neutral-50',
      'p-3',
      'border',
      'border-gray-300',
      { 'max-w-[370px]': placement === SfDrawerPlacement.left || placement === SfDrawerPlacement.right },
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
  </SfDrawer>
</template>

<script lang="ts" setup>
import { SfDrawer, SfDrawerPlacement, SfButton } from '@storefront-ui/vue';
import { ref } from 'vue';

const placement = ref<`${SfDrawerPlacement}`>('left');
const open = ref(false);
const chagePlacement = (event: Event) =>
  (placement.value = (event.target as HTMLSelectElement)?.value as SfDrawerPlacement);
</script>
