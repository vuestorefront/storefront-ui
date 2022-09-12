<template>
  <div class="absolute bg-white rounded-md empty:h-24 shadow-medium w-80">
    <slot />
  </div>
</template>

<script lang="ts">
export interface VsfSheetProps {
  children?: Element | Element[] | string;
}

export default {
  name: "vsf-sheet",

  props: [],
};
</script>
