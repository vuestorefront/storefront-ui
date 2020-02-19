<template>
  <div class="sf-docs-icons--list">
    <div v-for="size in sizes" :key="size" class="sf-docs-icons--list__item">
      <SfIcon :size="size" icon="home" color="green-primary" />
      <h5 class="sf-docs-icons--list__item-label">{{ size }}</h5>
    </div>
  </div>
</template>
<script>
import { sizesValues } from "@storefront-ui/shared/variables/sizes";
export default {
  data() {
    return {
      sizes: sizesValues
    };
  }
};
</script>
<style lang="scss">
  .sf-docs-icons--list {
      display: flex;
      flex-wrap: wrap;
    &__item {
      margin: 0.5rem 1rem;
      align-self: flex-end;
      text-align: center;
    }
    &__item-label {
      margin: 1rem 0;
      font-size: 1rem;
    }
  }
</style>
