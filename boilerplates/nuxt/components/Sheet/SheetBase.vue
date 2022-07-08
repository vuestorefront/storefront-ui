<template>
  <div class="absolute bg-white rounded-md empty:h-24 shadow-medium w-80">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SheetBase'
};
</script>
